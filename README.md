# AI/LLM Portfolio

Static portfolio site for showcasing Rao Abdul Rehman's AI/LLM projects:

- Cited Knowledge Desk
- Support Operations Copilot
- Multimodal Document Analyst

## Open Locally

Open `index.html` directly in a browser, or run:

```powershell
python -m http.server 8020
```

Then visit:

```text
http://localhost:8020/
```

The site uses local screenshots copied from the project folders and links to the AI/LLM resume PDF in `assets/`.

## Project Pages

Project cards are rendered from `projects-data.js`. To add a future project, add one object to `window.PORTFOLIO_PROJECTS`; the project list and detail page will update automatically.

## Contact Form

The contact form opens a prepared email to `rao789rehman@gmail.com` using `mailto:`. For automatic server-side email delivery after deployment, connect the same form to Formspree, Netlify Forms, EmailJS, or a small backend endpoint.
