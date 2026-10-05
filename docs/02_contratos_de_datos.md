# 02 · Contratos de datos

El dashboard (`app.js`) solo conoce estos dos archivos. Mientras respeten la estructura descrita aquí, se pueden regenerar con cualquier script sin tocar el diseño.

Reglas comunes:

- UTF-8, sin BOM. En R, escribir siempre en binario UTF-8 (ver `escribir_json()` en `R/actualizar_local.R`): en Windows la codificación por defecto rompe las tildes.
- Decimales con punto en el JSON (`32.5`); la coma la pone el dashboard al mostrar.
- Sin dato = `null`, nunca `""` ni `"NA"`.
- Fechas de oleada como `"AAAA-MM"`; fechas de día como `"AAAA-MM-DD"`.
- Lo que es lista sigue siendo lista aunque tenga un solo elemento (`[3]`, no `3`). En `jsonlite`: `auto_unbox = TRUE` y envolver con `I()` o `as.list()` los vectores que deban ser lista.

## data.json (CIS + Sociómetro)

Lo escribe `R/actualizar_local.R` a partir de `procesar_cis.R` y `procesar_sociometro.R`. Ocupa unos 540 KB.

### `fuentes`

```json
"fuentes": {
  "cis": {"n_oleadas": 34, "unidad": "barómetros", "desde": "2023-09", "hasta": "2026-09", "peso": "PESO (nacional)"},
  "soc": {"n_oleadas": 16, "unidad": "oleadas",    "desde": "2021-10", "hasta": "2026-06", "peso": "wt"}
}
```
Alimenta la ficha de cabecera de cada pestaña («34 barómetros · De septiembre 2023 a septiembre 2026 · Ponderación: PESO»).

### Bloques y pestañas

| Bloque | Pestaña del dashboard | Campos de primer nivel |
|---|---|---|
| `cis_problemas` | CIS · Problemas principales | fechas, estudios, base_n, residuales, corta, bloques, disponibles |
| `cis_perfiles` | CIS · Problemas principales (perfiles) | vars, n, datos, eleccion |
| `cis_intencion` | CIS · Análisis del voto | fechas, estudios, base_n, medidas |
| `cis_probvoto` | CIS · Análisis del voto | fechas, estudios, cols, grupos, datos |
| `cis_vsperfil` | CIS · Análisis del voto | fechas, estudios, orden, vars, datos |
| `cis_transfer` | CIS · Análisis del voto | fechas, estudios, origenes, destinos, datos |
| `cis_radar` | CIS · Análisis del voto (radares) | fechas, estudios, dims, ejes_partidos, partidos, intencion, n |
| `cis_prefpte` | CIS · Líderes | fechas, estudios, base_n, orden, series |
| `cis_aprobacion` | CIS · Líderes | fecha, fecha_ant, estudio, lideres |
| `cis_valoracion` | CIS · Líderes | fechas, estudios, lideres, vars, datos |
| `cis_ideologia` | CIS · Ideología | fechas, estudios, vars, datos |
| `cis_ideo_hist` | CIS · Ideología | fecha, estudio, total, partidos |
| `cis_economia` | CIS · Situación económica | fechas, estudios, n, series, cats, ultimo, anterior |
| `soc_problemas` | Sociómetro · Problemas principales | fechas, estudios, base_n, residuales, corta, bloques, disponibles |
| `soc_perfiles` | Sociómetro · Problemas principales (perfiles) | vars, n, datos, eleccion |
| `soc_voto` | Sociómetro · Análisis del voto | orden, series, perfiles, transfer |
| `soc_lideres` | Sociómetro · Líderes | fechas, lideres, actuales, fuerza, base_n, conoc, fecha, fecha_ant, aprob, vars, datos |
| `soc_ideologia` | Sociómetro · Identidad e ideología | fechas, eleccion, vars, datos |
| `soc_nacionalismo` | Sociómetro · Identidad e ideología | fechas, eleccion, vars, datos |
| `soc_ideo_hist` | Sociómetro · Identidad e ideología | fecha, eleccion, total, partidos |
| `soc_identidad` | Sociómetro · Identidad e ideología | fecha, preguntas |
| `soc_cuadrantes` | Sociómetro · Identidad e ideología | fechas, eleccion, puntos |

El `data.json` publicado actualmente es la **referencia**: cualquier versión nueva tiene que tener la misma forma. `R/comprobar_data_json.R` lo verifica campo a campo (bloques que faltan, tipos que cambian, número de oleadas que baja) antes de subir nada.

`cis_radar` lo genera `R/radar_cis.R`: para cada barómetro, grupo de población (sexo, edad, estudios, clase, ideología, recuerdo 2023, hábitat, situación laboral) y partido (PSOE, PP, VOX, Sumar, Podemos, SALF), el % de voto + simpatía (`partidos`, VOTOSIMG) y de intención directa (`intencion`, INTENCIONGR) sobre el total del grupo, ponderado con PESO. `partidos.<dim>.<grupo>` es una lista por barómetro con los seis valores en el orden de `ejes_partidos`; `n` da las entrevistas de cada grupo.

Si un bloque falta, su tarjeta simplemente no se dibuja (el código hace `if(!DATA.x) return`).

## promedio.json (promedio de encuestas)

Lo escribe `R/promedio.R` en GitHub Actions. Tamaño previsto: 150-300 KB.

```json
{
  "actualizado": "2026-10-05 07:02",
  "fuente": {
    "nombre": "Wikipedia · Opinion polling for the 2026 Spanish general election",
    "url": "https://en.wikipedia.org/wiki/Opinion_polling_for_the_2026_Spanish_general_election",
    "licencia": "CC BY-SA 4.0"
  },
  "metodo": {
    "descripcion": "Media ponderada por antigüedad y tamaño muestral",
    "vida_media_dias": 14,
    "ventana_dias": 60,
    "peso_muestra": "sqrt(min(n, 3000) / 1000)",
    "fecha_sondeo": "punto medio del trabajo de campo"
  },
  "desde": "2023-07-23",
  "hasta": "2026-10-05",
  "n_sondeos": 525,
  "partidos": [
    {"id": "PP",      "nombre": "PP",      "color": "#1E73C4"},
    {"id": "PSOE",    "nombre": "PSOE",    "color": "#E5393B"},
    {"id": "Vox",     "nombre": "Vox",     "color": "#8BC34A"},
    {"id": "Sumar",   "nombre": "Sumar",   "color": "#E5007D"},
    {"id": "Podemos", "nombre": "Podemos", "color": "#6A2C91"},
    {"id": "SALF",    "nombre": "SALF",    "color": "#6D4C41"}
  ],
  "tendencia": {
    "fechas": ["2023-07-24", "2023-07-25", "..."],
    "PP":      [33.1, 33.0, "..."],
    "PSOE":    [31.7, 31.8, "..."],
    "Podemos": [null, null, "..."]
  },
  "sondeos": {
    "fecha":   ["2023-07-28", "..."],
    "empresa": ["GAD3", "..."],
    "muestra": [1000, "..."],
    "PP":      [34.0, "..."],
    "PSOE":    [31.5, "..."]
  },
  "ultimo": {"fecha": "2026-10-05", "PP": 32.5, "PSOE": 26.3, "Vox": 18.2, "Sumar": 6.1, "Podemos": 3.4, "SALF": 1.8}
}
```

Los valores del ejemplo son ilustrativos. Notas:

- **Formato en columnas** (una lista por variable) en lugar de una lista de objetos: pesa la mitad y es lo que necesita ECharts.
- `tendencia.*` y `sondeos.*` tienen siempre la misma longitud que su `fechas`/`fecha`. Un partido sin dato ese día (p. ej. Podemos antes de su separación de Sumar) lleva `null`.
- `ultimo` evita que el dashboard tenga que buscar el último valor no nulo.
- Los colores salen de `PARTY_COLORS` de `app.js` para que coincidan con el resto del dashboard.
