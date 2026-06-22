# Amir Pasagic Portfolio

Static portfolio prototype for presenting machine learning, reinforcement learning,
system identification, signal processing, and controls-related projects.

## Local Preview

```powershell
python -m http.server 8765 -b 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/
```

## Deployment

This is a plain static site: `index.html`, `styles.css`, `app.js`, and assets.
It can be deployed directly with GitHub Pages, Netlify, Cloudflare Pages, or Vercel.

For GitHub Pages, use this folder as the root of a repository and publish from the
main branch root.

For Netlify, create a new site from the GitHub repository and leave the build command
empty. The publish directory is the repository root.
