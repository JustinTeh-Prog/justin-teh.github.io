# Justin Teh — Arts × Technology Portfolio

A static, single-page portfolio site built with **HTML, CSS, and vanilla JavaScript**. No frameworks, no build tools, no backend — it runs by opening `index.html` and deploys directly to GitHub Pages.

## Structure

```
/
├── index.html          # Markup: nav + 4 tab panels + modal/lightbox shells
├── style.css           # Design system (glass / neumorphic, organic accents)
├── script.js           # Tabs, filtering, modal, lightbox, content data
├── portfolio_prompt.md # Source brief
├── README.md
└── assets/
    ├── Personal/        # Portrait
    ├── Project1_IADL/   # IADL device evidence (+ ARTSIC certificate PDF)
    ├── Acad/            # Academic project posters
    ├── Arts/            # Production photos
    ├── Exchange/        # Exchange / internship photos
    └── Internship/      # (reserved)
```

## Tabs

1. **About Me** — hero, narrative, micro-facts, technical + creative skill clouds
2. **Compiled Portfolio** — flagship + academic + global-exchange projects with focus-area filtering and a detail drawer per project
3. **Arts Portfolio** — production credits with image galleries (lightbox)
4. **Contact** — email + LinkedIn

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
