# Justin Teh — Arts × Technology Portfolio

A static, single-page portfolio site built with **HTML, CSS, and vanilla JavaScript**. No frameworks, no build tools, no backend — it runs by opening `index.html` and deploys directly to GitHub Pages.

## Structure

```
/
├── index.html          # Markup: nav + 4 tab panels + modal/lightbox shells
├── style.css           # Design system (glass / neumorphic, organic accents)
├── script.js           # Tabs, filtering, modal, lightbox, content data
├── favicon.ico
├── arts/               # Standalone Arts page at /arts
│   ├── index.html
│   ├── arts.css
│   ├── arts.js
│   └── arts-data.js    # Production credits, video work, roles (edit content here)
├── PRODUCT.md          # Product truth used by the Impeccable design skill
├── portfolio_prompt.md # Source brief
├── README.md
└── assets/
    ├── Personal/        # Portrait
    ├── Acad/            # Academic project posters
    ├── Accolades/       # Award certificates
    ├── Arts/            # Production photos (originals)
    │   ├── web/         # 1600px / 640px copies used by /arts
    │   └── video/       # Frame grabs from DMPC video work
    ├── Exchange/        # Exchange photos
    ├── Icons/           # JT favicon (SVG + PNG)
    ├── Intern/          # Internship photos
    └── Resume/          # Web-safe résumé PDF (no phone number or referees)
```

## Sections

1. **About Me** — hero, narrative, micro-facts, highlights
2. **Exchange, Projects, Internship** — project cards with focus-area filtering and a detail drawer per project
3. **Arts** — intro card on the main page, linking to the full Arts page at `/arts`
4. **Awards** — certificates in a lightbox
5. **Contact** — email, LinkedIn, résumé, and Core Skillsets (skills link to the work that shows them)

## Arts page (`/arts`)

The production story told in five acts (2019–2026). The page ground re-lights act by act, a role filter highlights the Organiser credit, and deep links such as `/arts/#rockafall-2025` land on a single production.

## Notes on image paths

Paths use the **actual uploaded filenames**, which differ from the brief's examples in a few cases (Linux/GitHub Pages is case-sensitive):

- `Poster.png` (not `poster.jpg`), `IP2SG_Inbox.jpeg`, `ARTSIC_certificate.pdf` (linked, not embedded — it's a PDF)
- `CQU.png`, `TIIDE_Project.png`, `TIIDE_Intern (1).png` / `(2).png`
- `3_2_ParametricModel.png`, `3_6_Poster.png`
- `1Leadership.JPG`, `9OriFinale (1).JPG` / `(2).JPG` (uppercase extensions)

Academic projects without supplied images render a tasteful placeholder. Any missing/renamed image falls back to a placeholder automatically (`onerror`), so the layout never breaks. To swap a path, edit the relevant entry in the data arrays near the top of `script.js`.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Add `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Commit and push the files.
4. Go to repository **Settings**.
5. Open **Pages**.
6. Select the **main** branch and **/ (root)** folder.
7. **Save** and wait for GitHub Pages to publish the site.
8. Open the published site URL.

## Accessibility & performance

Semantic landmarks, ARIA tab roles, keyboard navigation (arrow keys across tabs, ESC/arrows in lightbox), visible focus states, lazy-loaded images, and `prefers-reduced-motion` support. No external dependencies beyond Google Fonts.

---
© 2026 Justin Teh. Built with HTML, CSS, and JavaScript for GitHub Pages.
