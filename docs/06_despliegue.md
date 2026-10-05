# 06 · Despliegue

Estado: workflow `.github/workflows/publicar.yml` **creado**. Se hace una sola vez.

## 1. Repositorio en GitHub

1. Crear cuenta en GitHub (gratis) si no existe.
2. Crear el repositorio **público** `agenda-social` (GitHub Pages gratis requiere repositorio público).
3. Clonarlo en el ordenador con **GitHub Desktop** y copiar dentro el contenido de esta carpeta.
4. Comprobar que `.gitignore` excluye `datos/` y `logs/` **antes** del primer commit.
5. Commit + push.

## 2. GitHub Pages con despliegue por Actions

En el repositorio: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

Se usa un único workflow, `.github/workflows/publicar.yml`, que hace dos cosas:

- **A diario (07:00) o a mano**: ejecuta `R/promedio.R`, guarda `promedio.json` y publica.
- **En cada push** (p. ej. cuando la tarea local sube `data.json`): solo publica.

Hace falta que el mismo workflow publique, porque los commits hechos por GitHub Actions con su token no disparan otros workflows.

Borrador (a completar y probar en la fase de desarrollo):

```yaml
name: Promedio diario y publicación

on:
  schedule:
    - cron: "0 5 * * *"        # 05:00 UTC = 07:00 en Madrid en verano, 06:00 en invierno
  push:
    branches: [main]
  workflow_dispatch:           # botón «Run workflow» para lanzarlo a mano

permissions:
  contents: write              # para hacer commit de promedio.json
  pages: write
  id-token: write

concurrency:
  group: publicar
  cancel-in-progress: false

jobs:
  promedio:
    if: github.event_name != 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: r-lib/actions/setup-r@v2
      - uses: r-lib/actions/setup-r-dependencies@v2
        with:
          packages: any::rvest, any::httr2, any::jsonlite, any::dplyr, any::tidyr, any::stringr, any::lubridate
      - run: Rscript R/promedio.R
      - name: Guardar promedio.json si ha cambiado
        run: |
          git config user.name  "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add promedio.json
          git diff --cached --quiet || git commit -m "Promedio de encuestas $(date +%F)"
          git push

  publicar:
    needs: promedio
    if: always() && (needs.promedio.result == 'success' || needs.promedio.result == 'skipped')
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
        with: { ref: main }    # incluye el promedio.json recién guardado
      - name: Preparar la web (solo lo público)
        run: |
          mkdir _site
          cp index.html app.js data.json _site/
          [ -f promedio.json ] && cp promedio.json _site/ || true
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: _site }
      - id: deploy
        uses: actions/deploy-pages@v4
```

Notas:

- Solo se publica `_site/` (dashboard + datos). `R/`, `docs/` y `.github/` quedan en el repositorio pero no en la web.
- Si `promedio.R` falla, no se publica nada nuevo y GitHub envía un correo. La web sigue con la versión anterior.
- GitHub desactiva los workflows programados de repositorios sin actividad durante 60 días. Con la tarea local subiendo datos cada mes no debería pasar; si pasa, se reactiva con un clic en *Actions*.

## 3. Dirección del panel

Por defecto: `https://<usuario>.github.io/agenda-social/`.

Opcional, dirección propia (p. ej. `panel.tudominio.com`):

1. En el proveedor del dominio, un registro **CNAME** `panel` → `<usuario>.github.io`.
2. En *Settings → Pages → Custom domain*, escribir `panel.tudominio.com` y marcar *Enforce HTTPS*.

## 4. WordPress

Una página nueva con un bloque **HTML personalizado**:

```html
<iframe src="https://panel.tudominio.com/"
        title="Agenda social Euskadi"
        style="width:100%;height:90vh;border:0;display:block"
        loading="lazy"></iframe>
```

- `height: 90vh`: el panel tiene su propio desplazamiento y el menú de pestañas queda fijo arriba.
- Si el tema de WordPress limita el ancho del contenido, usar una plantilla de página de «ancho completo».
- Se puede enlazar a una pestaña concreta con `#cis/voto` o `#sociometro/problemas` al final de la URL.

## 5. Ordenador local

Ver [03_actualizacion_local.md](03_actualizacion_local.md): instalar Git, clonar, programar la tarea diaria.
