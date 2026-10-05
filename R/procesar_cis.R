# ---------------------------------------------------------------------------
# Procesado del CIS  ·  lo llama R/actualizar_local.R
#
# AQUÍ VA TU CÓDIGO DE R ACTUAL. La función recibe:
#   DATA      el contenido de data.json como lista de R
#   archivos  rutas de los archivos nuevos de datos/cis/
# y tiene que devolver DATA con estos bloques recalculados:
#   DATA$cis_problemas
#   DATA$cis_perfiles
#   DATA$cis_intencion
#   DATA$cis_probvoto
#   DATA$cis_vsperfil
#   DATA$cis_transfer
#   DATA$cis_prefpte
#   DATA$cis_aprobacion
#   DATA$cis_valoracion
#   DATA$cis_ideologia
#   DATA$cis_ideo_hist
#   DATA$cis_economia
#   DATA$fuentes$cis   (n_oleadas, unidad, desde, hasta, peso)
#
# Reglas para no romper el dashboard:
#   - Mismos nombres de bloques y de campos que ahora.
#   - Lo que hoy es una lista en data.json debe seguir siendo lista, aunque tenga
#     un solo elemento: usa as.list(x) o I(x).
#   - Si un bloque no cambia, no lo toques.
# R/comprobar_data_json.R se encarga de avisar si algo no encaja.
# ---------------------------------------------------------------------------

actualizar_cis <- function(DATA, archivos) {
  stop("Falta pegar el código de procesado del CIS en R/procesar_cis.R")

  # Ejemplo de la forma que tiene que tener:
  # micro <- haven::read_sav(archivos[1])
  # DATA$fuentes$cis$n_oleadas <- DATA$fuentes$cis$n_oleadas + 1
  # DATA$fuentes$cis$hasta     <- "2026-10"
  # DATA$cis_problemas <- calcular_cis_problemas(micro, DATA$cis_problemas)
  # DATA
}
