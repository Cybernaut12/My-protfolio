# React + Vite

- A minimal React + Vite starter with example components and instructions for EmailJS, CV download, and common UI libs.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Install dependencies

Run the following to install the runtime dependencies used by the components in this project:

- Runtime dependencies (React, EmailJS client, Font Awesome, React Markdown, Lucide icons):

```bash
npm install react react-dom @emailjs/browser @fortawesome/fontawesome-free react-markdown lucide-react
```

- Dev dependencies (Vite + React plugin):

```bash
npm install -D vite @vitejs/plugin-react
```

After installing, run the dev server:

```bash
npm run dev
```

Quick import mapping:
- import { init, send } from "@emailjs/browser"  → package: @emailjs/browser
- import ReactMarkdown from "react-markdown"     → package: react-markdown
- import { ChevronUp } from "lucide-react"      → package: lucide-react

Notes:
- Ensure EmailJS IDs (service, template, user) match your EmailJS dashboard.
- Place your PDF CV in the project's public folder (e.g. public/CYBER_CV.pdf) for the Download link to work.
- If you prefer Font Awesome via CDN, you can skip installing `@fortawesome/fontawesome-free`.
