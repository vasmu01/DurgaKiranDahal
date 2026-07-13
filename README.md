# Kiran Magar — React Portfolio

A professional, responsive developer portfolio built with React and Vite.

## Features

- Responsive desktop, tablet and mobile layouts
- Professional dark and light themes
- Sticky glass-effect navigation
- Mobile navigation menu
- Smooth scrolling and active navigation states
- Scroll-reveal and floating animations
- About, skills, projects and contact sections
- Live demo and source-code links
- Dynamic project preview images with graceful fallbacks
- Reduced-motion accessibility support
- Deploy-ready Vite production build

## Run locally

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production files will be created in `dist/`.

## Deploy

### Render

1. Push this project to a GitHub repository.
2. Create a new **Static Site** in Render.
3. Connect the repository.
4. Use:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
5. Deploy.

### Vercel

Import the GitHub repository into Vercel. Vercel detects Vite automatically.

### Netlify

Import the repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

## Edit personal information

Main profile information and project data are stored near the top of:

```text
src/App.jsx
```

Update the `profile`, `skills`, and `projects` constants.

## Important

The VitaPredica screenshot uses a remote website-preview service. If you later save your own screenshot, place it in `public/` and change the project's image path to:

```js
image: "/your-screenshot.png"
```
