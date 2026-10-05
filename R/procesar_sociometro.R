# ---------------------------------------------------------------------------
# Procesado del Sociómetro Vasco  ·  lo llama R/actualizar_local.R
#
# AQUÍ VA TU CÓDIGO DE R ACTUAL. La función recibe:
#   DATA      el contenido de data.json como lista de R
#   archivos  rutas de los archivos nuevos de datos/sociometro/
# y tiene que devolver DATA con estos bloques recalculados:
#   DATA$soc_voto
#   DATA$soc_lideres
#   DATA$soc_ideologia
#   DATA$soc_nacionalismo
#   DATA$soc_ideo_hist
#   DATA$soc_identidad
#   DATA$soc_cuadrantes
#   DATA$soc_problemas
#   DATA$soc_perfiles
#   DATA$fuentes$soc   (n_oleadas, unidad, desde, hasta, peso)
#
# Reglas para no romper el dashboard:
#   - Mismos nombres de bloques y de campos que ahora.
#   - Lo que hoy es una lista en data.json debe seguir siendo lista, aunque tenga
#     un solo elemento: usa as.list(x) o I(x).
#   - Si un bloque no cambia, no lo toques.
# R/comprobar_data_json.R se encarga de avisar si algo no encaja.
# ---------------------------------------------------------------------------

actualizar_sociometro <- function(DATA, archivos) {
  stop("Falta pegar el código de procesado del Sociómetro Vasco en R/procesar_sociometro.R")

  # Ejemplo de la forma que tiene que tener:
  # micro <- haven::read_sav(archivos[1])
  # DATA$fuentes$soc$n_oleadas <- DATA$fuentes$soc$n_oleadas + 1
  # DATA$fuentes$soc$hasta     <- "2026-10"
  # DATA$soc_voto <- calcular_soc_voto(micro, DATA$soc_voto)
  # DATA
}
