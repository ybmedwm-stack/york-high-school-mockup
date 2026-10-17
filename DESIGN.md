---
name: York Wildcats Spirit Store
description: A Friday-night scoreboard under stadium lights, in Volts' studio grammar; near-black ground, one Columbia-blue volt, pill controls, heavy tight Archivo.
colors:
  bg: "#0E1014"
  bg-2: "#181B21"
  bg-3: "#20242C"
  navy: "#14263F"
  navy-deep: "#0F1E33"
  navy-lift: "#17304E"
  volt: "#8ED1F2"
  volt-deep: "#5BB7E5"
  volt-ink: "#0B1A26"
  white: "#FFFFFF"
  t-75: "rgba(255,255,255,.76)"
  t-50: "rgba(255,255,255,.52)"
  t-25: "rgba(255,255,255,.26)"
  line: "rgba(255,255,255,.12)"
  line-strong: "rgba(255,255,255,.3)"
  surface: "rgba(255,255,255,.06)"
  surface-2: "rgba(255,255,255,.1)"
  volt-line: "rgba(142,209,242,.25)"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(5.2rem, 11.2vw, 11.2rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 3vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  numeral:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.8rem, 2rem + 3vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
    fontFeature: "tabular-nums"
  price:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  panel: "22px"
  tile: "18px"
  focus: "6px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  wrap: "1344px"
  section: "clamp(56px, 8vw, 120px)"
  section-head: "clamp(28px, 4vw, 48px)"
  grid-gap: "14px"
  stack: "8px"
  tight: "6px"
components:
  button-volt:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-volt-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.volt-ink}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.white}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  button-lg:
    rounded: "{rounded.pill}"
    padding: "18px 30px"
  tile:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    padding: "16px 18px 18px"
  tile-hover:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.white}"
  card-feature:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    padding: "28px 28px 28px 10px"
  card-feature-hover:
    backgroundColor: "{colors.navy-lift}"
    textColor: "{colors.white}"
  panel:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "clamp(28px, 4vw, 56px)"
  badge:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 11px"
  chip-tag:
    backgroundColor: "transparent"
    textColor: "{colors.t-75}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  input-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.t-75}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  nav-link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
  icon-disc:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.volt}"
    rounded: "{rounded.pill}"
    size: "42px"
  ticker:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    padding: "9px 0"
---

# Design System: York Wildcats Spirit Store

## Overview

**Creative North Star: "The Scoreboard Under Lights"**

One dark field, one electric color, and type set heavy enough to read from the bleachers. The page is a near-black ground (`bg`) on which panels lift a half-step (`bg-2`, `bg-3`) and navy fields (`navy`) mark the featured positions. Columbia blue is the single volt: it carries the ticker, the primary button, every price, the stat numerals, and one full-bleed band. Nothing else gets to be a color. White does the talking at three alphas, so hierarchy comes from opacity and weight, never from a second hue.

The grammar is lifted from voltsconsulting.com and bent to a school store: pill controls everywhere a hand lands, hairline borders at 12% white in place of drop-shadow stacks, and Archivo's width axis doing the work a second typeface would normally do. Expanded widths (112 to 125) belong to headlines, scores, numerals, and garment lettering; body sits at 100. Density is editorial rather than catalog: a 12-column grid where cards span unevenly, one wide navy feature per section, and generous section rhythm (56 to 120px) between beats.

The build is a mockup for a DecoNetwork port. The `:root` block below (identical to the frontmatter, which is normative) is what a later agent pastes into Customize Template CSS; everything in styles.css reads from it.

```css
:root {
  --bg: #0E1014;
  --bg-2: #181B21;
  --bg-3: #20242C;
  --navy: #14263F;
  --navy-deep: #0F1E33;
  --volt: #8ED1F2;
  --volt-deep: #5BB7E5;
  --volt-ink: #0B1A26;
  --white: #FFFFFF;
  --t-100: rgba(255,255,255,1);
  --t-75: rgba(255,255,255,.76);
  --t-50: rgba(255,255,255,.52);
  --t-25: rgba(255,255,255,.26);
  --line: rgba(255,255,255,.12);
  --line-strong: rgba(255,255,255,.3);
  --surface: rgba(255,255,255,.06);
  --surface-2: rgba(255,255,255,.1);
  --font: "Archivo", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --ease: cubic-bezier(.645,.045,.355,1);
  --ease-out: cubic-bezier(.16,1,.3,1);
  --dur: .35s;
  --r-pill: 999px;
  --r-panel: 22px;
  --r-tile: 18px;
  --wrap: 1344px;
  --gutter: clamp(16px, 4vw, 32px);
  --shadow-tile: 0 18px 40px -18px rgba(0,0,0,.7), 0 2px 0 rgba(255,255,255,.04) inset;
  --shadow-float: 0 28px 60px -24px rgba(0,0,0,.8);
}
```

Font loading: Google Fonts, Archivo variable with the width axis, `family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap`, preconnected to `fonts.googleapis.com` and `fonts.gstatic.com`. The port must carry that link tag or the width axis is lost and every headline collapses to width 100.

Imagery: no rasters ship. Every garment plate and icon is an inline SVG sprite (`<symbol>` definitions at the top of `<body>`), so no provenance scan is owed for this build. Garment plates are labeled placeholders to be replaced by DecoNetwork mockup renders at port time.

**Key Characteristics:**
- Near-black ground, half-step panel lifts, navy for the featured position
- Columbia blue as the only accent, reserved for action, price, numeral, ticker, band
- White at 100 / 76 / 52 / 26 alpha; hierarchy by opacity and weight, not hue
- Archivo variable: width 125 for scores, 112 for headlines, 100 for body
- Pill controls, 18px tiles, 22px panels, 1px white/12 hairlines
- Outlined type (text-stroke in Columbia blue) as the signature display device
- Shadows exist only to seat a tile or float a hovered button; depth is tonal
- Authored 1.75px-stroke SVG icons; no icon fonts, no glyphs

## Colors

A monochrome dark field with one electric blue and a navy understudy; everything else is white at an alpha.

### Primary
- **Columbia Volt** (`volt`, #8ED1F2): the single accent. Owns the ticker background, the primary button fill, every price, the hero score's outlined half (as a 2px text-stroke), the stat band fill, icon-disc foreground, selection highlight, caret, and the focus ring. Its scarcity on dark surfaces is what makes a price read as live.
- **Volt Deep** (`volt-deep`, #5BB7E5): a shade of the volt used only inside garment art (tee collar, quarter-zip hem). Not a UI color.
- **Volt Ink** (`volt-ink`, #0B1A26): the text color on any volt surface (ticker, buttons, badges, band). Never on dark ground.

### Secondary
- **Stadium Navy** (`navy`, #14263F): the featured field. Wide catalog card, lead quote, closing CTA panel, icon discs, scrollbar thumb hover. Pairs with a volt-tinted hairline (`volt-line`, rgba(142,209,242,.25)) instead of the white hairline.
- **Navy Deep** (`navy-deep`, #0F1E33): top of the garment-art gradient (`navy-deep` to `bg-2`) behind every product plate.
- **Navy Lift** (`navy-lift`, #17304E): hover fill for the wide navy card. One step up from `navy`.

### Neutral
- **Field** (`bg`, #0E1014): page background, header tint (82% over blur), scrollbar track.
- **Panel** (`bg-2`, #181B21): tiles, cards, quotes, the "how it works" panel, bottom of garment-art gradients.
- **Panel Raised** (`bg-3`, #20242C): tall catalog card at rest; hover fill for tiles and cards; scrollbar thumb.
- **White** (`white`, #FFFFFF): headlines, names, summaries, and the hover fill of the volt button.
- **Ink 75** (`t-75`, rgba(255,255,255,.76)): body copy, ledes, nav links at rest, chip text.
- **Ink 50** (`t-50`, rgba(255,255,255,.52)): meta lines, captions, placeholders, legal, proof list.
- **Ink 25** (`t-25`, rgba(255,255,255,.26)): declared, unused in the shipped page; keep for the port.
- **Hairline** (`line`, rgba(255,255,255,.12)): every border: tiles, cards, panels, header bottom, section tops, FAQ rows, chips, inputs.
- **Hairline Strong** (`line-strong`, rgba(255,255,255,.3)): hover border on tiles, cards, ghost buttons, inputs.
- **Surface** (`surface`, rgba(255,255,255,.06)) and **Surface 2** (`surface-2`, rgba(255,255,255,.1)): ghost-button, nav-hover, input, and arrow-disc fills; `surface-2` is the ghost hover.

### Named Rules
**The One Volt Rule.** Columbia blue is the only chromatic accent and it is spent on action, price, numeral, ticker, and band. A second accent, a green success state, a red sale tag: none exist and none are added.

**The Alpha Ladder Rule.** Text on dark ground is white at 100, 76, or 52 alpha. Hierarchy is set by stepping down the ladder and by weight, never by introducing a gray hex.

**The Navy Means Featured Rule.** A navy field marks the one featured item in a group (the wide card, the lead quote, the close). Two navy panels side by side cancel each other.

## Typography

**Display Font:** Archivo variable (with system-ui, -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Archivo variable (same stack)
**Garment Lettering:** Archivo at width 110 to 125, weights 800 to 900, inside the SVG plates

**Character:** One family carrying the whole range through its width axis. Compressed to nothing, expanded to a scoreboard. Headlines are tight (negative tracking) and sit at line-height 1; the hero score goes tighter still. Body is plain width-100 Archivo at a comfortable 1.55.

### Hierarchy
- **Display** (900, clamp(5.2rem, 11.2vw, 11.2rem), 0.84, -0.045em, width 125): the hero score "WILDCATS", the first word solid white and the second outlined in a 2px volt text-stroke. On desktop (over 1024px) it is one line at 15.4vw, line-height 0.8, allowed to bleed past the right edge. Also the `YHS` watermark behind the closing panel (clamp(8rem, 24vw, 22rem), 1.5px stroke at 22% volt).
- **Headline** (800, clamp(2rem, 1.4rem + 3vw, 3.6rem), 1, -0.03em, width 112): section h2s, balanced. The band title steps up to clamp(2.2rem, 1.4rem + 3.6vw, 4.4rem) and the close to clamp(2.4rem, 1.6rem + 4vw, 5rem); the hero title runs clamp(1.9rem, 1.2rem + 2.8vw, 3.4rem) at max-width 14ch.
- **Title** (800, 1.25rem, 1, -0.02em, width 112): h3s inside cards and steps. The wide card's h3 scales to clamp(1.5rem, 1.2rem + 1vw, 2.1rem). Tile names are 700 at 1.05rem (lead tile 800 at 1.4rem, width 110).
- **Numeral** (900, clamp(2.8rem, 2rem + 3vw, 5rem), 0.95, -0.04em, width 118, tabular): stat-band figures, counted up on entry. The custom-order card's "07 12 23 44" uses the same voice at 2.4rem, width 125, outlined in a 1.5px volt stroke with one numeral filled.
- **Price** (800, 1.3rem, -0.02em, tabular, volt): every price. Tile price 1.35rem, lead tile 1.7rem, wide card 1.8rem.
- **Body** (400, 16px, 1.55, width 100): paragraphs at `t-75`. Ledes clamp(1rem, .95rem + .3vw, 1.15rem) at max-width 54ch; FAQ answers max-width 62ch; card copy 36 to 40ch. Quotes are 500 at 1.1rem, line-height 1.4; the lead quote 700 at clamp(1.3rem, 1.1rem + .8vw, 1.7rem).
- **Label** (600, 0.72rem, 0.02em): chips and the "Most worn" badge (700, 0.03em). Sentence case. Meta lines 0.86rem at `t-50`; ticker 600 at 0.82rem; buttons 600 at 0.95rem with -0.005em.

### Named Rules
**The Width Is the Second Face Rule.** Emphasis is achieved by widening Archivo (112 for headlines, 118 for numerals, 125 for the score), never by adding a second family. Anything at width 100 is reading copy.

**The Outline Is Volt Rule.** Outlined type is always a Columbia-blue text-stroke on transparent fill (2px at display size, 1.5px below), and it is always the second half of a pair with a solid partner: WILD/CATS, one filled numeral among outlined ones.

**The Sentence Case Rule.** Nothing on the page is set in uppercase except garment lettering inside the SVG plates. Headlines, buttons, chips, and the ticker are all sentence case.

## Layout

A single centered column at `wrap` (1344px) inset by the fluid `gutter` (16 to 32px). Sections breathe at `section` (56 to 120px) vertically and open with a `section-head` block capped at 640px, margin-bottom 28 to 48px. Long-form text widths are set in ch (36 to 62ch), not in pixels.

The catalog is a 12-column grid with 14px gaps and a 120px auto-row minimum. Standard cards span 3 columns; the wide navy feature spans 6 columns and 2 rows and flips to a row layout with a stacked garment collage on its left 48%; the tall card spans 3 by 2. Uneven spans are the point: equal cards are refused.

The hero on desktop (min-width 1025px) is a 5fr / 7fr grid. The score spans both columns on one line; the headline board sits in column 1, and the 4-up product rail (1.55fr 1fr 1fr 1fr, 14px gap) sits in column 2 pulled up by -2.6vw so the lead tile overlaps the score's baseline. Below 1024px the rail becomes 2-up with the lead tile spanning both columns in a row layout, catalog cards go 6-wide, the how/FAQ two-column panels stack, and the steps' connecting hairline rotates from horizontal to vertical. Below 768px the nav and header CTA hide behind a pill toggle, the hero score shrinks to clamp(4.6rem, 22vw, 7rem), the proof list hides, every tile becomes a horizontal row with art at 36 to 40% width, and all cards span 12.

Two breakpoints only: 1024px and 768px. The stats grid is 4 / 2 / 2; quotes 1.3fr 1fr 1fr / 2 / 1; footer 1.2fr .8fr 1.2fr / 2 / 1.

Motion lives in the layout rather than in reveals. Sections are visible by default. The hero rail drifts on pointer and scroll with two depths (`data-depth`, 14px by 10px pointer range, 6% scroll factor, 0.08 lerp), stat numerals count up once over 1400ms with a quartic ease-out at 60% intersection, the ticker loops over 42s linear and pauses on hover, hovers use `ease` (cubic-bezier(.645,.045,.355,1)) at 350ms with `ease-out` (cubic-bezier(.16,1,.3,1)) on transforms. `prefers-reduced-motion` stops the ticker, kills tile transforms, and prints the final numerals immediately.

## Elevation & Depth

Depth is tonal first. Panels sit one step above the field (`bg` to `bg-2` to `bg-3`), navy marks the featured position, and every container is bounded by a 1px hairline at 12% white rather than by a shadow. Hover raises the tone one step (`bg-2` to `bg-3`, `navy` to `navy-lift`), strengthens the hairline to 30%, and lifts the element 4px.

Shadows are seating, not decoration. Tiles and cards carry one long, soft, negative-spread drop plus a 1px inset top highlight so they read as resting on the field. The volt button gains a volt-tinted glow on hover. Garment SVGs float on a `drop-shadow` filter inside their plate. The header blurs the page behind it (14px blur, 140% saturate) over an 82% field tint. A single radial volt glow at 16% sits under the hero.

### Shadow Vocabulary
- **Tile seat** (`box-shadow: 0 18px 40px -18px rgba(0,0,0,.7), 0 2px 0 rgba(255,255,255,.04) inset`): every tile and card at rest.
- **Float** (`box-shadow: 0 28px 60px -24px rgba(0,0,0,.8)`): declared as `--shadow-float`, reserved for a lifted layer; not applied in the shipped page.
- **Volt glow** (`box-shadow: 0 10px 24px -12px rgba(142,209,242,.7)`): primary button hover only.
- **Garment float** (`filter: drop-shadow(0 22px 24px rgba(0,0,0,.55))`, 18/22 in cards, 24/26 in the collage): product art inside its plate.

### Named Rules
**The Hairline Before Shadow Rule.** A container is defined by its 1px white/12 border and its tonal step. A shadow may seat it; a shadow never defines it.

**The Lift Is Four Pixels Rule.** Hover on a tile or card is translateY(-4px) with the border stepping to `line-strong` and the fill stepping up one tone. Buttons lift 1px. Nothing lifts further.

## Shapes

Three radii and a circle. Pills (999px) are for anything pressed or tapped: buttons, nav links, chips, badges, the input, the menu toggle. Tiles and cards sit at 18px; the two large panels (how-it-works, close) at 22px. Icon discs, arrow discs, and the proof icons are true circles. Mobile nav rows use a 10px one-off and the focus ring a 6px one-off.

Borders are 1px hairlines in `line`, stepping to `line-strong` on hover; navy fields trade the white hairline for a volt-tinted one (`volt-line`). Garment plates clip to the tile with `overflow: hidden`. The hero score is allowed to exceed the frame on desktop (`overflow: hidden` on the hero, `width: max-content` on the score). Outlined type (text-stroke) is the recurring silhouette: the right half of WILDCATS, the custom-order numerals, the YHS watermark.

Garment illustrations are flat, front-on, filled with a navy gradient (`#1B3252` to `navy-deep`) or a volt gradient (`#A9DFF7` to `volt-deep`), with 3 to 7px seam strokes in `#0A1626` / `#2A4A72` and "YORK" lettering in Archivo at width 118 to 125.

## Components

### Buttons
Pill, heavy enough to hit with a thumb, one volt per viewport.
- **Shape:** full pill (999px), 1px transparent border reserved so ghost and volt share a box.
- **Volt (primary):** volt fill, volt-ink text, 14px 24px, 600 at 0.95rem, inline-flex with 0.5em gap for an 18px icon. One per section at most.
- **Hover / Focus:** volt turns white, lifts 1px, gains the volt glow. Focus-visible is a 2px volt outline offset 3px with a 6px radius (global).
- **Ghost:** `surface` fill, white text, `line` border; hover to `surface-2` and `line-strong`. The secondary action beside a volt button.
- **Sizes:** `sm` 10px 16px at 0.85rem with a 16px icon (header CTA, "Customize & buy" on tiles); `lg` 18px 30px at 1.05rem. Mobile hero buttons compress to 11px 15px at 0.84rem.

### Chips
- **Style:** pill, transparent fill, `line` border, `t-75` text, 5px 10px, 600 at 0.72rem with 0.02em tracking. Sentence case.
- **On navy:** border `rgba(142,209,242,.4)`, text volt.
- **Badge variant:** volt fill, volt-ink text, 700 at 0.72rem, 6px 11px, absolutely placed 14px from the tile's top-left (18px on desktop hero). Used once: "Most worn".

### Cards / Containers
- **Corner Style:** 18px for tiles and cards, 22px for panels.
- **Background:** `bg-2` at rest; tall card `bg-3`; featured card and lead quote `navy`.
- **Shadow Strategy:** tile seat at rest; hover is tonal plus 4px lift (see Elevation).
- **Border:** 1px `line`; `volt-line` on navy.
- **Internal Padding:** tile body 16px 18px 18px (mobile 14px with 4px left when art sits beside); card body 18px 20px 20px; wide card 28px with 10px left against the collage; custom card 24px; quote 26px 26px 22px; panels clamp(28px, 4vw, 56px); close clamp(40px, 6vw, 88px) by clamp(24px, 5vw, 72px).
- **Art plate:** garment SVG centered at 10% padding in a `navy-deep` to `bg-2` gradient (tiles add a 14% volt radial); aspect 1/.92 in tiles, 1/.78 in cards; hover nudges the SVG up 5 to 6px and -1.5deg over 500ms `ease-out`.
- **Row foot:** name, meta (`t-50`), then a price-and-arrow row; the 36px arrow disc goes volt on card hover and shifts 2px right.

### Inputs / Fields
- **Style:** pill, `surface` fill, 1px `line`, white text, 10px 16px; placeholder at `t-50`, caret volt.
- **Focus:** global 2px volt outline, offset 3px. Hover steps the border to `line-strong`.
- **Error / Disabled:** not designed; the only field is the footer drop-alert stub.

### Navigation
- **Header:** sticky, 68px tall, `bg` at 82% over a 14px blur, 1px `line` bottom. Brand is a 30px volt shield mark plus "York Wildcats" at 500 / 1.02rem with "York" at 800 width 112.
- **Links:** pill, 9px 14px, 500 at 0.94rem, `t-75`; hover white on `surface`. No active state is drawn.
- **CTA:** a `sm` volt button pushed to the right ("Full store").
- **Mobile (under 768px):** links and CTA hide; a 42px pill toggle (`surface`, `line`) opens a stacked panel under a `line` top border with 12px 10px rows at 10px radius.
- **Ticker:** a volt bar above the header, 9px vertical padding, volt-ink text at 600 / 0.82rem, items separated by 6px volt-ink dots at 55%, duplicated once and scrolled 50% over 42s linear; pauses on hover; stops under reduced motion.

### Icon Disc
A 42px circle (34px in the hero proof list) filled `navy`, stroked 1px at 30% volt, holding a 1.75px-stroke volt icon with 10px padding. Marks steps and proof points. Arrow discs (36px, `surface`, `line`) are the tappable cousin.

### Scoreboard Score (signature)
The hero wordmark: "WILD" solid white and "CATS" as a 2px volt text-stroke on transparent, 900 at width 125, line-height 0.84 (0.8 on desktop), tracking -0.045em, one line at 15.4vw on desktop bleeding past the frame, wrapping below 1024px. The product rail's lead tile is pulled up to overlap its baseline. The same device, at smaller scale and 1.5px stroke, makes the custom-order numerals and the YHS watermark.

### Stat Band
Full-bleed volt field, volt-ink text, section padding clamp(56px, 8vw, 110px). Four columns (2 below 1024px), each with a 2px top rule at 35% volt-ink, a 600 / 0.9rem label at 75% volt-ink, and a counted-up numeral. The only place the volt is a ground rather than a mark.

### FAQ Accordion
Native `details`/`summary`, 1px `line` top rule on the list and bottom rule on each row, 20px 4px summary padding, 600 at 1.08rem white; summary turns volt on hover; a 22px volt plus icon rotates 45deg when open; answers at `t-75` capped at 62ch with 22px bottom padding. One open at a time (script).

## Do's and Don'ts

### Do:
- **Do** keep Columbia blue (#8ED1F2) for action, price, numeral, ticker, and the one band; put volt-ink (#0B1A26) on it, never white.
- **Do** set emphasis with Archivo's width axis: 112 for headlines, 118 for numerals, 125 for the score; keep body at width 100.
- **Do** bound containers with a 1px white/12 hairline and a tonal step (`bg` to `bg-2` to `bg-3`); hover is one tone up, border to white/30, 4px lift.
- **Do** use pills (999px) for anything pressed, 18px for tiles and cards, 22px for panels.
- **Do** pair outlined type with a solid partner (WILD/CATS, one filled numeral), and stroke it in volt.
- **Do** load Archivo from Google Fonts with the `wdth` axis in the `family=` string, and preconnect both font hosts.
- **Do** ship icons as inline 1.75px-stroke SVG symbols referenced by `<use>`; garment art as inline SVG plates on a navy-deep gradient.
- **Do** vary card spans in the catalog (3, 6x2, 3x2) with one navy feature per group.
- **Do** honor `prefers-reduced-motion`: ticker stops, transforms clear, numerals print their final value.

### Don't:
- **Don't** add a second accent, a gray hex for text, or a success/error hue; white at 76 or 52 alpha is the hierarchy, and volt is the only color.
- **Don't** set anything in uppercase outside the garment SVG lettering; buttons, chips, headlines, and the ticker are sentence case.
- **Don't** introduce a second typeface, an icon font, or a system display face; Archivo variable is the whole range.
- **Don't** define a container with a shadow; shadows seat (`--shadow-tile`) or glow on hover, the hairline does the defining.
- **Don't** place two navy fields side by side or put a navy panel on the volt band.
- **Don't** add an eyebrow or kicker above a headline; section heads are an h2 followed by one paragraph.
- **Don't** render product imagery as rasters in this mockup; plates are inline SVG until DecoNetwork renders replace them at port.
- **Don't** exceed the two breakpoints (1024px, 768px) or lift a hovered card more than 4px.
