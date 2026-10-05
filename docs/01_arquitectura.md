# 01 · Arquitectura

Esquema visual: [arquitectura.pdf](arquitectura.pdf).

## Principio

El dashboard es una **página estática** (HTML + JavaScript) que, en cada visita, lee dos archivos de datos:

- `data.json`: CIS y Sociómetro.
- `promedio.json`: promedio de encuestas.

Actualizar la web es **cambiar esos archivos en el repositorio**. El diseño (`index.html`, `app.js`) solo se toca cuando cambia el dashboard.

## Piezas

| # | Pieza | Dónde corre | Responsabilidad |
|---|---|---|---|
| 1 | Carpeta `datos/` | Ordenador local | Recibir los microdatos que se descargan a mano (CIS, Sociómetro) |
| 2 | Tarea programada diaria (08:00) | Ordenador local | Ejecutar `R/actualizar_local.R` |
| 3 | `R/actualizar_local.R` | Ordenador local | Detectar archivos nuevos, procesarlos, comprobar `data.json` y hacer `git push` |
| 4 | Repositorio `agenda-social` | GitHub | Guardar código, datos agregados e historial |
| 5 | GitHub Actions (07:00) | Nube de GitHub | Descargar la tabla de Wikipedia, calcular `promedio.json`, publicar |
| 6 | GitHub Pages | Nube de GitHub | Servir el dashboard en una URL pública |
| 7 | Página de WordPress | Hosting de la web | Mostrar el dashboard con un `<iframe>` |

## Flujos

### A · CIS y Sociómetro (local, diario si hay novedades)

```
Descargas el .sav ─► datos/cis/ o datos/sociometro/
                          │
          08:00  tarea programada ─► R/actualizar_local.R
                          │   1. compara con datos/procesados.csv (nombre + MD5)
                          │   2. si no hay nada nuevo ► termina
                          │   3. procesar_cis.R / procesar_sociometro.R ► DATA
                          │   4. comprobar_data_json.R contra la versión anterior
                          │   5. git pull --rebase ► git commit ► git push
                          ▼
                 GitHub (data.json) ─► publicar.yml ─► GitHub Pages
```

### B · Promedio de encuestas (nube, diario siempre)

```
07:00 (cron de GitHub Actions)
   │ 1. R/promedio.R descarga la tabla de Wikipedia (en)
   │ 2. limpia sondeos ► fecha, empresa, muestra, % por partido
   │ 3. media ponderada diaria ► promedio.json
   │ 4. commit de promedio.json (si ha cambiado)
   ▼
 mismo workflow ─► despliega en GitHub Pages
```

### C · Visita

```
Visitante ─► página de WordPress ─► iframe ─► GitHub Pages
                                               ├─ index.html
                                               ├─ data.json      (fetch, cache: no-cache)
                                               ├─ promedio.json  (fetch, cache: no-cache)
                                               └─ app.js
```

## Por qué así

| Decisión | Motivo | Alternativa descartada |
|---|---|---|
| Datos separados del HTML | Actualizar sin tocar el diseño | Datos incrustados en el HTML (como el artefacto de Claude): obliga a republicar la página entera |
| GitHub como puente | Historial de versiones, automatización gratuita y publicación en un solo sitio | Subir por FTP a WordPress: manual y sin historial |
| GitHub Pages + iframe | WordPress no admite subir .html/.js por la biblioteca de medios; Pages se republica solo | Alojar en el hosting de WordPress: requiere FTP en cada actualización |
| CIS y Sociómetro en local | Los microdatos se descargan a mano y no deben publicarse | Descarga automática de las webs del CIS/GV: frágil si cambian sus webs |
| Promedio en GitHub Actions | Tiene que ser diario aunque el ordenador esté apagado | Tarea local: solo funcionaría con el ordenador encendido |
| Dos archivos de datos | Cada proceso escribe solo el suyo: no hay conflictos entre el push local y el commit diario de Actions | Un único `data.json`: los dos procesos lo modificarían a la vez |

## Límites conocidos

- La tarea local solo corre si el ordenador está encendido. Si no, procesa lo pendiente la siguiente vez que se ejecute.
- El scraping depende de la estructura de la tabla de Wikipedia. Si cambia, `promedio.R` falla y GitHub avisa por correo; el dashboard sigue mostrando el último `promedio.json` válido.
- GitHub Pages gratis exige repositorio **público**. Solo se publican porcentajes agregados; los microdatos (`datos/`) nunca se suben.
