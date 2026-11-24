---
name: Justin Teh Portfolio
description: An engineer's portfolio on warm paper and glass, with a stage-lit Arts page that re-lights act by act.
colors:
  paper: "#f4f0e8"
  paper-2: "#efe9de"
  ink: "#221f2b"
  ink-soft: "#4a4554"
  muted: "#6f6979"
  violet: "#5a4fcf"
  violet-deep: "#3d33a6"
  terra: "#d2784a"
  terra-deep: "#b5572f"
  sage: "#4f9d8c"
  sage-deep: "#2f6f63"
  gold: "#c79a3e"
  night: "#141024"
  plum: "#7a2a6e"
  ember: "#e0573a"
  stage-gold: "#ffc04d"
  stage-gold-light: "#ffd27a"
  stage-paper: "#f6f1e7"
  stage-ink: "#1a1230"
  act-1-ground: "#141024"
  act-1-glow: "#231b46"
  act-1-accent: "#ffd27a"
  act-2-ground: "#15163b"
  act-2-glow: "#26236b"
  act-2-accent: "#8fd3ff"
  act-3-ground: "#2a1648"
  act-3-glow: "#5a2163"
  act-3-accent: "#ff9ec4"
  act-4-ground: "#4d1840"
  act-4-glow: "#a3352c"
  act-4-accent: "#ffd27a"
  act-5-ground: "#f0a23a"
  act-5-glow: "#ffd166"
  act-5-accent: "#5e1f55"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.6rem, 6vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.7rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "0.76rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  stage-display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, min(4.4vw, 7.8svh), 4.6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  stage-act-numeral:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "calc(3.3rem * var(--scale))"
    fontWeight: 400
    lineHeight: 0.8
  stage-headline:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "calc(2.15rem * var(--scale))"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  stage-title:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "calc(clamp(1.5rem, 2.2vw, 1.95rem) * (.85 + .15 * var(--scale)))"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  stage-lede:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.6
  stage-ui:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
  stage-meta:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
rounded:
  pill: "999px"
  card: "22px"
  card-sm: "14px"
  mark: "11px"
  thumb: "10px"
  stage-frame: "18px"
  stage-photo: "16px"
  stage-thumb: "12px"
  stage-chip: "8px"
spacing:
  gutter: "clamp(20px, 5vw, 48px)"
  section: "clamp(54px, 8vw, 96px)"
  card-gap: "22px"
  card-pad: "20px 22px 22px"
  chip-gap: "8px"
  stage-gutter: "clamp(20px, 5vw, 56px)"
  stage-act: "clamp(80px, 14vh, 150px)"
  stage-piece-gap: "clamp(64px, 11vh, 120px)"
  stage-column-gap: "clamp(24px, 4vw, 56px)"
components:
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  nav-link-active:
    backgroundColor: "{colors.violet}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  filter-btn:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  filter-btn-active:
    backgroundColor: "{colors.violet}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  chip:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  card:
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  stage-btn-primary:
    backgroundColor: "{colors.stage-gold}"
    textColor: "{colors.stage-ink}"
    typography: "{typography.stage-ui}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  stage-btn-primary-hover:
    backgroundColor: "{colors.stage-gold-light}"
  stage-btn-quiet:
    textColor: "{colors.stage-paper}"
    typography: "{typography.stage-ui}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  stage-role-filter:
    textColor: "{colors.stage-paper}"
    typography: "{typography.stage-ui}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "38px"
  stage-role-filter-active:
    backgroundColor: "{colors.stage-paper}"
    textColor: "{colors.night}"
  stage-role-filter-organiser-active:
    backgroundColor: "{colors.stage-gold}"
    textColor: "{colors.stage-ink}"
  stage-role-pill:
    textColor: "{colors.stage-paper}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  stage-role-pill-organiser:
    backgroundColor: "{colors.stage-gold}"
    textColor: "{colors.stage-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  stage-step:
    rounded: "{rounded.stage-photo}"
  stage-shot:
    backgroundColor: "{colors.night}"
    rounded: "{rounded.stage-photo}"
  stage-act-link:
    textColor: "{colors.stage-paper}"
    rounded: "{rounded.pill}"
    height: "40px"
    width: "40px"
---

# Design System: Justin Teh Portfolio

## Overview

**Creative North Star: "The Workbench and the Stage"**

The portfolio runs on two grounds that share one voice. The main site (`index.html`, `style.css`) is the workbench: a warm paper canvas under three blurred colour fields (violet, terra, sage) and a faint 64px contour grid, with content on frosted-glass panels lifted by a soft three-step shadow stack. It reads as calm, light and engineered. The Arts page (`/arts`) is the stage: the same three typefaces on a drenched night ground that re-lights as you scroll through five acts, from night violet through screen indigo, plum and ember to full stage gold, where the text flips from paper to ink.

What ties the two together is type and temperament, not colour. Both use Newsreader for headings with an italic accent word, Space Grotesk for reading and controls, and JetBrains Mono for small factual text. Both use pills for every control, rounded photos that zoom a little on hover, and the same long ease-out curve (`cubic-bezier(.16, 1, .3, 1)`). The Arts page departs on purpose: it drops the glass, the blobs and the uppercase mono labels, uses lighter (400) headings, and lets photos carry the page.

The main site is the incumbent and must not change. New main-site surfaces extend the workbench. A new production or performance surface may use the stage, but the two grounds are never mixed on one page.

**Key Characteristics:**
- Paper and glass on the main site; a full-bleed, act-lit colour ground on Arts.
- Newsreader headings with one italic accent phrase, Space Grotesk body, JetBrains Mono for data.
- Every control is a pill (999px); photos and cards have 10–22px rounded corners.
- Depth comes from long, soft, low-opacity shadows. Never hard offsets.
- Motion is one long ease-out curve: things rise, zoom gently, or cross-fade colour.

## Colors

The main site keeps a quiet paper palette with three accents, each with one job; Arts uses saturated stage-light colour that changes per act.

### Primary
- **Workbench Violet** (`violet`, with `violet-deep`): the tech accent and the main site's single "selected" colour. Its 135deg gradient fills the active nav link, active filter, active skill tab and capstone badges, and solid violet is the focus ring (2px, offset 2–3px).
- **Stage Gold** (`stage-gold`, with `stage-gold-light`): the Arts page's solid accent. It fills the primary action ("Email me about a show") and the Organiser role pill and filter, and its light tint colours italic display words, step numerals and the outline on step V.

### Secondary
- **Terracotta** (`terra`, with `terra-deep`): the arts accent on the main site. It colours italic emphasis in headings (`h1 em`, contact `h2 em`), the separators in the Arts intro heading, the arrow on the Arts link-out card, and Global Exchange / Acad filter states.
- **Plum** and **Ember** (`plum`, `ember`): the mid-tones of the Arts hero's diagonal night-to-gold gradient (115deg: night, #2a1f5c, plum, ember, stage gold).

### Tertiary
- **Sage** (`sage`, with `sage-deep` for text): the "balance" accent. It marks internship filters and labels, bullet dots in exchange cards, and the résumé contact icon.
- **Workbench Gold** (`gold`): a muted gold used only as the organiser dot in main-site event role labels (text `#9a7420`).

### Neutral
- **Paper** (`paper`) and **Paper Two** (`paper-2`): page ground and image placeholder fills on the main site.
- **Ink** (`ink`), **Ink Soft** (`ink-soft`), **Muted** (`muted`): heading/body ink, secondary copy, and captions/meta on the main site. Hairlines are ink at 12% (`rgba(34,31,43,.12)`).
- **Glass**: white at 55% (panels) and 72% (nav), with a 70% white border and `blur(14–18px) saturate(140–150%)`.
- **Night** (`night`), **Stage Paper** (`stage-paper`), **Stage Ink** (`stage-ink`): the Arts base ground, light text, and dark text. Stage ink is the text colour on gold (primary button, Organiser pill, and all of Act V).

### Act lighting (Arts)
Each act sets five registered custom properties on `html[data-act]`: two ground stops (`--g1` → `--g2`, drawn as a fixed 160deg gradient), text (`--fg`), secondary text (`--soft`), and accent (`--accent`). A sixth, unregistered token, `--glow`, tints a radial pool at the top left of the ground: the accent at 15% by default, and a pale warm `rgba(255,244,214,.35)` in Act V so light on the gold ground adds light rather than shade. The ground stops and accent are listed above as `act-N-ground` (`--g1`), `act-N-glow` (`--g2`, the second ground stop, not `--glow`) and `act-N-accent`; text pairs are in the sidecar. Act 0 (the hero) uses Act I's values.

### Named Rules
**The One Selected Colour Rule.** On the main site, "selected" is always the violet gradient with white text: nav, filters, skill tabs. The only exceptions are the role-coded filters (Intern sage, Global Exchange and Acad terra, All ink), which use their own gradient the same way.

**The Gold Means In Charge Rule.** On Arts, solid stage gold appears only on the primary action and on the Organiser credit (pill and filter). In Act V, where the ground itself turns gold, the Organiser pill inverts to an ink fill with gold text so it still stands out.

**The Two Grounds Rule.** Paper-and-glass and stage-light are separate grounds. Never put a glass panel on the stage ground or a re-lighting ground behind the main site.

## Typography

**Display Font:** Newsreader (with Georgia, Times New Roman)
**Body Font:** Space Grotesk (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular)

**Character:** A literary serif with optical sizing set against a slightly technical grotesk: the engineer who also reads scripts. Mono is reserved for small, factual text.

### Hierarchy (main site)
- **Display** (500, clamp(2.6rem, 6vw, 4.4rem), 1.1): the About hero name line, with an italic terra phrase.
- **Headline** (500, clamp(1.8rem, 3.6vw, 2.7rem), 1.1): section titles; the Arts intro and contact headings run up to 3.2–3.4rem.
- **Title** (500, 1.3rem): card and event titles; 1.02–1.18rem in compact cards and drop cards.
- **Body** (400, 17px, 1.6): reading text, with leads capped at 52–68ch; secondary copy in ink-soft at 0.92–0.95rem.
- **Label** (JetBrains Mono 400, 0.66–0.78rem): chips, filters, tags, dates and captions.

### Hierarchy (Arts)
- **Stage display** (400, clamp(2.3rem, min(4.4vw, 7.8svh), 4.6rem), 0.96, -0.03em): the hero H1, sized by width and height so the whole hero fits the first screen at 100% zoom, set as two lines ("From the lighting desk / to running the show.") with an italic gold phrase. The curtain-call heading keeps the larger clamp(3rem, 7vw, 5.6rem), 0.95, -0.035em.
- **Act numeral** (400 italic, 3.3rem × scale, 0.8): Roman numerals in the act accent.
- **Act headline** (400, 2.15rem × scale, 1.0, -0.03em): act titles. `--scale` steps 1, 1.14, 1.3, 1.5, 1.72 from Act I to V, so headings literally get louder.
- **Piece title** (400, clamp(1.5rem, 2.2vw, 1.95rem) scaled lightly by act; clamp(2.2rem, 4vw, 3.4rem) in Act V).
- **Lede** (Newsreader 400, 1.12rem/1.6, max 58ch, `--soft`): act intros, the hero sub and the curtain lede use the serif at reading size.
- **UI** (Space Grotesk 500–600, 13–15px): buttons, filters, role pills, act roles, step roles, and every label (audience list terms, filter label, toolkit group names, ladder labels), always 600 and sentence case.
- **Meta** (JetBrains Mono 400–500, 12–13px, sentence case): dates, venues, photo counts, captions, recognition years.

### Named Rules
**The Italic Accent Rule.** A display heading carries at most one italic phrase, coloured in the surface's accent: terra on paper, light stage gold on the stage. Act and step numerals are italic serif too.

**The Crescendo Scale Rule.** On Arts, act headings, numerals and piece titles are multiplied by the act's `--scale` (1 → 1.72). Size encodes how much responsibility the act carried. Don't flatten it.

**The Mono Is Data Rule.** On Arts, JetBrains Mono appears only for dates, venues, counts and captions, always sentence case and never tracked out. Labels are Space Grotesk 600 in sentence case, not mono.

## Layout

**Main site.** A centred column (max 1140px) with gutter clamp(20px, 5vw, 48px) and section padding clamp(54px, 8vw, 96px). Content sits in auto-fill card grids (`minmax(330px, 1fr)` for projects, 340px for events, 260px for awards, 22px gap) and in two-column hero/about splits that collapse at 900px. The nav is a sticky pair of glass pills; under 720px the links fold into a glass dropdown. Under 560px project and event cards pack two to a row. The whole body is scaled by `zoom: 0.8` (Revision 6), so every rendered size is 80% of its declared value. That is recorded as drift, not a rule.

**Arts.** A full-bleed hero (min-height max(100svh, 600px), padding 96px top and 40px bottom, tightened below 760px of height) that fits in one screen from 1024×700 up, split about 0.95fr / 1.05fr (1.12fr / 0.88fr between 961 and 1180px): copy on the left, five photo steps climbing from bottom-left to top-right on the right, each larger than the last (24%×20% up to 46%×31% of a min(76vh, 640px) stage). Below it, a role-filter band that scrolls with the page and becomes sticky (top 0) only while a role filter is active, then five acts in a 1080px column with gutter clamp(20px, 5vw, 56px). Piece rows alternate media and text (`.flip` reverses them), and the media share grows act by act: Act I 1fr/1fr, Act II 7fr/5fr, Act III 8fr/4fr, Act IV full-width 16:9 leads with a two-column text block beneath, Act V a 2fr/1fr photo mosaic. Under an active role filter, acts with no matching piece collapse to one line (a 2rem numeral in a fixed 2.4rem column so titles align, the title, and a short note). A fixed role-ladder rail sits at the right edge above 1260px.

**Breakpoints.** Arts: 1260px (ladder hides), 960px (hero stacks; steps become a five-column bar chart 96→212px tall; role filter scrolls sideways with a fade mask), 720px (act links hide; act heads stack; body drops to 16px). Main: 900, 880, 820, 760, 720, 620, 560, 380px, added by component as revisions landed.

## Elevation & Depth

Both surfaces use soft, long, low-opacity shadows. The main site layers them on glass; Arts hangs one deep drop under every photo so the photos float above the coloured ground. Neither uses hard offset shadows.

### Shadow Vocabulary
- **Workbench sm** (`0 1px 2px rgba(34,31,43,.06), 0 4px 14px rgba(34,31,43,.05)`): nav pills, chips, active filters, small thumbnails.
- **Workbench md** (`0 2px 6px rgba(34,31,43,.07), 0 18px 40px -16px rgba(34,31,43,.22)`): glass panels and cards at rest.
- **Workbench lg** (`0 4px 10px rgba(34,31,43,.08), 0 40px 80px -28px rgba(34,31,43,.34)`): hovered cards, modal, lightbox image, portrait.
- **Stage drop** (`0 34px 60px -30px rgba(6,4,14,.72), 0 10px 22px -12px rgba(6,4,14,.45)`): every Arts photo step and shot.
- **Stage button** (`0 14px 28px -14px rgba(6,4,14,.75)`): the gold primary button only.

### Named Rules
**The Lift On Hover Rule.** Interactive cards rest at md and rise to lg with translateY(-4 to -6px) on hover; their image scales 1.03–1.05 inside the clip. Arts steps rise 6px; shots only zoom.

**The Light Is Depth Rule.** On Arts, depth also comes from light: a conic warm beam falls from the hero's top right, and a radial follow-spot (accent at 22%) fades in behind the heading of the act in view. On the gold Act V ground both the page glow and the follow-spot switch to pale warm white (`rgba(255,244,214,.35)` and `.42`), because tinted light there would read as shade and would lower the contrast of the #5e1f55 year line, which holds about 7.7:1.

## Shapes

Every control is a full pill: nav links, filters, chips, tags, buttons, role pills, link pills, photo counts. Containers use generous rounding: main-site cards and panels 22px, smaller cards and images 14px, evidence thumbs 10px, the brand mark 11px. Arts photos are slightly tighter (steps and main shots 16px, thumbnail rows 12px, the media frame 18px). Circles (50%) are used for icon buttons: lightbox controls, back-to-top, ladder numerals. Borders are 1px hairlines: ink at 12% on paper, and the current text colour at 16–40% (via `color-mix`) on the stage.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Main site:** there is no filled main-site button. Actions are text buttons (violet-deep, 600, 0.9rem, an arrow that slides 4px on hover), glass contact boxes, and the ink "Enter the Arts portfolio" link-out card (14px radius, serif label, terra arrow).
- **Arts primary:** stage gold fill, stage-ink text, 48px tall, 0 22px padding, Space Grotesk 600 15px, with an 18px inline SVG icon. Hover lifts 2px and lightens to stage-gold-light.
- **Arts quiet:** transparent with a 1px paper-at-42% border, paper text; the border goes solid on hover.
- **Focus:** main site, 2px violet outline offset 2–3px; Arts, 2px outline in the act accent offset 3px.

### Chips and filters
- **Main chip:** mono 0.78rem, white at 60%, hairline border, ink-soft text. Hover lifts 2px and tints violet (terra in the creative cloud) with a coloured glow. Linked chips add an 11px arrow icon.
- **Main filter:** mono 0.76rem pill on glass. Selected uses the violet gradient with white text; role-coded filters use their own colour.
- **Arts role filter:** Space Grotesk 500 14px, 38px tall, transparent with a 32% current-colour border and a mono count. Selected flips to a text-colour fill on the ground colour. The **Organiser filter** is outlined in stage gold with a drawn star SVG and fills solid gold when pressed; in Act V it outlines in ink.

### Cards / Containers
- **Main card:** 22px radius, glass fill (white 55%, blur 14px), white 70% border, md shadow. The image sits on top at 16/10 (16/9 for features) over a paper gradient placeholder, with 20/22px body padding.
- **Event card (main Arts section):** the same card, with a role line keyed by a 7px dot (terra operator, violet director, sage tech, gold organiser).
- **Arts piece:** not a card. A media block (main shot plus a row of thumbs, 10px gaps) beside open text on the ground. A deep-linked piece gets a 3px accent outline 8px out.

### Navigation
- **Main:** sticky, two separate glass pills (brand, links). Links are Space Grotesk 500 0.92rem pills; the current one is the violet gradient. Under 720px there is a toggle and a glass dropdown.
- **Arts top bar:** absolute over the hero. Brand favicon and name on the left; five Roman-numeral act links (40px italic serif circles, 36% paper border) in the centre; a "Main portfolio" pill on a night chip (`rgba(20,16,36,.62)`) with a back arrow on the right.
- **Role-ladder rail (Arts, ≥1261px):** fixed at the right edge, z-index 40 so it stays above the filter band (25) and the top bar (30); each numeral circle sits on the act ground at 70% so it reads over the hero and the band. Five 34px numeral circles stacked top-down from Act I to Act V, with the current one filled in accent and scaled 1.12. The current act's role is set vertically below. Labels unfold on a solid chip on hover or focus only.

### Photo steps (Arts signature)
Five rounded photos (16px, stage drop) climbing a diagonal staircase, each labelled along the bottom over a light dark fade (ink at 55%), with a layered dark text shadow (1px tight, 8px and 18px soft halos) under every label so it reads over any photo: italic serif numeral in light gold beside the role held (Space Grotesk 600, wraps with balance when the step is narrow), with the year in mono beneath. Step V carries a 3px light-gold outline 5px out. They enter with a staggered rise (28px, 0.9s, 0.1s apart). Below 960px they become a bottom-aligned five-column bar of increasing height with only numerals shown, and a caption beneath (Space Grotesk 600 14px, light gold) spells out the role climb in one sentence.

### Act header (Arts signature)
A grid of italic accent numeral plus title block: title, then a mono line of years and the act's role in Space Grotesk 600. All sizes are multiplied by the act's `--scale`, and the header sits on a follow-spot glow that fades in (0.9s) when its act is current.

### Role pills (Arts)
Space Grotesk 500 13px pills with a 34% current-colour border, placed below the piece title and meta row. **Organiser** is the only filled pill: stage gold, stage-ink text, 600, with a 13px drawn star. In Act V it inverts to ink with gold text.

### Lightbox
- **Main:** ink overlay at 78% with a 10px backdrop blur, 14px-rounded image with lg shadow, mono caption, 48px translucent white circle controls.
- **Arts:** near-opaque night overlay (`rgba(8,6,14,.95)`, no blur) fading in over 0.22s, 10px-rounded image up to 82vh, mono caption, 52px night-glass circle controls with SVG icons. Under 720px prev/next move to a pair at the bottom centre; swipe is supported.

### Motion
- **Act re-light:** `--g1/--g2` transition 1.1s ease, and `--fg/--soft/--accent` 0.8s ease, on the registered `@property` colours. The act is set when its top passes 45% of the viewport.
- **Entrance:** pieces and act heads rise 26px and fade over 0.9s on the long ease-out, added by JS only so content is visible without it. Main site `.reveal` is the same move at 0.7s.
- **Reduced motion:** Arts drops scroll smoothing, the root colour transition and all animation, and collapses transitions to 0.01ms; entrances are skipped entirely. The main site collapses animation and transition durations to 0.01ms and forces `.reveal` content visible.

## Do's and Don'ts

### Do:
- **Do** keep every control a full pill (999px) and every photo rounded (10–22px).
- **Do** give display headings one italic accent phrase: terra on paper, stage-gold-light on the stage.
- **Do** use the violet gradient as the only selected state on the main site, with a 2px violet focus ring.
- **Do** reserve solid stage gold on Arts for the primary action and the Organiser credit, inverting to ink in Act V.
- **Do** drive any new Arts act colour through the five registered properties (`--g1`, `--g2`, `--fg`, `--soft`, `--accent`) on `html[data-act]` so it transitions, and check text contrast on both ground stops.
- **Do** use soft, long, low-opacity shadows: workbench sm/md/lg on paper, stage drop under photos.
- **Do** draw icons as inline SVG at 13–22px with `currentColor`.
- **Do** honour `prefers-reduced-motion` by removing travel and colour transitions, not just shortening them.

### Don't:
- **Don't** put glass panels, background blobs or the contour grid on the stage ground, or a re-lighting ground on the main site.
- **Don't** load `arts.css` on the main site or `style.css` on Arts: both define `--paper`, `--ink` and `--gold` with different values.
- **Don't** use hard offset shadows on either surface.
- **Don't** flatten the act scale on Arts. Later acts must stay visibly louder than earlier ones.
- **Don't** use JetBrains Mono for headings or running copy on either surface.
