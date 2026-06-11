# حوِّل | Hawel — Website Content & Creative Enhancement Report

> Full audit: content validation · media gaps · animation & interaction design · modern enterprise creative direction

---

## Part 1 — Content Validation & Corrections

### 🔴 Factual Errors to Fix Immediately

#### 1. SADAD is Saudi, not Qatari
**File:** `comparison.tsx`
**Current:** `'SADAD (قطر)'`
**Correct:** `'SADAD (السعودية)'`
SADAD is operated by Saudi Payments (a subsidiary of SAMA — the Saudi Central Bank). Listing it as Qatari in an investor-facing pitch deck is a credibility-damaging error.

#### 2. SkipCash is listed as Qatari — partially correct but incomplete
SkipCash is UAE/Qatar-regional. The label `SkipCash (قطر)` is acceptable but consider: `SkipCash (الخليج)` to be more accurate since it operates across GCC.

#### 3. "استعاد بنك السودان المركزي EBS الإلكتروني في يناير 2026" — needs source citation or softening
**File:** `why-hawel.tsx`
This is a very specific factual claim with no attribution. If it's accurate, add a footnote or rephrase as "وفقاً لإعلانات بنك السودان المركزي" to avoid it being challenged in investor due diligence.

#### 4. EBS Sandbox claim needs qualification
**File:** `why-hawel.tsx`
`"الـ Sandbox مفتوح"` — This is stated as fact. If the sandbox is not yet publicly accessible, this is misleading to developers who visit the site. Rephrase to: `"بيئة التجربة قيد التجهيز للمطورين المعتمدين"` unless you can confirm open access.

#### 5. Lucide icons version mismatch in package.json
**File:** `package.json`
`"lucide-react": "^1.16.0"` — Lucide-react's latest stable is in the `0.x` range. `1.x` does not exist on npm. This will cause `npm install` to fail. Fix to: `"lucide-react": "^0.513.0"` (or latest `0.x`).

---

### 🟡 Content Clarity & Messaging Issues

#### 6. Hero headline is generic
**Current:**
> بنية تحتية للمدفوعات في السودان بمستوى مطورين

**Problem:** "بمستوى مطورين" (developer-grade) is a technical phrase that means little to merchants — the other primary audience.

**Suggested rewrite (split headline):**
```
اجعل أي هاتف يقبل الدفع
```
**Subhead:** `بنية تحتية لمدفوعات التجار في السودان — API واحد يصل إلى 37 بنكاً عبر EBS`

This leads with the *outcome* (accept payments), not the architecture.

#### 7. Executive Summary blockquote is self-referential, not compelling
**Current:**
> «حوِّل» — للتحويل، وللتحول. الاسم يختصر الرؤية.

**Problem:** Opening a section by explaining your own name is introspective, not investor-forward. The name section belongs in `CompanyIdentity`.

**Suggested rewrite for blockquote:**
> السودان يعالج عشرات الملايين من معاملات الأموال يومياً — ولا تاجر واحد يستطيع قبول الدفع عبر الإنترنت. هذه هي الفجوة التي نبنيها لها.

#### 8. Stats section has inconsistent number formatting
**File:** `executive-summary.tsx`
```
{ value: '37', label: 'بنكاً على شبكة EBS' }
{ value: '+47 مليون', label: 'نسمة' }
{ value: '33 مليون', label: 'مشترك إنترنت' }
{ value: '0', label: 'بوابات دفع حالية للمطورين' }
```
- `+47 مليون` mixes the `+` prefix with Arabic numerals inconsistently vs `37`
- `0 بوابات دفع` is a powerful claim but sounds flat as a stat card. Replace with something that *punches*:
  - `٣٧` → write in Arabic-Indic numerals for visual consistency in RTL layouts
  - Change the `0` card to: value `٠` label `بوابة دفع API موجودة — نحن الأول`

#### 9. Pricing tier "Business" at 2.5% per transaction needs context
**File:** `pricing.tsx`
2.5% MDR is reasonable for the region but has no comparator. Investors and merchants will immediately ask "compared to what?" Add a line: `(السوق العالمي: 2.9% + رسوم ثابتة)` to anchor the value.

#### 10. "Stripe for Sudan" analogy is used in description but not in hero
The executive summary says *"فكّر في «حوِّل» كـ «Stripe» للسودان"* — this is your single strongest positioning statement and it's buried in paragraph 2. Pull it into a visible callout or badge element near the hero.

#### 11. GoToMarket "مدرسة حوِّل" is mentioned once with no elaboration
This is an interesting brand extension (educational YouTube/TikTok) that appears only as a one-liner in a channel list. Either give it a proper callout card or remove it — half-mentioned brand programs undermine pitch credibility.

#### 12. Roadmap dates need review for pre-launch context
**File:** `roadmap.tsx`
The site says "ما قبل الإطلاق · يونيو 2026" in the hero badge, yet the roadmap shows:
- Phase 1 MVP: Q3 2026 ✅ (consistent — just ahead)
- Phase 2 Growth: Q4 2026 (6 months after launch — very aggressive for a regulated fintech)

Consider adding a note: `"تعتمد الجداول الزمنية على الموافقة التنظيمية من بنك السودان المركزي"` — this protects the company legally and demonstrates regulatory maturity to investors.

#### 13. Architecture section mentions "Node.js/Fastify + Go" but stack tags show no Fastify
**File:** `architecture.tsx`
The body copy says `Node.js/Fastify` but the stack pill row only shows `Node.js`. Add `Fastify` to the pills, or remove the mention from the body text. Inconsistency signals a rushed pitch.

#### 14. Footer says "سري — لأصحاب المصلحة فقط" — contradicts public website existence
**File:** `site-footer.tsx`
If this is a public-facing website, the "confidential, stakeholders only" label is contradictory and legally awkward. If it's meant to be gated, add password protection. If it's public, remove the confidentiality notice entirely.

---

### 🟢 Content Strengths to Preserve

- The dual meaning of "حوِّل" (transfer + transform) is brilliant and should be more prominent
- "الشريعة أولاً" positioning is genuinely differentiated and explained well across pricing & architecture
- The USSD fallback section is a strong proof of local-market understanding
- "OFAC-Safe" as a design principle (not just compliance) is smart framing for international investors
- The 6-step payment link flow in `products.tsx` is clear and scannable

---

## Part 2 — Media Additions & Assets Needed

### Current Media Inventory
| File | Used In | Quality Assessment |
|---|---|---|
| `hero-merchant.png` | Hero | ✅ Strong opener — keep |
| `developer.png` | Company Identity | ✅ Good — contextual |
| `qr-payment.png` | Products | ✅ Relevant |
| `nile-sunset.png` | Why Hawel (bg) | ✅ Emotionally resonant |

### Missing Media — Priority Additions

#### 🔴 Critical (Needed for Launch)

**1. Dashboard UI Screenshot / Mockup**
- **Where:** Products section, Dashboard sub-section
- **What:** A high-fidelity screenshot or mockup of the merchant dashboard — Arabic RTL, dark-mode optional, showing transaction feed and chart
- **Why:** Currently the dashboard section has zero visual proof. This is the product's core UI and has no image.
- **Format:** `dashboard-mockup.png` — 1440×900px, or a browser frame mockup

**2. API Code Animation / Live Demo Panel**
- **Where:** Products → Gateway API card
- **What:** An animated terminal/code window showing a payment request → response cycle
- **Why:** The current static code snippet is convincing but dead. Even a CSS keyframe typing animation would transform this card.
- **Suggested implementation:** SVG animated code block or Lottie JSON

**3. Payment Link Flow Screen Recording (MP4/WebM)**
- **Where:** Products → Payment Links
- **What:** A 6–10 second looping screen recording of: dashboard → create link → WhatsApp share → customer pays → merchant gets notification
- **Why:** This is the core no-code merchant flow and requires zero imagination to understand if you *see* it.
- **Format:** `payment-link-demo.mp4` — 800×500px, autoplay muted loop

**4. QR Code Print Kit Sample (PDF preview image)**
- **Where:** Products → QR section
- **What:** A designed image showing a printed QR stand/card with the Hawel brand — shows merchants exactly what they'd receive
- **Why:** "مجموعات QR قابلة للطباعة" is described in text but seeing the physical artifact is far more compelling

#### 🟡 High Value

**5. Sudan Market Infographic**
- **Where:** Market Opportunity section
- **What:** A custom SVG map of Sudan with data overlaid — 47M population, 33M mobile internet subscribers, 37 EBS banks marked as nodes
- **Why:** The section currently uses only text bullets. A single data-rich visual is worth all five problem/opportunity bullets combined.

**6. EBS Network Diagram**
- **Where:** Architecture section
- **What:** A simplified system architecture diagram — Merchant → Hawel API → EBS Hub → 37 Banks (fan-out)
- **Why:** The architecture principles are well-written but abstract. A diagram shows investors you've actually thought through the integration.
- **Format:** SVG or an interactive React diagram component

**7. Comparison Section Visual Badges**
- **Where:** Comparison table column headers
- **What:** Small logo marks for SkipCash and SADAD (or placeholder icons) alongside the Hawel logo in the header row
- **Why:** Pure text column headers look sparse; visual marks make the table feel like a real market analysis.

**8. Team / Founding Story Photo**
- **Where:** Company Identity or new "الفريق" section
- **What:** Founder photo(s) or a "building in Khartoum" candid
- **Why:** Pre-launch fintech companies live or die on founder credibility. There is currently zero human presence beyond stock-feel images.

**9. Phone Mockup with App UI**
- **Where:** Roadmap → Phase 2 (Android app)
- **What:** A phone frame showing the planned mobile app interface
- **Why:** The roadmap lists "تطبيق هاتف (أندرويد أولاً)" but there's no visual — even a wireframe in a phone frame would work.

---

## Part 3 — Animation & Visual Effects Plan

### Animation Philosophy for Hawel
Hawel operates at the intersection of **trust** (financial infrastructure) and **urgency** (a market with zero current solutions). The animation language should feel:
- **Precise** — not playful. Fintech, not gaming.
- **Fast** — sub-300ms interactions signal performance
- **Purposeful** — every animation reveals information, it doesn't decorate

**Reference companies:** Stripe, Clerk, Vercel, Increase.com — all use motion to demonstrate product capability, not brand personality.

---

### Hero Section Animations

#### A. Ambient Background Grid Pulse
Replace the current static `backgroundImage` grid in `architecture.tsx` and the geometric lines in `hero.tsx` with a subtle animated version:
```css
/* Slow-breathing opacity cycle on the grid overlay */
@keyframes grid-pulse {
  0%, 100% { opacity: 0.12; }
  50%       { opacity: 0.22; }
}
.hero-grid { animation: grid-pulse 6s ease-in-out infinite; }
```

#### B. Hero Headline — Staggered Word Reveal
Each word in the h1 slides up from `translateY(20px)` with opacity 0→1, staggered by 80ms per word. Implementation: wrap each word in a `<span>` and use `animation-delay`.
```
بنية [delay: 0ms] تحتية [80ms] للمدفوعات [160ms] ...
```
This creates a premium "unveiling" feel without being excessive.

#### C. Hero Stats Counter Animation
The four stat cards in ExecutiveSummary should count up from 0 when they enter the viewport using an `IntersectionObserver`. The `0` card (no existing payment gateways) should end with a glitch/flash effect in red before landing — emphasizing the problem.

#### D. Gold Accent Line Draw
The `border-r-4 border-gold` on the executive summary blockquote should animate: the border grows from height 0 → 100% over 600ms on scroll entry. This draws the eye to the most important quote.

---

### Scroll-Triggered Reveals (Section by Section)

#### Standard Reveal Pattern (apply to all section headings)
```js
// Framer Motion or CSS @keyframes + IntersectionObserver
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } // ease-out-expo
```
Apply with a 50ms stagger between eyebrow → h2 → description.

#### Market Opportunity Section
- Problem bullets: each `<li>` enters from right (RTL: `translateX(20px)` → 0) staggered 60ms
- Opportunity bullets: enter from left (`translateX(-20px)` → 0), staggered 60ms
- The visual contrast of opposite directions reinforces the problem/solution framing

#### Products Section — Code Block Typing Effect
The API code snippet in the gateway card should animate as if being typed:
```js
// Show characters one by one with setInterval(25ms)
// Then highlight the response JSON with a fade
```
Triggers once on scroll entry via IntersectionObserver.

#### Comparison Table — Column Highlight Sweep
On scroll entry, the Hawel column (rightmost in RTL) should briefly flash a gold background (`bg-gold/20`) that sweeps top to bottom across all rows, settling into the subtle `bg-primary/5` tint. Duration: 800ms, easing: ease-out. This draws the eye to your column in a table that users scan quickly.

#### Pricing Cards — Hover Depth Effect
The featured Business tier card should have:
```css
transform: translateY(0) scale(1) → hover: translateY(-4px) scale(1.01)
box-shadow: progressive elevation on hover
```
Non-featured cards: subtle `translateY(-2px)` on hover, no scale.

#### Architecture Grid Cards
On scroll entry, the 6 principle cards enter in a **cascade** — top-left first, flowing to bottom-right (or right-to-left for RTL):
```
card[0]: delay 0ms
card[1]: delay 80ms
card[2]: delay 160ms  (first row complete)
card[3]: delay 240ms
card[4]: delay 320ms
card[5]: delay 400ms
```
Each card: `opacity: 0, scale: 0.96` → `opacity: 1, scale: 1`, duration 400ms.

#### Roadmap — Timeline Draw Animation
Add a horizontal connecting line between the 4 phase cards. On scroll entry, the line draws left-to-right (or right-to-left for RTL) via SVG `stroke-dashoffset` animation:
```svg
<line stroke-dasharray="1000" stroke-dashoffset="1000">
  <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="1.2s" />
</line>
```
As the line reaches each phase card, the card icon pulses with a gold ring.

---

### Micro-Interaction Details

#### Navigation
- Active section highlight: as user scrolls, the current nav link transitions its color to `text-foreground` with a 150ms ease
- Mobile menu: slide down with `max-height` animation (not display toggle) for smooth open/close
- Logo hover: the SVG arrow paths inside the Hawel logo briefly animate — the bottom arrow nudges left 2px and returns over 200ms

#### Buttons
- Primary gold CTA: on hover, add a shimmer sweep — a `linear-gradient` moves across the button from right to left over 600ms
- Outline buttons: border color transitions from `border-primary-foreground/30` to `border-gold` on hover (300ms)
- All buttons: press state `scale(0.97)` for 80ms tactile feedback

#### Cards (Market segments, Architecture principles)
- On hover: icon background transitions from `bg-primary/10` → `bg-primary`, icon color flips to white
- Card border: `border-border` → `border-primary/40` on hover (200ms)
- Subtle `box-shadow` lift: `0 4px 20px rgba(0,0,0,0.08)` on hover

#### Stats Cards (Executive Summary)
- On hover: the value number briefly scales to `scale(1.08)` for 150ms — like a live ticker tick
- Border subtly glows: `box-shadow: 0 0 0 1px oklch(0.42 0.11 162 / 30%)` on hover

---

### Ambient & Atmospheric Effects

#### 1. Scrolling Nile Parallax (Why Hawel section)
The `nile-sunset.png` background image should move at 60% scroll speed (parallax):
```css
background-attachment: fixed; /* CSS-only approximation */
/* Or with JS: transform: translateY(scrollY * 0.4) */
```
This makes the closing section feel cinematic and distinctly tied to Sudan.

#### 2. EBS Network Node Animation (Architecture section)
A subtle SVG background showing pulsing connection nodes — circles connected by faint lines that pulse outward like a payment network heartbeat. Opacity: 0.06. This replaces the current static grid and communicates "live financial network" atmospherically.

#### 3. Gold Particle Trail on Hero CTA
On hover over "كن من أوائل التجار", 6–8 small gold dots (`size: 3px`, `background: var(--gold)`) drift upward and fade from the button edge over 800ms. Subtle — 3 dots max visible at once. This is the single "signature" animation that sets the brand apart.

#### 4. USSD Terminal Blink
In the Products → USSD section, the code block showing `*34*amount*ref#` should have a blinking cursor at the end:
```css
.ussd-code::after {
  content: '|';
  animation: blink 1s step-end infinite;
}
```

---

### Recommended Implementation Libraries

| Need | Library | Why |
|---|---|---|
| Scroll-triggered reveals | **Framer Motion** (`motion/react`) | Native React, excellent RTL support, viewport prop handles IntersectionObserver |
| Code typing effect | **typed.js** or custom hook | Lightweight, easy to configure |
| Counter animations | Custom `useCountUp` hook | No extra dep needed, ~15 lines |
| Lottie animations | **lottie-react** | For dashboard animation or logo intro |
| Parallax | **@react-spring/parallax** or CSS `scroll-timeline` | CSS-only is fine for the hero bg |
| SVG line drawing | CSS `stroke-dashoffset` | No lib needed |
| Network diagram | **ReactFlow** or custom SVG | ReactFlow for interactive, SVG for static |

---

## Part 4 — Modern Creative Enterprise Upgrades

### Visual Identity Gaps

#### 1. No "Social Proof" Section
Every modern enterprise SaaS has logos of integrations, partners, or early customers. Even pre-launch, you can show:
- EBS logo (official integration partner)
- Payment network logos (Zain Cash, MTN)
- Tech partner logos (AWS Frankfurt — matches OFAC-safe claim)

Add a **"مدعوم بشراكات موثوقة"** ticker bar between Hero and Executive Summary — a horizontal auto-scrolling logo strip.

#### 2. No "How It Works" Visual Flow
The current site explains *what* Hawel does through feature lists. It never shows *how* in a simple visual flow. Add a 3-step illustrated section:

```
[تاجر ينشئ رابط] → [عميل يدفع] → [تسوية T+1 للتاجر]
     30 ثانية              OTP              الغد
```
With connecting animated arrows.

#### 3. No Live Demo or Interactive Element
Stripe has a live payment demo. Clerk has a live auth demo. Add an **interactive payment link generator** on the page — type a product name and price, see a preview of `pay.hawel.sd/p/demo` generate in real time (no backend needed, pure JS).

#### 4. No Trust Signals
For a fintech, the following should appear prominently:
- "مرخص من بنك السودان المركزي" badge (or "قيد الترخيص" if pending)
- "PCI DSS Level 2" compliance badge (or roadmap item)
- "AES-256 تشفير" with a lock icon near any CTA
- "SSL محمي" in the footer

#### 5. Testimonials Section (Pre-launch Variant)
Pre-launch companies often use:
- Quotes from advisors/mentors
- Quotes from pilot merchants (even informal beta testers)
- Investor validation quotes

Even one authentic quote with a name and title is more credible than none.

#### 6. Newsletter / Waitlist CTA
The hero CTA goes to `#contact` → email links. A proper **waitlist form** (name, business type, phone number) would:
- Capture leads directly
- Allow segmentation (merchant vs developer vs investor)
- Give the team a launch list

Integration: Loops.so, Mailchimp, or a simple Supabase form — all have free tiers.

---

### Typography Enhancement

The current type treatment uses Cairo for everything. Consider:

- **Display headings (h1, h2):** Cairo 800 weight — keep
- **Body:** Cairo 400/500 — keep
- **Data/numbers:** Add `font-variant-numeric: tabular-nums` to all stat numbers so they align in tables
- **Code blocks:** Geist Mono is set up but not used consistently — ensure all code, URLs, and technical strings use `dir="ltr" font-mono`
- **Arabic numerals:** Consider switching stats to Arabic-Indic (`٣٧`, `٤٧`) for cultural resonance; use Western numerals only for developer-facing content

---

### Color System Enhancement

The emerald + gold palette is distinctive and culturally resonant (Sudanese flag colors adjacent, Islamic finance association). Enhancements:

1. **Add a warm off-white background variant** for alternating sections — currently all sections use either `bg-background` or `bg-secondary/50`, which creates a flat rhythm. Add a `bg-amber-50/30` or `oklch(0.98 0.008 85)` warm sand tint for the Company Identity section specifically.

2. **Gold gradient on key CTAs:** Instead of flat `bg-gold`, use `background: linear-gradient(135deg, oklch(0.76 0.12 85), oklch(0.82 0.14 75))` for a premium metallic feel.

3. **Section dividers:** Replace the invisible section breaks with subtle angled dividers (CSS clip-path) or a thin gold `<hr>` with `0.3 opacity` to create visual rhythm without heavy borders.

---

## Summary Priority Matrix

| Priority | Item | Effort | Impact |
|---|---|---|---|
| 🔴 P0 | Fix SADAD country label (Saudi not Qatar) | 2 min | Critical credibility |
| 🔴 P0 | Fix lucide-react version in package.json | 2 min | Build failure |
| 🔴 P0 | Remove "سري — لأصحاب المصلحة فقط" footer text | 2 min | Legal/brand conflict |
| 🔴 P0 | Add dashboard UI mockup image | 2–4 hrs | Biggest media gap |
| 🟡 P1 | Add OG/social metadata (WhatsApp share preview) | 30 min | Distribution impact |
| 🟡 P1 | Wire footer links to real anchors | 30 min | UX |
| 🟡 P1 | Add scroll-reveal animations (Framer Motion) | 4–6 hrs | Premium feel |
| 🟡 P1 | Add partner/integration logo bar | 2 hrs | Trust signal |
| 🟡 P1 | Add waitlist/contact form | 3 hrs | Lead capture |
| 🟢 P2 | Hero rewrite (outcome-first headline) | 1 hr | Conversion |
| 🟢 P2 | Code block typing animation (API card) | 2 hrs | Product storytelling |
| 🟢 P2 | Sudan market infographic SVG | 4 hrs | Investor appeal |
| 🟢 P2 | EBS network diagram | 4 hrs | Technical credibility |
| 🟢 P2 | Pricing comparator line (vs 2.9% global) | 15 min | Commercial clarity |
| 🟢 P2 | Parallax on Nile sunset section | 1 hr | Cinematic finish |
| 🔵 P3 | Interactive payment link demo | 6–8 hrs | Signature feature |
| 🔵 P3 | Arabic-Indic numeral conversion in stats | 1 hr | Cultural resonance |
| 🔵 P3 | Gold shimmer on CTA button | 1 hr | Signature animation |
| 🔵 P3 | Testimonials / advisor quotes section | 2 hrs | Social proof |
| 🔵 P3 | USSD blinking cursor animation | 30 min | Charm detail |

---

*Report generated June 2026 — حوِّل website audit v1.0*
