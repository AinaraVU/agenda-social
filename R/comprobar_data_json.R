# ---------------------------------------------------------------------------
# Agenda social Euskadi · Silván & Miracle
# Comprueba un data.json nuevo ANTES de subirlo a la web.
#
# Compara su estructura con la versión que está publicada (la de referencia):
#  - que estén todos los bloques (cis_problemas, soc_voto, ...)
#  - que cada campo siga siendo del mismo tipo (lista / objeto / número / texto)
#  - que el número de oleadas no haya bajado
# Un fallo típico de jsonlite: un vector de longitud 1 que se escribe como
# escalar (3) en lugar de como lista ([3]). Esto lo detecta.
#
# Uso:
#   source("comprobar_data_json.R")
#   comprobar_data_json("data_nuevo.json", referencia = "data.json")
# ---------------------------------------------------------------------------

library(jsonlite)

tipo_json <- function(x) {
  if (is.null(x)) return("null")
  if (is.list(x)) return(if (is.null(names(x))) "lista" else "objeto")
  if (is.character(x)) return("texto")
  if (is.logical(x)) return("logico")
  "numero"
}

comparar <- function(nuevo, ref, ruta = "DATA", problemas = character()) {
  tn <- tipo_json(nuevo); tr <- tipo_json(ref)
  # null y número son intercambiables (celdas sin dato)
  if (tn != tr && !all(c(tn, tr) %in% c("null", "numero", "texto"))) {
    return(c(problemas, sprintf("%s: era %s y ahora es %s", ruta, tr, tn)))
  }
  if (tr == "objeto") {
    falta <- setdiff(names(ref), names(nuevo))
    if (length(falta)) problemas <- c(problemas, sprintf("%s: faltan %s", ruta, paste(falta, collapse = ", ")))
    for (k in intersect(names(ref), names(nuevo))) {
      problemas <- comparar(nuevo[[k]], ref[[k]], paste0(ruta, "$", k), problemas)
    }
  } else if (tr == "lista" && length(ref) && length(nuevo)) {
    # basta con comparar el primer elemento de cada lista
    problemas <- comparar(nuevo[[1]], ref[[1]], paste0(ruta, "[[1]]"), problemas)
  }
  problemas
}

comprobar_data_json <- function(nuevo, referencia = "data.json") {
  N <- fromJSON(nuevo, simplifyVector = FALSE)
  R <- fromJSON(referencia, simplifyVector = FALSE)
  p <- comparar(N, R)
  for (f in c("cis", "soc")) {
    a <- R$fuentes[[f]]; b <- N$fuentes[[f]]
    if (!is.null(a) && !is.null(b)) {
      cat(sprintf("%-4s %2d -> %2d %s · hasta %s -> %s\n", f, a$n_oleadas, b$n_oleadas, b$unidad, a$hasta, b$hasta))
      if (b$n_oleadas < a$n_oleadas) p <- c(p, sprintf("fuentes$%s: hay menos oleadas que antes", f))
    }
  }
  cat(sprintf("Tamaño: %.0f KB\n", file.size(nuevo) / 1024))
  if (length(p)) {
    cat("\nNO SUBIR. Problemas encontrados:\n"); cat(paste0(" - ", p), sep = "\n")
    invisible(FALSE)
  } else {
    cat("\nOK: misma estructura que la versión publicada. Se puede subir.\n")
    invisible(TRUE)
  }
}

# Para escribir el JSON desde R con la estructura correcta:
#   write_json(DATA, "data.json", auto_unbox = TRUE, na = "null", null = "null", digits = NA)
# y envolver con I() los vectores que deban ser lista aunque tengan un solo valor:
#   DATA$soc_voto$series$Autonómicas$fechas <- I(fechas)
