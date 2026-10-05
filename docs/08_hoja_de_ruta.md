# 08 · Hoja de ruta

## Hecho

- [x] Dashboard CIS + Sociómetro con los datos separados del código (`index.html`, `app.js`, `data.json`).
- [x] Comprobación de estructura de `data.json` (`R/comprobar_data_json.R`), probada.
- [x] Revisión diaria de la carpeta local (`R/actualizar_local.R`): detección por MD5, registro, comprobación y escritura UTF-8, probada sin el `git push`.
- [x] Arquitectura y documentación (`docs/`).
- [x] `R/promedio.R`: scraping de Wikipedia, media ponderada y comprobaciones (fase 3).
- [x] Tarjeta «Evolución de estimación de voto» en el dashboard (fase 4).
- [x] `.github/workflows/publicar.yml` con los jobs `promedio` y `publicar`.

## Fase 1 · Publicar lo que ya existe

| Tarea | Aceptación |
|---|---|
| Crear el repositorio público y subir esta carpeta | `datos/` y `logs/` no aparecen en GitHub |
| Crear `.github/workflows/publicar.yml` (solo el job `publicar`) | Un push publica la web en `<usuario>.github.io/agenda-social` |
| (Opcional) Dirección propia `panel.tudominio.com` | Carga con HTTPS |
| Página de WordPress con el iframe | El dashboard se ve dentro de la web, en escritorio y móvil |

## Fase 2 · CIS y Sociómetro automáticos

| Tarea | Aceptación |
|---|---|
| Pegar el código de procesado en `procesar_cis.R` | Con el último barómetro, el `data.json` generado es igual al actual |
| Pegar el código en `procesar_sociometro.R` | Ídem con la última oleada |
| Instalar Git y probar el `git push` desde R | `Rscript R/actualizar_local.R` sube un cambio de prueba |
| Programar la tarea diaria a las 08:00 | El log tiene una línea diaria; un archivo nuevo aparece en la web el mismo día |

## Fase 3 · Promedio de encuestas

| Tarea | Aceptación |
|---|---|
| Revisar la estructura real de la tabla de Wikipedia y actualizar [04](04_promedio_encuestas.md) | Columnas, cabeceras y casos especiales confirmados |
| Escribir `R/promedio.R` (scraping + limpieza) | Número de sondeos ±2 % del de Wikipedia desde julio de 2023 |
| Implementar la media ponderada y sus comprobaciones | Último valor a menos de 1,5 puntos de la referencia para PP, PSOE y Vox |
| Añadir el job `promedio` al workflow | Se ejecuta a las 07:00 y hace commit de `promedio.json` |

## Fase 4 · Gráfico del promedio en el dashboard

| Tarea | Aceptación |
|---|---|
| Cargar `promedio.json` en `index.html` sin bloquear | Sin el archivo, el dashboard funciona igual |
| Tarjeta «Evolución de estimación de voto» en Análisis del voto | Se reconoce como la referencia ([05](05_grafico_promedio.md)) |
| Chips de partido, selector de periodo, tooltips, exportar PNG | Funcionan en escritorio y móvil |

## Mejoras posibles (sin fecha)

- Corrección por efecto «casa» de cada empresa en el promedio.
- Bandas de incertidumbre alrededor de las líneas.
- Promedio para las elecciones al Parlamento Vasco con el mismo método.
- Aviso por correo cuando la tarea local falla (paquete `blastula`).
