# Mani Shankar — Recruiter-focused portfolio

A responsive single-page React portfolio using Vite, Tailwind CSS, Framer Motion and Lucide icons. The visual theme is cream, forest green, sage and warm orange (no blue theme).

## Run locally

1. Install Node.js 18+.
2. In this folder, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Customize before publishing

- Replace the hero image URL in `src/components/Landing.jsx` with your own professional portrait.
- Update email, LinkedIn and GitHub links in `Landing.jsx` and `Contact.jsx`.
- Replace the sample GitHub links in `src/data/portfolio.js` with real repository URLs.
- Put your resume PDF at `public/Mani-Shankar-Resume.pdf` (create the `public` folder if needed), or update the resume links in `Navbar.jsx` and `Experience.jsx`.
- Review role dates and project details in `src/data/portfolio.js` so every claim matches your experience.

## Component structure

- `Navbar.jsx` — responsive navigation and resume CTA
- `Landing.jsx` — hero, quick proof points and technology strip
- `About.jsx` — summary and engineering strengths
- `Experience.jsx` — recruiter-scannable work timeline
- `Skills.jsx` — grouped technical skills
- `Projects.jsx` — project cards and stack tags
- `Contact.jsx` — email and professional links
- `Footer.jsx` — copyright and back-to-top link
- `Reveal.jsx` — scroll-triggered reveal animation
