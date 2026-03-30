# Organic Shop

Organic Shop is a responsive landing page for an organic food store. The project presents the brand, product assortment, customer reviews, FAQ, and contact form in a clean one-page layout.

This project was created as a team project during the GoIT course. It reflects hands-on experience of working in a team, collaborating on shared tasks, and actively using Git commands to manage the repository and coordinate development.

## Features

- Semantic and responsive layout
- Responsive layout for mobile, tablet, and desktop screens
- Modular page structure built from reusable HTML partials
- Mobile navigation menu
- FAQ accordion
- Product cards with add-to-cart toast notifications
- Contact form with success notification

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES modules)
- Vite
- Notyf

## Project Structure

- `src/index.html` - main page template
- `src/partials/` - page sections such as hero, mission, benefits, assortment, feedbacks, FAQ, contacts, header, and footer
- `src/css/` - styles for the layout and each section
- `src/js/` - interactive logic for menu, FAQ, contact form, and cart notifications
- `src/img/` - project images and icons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build the production version:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Build Notes

The project is configured to build for GitHub Pages with the base path:

```bash
/project-CodeNex1/
```

If the repository name changes, update the `build` script in `package.json`.
