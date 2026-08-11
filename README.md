# digiCoon — Portfolio Website

My personal portfolio site, built while training as a Fachinformatikerin für Anwendungsentwicklung (application developer). Built with React and Vite.

## Why This Project

I wanted a portfolio that actually shows what I can do instead of just listing it — an interactive experience section, a terminal-style project browser, that kind of thing. Architecture, layout decisions, and content are mine.

**A note on how this was built:** I worked through the frontend with Claude (Anthropic's AI) as a sparring partner, not a code generator. I made the design decisions — layout, content, what goes where — and implemented most of it myself; Claude helped debug, suggested alternative approaches when something wasn't working, and wrote some of the more repetitive CSS/JSX after we'd agreed on the direction together.

## Tech Stack

- React
- Vite
- CSS (no framework)

## Structure

- `Hero` — intro, name, tagline
- `Skills` — scrolling tech stack marquee
- `Projects` — terminal-style project browser
- `Experience` — education & work history
- `Contact` — contact form

## Getting Started

```bash
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).