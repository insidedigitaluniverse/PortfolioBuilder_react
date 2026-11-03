# Portfolio Builder

A modern, fully responsive personal portfolio template by **InsideDigitalUniverse**, built with
React and Vite. It works for **everyone**: college students from any stream (Commerce, Arts,
Science, Engineering, Management, Design), freshers, professionals, freelancers and creators.

Clone it, fill in your details in **one file**, add your photo, and your portfolio is ready to
deploy. No coding knowledge needed beyond editing text. No backend, no database.

## Features

- One config file (`src/data/portfolio.js`) for all your content, including section headings
- Hero with a typing role animation, animated photo ring and floating highlight chips
- About with stats, Skills, Experience timeline, Projects with category filter,
  Achievements and certificates, Education timeline, Contact form
- Any section hides automatically (page and menu) when you leave its list empty
- Dark / light theme toggle (remembered in the browser) and your own accent color
- Scroll animations, smooth scrolling, active menu link, mobile slide-in menu
- Respects "reduce motion" settings

## Tech stack

React 19, Vite, plain CSS. No other dependencies.

## Quick start

You need [Node.js](https://nodejs.org) (LTS) installed.

```bash
git clone https://github.com/insidedigitaluniverse/PortfolioBuilder_react.git
cd PortfolioBuilder_react
npm install
npm run dev
```

Open the link shown in the terminal (usually http://localhost:5173).

## Make it yours

Everything is in `src/data/portfolio.js`:

| Field | What to put |
| --- | --- |
| `name`, `initials` | Your name and 2 letters for the logo |
| `roles` | 2-4 short lines that type one after another (e.g. "B.Com Student", "Content Writer") |
| `tagline` | One sentence about you |
| `photo` | Your photo in `public/`, e.g. `'/me.jpg'` (square works best) |
| `email`, `phone`, `location` | Contact details (leave `phone: ''` to hide it) |
| `resumeUrl` | Put `resume.pdf` in `public/` and set `'/resume.pdf'` to show a Resume button |
| `availableText` | Small badge in the hero (e.g. "Open to internships"); `''` hides it |
| `highlights` | Up to 6 words shown around your photo |
| `socials` | LinkedIn, GitHub, Instagram, X, YouTube, Behance, website (empty = hidden) |
| `sections` | Menu names and headings of every section, change them to anything |
| `about`, `stats`, `skills`, `experience`, `projects`, `achievements`, `education` | Your content. Set any list to `[]` to hide that section |
| `accentColor`, `defaultTheme` | Any hex color, and `'dark'` or `'light'` |

Projects can have an image (put it in `public/projects/` and set `image: '/projects/my-work.png'`)
and any number of links, e.g. `links: [{ label: 'Read report', url: '...' }]`.

### Examples for different fields

- **Commerce / Management:** skills like Tally, MS Excel, Accounting, GST, Marketing; projects
  like market surveys, case studies, business plans.
- **Arts / Media:** skills like Writing, Editing, Public speaking; projects like articles,
  short films, event coverage; add your YouTube or blog in `socials`.
- **Science / Research:** skills like Lab techniques, Data analysis, SPSS; projects like
  research papers and posters; certificates from NPTEL or Coursera in `achievements`.
- **Design:** skills like Figma, Photoshop, Illustrator; add project images and your Behance.
- **Engineering / IT:** skills like Python, Java, React, SQL; add GitHub and live demo links.

## Build and deploy

```bash
npm run build     # production build in dist/
npm run preview   # preview the build locally
```

Deploy for free on Vercel: push the project to your GitHub, import it on vercel.com and click
Deploy. The defaults (framework Vite, output `dist`) work as they are.

## License

MIT - free to use for your own portfolio. A link back to InsideDigitalUniverse is appreciated.
