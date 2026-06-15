<h1 align="center">Personal Portfolio Architecture</h1>

<p align="center">
  <i>A minimal, highly customizable, and pixel-perfect portfolio template built for developers.</i>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
</div>

<br />

## Overview

This repository contains the source code for a scalable, data-driven personal portfolio. It is designed with a strict separation of concerns, isolating data models and localization assets from the UI components. This architecture allows developers to fully customize the content, themes, and personal data without modifying the core React components.

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration Guide](#configuration-guide)
  - [Localization & Copy](#localization--copy)
  - [Asset Management](#asset-management)
  - [Data Modules](#data-modules)
  - [Theming Engine](#theming-engine)
- [Deployment (CI/CD)](#deployment-cicd)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Getting Started

### Prerequisites

Ensure you have the following installed in your local development environment:
- **Git** (v2.0+)
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Local Setup

1. **Fork and Clone the repository:**
```bash
   git clone [https://github.com/YOUR-USERNAME/Personal-Portfolio.git](https://github.com/YOUR-USERNAME/Personal-Portfolio.git)
   cd Personal-Portfolio

```

2. **Install dependencies:**

```bash
   npm install

```

3. **Start the development server:**

```bash
   npm run dev

```

The application will be running at `http://localhost:5000`.

---

## Configuration Guide

The application is highly modular. All customizations are performed within the `src/data/`, `src/i18n/`, and `src/styles/` directories.

### Localization & Copy

**Target:** `src/i18n/translations.js`

This application supports multi-language (i18n) out of the box (`en` and `es`). Define your core profile strings, social links, and SEO metadata here:

```javascript
export const translations = {
  // ...
  name: "Your Full Name",
  role: "Software Engineer",
  email: "your.email@domain.com",
  github: "[https://github.com/your-username](https://github.com/your-username)",
  linkedin: "[https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)",
  // ...
};

```

### Asset Management

**Target:** `src/data/config.js`

All static assets (images, icons, vectors) should be placed in the `public/images/` directory. Map the file names in the configuration file to inject them into the UI components:

```javascript
export const PROFILE_PHOTO = 'profile-photo.png'; 

export const SKILLS_ICONS = {
  react: 'react-icon.png',
  nodejs: 'nodejs-icon.png',
};

```

### Data Modules

Populate the platform's sections by modifying the respective arrays and objects.

* **Projects** (`src/data/projects.js`): Define your repository links, tech stack, and descriptions.
* **Skills** (`src/data/skillsData.js`): Map technical skills to the icons defined in your asset configuration.
* **Certificates** (`src/data/certificatesData.js`): Input certification details, issuing organizations, and dates.
* **Experiences** (`src/data/experiencesData.js`): Log chronologically your timeline events (conferences, hackathons, job roles).

### Theming Engine

**Target:** `src/styles/themes/index.js`

The UI implements a centralized design token system. Choose from 8 pre-compiled color palettes or define your own. To change the theme, modify the `activeTheme` export:

```javascript
// Change this line to your preferred theme:
export const activeTheme = classicTheme;        // Professional Classic (default)
// export const activeTheme = darkElegantTheme; // Dark Elegant
// export const activeTheme = retroSolarTheme;  // Retro Solar
// export const activeTheme = techPastelTheme;  // Tech Pastel
// export const activeTheme = marinaBreezeTheme;// Marina Breeze
// export const activeTheme = greenForestTheme; // Green Forest
// export const activeTheme = warmSunsetTheme;  // Warm Sunset
// export const activeTheme = midnightPurpleTheme; // Midnight Purple

```

---

## Deployment (CI/CD)

This project is configured for automated deployment via **GitHub Actions**.

1. Navigate to your repository settings on GitHub: **Settings -> Pages**.
2. Under the **Build and deployment** section, set the **Source** to **GitHub Actions**.
3. Any code pushed to the `main` branch will trigger the workflow, compile the production build, and deploy it automatically.

Your live environment will be accessible at: `https://YOUR-USERNAME.github.io/Personal-Portfolio/`

---

## Project Structure

```text
├── public/
│   └── images/              # Static assets (photos, icons)
├── src/
│   ├── components/          # Reusable React components
│   ├── data/
│   │   ├── config.js        # Global asset mapping
│   │   ├── projects.js      # Projects data model
│   │   ├── skillsData.js    # Tech stack data model
│   │   └── ...              # Other data modules
│   ├── i18n/
│   │   └── translations.js  # Multilingual string dictionaries
│   └── styles/
│       └── themes/
│           └── index.js     # Global design tokens and themes
└── README.md

```

---

## Author

* **GitHub:** [dferram](https://github.com/dferram)
* **Email:** dferramm@gmail.com
