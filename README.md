# J16U PROJECTS

Static GitHub Pages landing page with an animated countdown to **28 August 2026**.

## Files

- `index.html` — page structure
- `style.css` — visual design and animations
- `script.js` — countdown timer and pointer interaction
- `favicon.svg` — browser tab icon
- `.nojekyll` — tells GitHub Pages to serve the folder as a plain static site

## How to upload to GitHub Pages

### Option 1: Use it as a separate project page

1. Create a new GitHub repository called something like `j16u-projects`.
2. Upload all files from this folder into the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Your page should become available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/j16u-projects/
```

### Option 2: Add it inside your existing personal site

1. Open the repository for `jatindersinghpannu.github.io`.
2. Create a folder called `projects`.
3. Upload these files into that `projects` folder.
4. Your page should become available at:

```text
https://jatindersinghpannu.github.io/projects/
```

## Changing the countdown

Open `script.js` and edit this line:

```js
const TARGET_DATE = new Date("2026-08-28T00:00:00+01:00").getTime();
```

The current target is midnight at the start of **28 August 2026** in UK summer time.
