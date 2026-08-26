# digiCoon — Portfolio Website

My personal portfolio site, built while training as a Fachinformatikerin für Anwendungsentwicklung (application developer). Built with React and Vite.

🔗 **Live:** [digicoon.de](https://digicoon.de)

## Why This Project

I wanted a portfolio that actually shows what I can do instead of just listing it — an interactive experience accordion, a project carousel, that kind of thing. Architecture, layout decisions, and content are mine.

**A note on how this was built:** I worked through the frontend with Claude (Anthropic's AI) as a sparring partner, not a code generator. I made the design decisions — layout, content, what goes where — and implemented most of it myself; Claude helped debug, suggested alternative approaches when something wasn't working, wrote some of the more repetitive CSS/JSX after we'd agreed on the direction together, and helped me implement CSS concepts (Flexbox, gradients, animations) along the way.

## Tech Stack

- React
- Vite
- CSS (no framework)
- PHP (contact form backend)

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
 │    ├── Hero.jsx / Hero.css
 │    ├── Skills.jsx / Skills.css
 │    ├── Projects.jsx / Projects.css
 │    ├── Experience.jsx / Experience.css
 │    ├── Contact.jsx / Contact.css
 │    ├── Legal.jsx / Legal.css
 │    ├── Footer.jsx / Footer.css
 │    └── NotFound.jsx / NotFound.css
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 └── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).
