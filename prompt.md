# PRIMIUM AIRDROP — Complete Website Rebuild Prompt
> Give this file to any AI and it will rebuild the full website from scratch.

---

## 📌 PROJECT OVERVIEW

**Project Name:** PRIMIUM AIRDROP  
**Type:** Promotional Landing Page Website  
**Channel Name:** PRIMIUM AIRDROP  
**Telegram Username:** @primiumairdrop  
**Telegram URL:** https://t.me/primiumairdrop  
**Website URL:** https://primiumairdrop.netlify.app/  
**Purpose:** Showcase a Telegram channel that shares verified crypto airdrops, earning bots, trusted earning websites, and online money-making apps.

---

## 📁 FILE STRUCTURE

```
primium-airdrop/
├── index.html        ← Main page (all sections + full SEO)
├── style.css         ← All styles (dark theme, 3D effects, animations)
├── app.js            ← All JavaScript (Three.js 3D scene, interactions)
└── image/
    └── logo.png      ← 512×512 PNG logo (gold diamond gem + channel name)
```

---

## 🎨 DESIGN SYSTEM

### Aesthetic Direction
**Deep Space Crypto Luxury** — Dark background, gold primary accent, cyan secondary, glassmorphism cards, 3D transforms, particle galaxy, animated borders.

### Color Palette (CSS Variables)
```css
--gold:        #FFB800     /* Primary accent — most text, borders, glows */
--gold-l:      #FFD966     /* Light gold for gradients */
--gold-d:      #B07E00     /* Dark gold */
--gold-glow:   rgba(255,184,0,0.4)   /* Glow shadow */
--gold-faint:  rgba(255,184,0,0.08)  /* Subtle gold backgrounds */
--cyan:        #00E5FF     /* Secondary accent */
--cyan-glow:   rgba(0,229,255,0.3)
--bg:          #010108     /* Deepest background */
--bg2:         #07060F     /* Alternate section bg */
--bg3:         #0D0B1E     /* Card backgrounds */
--glass:       rgba(255,255,255,0.03)   /* Glassmorphism */
--glass-b:     rgba(255,255,255,0.07)
--border:      rgba(255,184,0,0.15)     /* Default border */
--border-h:    rgba(255,184,0,0.45)     /* Hover border */
--text:        #EEE8D5     /* Main body text */
--muted:       #6B6880     /* Secondary/dim text */
```

### Typography (Google Fonts)
```
font-family: 'Bebas Neue'  → Section headings, hero H1, stats (display)
font-family: 'Syne'        → Subheadings, card titles (weight 400–800)
font-family: 'Lexend'      → Body text, descriptions (weight 300–600)
font-family: 'Space Mono'  → Labels, navbar links, tags, monospace UI
```
> Import: `https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&family=Bebas+Neue&family=Lexend:wght@300;400;500;600&display=swap`

### Border Radius
- Default cards: `14px`
- Large panels: `24px`

---

## 🧩 SECTIONS — Full Breakdown

### 1. NAVBAR (Fixed, sticky top)
- **Left:** Logo (40×40px, circular, border: 2px solid gold, glow shadow) + Channel name "PRIMIUM AIRDROP" in Bebas Neue gold + superscript "OFFICIAL" in cyan Space Mono
- **Center:** Nav links (About, Features, How It Works, Promote, Contact) in Space Mono uppercase 0.65rem, muted color, gold on hover with animated underline gradient
- **Right:** "Join Now" button — transparent with gold border, fills gold on hover with slide effect
- **Hamburger:** 3-line icon, visible on mobile ≤768px, toggles `.open` class on nav-links
- **Behavior:** `background: rgba(1,1,8,0.5)` with `backdrop-filter: blur(24px)` — darkens to `rgba(1,1,8,0.92)` + subtle bottom glow on scroll

### 2. HERO SECTION (Full viewport, 2-column grid)
**LEFT COLUMN — Text:**
- Eyebrow: Green live dot + "Active Channel — Posting Daily" in cyan Space Mono
- **H1:** "PRIMIUM" (gold, filled, Bebas Neue, clamp 4rem–7.5rem, glow text-shadow) + "AIRDROP" (outline/transparent, -webkit-text-stroke gold)
- Username: "@primiumairdrop" in cyan Space Mono
- Description paragraph with **typing effect** (cycling phrases): "Latest Crypto Airdrops" / "Verified Earning Bots" / "High Potential Drops" / "Trusted Earning Apps" / "New Bot Launches" / "DeFi Token Giveaways"
- Two buttons: **Primary Gold** ("✈️ Join Telegram Channel") + **Ghost** ("🔍 Explore Features")
- Entrance animation: `fadeInLeft` staggered on each element

**RIGHT COLUMN — 3D Logo Stage:**
- Container: `transform-style: preserve-3d`, `animation: stage-float 6s ease-in-out infinite` (bobs up/down + slight X tilt)
- Outer orbit ring 1: `border: 1px solid rgba(255,184,0,0.2)`, spins 15s, has a gold dot orbiting at top
- Outer orbit ring 2: `border: 1px dashed rgba(0,229,255,0.12)`, counter-spin 25s
- Logo center: circular image (80% of stage), `border: 3px solid gold`, triple box-shadow glow
- 4 floating colored orbs (gold, cyan, red, gold-faint) with individual float animations
- 3 floating info chips with glass backdrop: "✅ Verified Drops" / "🔔 Daily Alerts" / "🚀 New Bots"
- **Mouse parallax:** stage rotates on mousemove (rotateX/rotateY based on cursor position)

**Scanline overlay:** repeating horizontal lines at 4px intervals, very faint gold

**Bottom scroll hint:** animated vertical line + "SCROLL" text

### 3. TICKER / MARQUEE (Between hero and stats)
- Continuous left-scroll, `animation: ticker 30s linear infinite`
- Pauses on hover
- Items: "🪙 Crypto Airdrops", "🤖 Verified Bots", "💰 Free Tokens", "🌐 Earning Websites", "📱 Earning Apps", "🚀 New Bot Launches", "🔥 DeFi Drops", "💎 NFT Giveaways", "📢 Promotions Open", "✅ Daily Verified Updates"
- Items duplicated to fill ticker seamlessly
- Background: `rgba(255,184,0,0.04)`, borders top/bottom

### 4. STATS RIBBON (4-column grid)
- **Stats:** 5000+ Members / 300+ Airdrops / 100% Verified / 24/7 Updates
- Each stat: Bebas Neue large number in gold with glow text-shadow + Space Mono label in muted
- **Animated counter:** numbers count up from 0 on scroll into view (eased cubic)
- Hover: animated gold top border slides in (`scaleX`), subtle background tint

### 5. ABOUT SECTION (2-column: cube + text)
**LEFT — 3D Rotating Cube:**
- CSS `transform-style: preserve-3d`, animation `cube-rotate` (rotateX 10deg + rotateY 360deg in 14s)
- 300×300px cube, 6 faces:
  - Front: logo image circular
  - Back: "AIRDROP" text gold
  - Right: "EARN" text
  - Left: "VERIFY" text
  - Top: "PRIMIUM" text smaller
  - Bottom: dark empty
- Each face: `background: var(--bg3)`, `border: 1px solid rgba(255,184,0,0.25)`, `border-radius: 16px`

**RIGHT — Content:**
- **H3:** "Your Gateway to Genuine Crypto Earnings" — Syne 800 weight, span in gold
- 3 paragraphs describing the channel
- Tag pills row: gold bordered pills with hover lift + glow effect

### 6. FEATURES SECTION (3-column card grid)
**6 Cards:**
1. 🪙 Latest Crypto Airdrops — DeFi, NFT, Layer-2 drops
2. 🤖 Verified Earning Bots — tested before posting
3. 🌐 Trusted Earning Websites — faucets, surveys, task platforms
4. 📱 Best Earning Apps — Android/iOS money-making apps
5. 🔔 Regular Updates — daily posts
6. 📢 Promotions Available — reach active crypto audience

**Card Design:**
- `background: rgba(255,255,255,0.03)`, glassmorphism
- `border-radius: 24px`, gold border
- Large faint number (01–06) top-right, Bebas Neue, opacity 0.05
- Icon box: `58×58px`, `border-radius: 16px`, gold faint background
- **3D Tilt Effect on mousemove:** `perspective(800px) rotateX rotateY translateZ(8px)`, icon translates Z:20px
- **Mouse spotlight:** radial gradient follows cursor position (`--mx`, `--my` CSS vars)
- Top border glow appears on hover
- `reveal` class with staggered delay d1–d6

### 7. HOW IT WORKS SECTION (Alternating Timeline)
- Vertical center line: `1px` gradient line
- 4 steps alternating left/right
- Each step: numbered node (56×56 circle, gold border, Bebas Neue, glows on hover → fills gold), content card glass
  1. Join the Channel
  2. Browse Opportunities
  3. Pick & Participate
  4. Earn & Grow
- On mobile: timeline collapses to left-side single column

### 8. PROMOTION SECTION (Glowing Panel)
- Max-width 900px centered panel
- `border-radius: 28px`
- **Animated conic gradient border:** `conic-gradient` rotating 360deg continuously (`--angle` CSS @property)
- Inner background: deep dark
- **H2:** "Promote Your PROJECT With Us"
- Description about promotions being available
- Tag chips: 🤖 Bots / 🌐 Websites / 📱 Apps / 🪙 Crypto Projects / 🎯 DeFi / 🎮 GameFi / 💎 NFT
- Primary gold button → opens Telegram

### 9. CONTACT SECTION (2-column: info + form)
**LEFT — Contact Info:**
- **H3:** "Reach Out Anytime"
- 3 contact items (glass cards with left-slide hover):
  - ✈️ Telegram Channel: @primiumairdrop
  - 💬 For Promotions: Message on Telegram
  - 🌐 Website: primiumairdrop.netlify.app

**RIGHT — Contact Form:**
- Glass background form, gold focus borders
- Fields: Name / Telegram Username / Purpose (dropdown: Promote, Submit Airdrop, Collaboration, General Query) / Message (textarea)
- Submit button: gold primary, shows "⏳ Sending...", 1.8s fake delay, resets form, shows toast notification

### 10. FOOTER (3-column grid)
**Column 1:** Logo + name + description + social icon buttons (Telegram ✈️, Crypto 🪙, Bots 🤖)
**Column 2:** Quick Links (About, Features, How It Works, Promotions, Contact)
**Column 3:** We Share (Crypto Airdrops, Earning Bots, Websites, Apps, DeFi)
**Bottom bar:** "© [Year] PRIMIUM AIRDROP — All Rights Reserved. @primiumairdrop" + "Verified · Trusted · Daily" badge

---

## 🌐 3D & VISUAL EFFECTS

### Three.js Scene (Full-screen fixed canvas background)
**File:** `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

**Elements:**
1. **Particle Galaxy (3000 particles):** Spiral distribution with `Math.pow(Math.random(), 0.5) * 18` radius. Colors: 15% gold, 10% cyan, rest soft white/blue. `THREE.PointsMaterial` with `AdditiveBlending`. Rotates slowly (Y-axis) + tilts on scroll.
2. **Floating Icosahedron (Crystal):** Position `(3.5, 0.5, -3)`. Gold color, opacity 0.18, + wireframe overlay opacity 0.12. Spins + bobs on sin wave.
3. **Octahedron:** Position `(-4, -1, -4)`. Cyan wireframe, opacity 0.10. Dual-axis spin.
4. **Torus Ring:** Position `(0, 0, -8)`. Gold, opacity pulses on sin wave. Slow Z-rotation.
5. **Lights:** AmbientLight gold 0.4 + PointLight gold 1.2 at (3,3,3) + PointLight cyan 0.6 at (-3,-2,2)
6. **Camera parallax:** smooth lerp toward mouse position (±0.3x, ±0.2y)

### Custom Cursor
- `#cursor-dot`: 8px gold circle, instant follow
- `#cursor-ring`: 38px gold border circle, lerp follow (lag effect)
- Expands to 60px on hover over interactive elements
- Fade in/out on mouse enter/leave window

### 3D Card Tilt
All `.f-card` elements: on `mousemove`, calculate rotation from card center, apply `perspective(800px) rotateX rotateY translateZ(8px)`. Resets on `mouseleave`.

### CSS Animations (Keyframes)
- `fadeInLeft` — hero text entrance
- `stage-float` — hero logo stage bobs + X tilt
- `ring-spin` — orbit rings rotate
- `orb-float` — floating orbs bob
- `chip-float` — info chips float
- `cube-rotate` — about cube rotates Y-axis with X tilt
- `ticker` — marquee left scroll
- `float-pulse` — floating CTA button pulses
- `border-spin` — conic gradient border on promo panel (uses CSS `@property --angle`)
- `scroll-drop` — scroll indicator line animation
- `blink` — live green dot pulses

### Noise Texture Overlay
CSS `body::after` with SVG `feTurbulence` fractalNoise, `background-size: 220px`, `opacity: 0.7`, fixed position, `z-index: 1`, `pointer-events: none`.

---

## 📱 RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|-----------|---------|
| `≤1100px` | Hero becomes 1-column, about becomes 1-column, contact becomes 1-column, features becomes 2-col |
| `≤768px` | Nav links hidden → hamburger toggle, stats becomes 2×2, features becomes 1-col, timeline collapses to left-side, footer becomes 1-column |
| `≤480px` | H1 smaller, buttons stack full-width, cube smaller (220px) |

---

## 🏷️ SEO META TAGS (Complete List)

### Basic SEO
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>PRIMIUM AIRDROP — Latest Crypto Airdrops, Verified Bots & Online Earning | @primiumairdrop</title>
<meta name="description" content="...">
<meta name="keywords" content="primium airdrop, crypto airdrop 2025, free airdrop, telegram airdrop channel, ...">
<meta name="author" content="PRIMIUM AIRDROP — @primiumairdrop">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow, noodp, noydir">
<meta name="bingbot" content="index, follow">
```

### Search Engine / Indexing
```html
<link rel="canonical" href="https://primiumairdrop.netlify.app/">
<meta name="revisit-after" content="3 days">
<meta name="rating" content="general">
<meta name="distribution" content="global">
<meta name="language" content="English">
<meta name="geo.region" content="IN">
<meta name="coverage" content="Worldwide">
<meta name="target" content="all">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
```

### Open Graph
```html
<meta property="og:title" content="PRIMIUM AIRDROP — Latest Crypto Airdrops & Online Earning">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://primiumairdrop.netlify.app/">
<meta property="og:image" content="https://primiumairdrop.netlify.app/image/logo.png">
<meta property="og:image:alt" content="...">
<meta property="og:image:width" content="512">
<meta property="og:image:height" content="512">
<meta property="og:site_name" content="PRIMIUM AIRDROP">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="en_GB">
<meta property="og:see_also" content="https://t.me/primiumairdrop">
```

### Twitter / X
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
<meta name="twitter:image:alt" content="...">
<meta name="twitter:site" content="@primiumairdrop">
<meta name="twitter:creator" content="@primiumairdrop">
<meta name="twitter:domain" content="primiumairdrop.netlify.app">
```

### Extra / App Tags
```html
<meta name="theme-color" content="#FFB800">
<meta name="msapplication-TileColor" content="#010108">
<meta name="msapplication-TileImage" content="image/logo.png">
<meta name="application-name" content="PRIMIUM AIRDROP">
<meta name="apple-mobile-web-app-title" content="PRIMIUM AIRDROP">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">
<meta name="referrer" content="origin-when-cross-origin">
```

### Favicons
```html
<link rel="icon" type="image/png" sizes="32x32" href="image/logo.png">
<link rel="apple-touch-icon" href="image/logo.png">
<link rel="shortcut icon" href="image/logo.png">
<link rel="mask-icon" href="image/logo.png" color="#FFB800">
```

### JSON-LD Structured Data (2 schemas)
1. `Organization` schema with name, logo, sameAs Telegram URL
2. `WebSite` schema with URL

### HTML Semantic SEO Tags Used
| Tag | Usage |
|-----|-------|
| `<h1>` | "PRIMIUM AIRDROP" in hero |
| `<h2>` | Section headings (About, Features, How It Works, Promote, Contact) + hidden H2 in hero |
| `<h3>` | About subheading, Feature card titles, Contact heading |
| `<h4>` | Timeline step titles |
| `<h5>` | Hidden contact SEO heading |
| `<h6>` | Hidden contact SEO heading |
| `img alt` | All images have descriptive alt text |
| `<strong>` | Key terms in body text |
| `<em>` | Styled emphasis in headings |
| `aria-label` | All buttons and interactive elements |
| `role="navigation"` | Navbar |
| `role="region"` | Contact info blocks |
| `role="list"/"listitem"` | Timeline |
| `role="contentinfo"` | Footer |
| `role="alert"` | Toast notification |

---

## ⚡ JAVASCRIPT FEATURES

| Feature | Description |
|---------|-------------|
| **Three.js Galaxy** | 3000 particle spiral galaxy, floating icosahedron, octahedron, torus ring. Camera parallax on mousemove. |
| **Custom Cursor** | Dot + ring cursor. Ring lags behind (lerp). Expands on interactive elements. Hides when mouse leaves. |
| **3D Card Tilt** | CSS 3D perspective tilt on `.f-card` based on mouse position. Mouse spotlight radial gradient. |
| **Navbar** | Scroll-based class toggle, hamburger mobile menu with X animation |
| **Reveal on Scroll** | `IntersectionObserver` adds `.visible` class to `.reveal` elements (fade + translate) |
| **Animated Counters** | Numbers count up from 0 with eased cubic animation on scroll into view |
| **Typing Effect** | Cycles through 6 phrases with typewriter + delete animation on `#typeTarget` element |
| **Hero Logo Parallax** | `hero-3d-stage` rotates on mousemove (rotateX/rotateY) |
| **Toast Notification** | Appears bottom-right, slides in from right, auto-hides after 3.4s. Used for form submit + Telegram button clicks. |
| **Contact Form** | Fake submit with loading state, form reset, toast success message |
| **Telegram Buttons** | All `[data-tg]` elements open `https://t.me/primiumairdrop` in new tab |
| **Smooth Scroll** | All `a[href^="#"]` links scroll smoothly |
| **Active Nav Highlight** | Nav links get gold color when their section is in viewport |
| **Footer Year** | `#yr` element gets current year |

---

## 🖼️ LOGO (image/logo.png)

**Size:** 512×512px PNG with transparency  
**Description:** Deep blue circular background, golden diamond/gem shape in center (pointed top, wide bottom), bright inner highlight facets, "PRIMIUM" and "AIRDROP" text below gem, scattered star dots around edges, gold outer ring border  
**Generator:** Python Pillow library  
**Usage:** Navbar (40×40), Hero (full stage center), About cube (240×240), Footer (46×46), Favicon, OG image

---

## 🚀 HOW TO DEPLOY

1. Host all 4 files on any static hosting (Netlify, Vercel, GitHub Pages)
2. Keep the file structure: `index.html`, `style.css`, `app.js`, `image/logo.png`
3. Three.js is loaded from CDN: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`
4. Google Fonts loaded via `@import` in CSS
5. No build tools or frameworks required — pure HTML/CSS/JS

---

## 📋 COMPLETE REBUILD PROMPT FOR AI

```
Build a dark luxury 3D website for a Telegram channel called "PRIMIUM AIRDROP" (@primiumairdrop).

CHANNEL DESCRIPTION:
PRIMIUM AIRDROP shares verified crypto airdrops, earning bots, trusted earning websites, and earning apps. Open for promotions. Contact on Telegram: https://t.me/primiumairdrop

FILES TO CREATE:
- index.html (main page with all SEO tags)
- style.css (all styling)
- app.js (all JavaScript)
- image/logo.png (512x512 logo)

DESIGN: Deep space dark theme (#010108 background), gold (#FFB800) primary, cyan (#00E5FF) secondary. Fonts: Bebas Neue (headings), Syne (subheadings), Lexend (body), Space Mono (labels). Glassmorphism cards, 3D effects, noise texture overlay.

SECTIONS (in order):
1. Fixed Navbar — logo + nav links + "Join Now" gold button. Mobile hamburger menu.
2. Hero — 2-column: left=text with H1 "PRIMIUM AIRDROP" + typing effect + 2 buttons. Right=3D logo with orbit rings + floating orbs + info chips + mouse parallax tilt.
3. Ticker marquee — continuous scroll of airdrop-related items.
4. Stats Ribbon — 4 stats: 5000+ Members, 300+ Airdrops, 100% Verified, 24/7 Updates. Animated counters on scroll.
5. About — 3D rotating CSS cube (logo on front face) + text with channel description + pill tags.
6. Features — 6 glassmorphism cards with 3D tilt on hover + mouse spotlight: Airdrops, Bots, Websites, Apps, Updates, Promotions.
7. How It Works — alternating center-line timeline with 4 steps.
8. Promotion — glowing rotating conic gradient border panel. H2 "Promote Your Project With Us". Description + type tags + CTA button.
9. Contact — left: 3 contact items. Right: form (name, telegram, purpose dropdown, message textarea) with toast on submit.
10. Footer — 3-column: brand+socials | quick links | we share. Bottom copyright bar.

FLOATING: Gold CTA button bottom-right with float animation. Toast notification system.

JAVASCRIPT: Three.js WebGL scene (3000 particle spiral galaxy + floating icosahedron + octahedron + torus). Custom 2-part cursor (dot + lagging ring). 3D card tilt. Reveal on scroll (IntersectionObserver). Counter animation. Typing effect. Scroll-based camera parallax. Toast notifications. Contact form with fake submit.

SEO: All basic meta tags, Open Graph, Twitter Cards, canonical, robots, author, language, geo tags, theme-color, apple-mobile-web-app tags, JSON-LD Organization + WebSite schema, H1-H6 semantic structure, all img alt tags, ARIA labels.

RESPONSIVE: Mobile-first, hamburger menu at 768px, stacked layout on small screens.
```

---

*Document generated for PRIMIUM AIRDROP Website v2.0 (3D Edition)*  
*Channel: @primiumairdrop | Telegram: https://t.me/primiumairdrop*