# ---------------------------------------------------------------------------
# Agenda social Euskadi · Silván & Miracle
# REVISIÓN DIARIA EN TU ORDENADOR
#
# Cada día (tarea programada, ver R/programar_tarea.R):
#   1. Mira datos/cis/ y datos/sociometro/ por si hay archivos nuevos.
#   2. Si no hay nada nuevo, no hace nada y termina.
#   3. Si hay algo nuevo: lo procesa con tus scripts, regenera data.json,
#      lo comprueba contra la versión anterior y, si está bien, lo sube a GitHub.
#      GitHub Pages lo publica y la web se actualiza en un par de minutos.
#
# Todo queda apuntado en logs/actualizacion.log.
# Ejecutar a mano:  Rscript R/actualizar_local.R   (desde la carpeta agenda-social)
# ---------------------------------------------------------------------------

suppressPackageStartupMessages({
  library(jsonlite)
  library(tools)   # md5sum
})

# --- Configuración ---------------------------------------------------------
RAIZ <- Sys.getenv("AGENDA_SOCIAL_DIR", unset = getwd())   # carpeta del repositorio
setwd(RAIZ)
EXT_VALIDAS <- c("sav", "zip", "csv", "xlsx", "dta")      # tipos de archivo que cuentan como encuesta
REGISTRO    <- file.path("datos", "procesados.csv")        # qué archivos ya se han procesado
LOG         <- file.path("logs", "actualizacion.log")
SUBIR_A_GITHUB <- TRUE                                     # FALSE para probar sin publicar

dir.create("logs", showWarnings = FALSE)
log_msg <- function(...) {
  linea <- sprintf("[%s] %s", format(Sys.time(), "%Y-%m-%d %H:%M"), paste0(...))
  cat(linea, "\n"); cat(linea, "\n", file = LOG, append = TRUE)
}

# Escribe JSON siempre en UTF-8 (en Windows R no usa UTF-8 por defecto y se estropean las tildes)
escribir_json <- function(x, ruta) {
  txt <- enc2utf8(as.character(toJSON(x, auto_unbox = TRUE, null = "null", na = "null", digits = NA)))
  con <- file(ruta, open = "wb"); on.exit(close(con))
  writeBin(charToRaw(txt), con)
}

source(file.path("R", "comprobar_data_json.R"))
source(file.path("R", "procesar_cis.R"))
source(file.path("R", "procesar_sociometro.R"))

# --- 1. Buscar archivos nuevos --------------------------------------------
archivos_de <- function(fuente) {
  f <- list.files(file.path("datos", fuente), recursive = TRUE, full.names = TRUE)
  f[tolower(file_ext(f)) %in% EXT_VALIDAS]
}
registro <- if (file.exists(REGISTRO)) {
  read.csv(REGISTRO, stringsAsFactors = FALSE)
} else {
  data.frame(fuente = character(), archivo = character(), md5 = character(), fecha = character())
}

nuevos <- list()
for (fuente in c("cis", "sociometro")) {
  f <- archivos_de(fuente)
  if (!length(f)) next
  md5 <- unname(md5sum(f))
  # nuevo = no estaba en el registro, o estaba pero el archivo ha cambiado
  es_nuevo <- !(paste(f, md5) %in% paste(registro$archivo, registro$md5))
  if (any(es_nuevo)) nuevos[[fuente]] <- data.frame(fuente = fuente, archivo = f[es_nuevo], md5 = md5[es_nuevo])
}

if (!length(nuevos)) {
  log_msg("Sin archivos nuevos. Nada que hacer.")
  quit(save = "no", status = 0)
}
for (n in nuevos) log_msg("Nuevo en ", n$fuente[1], ": ", paste(basename(n$archivo), collapse = ", "))

# --- 2. Procesar ----------------------------------------------------------
# Se lee data.json como lista (simplifyVector = FALSE) para que, al volver a
# escribirlo, las listas sigan siendo listas y no cambie la estructura.
DATA <- fromJSON("data.json", simplifyVector = FALSE)
anterior <- tempfile(fileext = ".json"); file.copy("data.json", anterior)

resultado <- tryCatch({
  if (!is.null(nuevos$cis))        DATA <- actualizar_cis(DATA, nuevos$cis$archivo)
  if (!is.null(nuevos$sociometro)) DATA <- actualizar_sociometro(DATA, nuevos$sociometro$archivo)
  TRUE
}, error = function(e) { log_msg("ERROR al procesar: ", conditionMessage(e)); FALSE })
if (!resultado) quit(save = "no", status = 1)

candidato <- tempfile(fileext = ".json")
escribir_json(DATA, candidato)

# --- 3. Comprobar antes de publicar --------------------------------------
ok <- comprobar_data_json(candidato, referencia = anterior)
if (!isTRUE(ok)) {
  log_msg("data.json NO se publica: no supera la comprobación. Revisa el mensaje de arriba.")
  quit(save = "no", status = 1)
}
file.copy(candidato, "data.json", overwrite = TRUE)

# Apuntar como procesados
nuevos_df <- do.call(rbind, nuevos); nuevos_df$fecha <- format(Sys.Date())
registro <- rbind(registro[!(registro$archivo %in% nuevos_df$archivo), ], nuevos_df)
write.csv(registro, REGISTRO, row.names = FALSE)

# --- 4. Subir a GitHub -----------------------------------------------------
if (!SUBIR_A_GITHUB) { log_msg("data.json actualizado en local (sin subir: SUBIR_A_GITHUB = FALSE)."); quit(save = "no") }

git <- function(...) {
  out <- suppressWarnings(system2("git", c(...), stdout = TRUE, stderr = TRUE))
  st <- attr(out, "status"); if (!is.null(st) && st != 0) stop(paste(out, collapse = "\n"))
  out
}
tryCatch({
  git("pull", "--rebase", "--autostash")   # trae el promedio.json que escribe GitHub cada día
  git("add", "data.json")
  msg <- sprintf("Datos: %s", paste(sprintf("%s (%s)", names(nuevos), sapply(nuevos, nrow)), collapse = ", "))
  git("commit", "-m", shQuote(msg))
  git("push")
  log_msg("Publicado en GitHub: ", msg, ". La web se actualiza en unos minutos.")
}, error = function(e) log_msg("ERROR al subir a GitHub: ", conditionMessage(e)))
