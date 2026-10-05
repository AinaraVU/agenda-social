# 07 · Operación

## Día a día

| Quién | Qué | Cuándo |
|---|---|---|
| Tú | Descargar el .sav del CIS o del Sociómetro y dejarlo en `datos/cis/` o `datos/sociometro/` | Cuando se publica una oleada |
| Ordenador (08:00) | Detecta el archivo, procesa, comprueba y sube `data.json` | Cada día, si está encendido |
| GitHub (07:00) | Descarga la tabla de Wikipedia, recalcula el promedio y publica | Cada día |
| Nadie | WordPress | Nunca más |

## Dónde mirar si algo no se ve actualizado

| Síntoma | Dónde mirar | Causa probable |
|---|---|---|
| El CIS o el Sociómetro no se actualizan | `logs/actualizacion.log` en el ordenador | Ordenador apagado a las 08:00; error en el procesado; la comprobación ha bloqueado la subida |
| «NO SUBIR. Problemas encontrados» en el log | Lista de problemas en el log | El script de procesado ha cambiado la estructura de algún bloque |
| «ERROR al subir a GitHub» | Log | Sin conexión o credenciales de Git caducadas: hacer un push manual con GitHub Desktop |
| El promedio no se actualiza | Pestaña *Actions* del repositorio (y correo de GitHub) | Wikipedia ha cambiado la tabla; una comprobación de `promedio.R` lo ha frenado |
| La web no carga datos | Abrir `https://<panel>/data.json` en el navegador | Archivo no publicado o JSON mal formado |
| Cambios publicados pero no visibles | Recargar la página | Pages tarda 1-2 minutos en publicar |

## Volver atrás

Cada versión de `data.json` y `promedio.json` queda en el historial de GitHub.

- **GitHub Desktop** → *History* → clic derecho en el commit malo → *Revert changes in commit* → *Push*.
- La web vuelve a la versión anterior en un par de minutos.

## Reprocesar una oleada

Borrar su línea de `datos/procesados.csv`. La tarea de la mañana siguiente la procesará de nuevo (o ejecutar `Rscript R/actualizar_local.R` a mano).

## Lanzar el promedio a mano

*Actions* → *Promedio diario y publicación* → *Run workflow*.

## Cambiar el diseño del dashboard

Solo se tocan `index.html` y/o `app.js`. Al subirlos (push), el workflow publica la nueva versión. Los datos no se ven afectados.
