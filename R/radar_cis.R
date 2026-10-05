# ---------------------------------------------------------------------------
# Agenda social Euskadi · Silván & Miracle
# BLOQUE cis_radar (gráficos de radar de la pestaña CIS · Análisis del voto)
#
# Para cada barómetro y cada grupo de población calcula:
#   - partidos: % de voto + simpatía (VOTOSIMG) de los seis partidos estatales
#   - intencion: % de intención directa de voto (INTENCIONGR) de los mismos partidos
#   - problemas: % que menciona cada problema de España entre sus tres principales
#                (PESPANNA1-3, total de menciones); se guardan los N_PROBLEMAS más citados por el total
# Porcentajes sobre el total de entrevistados del grupo, ponderados con PESO.
#
# Uso:
#   source("R/radar_cis.R")
#   DATA$cis_radar <- calcular_radar(list.files("datos/cis", "\\.sav$", full.names = TRUE))
# O directamente:  Rscript R/radar_cis.R ruta/carpeta_con_los_sav   (actualiza data.json)
# ---------------------------------------------------------------------------

suppressPackageStartupMessages({ library(haven); library(jsonlite) })

MESES_ARCHIVO <- c(ene = 1, feb = 2, mar = 3, abr = 4, may = 5, jun = 6, jul = 7,
                   ago = 8, sep = 9, oc = 10, oct = 10, nov = 11, dic = 12)

# Fecha "AAAA-MM" a partir del nombre del archivo (sep_26.sav -> 2026-09)
fecha_archivo <- function(f) {
  b <- tolower(sub("\\.sav$", "", basename(f)))
  p <- strsplit(b, "_")[[1]]
  sprintf("20%s-%02d", p[2], MESES_ARCHIVO[[p[1]]])
}

N_PROBLEMAS <- 15            # problemas guardados por barómetro (los más citados por el total)
RESIDUALES <- c("Otras respuestas", "Ninguno", "N.S.", "N.C.")
EJES_PARTIDOS <- c("PSOE", "PP", "VOX", "Sumar", "Podemos", "Se Acabó la Fiesta")

DIMS <- list(
  list(id = "sexo",      nombre = "Sexo",                  grupos = c("Hombre", "Mujer")),
  list(id = "edad",      nombre = "Edad",                  grupos = c("18-24", "25-34", "35-44", "45-54", "55-64", "65 y más")),
  list(id = "estudios",  nombre = "Estudios",              grupos = c("Sin estudios o primaria", "Secundaria 1.ª etapa", "Secundaria 2.ª etapa", "FP", "Superiores")),
  list(id = "clase",     nombre = "Clase social subjetiva", grupos = c("Alta y media alta", "Media-media", "Media-baja", "Trabajadora/obrera", "Baja/pobre")),
  list(id = "ideologia", nombre = "Ideología",             grupos = c("Izquierda (1-2)", "Centro izquierda (3-4)", "Centro (5-6)", "Centro derecha (7-8)", "Derecha (9-10)")),
  list(id = "recuerdo",  nombre = "Recuerdo de voto 2023", grupos = c("PSOE", "PP", "VOX", "Sumar", "No votó")),
  list(id = "habitat",   nombre = "Tamaño de municipio",   grupos = c("Hasta 10.000 hab.", "10.001-50.000", "50.001-400.000", "Más de 400.000")),
  list(id = "laboral",   nombre = "Situación laboral",     grupos = c("Trabaja", "Jubilado/a o pensionista", "En paro", "Estudiante", "Trabajo doméstico no remunerado"))
)

etiqueta <- function(x) {                     # etiqueta de valor de cada respuesta
  l <- attr(x, "labels"); if (is.null(l)) return(rep(NA_character_, length(x)))
  enc2utf8(names(l)[match(as.numeric(x), as.numeric(l))])
}
corta <- function(x, cortes, nombres) {
  x <- as.numeric(x); x[x > 900] <- NA
  as.character(cut(x, cortes, labels = nombres, right = TRUE))
}

grupos_de <- function(d) {
  n <- function(v) if (v %in% names(d)) as.numeric(d[[v]]) else rep(NA_real_, nrow(d))
  rec <- etiqueta(d$RECUERDO)
  rec <- ifelse(rec %in% c("PSOE", "PP", "VOX", "Sumar"), rec, ifelse(grepl("^No vot", rec), "No votó", NA))
  list(
    sexo      = c("1" = "Hombre", "2" = "Mujer")[as.character(n("SEXO"))],
    edad      = corta(n("EDAD"), c(17, 24, 34, 44, 54, 64, 120), DIMS[[2]]$grupos),
    estudios  = c("1" = "Sin estudios o primaria", "2" = "Sin estudios o primaria", "3" = "Secundaria 1.ª etapa",
                  "4" = "Secundaria 2.ª etapa", "5" = "FP", "6" = "Superiores")[as.character(n("ESTUDIOS"))],
    clase     = c("1" = "Alta y media alta", "2" = "Media-media", "3" = "Media-baja",
                  "4" = "Trabajadora/obrera", "5" = "Baja/pobre")[as.character(n("CLASESUB"))],
    ideologia = corta(n("ESCIDEOL"), c(0, 2, 4, 6, 8, 10), DIMS[[5]]$grupos),
    recuerdo  = rec,
    habitat   = c("1" = "Hasta 10.000 hab.", "2" = "Hasta 10.000 hab.", "3" = "10.001-50.000", "4" = "50.001-400.000",
                  "5" = "50.001-400.000", "6" = "Más de 400.000", "7" = "Más de 400.000")[as.character(n("TAMUNI"))],
    laboral   = c("1" = "Trabaja", "2" = "Jubilado/a o pensionista", "3" = "Jubilado/a o pensionista", "4" = "En paro",
                  "5" = "En paro", "6" = "Estudiante", "7" = "Trabajo doméstico no remunerado")[as.character(n("SITLAB"))]
  )
}

# % ponderado de cada eje dentro de un subconjunto
pcts <- function(resp, w, sel, ejes) {
  if (sum(sel) == 0) return(rep(NA_real_, length(ejes)))
  tot <- sum(w[sel])
  unname(vapply(ejes, function(e) { k <- sel & resp == e; round(100 * sum(w[k], na.rm = TRUE) / tot, 1) }, 0))
}

calcular_radar <- function(archivos) {
  fechas <- vapply(archivos, fecha_archivo, ""); o <- order(fechas)
  archivos <- archivos[o]; fechas <- unname(fechas[o])
  res <- list(partidos = list(), intencion = list(), problemas = list(), n = list())
  prob_nombres <- list()
  estudios <- integer()
  for (k in seq_along(archivos)) {
    d <- suppressWarnings(read_sav(archivos[k])); names(d) <- toupper(names(d))
    estudios[k] <- as.integer(if ("ESTUDIO" %in% names(d)) d$ESTUDIO[1] else d$ESTU[1])
    w <- as.numeric(if ("PESO" %in% names(d)) d$PESO else d$PESO_V2); w[is.na(w)] <- 0
    norm <- function(x) { x[grepl("^VOX$", x, ignore.case = TRUE)] <- "VOX"; x[grepl("Acab", x)] <- "Se Acabó la Fiesta"; x }
    vs <- norm(etiqueta(d$VOTOSIMG))      # voto + simpatía
    it <- norm(etiqueta(d$INTENCIONGR))   # intención directa de voto
    # Partidos que aún no aparecen en el cuestionario (p. ej. Podemos dentro de Sumar en 2023) -> null
    sin_p <- !EJES_PARTIDOS %in% vs; sin_i <- !EJES_PARTIDOS %in% it
    # Problemas: matriz entrevistado x problema (1 si lo cita entre sus tres primeros)
    pv <- sapply(paste0("PESPANNA", 1:3), function(v) as.numeric(d[[v]]))
    lp <- attr(d$PESPANNA1, "labels"); lp <- lp[!duplicated(as.numeric(lp))]
    nom_p <- enc2utf8(names(lp)); cod_p <- as.numeric(lp)
    ok_p <- !(nom_p %in% RESIDUALES) & cod_p < 996
    nom_p <- nom_p[ok_p]; cod_p <- cod_p[ok_p]
    M <- sapply(cod_p, function(cc) as.numeric(rowSums(pv == cc, na.rm = TRUE) > 0))
    colnames(M) <- nom_p
    pct_p <- function(sel) if (sum(sel) == 0) rep(NA_real_, length(top)) else
      unname(round(100 * colSums(M[sel, top, drop = FALSE] * w[sel]) / sum(w[sel]), 1))
    tot_p <- colSums(M * w) / sum(w)
    top <- names(sort(tot_p, decreasing = TRUE))[seq_len(min(N_PROBLEMAS, length(tot_p)))]
    prob_nombres[[k]] <- as.list(top)
    G <- grupos_de(d)
    todos <- rep(TRUE, nrow(d))
    pp <- pcts(vs, w, todos, EJES_PARTIDOS); pp[sin_p] <- NA
    res$partidos$total$Total[[k]] <- pp
    ii <- pcts(it, w, todos, EJES_PARTIDOS); ii[sin_i] <- NA
    res$intencion$total$Total[[k]] <- ii
    res$problemas$total$Total[[k]] <- pct_p(todos)
    res$n$total$Total[k] <- nrow(d)
    for (dm in DIMS) for (g in dm$grupos) {
      sel <- !is.na(G[[dm$id]]) & G[[dm$id]] == g
      pp <- pcts(vs, w, sel, EJES_PARTIDOS); pp[sin_p] <- NA
      res$partidos[[dm$id]][[g]][[k]] <- pp
      ii <- pcts(it, w, sel, EJES_PARTIDOS); ii[sin_i] <- NA
      res$intencion[[dm$id]][[g]][[k]] <- ii
      res$problemas[[dm$id]][[g]][[k]] <- pct_p(sel)
      res$n[[dm$id]][[g]][k] <- sum(sel)
    }
    message(fechas[k], " (", estudios[k], "): ", nrow(d), " entrevistas")
  }
  # listas dentro de listas para que jsonlite no convierta las series en matrices
  lista <- function(x) lapply(x, function(dm) lapply(dm, function(g) lapply(g, as.list)))
  list(
    fechas = as.list(fechas), estudios = as.list(estudios),
    dims = lapply(c(list(list(id = "total", nombre = "Total", grupos = "Total")), DIMS),
                  function(dm) list(id = dm$id, nombre = dm$nombre, grupos = as.list(dm$grupos))),
    ejes_partidos = as.list(EJES_PARTIDOS),
    partidos = lista(res$partidos), intencion = lista(res$intencion),
    problemas_nombres = prob_nombres, problemas = lista(res$problemas),
    n = lapply(res$n, function(dm) lapply(dm, as.list))
  )
}

# --- Ejecución directa: Rscript R/radar_cis.R carpeta_con_los_sav --------------
if (sys.nframe() == 0) {
  carpeta <- commandArgs(TRUE)[1]; if (is.na(carpeta)) carpeta <- file.path("datos", "cis")
  archivos <- list.files(carpeta, "\\.sav$", full.names = TRUE, ignore.case = TRUE)
  DATA <- fromJSON("data.json", simplifyVector = FALSE)
  DATA$cis_radar <- calcular_radar(archivos)
  txt <- enc2utf8(as.character(toJSON(DATA, auto_unbox = TRUE, null = "null", na = "null", digits = NA)))
  con <- file("data.json", open = "wb"); writeBin(charToRaw(txt), con); close(con)
  message("data.json actualizado con cis_radar (", length(archivos), " barómetros)")
}
