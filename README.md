# Monitor de la opinión pública

Dashboard de opinión pública de **Silván & Miracle** con tres pestañas: **Evolución encuestas** (promedio), **Barómetro del CIS** y **Sociómetro Vasco**. Fuentes:

| Fuente | Qué aporta | Cómo se actualiza |
|---|---|---|
| Barómetro del CIS | Problemas, voto, líderes, ideología, economía (España) | Tarea diaria en el ordenador local: si hay un archivo nuevo en `datos/cis/`, lo procesa y publica |
| Sociómetro Vasco (Gobierno Vasco) | Lo mismo para Euskadi | Igual, con `datos/sociometro/` |
| Promedio de encuestas | Estimación de voto de todas las encuestas publicadas | GitHub Actions cada mañana: descarga la tabla de Wikipedia, calcula la media ponderada y publica |

El dashboard se publica en **GitHub Pages** y la web de WordPress lo muestra con un **iframe**.

> **Estado (octubre de 2026):** el dashboard (CIS + Sociómetro) funciona y la arquitectura está definida.
> El promedio de encuestas (`R/promedio.R`), su gráfico y el workflow de publicación están **hechos**.
> Falta el procesado local de los microdatos (`procesar_cis.R`, `procesar_sociometro.R`).
> Ver [docs/08_hoja_de_ruta.md](docs/08_hoja_de_ruta.md).

## Documentación

| Documento | Contenido |
|---|---|
| [docs/arquitectura.pdf](docs/arquitectura.pdf) | Esquema visual del proyecto (4 páginas, A4 horizontal) |
| [01_arquitectura.md](docs/01_arquitectura.md) | Piezas, flujos y por qué se ha elegido cada una |
| [02_contratos_de_datos.md](docs/02_contratos_de_datos.md) | Formato de `data.json` y `promedio.json` |
| [03_actualizacion_local.md](docs/03_actualizacion_local.md) | Revisión diaria de la carpeta local (CIS y Sociómetro) |
| [04_promedio_encuestas.md](docs/04_promedio_encuestas.md) | Scraping de Wikipedia y método de la media ponderada |
| [05_grafico_promedio.md](docs/05_grafico_promedio.md) | Cómo debe verse el gráfico del promedio en el dashboard |
| [06_despliegue.md](docs/06_despliegue.md) | GitHub, GitHub Pages, GitHub Actions y WordPress |
| [07_operacion.md](docs/07_operacion.md) | Uso diario, registros, fallos y cómo volver atrás |
| [08_hoja_de_ruta.md](docs/08_hoja_de_ruta.md) | Tareas de desarrollo por fases, con criterios de aceptación |

## Estructura

```
agenda-social/
├── index.html               # dashboard: carga los .json y luego app.js
├── app.js                   # gráficos (ECharts) y lógica de pestañas
├── data.json                # datos CIS + Sociómetro
├── promedio.json            # promedio de encuestas, lo escribe GitHub Actions
├── R/
│   ├── actualizar_local.R   # revisión diaria de datos/: detecta, procesa, comprueba y sube
│   ├── procesar_cis.R       # (plantilla) aquí va el código de procesado del CIS
│   ├── procesar_sociometro.R# (plantilla) aquí va el del Sociómetro
│   ├── radar_cis.R          # bloque cis_radar (radares por grupo) a partir de los .sav del CIS
│   ├── comprobar_data_json.R# compara la estructura de un data.json nuevo con el publicado
│   └── promedio.R           # scraping + media ponderada
├── .github/workflows/
│   └── publicar.yml         # promedio diario + despliegue a Pages
├── docs/
├── datos/                   # privado (en .gitignore): microdatos
└── logs/                    # privado (en .gitignore): registro de la tarea diaria
```

## Probar el dashboard en local

Abrir `index.html` con doble clic no funciona (el navegador bloquea la lectura de `data.json`). Hay que servir la carpeta:

```r
servr::httd(".")          # desde R, en la carpeta agenda-social
```
o `python -m http.server` en la terminal.
