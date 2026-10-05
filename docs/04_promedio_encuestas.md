# 04 · Promedio de encuestas

Estado: **hecho** (octubre de 2026). Script: `R/promedio.R`, ejecutado por GitHub Actions cada día a las 07:00 (hora de Madrid).

Para probarlo en local con una copia guardada de la página (sin conexión a Wikipedia):

```r
Sys.setenv(PROMEDIO_HTML = "ruta/Opinion polling ... - Wikipedia.html")   # opcional
source("R/promedio.R")
```

Variables opcionales: `PROMEDIO_HTML` (leer un HTML local), `PROMEDIO_HOY` (fecha final, `AAAA-MM-DD`), `PROMEDIO_EXCLUIR` (empresas a excluir, separadas por comas; p. ej. `CIS`).

## Fuente

- Página: <https://en.wikipedia.org/wiki/Opinion_polling_for_the_2026_Spanish_general_election>
- Sección: **Voting intention estimates** (la tabla principal). **Excluir** las tablas de escenarios hipotéticos, de escaños por comunidad y de líderes.
- Licencia: CC BY-SA 4.0. El pie del gráfico debe citar «Fuente: Wikipedia» con enlace. El cálculo del promedio es propio.
- Acceso recomendado: la API de MediaWiki, más estable que la página renderizada:
  `https://en.wikipedia.org/w/api.php?action=parse&page=Opinion_polling_for_the_2026_Spanish_general_election&prop=text&format=json`
  y leer el HTML de `parse.text["*"]` con `rvest`. Enviar una cabecera `User-Agent` identificativa (p. ej. `agenda-social-sm/1.0 (correo de contacto)`), como pide Wikipedia.

## Estructura esperada de la tabla

> **Verificada en octubre de 2026** con la página guardada en `src/encuestas_estatales/`. La sección «Voting intention estimates» tiene **una tabla por año** (2026, 2025, 2024, 2023), cada una precedida por un título `h5` con el año. Cabecera de dos filas: la primera con los logos (nombre del partido en el `title` del enlace) y la segunda vacía (colores). Columnas: firma, fecha de campo, muestra, participación, partidos y *Lead*.
>
> Casos reales encontrados: el **CIS** comparte con `rowspan` la fecha y la muestra entre su estimación y las reestimaciones de otras empresas («CIS (Logoslab)», «CIS (Ateneo del Dato)»…); en algunas celdas el % y los escaños aparecen pegados (`29.5127` = 29,5 % y 127 escaños), por eso se toma el número con una sola decimal; Podemos en 2023 aparece como `[b]` (dentro de Sumar) → `NA`; hay dos filas de elecciones (generales 2023 y europeas 2024), que no se cuentan como sondeos.

| Columna | Contenido típico | Tratamiento |
|---|---|---|
| Polling firm/Commissioner | `GAD3/ABC`, `40dB/Prisa` | `empresa` = texto antes de `/`; `medio` = después |
| Fieldwork date | `1–3 Oct`, `28 Sep–2 Oct` (año en el título de la tabla o de la sección) | Fecha de inicio y fin; `fecha` = punto medio |
| Sample size | `1,000` | Número; quitar separador de miles |
| Turnout | `68.5` | Se ignora |
| Columnas de partido | Cabecera con logo o enlace; celda `33.1` y debajo los escaños (`150/152`) | Primer número de la celda = % de voto; los escaños se ignoran |
| Lead | `6.2` | Se ignora |

Casos a tratar:

- **Cabeceras con logo**: el nombre del partido está en el `title` del enlace o en el `alt` de la imagen, no en el texto. Normalizar con una tabla de equivalencias (`Partido Popular` → `PP`, `Spanish Socialist Workers' Party` → `PSOE`, `Se Acabó La Fiesta` → `SALF`, …).
- **Cabeceras de dos filas** (fila de logos + fila de colores) y celdas con `rowspan`/`colspan`.
- **Filas de resultados electorales** (p. ej. «2023 general election»): excluir de los sondeos; pueden servir como punto de partida de la tendencia.
- **Notas** `[a]`, `[1]`: eliminar.
- **Celdas vacías, `–`, `?`**: `NA`.
- **Sondeos que solo dan escaños**: excluir.
- **Sumar y Podemos**: en 2023 Podemos estaba dentro de Sumar; la columna de Podemos aparece después. Antes de que exista, Podemos = `NA` (no 0). Su línea de tendencia empieza con su primer sondeo propio.
- **Tablas por año**: si la página divide la tabla por años, unirlas y tomar el año de cada tabla.
- **Duplicados**: el mismo sondeo publicado por dos medios → una sola fila (misma empresa, mismas fechas y mismos valores).

## Partidos del gráfico

PP, PSOE, Vox, Sumar, Podemos y SALF (como en la referencia). Los demás se leen y se guardan en `sondeos`, pero no se dibujan.

## Método: media ponderada

Para cada día *d* desde el 23-07-2023 hasta hoy:

1. Sondeos candidatos: los de fecha (punto medio del campo) `≤ d` y con antigüedad `≤ 60 días`.
2. Peso de cada sondeo *i*:

   `w_i = 0,5^(edad_i / 14) × sqrt(min(n_i, 3000) / 1000) × f_i`

   - `edad_i` = días entre la fecha del sondeo y *d*. Vida media de 14 días: un sondeo de hace dos semanas pesa la mitad.
   - Muestra: más peso a muestras grandes, con tope para que ninguna domine. Sin muestra → se usa la mediana.
   - `f_i` = 1 para el sondeo más reciente de cada empresa, 0,5 para el anterior, 0,25 para el siguiente, etc. Evita que las empresas que publican cada semana pesen más.
3. Tendencia del partido *p* el día *d* = `Σ w_i · v_ip / Σ w_i`, usando solo los sondeos con dato para *p*.
4. Si la suma de pesos es muy baja (menos de 3 sondeos en la ventana), `null`.
5. **Suavizado gaussiano** de la serie diaria (desviación típica de 7 días). Quita los escalones que produce cada sondeo nuevo al entrar. En el extremo final solo hay días anteriores, así que el último valor depende únicamente de sondeos ya publicados.
6. Redondeo a una décima.

El resultado de las generales de 2023 se usa como punto de partida de la tendencia (cuenta como un sondeo de muestra máxima) para que la línea empiece el 23-07-2023.

Los sondeos del **CIS** se incluyen (con ellos la tendencia coincide con la referencia). Se pueden excluir con `PROMEDIO_EXCLUIR=CIS`.

Resultado con la página guardada el 5-10-2026, a 30-09-2026: PP 32,1 · PSOE 26,5 · Vox 18,2 · Sumar 6,1 · Podemos 3,4 · SALF 1,8 (referencia: 32,5 · 26,3 · 18,2 · 6,1 · 3,4 · 1,8). 551 sondeos (la tabla tiene 559 filas: se quitan las 2 de elecciones y los duplicados).

Los parámetros (14, 60, 3000, 0,5, 7) van al principio del script y se guardan en `promedio.json → metodo`. Se ajustan comparando la línea resultante con la de la referencia: debe ser igual de suave y reaccionar en pocas semanas a cambios sostenidos.

No se usa ninguna corrección por «casa» (sesgo de cada empresa) en la primera versión. Se deja como mejora.

## Salida

`promedio.json` con el formato de [02_contratos_de_datos.md](02_contratos_de_datos.md#promediojson-promedio-de-encuestas--por-crear).

## Comprobaciones antes de guardar

`promedio.R` no debe sobrescribir `promedio.json` si:

- La tabla tiene menos sondeos que la versión anterior menos 5 (señal de que el scraping ha fallado a medias).
- Falta alguno de los seis partidos del gráfico.
- Algún valor de tendencia está fuera de 0-60.
- La suma de PP + PSOE + Vox del último día está fuera de 50-95.

En ese caso termina con error: GitHub Actions marca la ejecución en rojo y avisa por correo. La web sigue con el último `promedio.json` bueno.

## Paquetes de R

`rvest`, `xml2`, `httr2` (petición con User-Agent y reintentos), `jsonlite`, `dplyr`, `stringr`.

## Criterios de aceptación

- `Rscript R/promedio.R` genera `promedio.json` válido en local.
- El número de sondeos coincide (±2 %) con los de la tabla de Wikipedia desde julio de 2023.
- Los últimos valores de la tendencia quedan a menos de 1,5 puntos de los de la referencia para PP, PSOE y Vox en la misma fecha.
- Si Wikipedia no ha cambiado, `sondeos` queda idéntico; solo se añade el día nuevo a `tendencia`.
