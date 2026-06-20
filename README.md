# Wedding Website

A simple, elegant single-page wedding site (lavender theme, traditional Telugu + modern style).

Features:
- Featured circular couple portrait in the hero
- YouTube livestream section (link added via `js/main.js`)
- Schedule of events with IST / PT / ET times
- Decorative banana-leaf artwork

## Run locally

It's a static site — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing

- **Couple names:** edit the `hero__names` block in `index.html`.
- **YouTube live link:** set `LIVE_URL` at the top of `js/main.js` when the stream is ready.
- **Gallery / "Memories":** currently commented out in `index.html` — uncomment to re-enable.

## Hosting (GitHub Pages)

Push to GitHub, then enable **Settings → Pages → Deploy from a branch → `main` / root**.
