# digiCoon — Portfolio Website

My personal portfolio site, built while training as a Fachinformatikerin für Anwendungsentwicklung (application developer). Built with React and Vite.

🔗 **Live:** [digicoon.de](https://digicoon.de)

## Why This Project

I wanted a portfolio that actually shows what I can do instead of just listing it — an interactive experience accordion, a project carousel, that kind of thing. Architecture, layout decisions, and content are mine.

**A note on how this was built:** I worked through the frontend with Claude (Anthropic's AI) as a sparring partner, not a code generator. I made the design decisions — layout, content, what goes where — and implemented most of it myself; Claude helped debug, suggested alternative approaches when something wasn't working, wrote some of the more repetitive CSS/JSX after we'd agreed on the direction together, and helped me implement CSS concepts (Flexbox, gradients, animations) along the way.

## Languages

Available in German (default) and English at `/en`. The legal notice (Impressum) stays German-only, as required by law for a German-based site — the privacy policy is available in both languages.

## Tech Stack

- React
- Vite
- CSS (no framework)
- PHP (contact form backend)
- i18next / react-i18next (English translation)

## Deployment

Hosted on netcup Webhosting with SSL/TLS (Let's Encrypt), PHP/FastCGI for the contact form backend, and a custom `.htaccess` for React Router client-side routing.

## Structure
```
src/
 ├── assets/
 │    ├── fonts/
 │    │    ├── Inter-Italic-VariableFont_opsz...
 │    │    ├── Inter-VariableFont_opsz,wght...
 │    │    └── SpaceGrotesk-VariableFont_w...
 │    ├── digicoon-logo.webp
 │    ├── digicoon-single.webp
 │    └── raccoon-trash-404.webp
 ├── components/
 │    ├── legal/
 │    │    ├── DatenschutzDE.jsx
 │    │    └── DatenschutzEN.jsx
 │    ├── Hero.jsx
 │    ├── Skills.jsx
 │    ├── Projects.jsx
 │    ├── Experience.jsx
 │    ├── Contact.jsx
 │    ├── Legal.jsx
 │    ├── Footer.jsx
 │    ├── LanguageSwitcher.jsx
 │    └── NotFound.jsx
 ├── styles/
 │    ├── App.css
 │    ├── Hero.css
 │    ├── Skills.css
 │    ├── Projects.css
 │    ├── Experience.css
 │    ├── Contact.css
 │    ├── Legal.css
 │    ├── Footer.css
 │    ├── LanguageSwitcher.css
 │    └── NotFound.css
 ├── App.jsx
 ├── i18n.js
 └── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).
