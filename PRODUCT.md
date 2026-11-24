# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Whole site:** recruiters, admissions panels and collaborators across software / IoT / AI, creative technology and arts production. Visitors usually arrive from LinkedIn, a résumé or an application.
- **Arts page (`/arts`):** primary reader is an arts and production collaborator: show directors, CCAs, event organisers and production companies deciding whether to bring Justin on as lighting director, stage lead or technical lead. Its opening must also summarise his qualities for the other two audiences (recruiters / admissions, and creative-tech studios) before the page turns to production work.

## Product Purpose

Personal portfolio of Justin Teh (Teh Nian Hong), a Bachelor of Engineering (Computer Science and Design) undergraduate at SUTD, graduating May 2028, with a Diploma in Biomedical Engineering from Temasek Polytechnic. Success means a visitor understands his range across engineering and live arts and gets in touch.

The Arts page succeeds when a reader leaves believing one claim: **he can run a show**.

## Positioning

An engineer who has also led live productions since 2019. He has worked as crew, then Vice President of a 100-member media and production club (TP DMPC), then lighting director across theatre, concerts and campus events, then organiser of a 250-student celebration. Few engineering portfolios carry that production record, and few production CVs carry the engineering one.

## Operating Context

- Static site deployed on Vercel at https://justin-teh.vercel.app/ (repository: JustinTeh-Prog/justin-teh.github.io).
- Content lives as data arrays in `script.js` (PROJECTS, EVENTS, AWARDS) rendered into `index.html`.
- Visitors open links from LinkedIn and applications, often on phones.

## Capabilities and Constraints

- Plain HTML / CSS / vanilla JavaScript. No framework, no build step, relative asset paths.
- The main page's design must not change. Arts lives on its own page at `/arts`; the main page keeps its Arts intro card and links out.
- Keep pages light to load: compressed WebP images, lazy loading, no heavy libraries.
- Every role and figure must trace to evidence on hand (below). Do not invent roles, audience sizes, testimonials or photographer names.
- On group projects, Justin was the group leader. Internships and crew roles carry their actual titles (e.g. Intern Student Representative at EnjoyMusic).

## Brand Commitments

- Name: Justin Teh. Formal name: Teh Nian Hong, Justin.
- Voice: first person, plain and specific, written as an undergraduate. No marketing gloss and no AI-sounding filler.

## Evidence on Hand

- Production photos: `assets/Arts/` (TP-era photos carry a DMPC watermark).
- Production credits with dates, venues and roles: `EVENTS` in `script.js`.
- DMPC consolidated works list 2020–2022 (NDC20, Open House 2021/2022, Spectacular 2021, Queen of Swing, music videos, Chinese Orchestra recitals) with stated roles and YouTube links. Frames from these videos: `assets/Arts/video/`.
- Résumé (`assets/Resume/`): TP DMPC Vice President 2020; helped lead the 100-member club through the COVID-19 move to video and livestream; Fresh-No-More! coordinated with a 60-member team.
- Fresh-No-More! 2026: organiser and lighting director, more than 250 undergraduates, endorsed by SUTD's Head of Pillars and Office of Student Life.
- Arts Fiesta 2025: lighting director; SUTD Arts photo album on Flickr (https://flic.kr/s/aHBqjCxdN1).
- Awards: Temasek CCA Silver Award 2022 (Digital Media & Production Crew); SUTD Student Service Excellence Award 2026; TP CCA Dedication & Outstanding CCA Contributions awards (2021).
- Absent and not to be fabricated: testimonials, audience counts beyond those above, photographer names, ticket numbers.

## Product Principles

1. Evidence over adjectives: every claim points at a credit, photo, video or certificate.
2. The work leads: photos and footage carry the story, and the interface stays out of their way.
3. Show leadership as a progression over time, not as a list of titles.
4. Fast and readable on a phone first.

## Accessibility & Inclusion

Keep the main site's standards: keyboard-reachable controls, visible focus, alt text on every image, `prefers-reduced-motion` respected, text contrast of at least 4.5:1.
