# Personal Portfolio

A lightweight, JavaScript-first personal portfolio project. This repository is built primarily with JavaScript (97%), with small amounts of CSS and HTML. It provides a single-page or multi-section portfolio you can host as a static site or build with a JavaScript toolchain depending on how the repo is structured.
This README explains how the portfolio is put together, the common tech stack choices, how to download and run it locally, deployment options, and how to customize and contribute.

---

## Table of contents

- [What this repo contains](#what-this-repo-contains)
- [Tech stack](#tech-stack)
- [Project structure (typical layout)](#project-structure-typical-layout)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone & download](#clone--download)
  - [If this is a static site (no build system)](#if-this-is-a-static-site-no-build-system)
  - [If this is a Node-based project (React/Vite/Next/etc.)](#if-this-is-a-node-based-project-reactvite-nextetc)
- [Deployment options](#deployment-options)
- [How the portfolio is made up — content & components](#how-the-portfolio-is-made-up---content--components)
- [Customizing content](#customizing-content)
- [Performance & accessibility tips](#performance--accessibility-tips)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License & contact](#license--contact)

---

## What this repo contains

Depending on the exact implementation, you will usually find:

- JavaScript code powering interactive sections, animations, routing, or a framework app (React, Vue, Svelte, etc.).
- CSS (or preprocessor output) for styling.
- HTML (static index.html or framework entry point).
- Assets such as images, icons and fonts.

---

## Tech stack

- Primary language: JavaScript (interactive logic and/or framework)
- Styling: CSS
- Markup: HTML
- Plain static site: vanilla JavaScript + HTML + CSS
- SPA frameworks: React, Vue, or Svelte (bundled with Vite, Webpack, Create React App)
- Static site frameworks: Next.js, Astro, Gatsby
- Build tools / package manager: Node + npm or Yarn

---

## Project structure (typical layout)

1) Static site (no build)
- index.html
- /assets
  - /images
  - /icons
- /js
  - main.js
- /css
  - styles.css

2) Framework-based (React / Vite / CRA)
- package.json
- /src
  - index.js / main.jsx
  - App.jsx
  - /components
  - /styles
  - /assets
- /public
  - index.html

3) Next.js
- package.json
- /pages
  - index.js
- /public
- /styles

---

## Getting started
### Prerequisites

- Git (to clone)
- Node.js >= 14 (if the repo uses npm/yarn)
- A modern browser for local testing

### Clone & download

Clone the repository:

git clone https://github.com/ferramdr/Personal-Portfolio-.git
cd Personal-Portfolio-

(Or download ZIP from GitHub -> Code -> Download ZIP)

## Deployment options

This portfolio can be deployed as a static site or via serverless platforms:

- GitHub Pages
  - For static sites or builds: push static output to `gh-pages` branch or use GitHub Pages from `gh-pages` via a tool like `gh-pages`.
- Vercel
  - Automatic deployments for Next.js, Vite, or other Node builds — connect the repo in Vercel and it will detect build settings.
- Netlify
  - Connect repo, set build command (e.g., `npm run build`) and publish folder (`dist` or `build`).
- Static hosting (S3, Firebase Hosting, Surge)

Quick example — GitHub Pages (static):
1. Build (if you have a build step): npm run build
2. Copy contents of `build/` or `dist/` to gh-pages branch (or use `gh-pages` package)

---

## How the portfolio is made up — content & components

- Header / Navigation
  - Links to sections (About, Projects, Skills, Contact)
  - Mobile responsive navigation (hamburger)
- Hero / Intro
  - Short intro, name, headline, call-to-action
- About
  - Short bio, links to resume
- Projects / Work
  - Cards or list with screenshots, description, tech used, live/demo link, repo link
- Skills / Tech
  - Icons or chips for languages, frameworks, tools
- Contact
  - Email link, optional contact form (may use serverless form provider)
- Footer
  - Social links, copyright

Interactivity is handled by JavaScript:
- Smooth scrolling
- Lightbox for project images
- Modal/responsive nav
- Animated counters or skill bars
- Dark mode toggle (localStorage)

---

## Customizing content

1. Update text/content
   - Edit files in `src/` or the HTML files (e.g., `index.html` or `src/pages/index.js`).
2. Add/replace project entries
   - Update the projects data JSON, JavaScript array, or CMS connection the site uses.
3. Replace images
   - Put image files in `assets/images/` (or `public/`) and update image paths.
4. Change styles
   - Edit CSS files in `css/` or `src/styles/`; if a preprocessor is used, update SCSS/LESS source files.

---

## Performance & accessibility tips

- Optimize images (use WebP/AVIF if possible).
- Use responsive images (`<picture>` or `srcset`) for different screen sizes.
- Minify CSS/JS in production build.
- Add ARIA attributes to interactive controls (menus, modals, forms).
- Ensure keyboard navigation works for the nav and project list.
- Run Lighthouse in Chrome to check performance, accessibility, and SEO.

---

## Troubleshooting

- “npm install” fails: Ensure Node.js version meets the project requirement. Try clearing cache: `npm cache clean --force`.
- Dev server not starting: Check for port conflicts; try `PORT=3000 npm start`.
- Assets not loading in production: Verify correct base path. For single-page apps hosted on a subpath, set `homepage` in package.json or the equivalent base path in the build tool.

If you run into a specific error, paste the error message here and I can help debug.

---

## Contributing

If you want to contribute to this portfolio (improvements, accessibility, new features):

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit
4. Open a pull request describing your change

Guidelines:
- Keep changes focused (one logical change per PR).
- Include screenshots or recording for visual changes.
- Run any available linters/formatters before submitting.

---

## Contact
- GitHub: [ferramdr](https://github.com/ferramdr)
- Email: dferramm@gmail.com
