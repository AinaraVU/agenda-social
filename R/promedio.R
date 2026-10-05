# ---------------------------------------------------------------------------
# Agenda social Euskadi · Silván & Miracle
# PROMEDIO DE ENCUESTAS (elecciones generales)
#
# 1. Descarga la tabla «Voting intention estimates» de la Wikipedia en inglés
#    (o lee una copia local si se indica PROMEDIO_HTML=ruta/al/archivo.html).
# 2. Limpia los sondeos: fecha (punto medio del campo), empresa, muestra, % por partido.
# 3. Calcula una media ponderada diaria (antigüedad, tamaño muestral, empresa).
# 4. Comprueba el resultado y escribe promedio.json.
#
# Ejecutar:  Rscript R/promedio.R            (desde la carpeta agenda-social)
# Lo ejecuta GitHub Actions cada mañana (.github/workflows/publicar.yml).
# Método documentado en docs/04_promedio_encuestas.md
# ---------------------------------------------------------------------------

suppressPackageStartupMessages({
  library(rvest); library(xml2); library(httr2); library(jsonlite)
  library(dplyr); library(stringr)
})

# --- Parámetros del método --------------------------------------------------
VIDA_MEDIA   <- 14      # días: un sondeo de hace 14 días pesa la mitad
VENTANA      <- 60      # días: sondeos más antiguos no cuentan
TOPE_MUESTRA <- 3000    # muestra máxima que se tiene en cuenta
FACTOR_CASA  <- 0.5     # peso del 2.º sondeo más reciente de una empresa (0,25 el 3.º...)
SUAVIZADO    <- 7       # días: desviación típica del suavizado gaussiano final (0 = sin suavizar)
MIN_SONDEOS  <- 3       # sondeos mínimos en la ventana para dar valor
EXCLUIR      <- strsplit(Sys.getenv("PROMEDIO_EXCLUIR", unset = ""), ",")[[1]]  # empresas excluidas (exactas)
DESDE        <- as.Date("2023-07-23")
HOY          <- as.Date(Sys.getenv("PROMEDIO_HOY", unset = format(Sys.Date())))
SALIDA       <- "promedio.json"

PAGINA <- "Opinion_polling_for_the_2026_Spanish_general_election"
URL_PAG <- paste0("https://en.wikipedia.org/wiki/", PAGINA)
URL_API <- paste0("https://en.wikipedia.org/w/api.php?action=parse&prop=text&formatversion=2&format=json&redirects=1&page=", PAGINA)
UA <- "agenda-social-sm/1.0 (Silvan & Miracle; https://github.com/AinaraVU/agenda-social)"

PARTIDOS_GRAFICO <- list(
  list(id = "PP",      nombre = "PP",      color = "#1E73C4"),
  list(id = "PSOE",    nombre = "PSOE",    color = "#E5393B"),
  list(id = "Vox",     nombre = "Vox",     color = "#8BC34A"),
  list(id = "Sumar",   nombre = "Sumar",   color = "#E5007D"),
  list(id = "Podemos", nombre = "Podemos", color = "#6A2C91"),
  list(id = "SALF",    nombre = "SALF",    color = "#6D4C41")
)
IDS <- vapply(PARTIDOS_GRAFICO, `[[`, "", "id")

# Equivalencias de cabecera (title del enlace o texto) -> id corto
EQUIV <- c("Partido Popular" = "PP", "People's Party (Spain)" = "PP",
           "Spanish Socialist Workers' Party" = "PSOE",
           "Vox (political party)" = "Vox", "VOX" = "Vox",
           "Sumar (electoral platform)" = "Sumar", "Sumar (political party)" = "Sumar",
           "Podemos (Spanish political party)" = "Podemos",
           "Se Acab\u00f3 La Fiesta" = "SALF", "Se Acab\u00f3 la Fiesta" = "SALF",
           "Republican Left of Catalonia" = "ERC", "Together for Catalonia" = "Junts",
           "Junts per Catalunya" = "Junts", "Basque Nationalist Party" = "PNV",
           "Galician Nationalist Bloc" = "BNG", "Canarian Coalition" = "CCa",
           "Navarrese People's Union" = "UPN", "Adelante Andaluc\u00eda (2021)" = "AA", "Alian\u00e7a.cat" = "Alianca")

# --- 1. Descargar / leer ----------------------------------------------------
leer_html <- function() {
  local <- Sys.getenv("PROMEDIO_HTML")
  if (nzchar(local)) { message("Leyendo copia local: ", local); return(read_html(local, encoding = "UTF-8")) }
  message("Descargando ", URL_API)
  resp <- request(URL_API) |> req_user_agent(UA) |> req_retry(max_tries = 4, backoff = ~ 10) |>
    req_timeout(60) |> req_perform()
  read_html(resp_body_json(resp)$parse$text)
}

# --- 2. Limpiar la tabla ----------------------------------------------------
MESES <- c(jan = 1, feb = 2, mar = 3, apr = 4, may = 5, jun = 6, jul = 7, aug = 8, sep = 9, oct = 10, nov = 11, dec = 12)

# "2–3 Oct", "29 Sep–1 Oct", "29 Dec–5 Jan", "31 Dec" (año = el de la tabla, el del fin del campo)
parse_campo <- function(txt, anio) {
  txt <- str_squish(str_replace_all(txt, "[–—-]", "–"))
  partes <- str_split(txt, "–")[[1]] |> str_trim()
  pieza <- function(p) {
    d <- suppressWarnings(as.integer(str_extract(p, "\\d{1,2}(?=\\s|$)")))
    m <- MESES[tolower(substr(str_extract(p, "[A-Za-z]{3,}"), 1, 3))]
    y <- suppressWarnings(as.integer(str_extract(p, "\\d{4}")))
    list(d = d, m = unname(m), y = y)
  }
  fin <- pieza(partes[length(partes)]); ini <- pieza(partes[1])
  if (is.na(fin$m)) return(c(NA, NA))
  if (is.na(fin$d)) fin$d <- 15L
  if (is.na(ini$m)) ini$m <- fin$m
  if (is.na(ini$d)) ini$d <- fin$d
  yf <- if (!is.na(fin$y)) fin$y else anio
  yi <- if (!is.na(ini$y)) ini$y else if (ini$m > fin$m) yf - 1 else yf
  f_ini <- as.Date(sprintf("%d-%02d-%02d", yi, ini$m, ini$d), optional = TRUE)
  f_fin <- as.Date(sprintf("%d-%02d-%02d", yf, fin$m, fin$d), optional = TRUE)
  c(f_ini, f_fin)
}

# Primer número de la celda = % de voto (los escaños van detrás, a veces pegados: "29.5127" = 29.5 y 127)
num1 <- function(x) suppressWarnings(as.numeric(str_extract(x, "^\\s*\\d{1,2}(\\.\\d)?")))
num_muestra <- function(x) suppressWarnings(as.numeric(str_extract(str_replace_all(x, ",", ""), "^\\s*\\d+")))

leer_tabla <- function(tab, anio) {
  xml_remove(xml_find_all(tab, ".//sup | .//style"))
  for (br in xml_find_all(tab, ".//br")) xml_replace(br, read_xml("<span> </span>"))
  filas <- xml_find_all(tab, ".//tr")
  cab <- xml_find_all(filas[[1]], "./th")
  nombres <- vapply(cab, function(th) {
    a <- xml_find_first(th, ".//a[@title]")
    t <- if (!is.na(a)) xml_attr(a, "title") else str_squish(xml_text(th))
    t <- enc2utf8(t)
    if (str_detect(t, "Fiesta")) return("SALF")
    if (t %in% names(EQUIV)) EQUIV[[t]] else t
  }, "")
  nombres[1:4] <- c("firma", "campo", "muestra", "participacion")
  nombres[length(nombres)] <- "lead"
  # Rejilla que respeta rowspan/colspan (p. ej. el CIS comparte fecha y muestra
  # entre su estimación y las reestimaciones de otras empresas)
  nc <- length(nombres); pend_txt <- character(nc); pend_n <- integer(nc)
  filas_out <- list()
  for (tr in filas[-1]) {
    tds <- xml_find_all(tr, "./td|./th")
    if (!length(tds)) next
    if (!length(xml_find_all(tr, "./td"))) next              # filas de cabecera
    fila <- rep(NA_character_, nc); k <- 1L; j <- 1L
    while (k <= nc) {
      if (pend_n[k] > 0) { fila[k] <- pend_txt[k]; pend_n[k] <- pend_n[k] - 1L; k <- k + 1L; next }
      if (j > length(tds)) break
      td <- tds[[j]]; j <- j + 1L
      cs <- suppressWarnings(as.integer(xml_attr(td, "colspan"))); if (is.na(cs)) cs <- 1L
      rs <- suppressWarnings(as.integer(xml_attr(td, "rowspan"))); if (is.na(rs)) rs <- 1L
      tx <- str_squish(xml_text(td))
      for (c in seq_len(cs)) {
        if (k > nc) break
        fila[k] <- tx
        if (rs > 1) { pend_txt[k] <- tx; pend_n[k] <- rs - 1L }
        k <- k + 1L
      }
    }
    if (k <= nc || j <= length(tds)) next                    # fila que no cuadra con la cabecera
    filas_out[[length(filas_out) + 1]] <- setNames(as.list(fila), nombres)
  }
  if (!length(filas_out)) return(NULL)
  df <- bind_rows(filas_out)
  fechas <- t(vapply(df$campo, parse_campo, numeric(2), anio = anio))
  partidos <- setdiff(nombres, c("firma", "campo", "muestra", "participacion", "lead"))
  out <- tibble(
    firma   = df$firma,
    inicio  = as.Date(fechas[, 1], origin = "1970-01-01"),
    fin     = as.Date(fechas[, 2], origin = "1970-01-01"),
    muestra = num_muestra(df$muestra)
  )
  for (p in partidos) out[[p]] <- num1(df[[p]])
  out
}

extraer_sondeos <- function(doc) {
  tablas <- xml_find_all(doc, "//table[contains(@class,'wikitable')]")
  sel <- list()
  for (t in tablas) {
    h4 <- str_squish(xml_text(xml_find_first(t, "preceding::h4[1]")))
    if (!identical(h4, "Voting intention estimates")) next
    anio <- suppressWarnings(as.integer(str_squish(xml_text(xml_find_first(t, "preceding::h5[1]")))))
    if (is.na(anio)) next
    sel[[length(sel) + 1]] <- leer_tabla(t, anio)
  }
  if (!length(sel)) stop("No se ha encontrado la tabla «Voting intention estimates».")
  bruto <- bind_rows(sel)
  es_eleccion <- str_detect(bruto$firma, regex("election", ignore_case = TRUE))
  eleccion <- bruto[es_eleccion, ]
  s <- bruto[!es_eleccion & !is.na(bruto$fin), ] |>
    mutate(empresa = str_trim(str_extract(firma, "^[^/]+")),
           medio   = str_trim(str_match(firma, "/(.+)$")[, 2]),
           fecha   = inicio + floor(as.numeric(fin - inicio) / 2)) |>
    filter(!is.na(PP) | !is.na(PSOE)) |>                             # solo escaños -> fuera
    distinct(empresa, inicio, fin, PP, PSOE, Vox, Sumar, .keep_all = TRUE) |>   # mismo sondeo en dos medios
    filter(fecha >= DESDE, fecha <= HOY, !empresa %in% EXCLUIR) |>
    arrange(fecha, empresa)
  list(sondeos = s, eleccion = eleccion)
}

# --- 3. Media ponderada -----------------------------------------------------
tendencia <- function(s, eleccion) {
  base <- s
  if (nrow(eleccion)) {                       # el resultado electoral sirve de punto de partida
    eg <- eleccion[str_detect(eleccion$firma, regex("general election", ignore_case = TRUE)), ]
    e <- if (nrow(eg)) eg[which.min(eg$fin), ] else eleccion[which.min(eleccion$fin), ]
    e$empresa <- "Elecciones"; e$fecha <- e$fin
    e$muestra <- TOPE_MUESTRA
    base <- bind_rows(e[, intersect(names(e), names(s))], s)
  }
  med <- median(base$muestra, na.rm = TRUE)
  n_ef <- pmin(ifelse(is.na(base$muestra), med, base$muestra), TOPE_MUESTRA)
  w_muestra <- sqrt(n_ef / 1000)
  dias <- seq(DESDE, HOY, by = "day")
  res <- matrix(NA_real_, nrow = length(dias), ncol = length(IDS), dimnames = list(NULL, IDS))
  fnum <- as.numeric(base$fecha)
  for (i in seq_along(dias)) {
    d <- as.numeric(dias[i])
    cand <- which(fnum <= d & (d - fnum) <= VENTANA)
    if (!length(cand)) next
    edad <- d - fnum[cand]
    # rango dentro de cada empresa: 0 = el más reciente
    ord <- order(base$empresa[cand], -fnum[cand])
    rango <- integer(length(cand))
    rango[ord] <- ave(seq_along(ord), base$empresa[cand][ord], FUN = seq_along) - 1L
    w <- 0.5^(edad / VIDA_MEDIA) * w_muestra[cand] * FACTOR_CASA^rango
    for (p in IDS) {
      v <- base[[p]][cand]; ok <- !is.na(v)
      if (sum(ok) < MIN_SONDEOS && !any(base$empresa[cand][ok] == "Elecciones")) next
      res[i, p] <- sum(w[ok] * v[ok]) / sum(w[ok])
    }
  }
  # Suavizado gaussiano: quita los saltos que da cada sondeo nuevo al entrar.
  # Al final de la serie solo hay días anteriores, así que el último valor
  # depende únicamente de sondeos ya publicados.
  if (SUAVIZADO > 0) {
    h <- ceiling(3 * SUAVIZADO); nucleo <- dnorm(-h:h, sd = SUAVIZADO)
    for (p in IDS) {
      x <- res[, p]; y <- rep(NA_real_, length(x))
      for (i in which(!is.na(x))) {
        j <- (i - h):(i + h); ok <- j >= 1 & j <= length(x)
        jj <- j[ok]; kk <- nucleo[ok]; ok2 <- !is.na(x[jj])
        y[i] <- sum(kk[ok2] * x[jj][ok2]) / sum(kk[ok2])
      }
      res[, p] <- y
    }
  }
  res <- round(res, 1)
  list(fechas = format(dias), valores = res)
}

# --- 4. Ejecutar, comprobar y guardar --------------------------------------
doc <- leer_html()
ex  <- extraer_sondeos(doc)
s   <- ex$sondeos
message(nrow(s), " sondeos desde ", min(s$fecha), " hasta ", max(s$fecha))
tr  <- tendencia(s, ex$eleccion)

ultimo <- list(fecha = format(HOY))
for (p in IDS) { v <- tr$valores[, p]; v <- v[!is.na(v)]; ultimo[[p]] <- if (length(v)) tail(v, 1) else NA }

# Comprobaciones: si alguna falla, no se sobrescribe promedio.json y el script termina con error
errores <- character()
falta <- setdiff(IDS, names(s)); if (length(falta)) errores <- c(errores, paste("Faltan partidos:", paste(falta, collapse = ", ")))
if (any(tr$valores > 60 | tr$valores < 0, na.rm = TRUE)) errores <- c(errores, "Valores de tendencia fuera de 0-60")
suma <- sum(unlist(ultimo[c("PP", "PSOE", "Vox")]))
if (is.na(suma) || suma < 50 || suma > 95) errores <- c(errores, sprintf("PP+PSOE+Vox del último día = %s (fuera de 50-95)", suma))
if (file.exists(SALIDA)) {
  ant <- tryCatch(fromJSON(SALIDA)$n_sondeos, error = function(e) NULL)
  if (!is.null(ant) && nrow(s) < ant - 5) errores <- c(errores, sprintf("Hay %d sondeos y antes había %d", nrow(s), ant))
}
if (length(errores)) stop("No se guarda promedio.json:\n - ", paste(errores, collapse = "\n - "))

otros <- setdiff(names(s), c("firma", "inicio", "fin", "muestra", "participacion", "empresa", "medio", "fecha", IDS))
sondeos_out <- c(list(fecha = format(s$fecha), empresa = s$empresa, medio = s$medio, muestra = s$muestra),
                 lapply(setNames(c(IDS, otros), c(IDS, otros)), function(p) s[[p]]))
tend_out <- c(list(fechas = tr$fechas), lapply(setNames(IDS, IDS), function(p) unname(tr$valores[, p])))

out <- list(
  actualizado = format(Sys.time(), "%Y-%m-%d %H:%M", tz = "Europe/Madrid"),
  fuente = list(nombre = "Wikipedia · Opinion polling for the 2026 Spanish general election",
                url = URL_PAG, licencia = "CC BY-SA 4.0"),
  metodo = list(descripcion = "Media ponderada por antigüedad y tamaño muestral",
                vida_media_dias = VIDA_MEDIA, ventana_dias = VENTANA,
                peso_muestra = sprintf("sqrt(min(n, %d) / 1000)", TOPE_MUESTRA),
                factor_empresa = FACTOR_CASA, min_sondeos = MIN_SONDEOS,
                suavizado_gauss_dias = SUAVIZADO,
                fecha_sondeo = "punto medio del trabajo de campo"),
  desde = format(DESDE), hasta = format(HOY),
  n_sondeos = nrow(s),
  partidos = PARTIDOS_GRAFICO,
  tendencia = tend_out,
  sondeos = sondeos_out,
  ultimo = ultimo
)
txt <- enc2utf8(as.character(toJSON(out, auto_unbox = TRUE, null = "null", na = "null", digits = NA)))
con <- file(SALIDA, open = "wb"); writeBin(charToRaw(txt), con); close(con)
message("promedio.json guardado: ", nrow(s), " sondeos; último día ",
        paste(sprintf("%s %.1f", IDS, unlist(ultimo[IDS])), collapse = " · "))
