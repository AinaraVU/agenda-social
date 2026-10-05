# 03 · Actualización local (CIS y Sociómetro)

## Qué hace

Cada día a las 08:00, una tarea programada ejecuta `R/actualizar_local.R`, que:

1. Lista los archivos de `datos/cis/` y `datos/sociometro/` (extensiones `sav`, `zip`, `csv`, `xlsx`, `dta`).
2. Los compara con `datos/procesados.csv` (ruta + MD5). Un archivo es **nuevo** si no está en el registro o si ha cambiado su contenido.
3. Si no hay nada nuevo, apunta «Sin archivos nuevos» en `logs/actualizacion.log` y termina.
4. Si hay algo nuevo:
   - lee `data.json` como lista de R (`fromJSON(simplifyVector = FALSE)`, para no alterar la estructura);
   - llama a `actualizar_cis(DATA, archivos)` y/o `actualizar_sociometro(DATA, archivos)`;
   - escribe el resultado en un archivo temporal y lo compara con el anterior (`comprobar_data_json()`);
   - **si no pasa la comprobación, no publica** y lo apunta en el registro;
   - si pasa: sustituye `data.json`, actualiza `procesados.csv` y hace `git pull --rebase` → `commit` → `push`.

## Estado

| Archivo | Estado |
|---|---|
| `R/actualizar_local.R` | Hecho y probado (detección, registro, comprobación, escritura UTF-8). El `git push` no se ha probado contra GitHub real. |
| `R/comprobar_data_json.R` | Hecho y probado. Detecta bloques que faltan, cambios de tipo y menos oleadas. |
| `R/procesar_cis.R` | **Plantilla.** Hay que pegar el código de procesado actual. |
| `R/procesar_sociometro.R` | **Plantilla.** Ídem. |

## Contrato de las funciones de procesado

```r
actualizar_cis <- function(DATA, archivos) {
  # DATA:     data.json como lista de R
  # archivos: rutas de los archivos nuevos de datos/cis/
  # Devuelve DATA con los bloques cis_* y DATA$fuentes$cis recalculados.
}
actualizar_sociometro <- function(DATA, archivos) { ... }   # bloques soc_* y DATA$fuentes$soc
```

- Recalcular siempre la **serie completa** de cada bloque afectado o añadir la oleada nueva al final; en ambos casos `fechas` debe quedar ordenado y sin duplicados.
- No tocar bloques que no cambian.
- Actualizar `fuentes$*$n_oleadas` y `fuentes$*$hasta`.

## Programar la tarea

**Windows** (paquete `taskscheduleR`):

```r
install.packages("taskscheduleR")
taskscheduleR::taskscheduler_create(
  taskname  = "agenda_social_diaria",
  rscript   = "C:/ruta/agenda-social/R/actualizar_local.R",
  schedule  = "DAILY", starttime = "08:00",
  startdate = format(Sys.Date(), "%d/%m/%Y")
)
Sys.setenv(AGENDA_SOCIAL_DIR = "C:/ruta/agenda-social")  # o fijarla en las variables de entorno de Windows
```

**macOS / Linux** (paquete `cronR`):

```r
cronR::cron_add(
  cronR::cron_rscript("/ruta/agenda-social/R/actualizar_local.R"),
  frequency = "daily", at = "08:00", id = "agenda_social_diaria"
)
```

El script usa `AGENDA_SOCIAL_DIR` como carpeta de trabajo; si no existe, usa la carpeta desde la que se lanza.

## Requisitos del ordenador

- R ≥ 4.1 con `jsonlite` (y lo que usen los scripts de procesado, p. ej. `haven`).
- **Git** instalado y en el PATH (Git for Windows), con el repositorio clonado y credenciales guardadas: tras el primer `git push` manual (o con GitHub Desktop) el gestor de credenciales las recuerda.
- Ordenador encendido a la hora de la tarea. En Windows, marcar «Ejecutar la tarea lo antes posible si se omitió un inicio programado».

## Probar sin publicar

En `R/actualizar_local.R`, poner `SUBIR_A_GITHUB <- FALSE`, copiar un archivo en `datos/cis/` y ejecutar:

```r
Rscript R/actualizar_local.R
```

Para volver a procesar un archivo, borrar su línea de `datos/procesados.csv`.
