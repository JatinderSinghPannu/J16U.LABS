# J16U Ventures

Minimal static countdown page for GitHub Pages.

## Files

- `index.html` — page structure
- `style.css` — black/red visual style and animations
- `script.js` — countdown to 28 August 2026
- `favicon.svg` — small browser icon
- `.nojekyll` — tells GitHub Pages to serve the files directly

## Countdown target

The countdown is set in `script.js`:

```js
const targetDate = new Date("2026-08-28T00:00:00+01:00").getTime();
```

This is midnight at the start of 28 August 2026 in UK summer time.

## Upload to GitHub Pages

1. Unzip the folder.
2. Upload the files inside this folder to your GitHub repository.
3. Go to `Settings > Pages`.
4. Choose `Deploy from a branch`.
5. Select `main` and `/ root`.
6. Save.
