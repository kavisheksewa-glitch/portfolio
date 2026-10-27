# Kavish Kanojia, Portfolio Website

A fast, static portfolio (HTML, CSS and JavaScript only). No build step, no dependencies.

## Files
- `index.html`  page content
- `css/style.css`  all styling, dark and light themes
- `js/main.js`  theme toggle, role text, copy buttons, hover and scroll animations
- `favicon.svg`  browser tab icon

## Run locally
Open `index.html` in a browser. For a local server: `npx serve .` or `python -m http.server`.
(The Google Fonts need an internet connection.)

## Deploy for free
**Vercel**: push this folder to a GitHub repo, then Import Project on vercel.com and click Deploy.
**Netlify**: drag and drop this folder onto app.netlify.com/drop.
**GitHub Pages**: push to a repo, then Settings > Pages > Deploy from branch (main, root).

## Edit your details
- Text, links and projects: `index.html`
- Colours: the `:root` variables at the top of `css/style.css`
- Add your LinkedIn: add a button next to the GitHub one in the hero and in the contact section
