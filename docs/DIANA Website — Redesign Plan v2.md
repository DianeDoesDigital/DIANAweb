# DIANA Website — Redesign Plan v2

> **Archive:** The v1 build is safely preserved in `DIANA-web/v1-archive/`.

---

## Corrections from App Deep-Dive

| Item | Was | Is |
|---|---|---|
| Middle tab name | "Pay" | **Connect** (Explore · Connect · Support mirrors the explainer slides) |
| Tab structure | 5 tabs | **Nexus** (global pulse) · **Explore** · **Connect** · **Support** · **Profile** (personal pulse) |
| Payment flow | QR only | QR scan **or** item selection directly from Explore (menu/collection/services → total → pay without scanning) |
| Merchant categories | 7 | **8** — added **Entertainment** (vegan artists, musicians, filmmakers, event producers) |
| Sanctuaries | "Partner" | All 11 are **mock/demo data** |

### 8 Merchant Categories
Food & Drink · Retail · Wellness · Experiences · Travel · Professionals · Resources · **Entertainment**

---

## Decided

| Question | Decision |
|---|---|
| Single-page vs multi-page | **Multi-page** (tight landing page + dedicated partner/investor routes) |
| Sections 4/5/6 (Nexus, Directory, Sanctuaries) | **Replaced by embedded iframe** of the live app demo |
| How It Works + Double Impact Engine | **Kept** as lightweight explainers above the iframe (passive scan before active engagement) |
| Champion Membership on landing page | **No** — lives in-app only; premature for top-of-funnel |
| "I AM DIANA" campaign | **Deferred** to post-launch when there's community traction |
| "Digital Infrastructure for Animal Networks and Advocacy" | **Moved to Footer / About** — not in the hero |
| Merchant / Sanctuary pages | **Yes** — dedicated partner pages with different messaging |
| Founder section | **Yes** — brief, elegant section on the site |
| Investor page | **Yes** — separate, potentially gated route |
| Section ordering | **Follows app flow** — Splash → Explain → Proof → Activate |

---

## Site Architecture

```
diana.com/
├── /                     → Home (single-page scroll)
├── /merchants            → For Ethical Merchants
├── /sanctuaries          → For Animal Sanctuaries
├── /about                → About DIANA + Founder
└── /get-involved         → Join the Team / Ambassador / Invest & Advise / Partner / Sponsor & Advertise
```

---

## Page 1: Home `/`

A premium single-page scroll. The primary conversion funnel.

### Section 1 — Hero
- Full-viewport cinematic DIANA logo reveal (matching app splash animation)
- Tagline: *"where daily actions quietly support animals"*
- Primary CTA: `ACTIVATE` → scrolls to signup section
- Secondary: *"learn how it works"* → scrolls to Section 2
- No technical subtitle in hero — pure emotion

### Section 2 — How It Works (The Three Pillars)
Mirrors the app's Explainer Slides:
- **Explore** — discover a curated, global network of ethical businesses, events, and services aligned with your values
- **Connect** — use a payment method where your daily transactions also cater to the needs of a rescued animal without you spending extra
- **Support** — a minimum of 5% flows automatically to sanctuaries, recurring and continuous support built directly into the system

> Visual treatment: 3 cards/columns with animated icons (Map, QrCode, Heart), appearing on scroll.

### Section 3 — The Double Impact Engine
Visual explainer of the financial flow:
1. **Merchant Pledge** — 5%+ of every purchase flows automatically
2. **DIANA Platform Contribution** — DIANA matches from its own platform fee
3. **Extra Donation** — optional generosity at checkout
4. **Double Impact** — watch an ethical ad to double the sanctuary contribution

> Interactive element: A slider/calculator — *"If you spend $X/month at ethical merchants, $Y flows to sanctuaries automatically"*

### Section 4 — Try the Demo (Embedded App)
- Full-width embedded iframe of the live DIANA app (`expo web` build)
- Framed within a premium device mockup or clean container
- Brief intro text: *"Experience the full DIANA ecosystem — browse merchants, simulate a purchase, explore sanctuaries"*

### Section 5 — Activate (Interest Capture)
- Lightweight signup form: **Name, Email, Role** (Individual Advocate / Ethical Merchant / Animal Sanctuary)
- On submit: confirmation + direct link to download/open the DIANA app for full onboarding
- Role-specific redirect: Merchants → `/merchants`, Sanctuaries → `/sanctuaries`
- Full account creation and onboarding lives in the app, not the website

### Section 6 — Footer
- DIANA wordmark with neon glow
- *"Digital Infrastructure for Animal Networks and Advocacy"*
- Navigation links (Home, Merchants, Sanctuaries, About, Investors)
- Legal / Privacy / Terms
- Social links
- © DRGM Pty Ltd

---

## Page 2: For Ethical Merchants `/merchants`

A dedicated page addressing merchant-specific concerns and benefits.

### Content
- Hero: *"Your business already makes a difference. Let DIANA prove it."*
- What's in it for them:
  - Free listing in a curated ethical directory
  - Automatic impact attribution (customers see exactly how their purchase helped)
  - Storefront management tools
  - Promotions system
  - Supporter feed visibility
- The Pledge explained (merchant sets their own 5%+ commitment)
- How the merchant Explore experience works (their storefront, "Viewing As Consumer" mode)
- Application form / Full signup flow

---

## Page 3: For Animal Sanctuaries `/sanctuaries`

A dedicated page for sanctuaries to understand the DIANA support pipeline.

### Content
- Hero: *"A continuous stream of care, built into everyday life."*
- What's in it for them:
  - Passive recurring income from merchant pledge network
  - Monthly Care from individual supporters
  - One-Time Gifts
  - Rich sanctuary profile (video, gallery, resident profiles, visitor quotes, fund breakdown)
  - Supporter network visibility
  - Sanctuary recruitment tools
- How funds flow to them (Merchant Pledge → DIANA Platform Contribution → Direct Donations)
- Application form / Full signup flow

---

## Page 4: About DIANA `/about`

### Content
- **What is DIANA**: Digital Infrastructure for Animal Networks and Advocacy
- **The Vision**: Brief, emotive mission statement
- **The Founder**: Diane (Diana Rose G. Mejilla) — photo, brief story, what drives the mission
- **DRGM Pty Ltd**: The entity behind DIANA
- **The Nexus**: How Advocates, Ethical Merchants, and Sanctuaries form an interconnected ecosystem
- Link back to Home CTA

---

## Page 5: Get Involved `/get-involved`

A movement page — not just investors, but everyone who wants to help build DIANA.

### 5 Categories

#### 1. Join the Team
- **Contributor** — flexible, task-based (a few hours/week). Gets experience, portfolio credit, reference, listed as contributor.
- **Core Team** — serious commitment, ongoing role. Sweat equity agreement, backpay when funded, early team credit.

#### 2. Ambassador
- Community advocates who spread the word in their city/community
- Represent DIANA at events, on socials, in their networks

#### 3. Invest / Advise
- Financial backers (angel, pre-seed, strategic)
- Strategic mentors and advisors (advisory equity)
- Platform overview, market innovation, competitive moat
- Pitch Deck download or inline (potentially gated)
- Contact / Meeting request form

#### 4. Partner
- Aligned organisations that aren't merchants or sanctuaries
- Vegan media, event organisers, advocacy groups, aligned nonprofits

#### 5. Sponsor / Advertise
- Non-vegan companies with **fully plant-based product lines**
- Advertise on the DIANA app but do NOT list as merchants
- Ad spend directly funds animal sanctuaries (Double Impact flow)
- Reach a highly engaged, ethically motivated audience
- Promotes their plant-based products specifically, not broader brand

---

## Decisions Log

| Decision | Resolution |
|---|---|
| Waitlist vs Full Signup | **Hybrid** — website captures interest (name, email, role), full onboarding lives in the app |
| Investors page | **Replaced** with Get Involved page — 5 categories: Join the Team, Ambassador, Invest/Advise, Partner, Sponsor/Advertise |
| Volunteer vs Join the Team | **Merged** into Join the Team with two tiers (Contributor + Core Team) |
| Mentor / Advisor placement | **Folded into** Invest / Advise — same stakeholder conversation |

---

## Design Tokens (Unchanged — exact match to Theme.ts)

| Token | Value |
|---|---|
| Background | `#0A0507` (Polished Obsidian) |
| Primary | `#FF0099` (Hot Pink) |
| Secondary / Text | `#FFDDEE` (Soft Pink) |
| Surface | `rgba(255, 221, 238, 0.04)` |
| Surface Hover | `rgba(255, 221, 238, 0.08)` |
| Surface Light | `rgba(255, 221, 238, 0.12)` |
| Border | `rgba(255, 221, 238, 0.15)` |
| Text Muted | `rgba(255, 221, 238, 0.6)` |
| Text Subtle | `rgba(255, 221, 238, 0.4)` |
| Success | `#00FF88` |
| Error | `#FF4444` |

**Typography:** Playfair Display (headings) · Outfit (labels/bold) · Inter (body)

## Technical Stack
- **Framework:** Next.js 16 (App Router) — already scaffolded
- **Styling:** Tailwind CSS v4
- **Images:** Generated via `generate_image` tool (no placeholders)
- **Scrollbar:** Hidden globally
- **Demo Iframe:** Points to the DIANA app's Expo web build
