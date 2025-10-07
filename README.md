# Will it Rain on My Parade? @Lagartijos Cosmicos

This repository contains a frontend demo that shows weather on a 3D globe. It uses OpenWeatherMap for real-time weather data.

Quick start

1. Create a copy of `.env.example` called `.env` and fill your OpenWeatherMap key:

   OPENWEATHER_API_KEY=your_openweathermap_api_key_here

2. Serve the `frontend/` folder with a static server. Example (Node):

   npx http-server frontend -p 8080

3. Open `http://localhost:8080/examples/index.html` in your browser.

How the app reads secrets

- For security the code reads `window.__ENV__.OPENWEATHER_API_KEY` at runtime. When deploying to a hosting provider (Netlify, Vercel, GitHub Pages with a build step), inject the env variable into `window.__ENV__` or replace it at build time.

Deploying

- GitHub: push repository and use GitHub Pages (build step may be required).
- Vercel / Netlify: connect the repo and add `OPENWEATHER_API_KEY` to project secrets.

Security checklist (completed)

- Removed hard-coded API keys from source and made runtime env lookup.
- Added `.gitignore` and `.env.example`.
- Added `LICENSE` file (MIT).

If you want, I can (optionally) create the public GitHub repo and push these changes for you — I will need your permission to use the GitHub CLI from your machine or you can run the commands I provide.