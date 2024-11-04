# News App

![Nuxt](https://img.shields.io/badge/Nuxt-3.x-brightgreen?logo=nuxtdotjs) ![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg?logo=vuedotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-brightgreen?logo=typescript) ![SCSS](https://img.shields.io/badge/SCSS-blue.svg?logo=sass) ![Prettier](https://img.shields.io/badge/Prettier-blue.svg?logo=prettier)

## Overview

**News Application** built using Nuxt.js. The application fetches news from multiple RSS feeds, allows users to filter news articles by news title, and provides pagination for easy navigation through the news items. Users can also reset all filters and search queries. The application supports toggling between list and grid views and allows users to change the news source.

## Features

- Fetches news articles from various RSS sources
- Search functionality to filter news by title
- Pagination to navigate through news articles
- Toggle between list and grid views for displaying news
- Change news source dynamically
- Responsive design for mobile devices
- Ability to reset filters and search queries

## Technologies Used

- **[Nuxt](https://nuxt.com/)**: Framework for Vue.js for server-side rendering.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript.
- **[Vue.js](https://vuejs.org/)**: JavaScript framework for building user interfaces.
- **[Pinia](https://pinia.vuejs.org/)**: State management library for Vue.js.
- **[SCSS](https://sass-lang.com/)**: CSS preprocessor for styling.
- **[Vue Router](https://router.vuejs.org/)**: For routing within the application.
- **[Prettier](https://prettier.io/)** — Tool for code formatting.

## Project Structure

- `pages/` — Contains the application's page components.
- `components/` — Reusable Vue components.
- `store/` — State management using Pinia.
- `middleware/` — Custom middleware for handling requests and routing.
- `public/` — Static files that are directly served.
- `server/` — Server-side code and configurations.
- `types/` — TypeScript type definitions.
- `assets/` — Static assets such as styles and images.
- `layouts/` — Layout components for the application.

## Installation and Setup

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the Project for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Generate static site

```bash
npm run generate
```

### Prepare the application after installation

```bash
npm run postinstall
```
