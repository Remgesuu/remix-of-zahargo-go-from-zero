# ZaharGo Landing Page Implementation Plan

A comprehensive, step-by-step guide to improve the website based on combined audit findings.

---

## Executive Summary

**Current State:** Clean, well-structured landing page with good typography (Fraunces + Satoshi) and warm color palette, but lacking trust signals, proof elements, and production polish.

**Critical Issues:**
- Build blocker in CSS import order
- Default Lovable meta/OG tags in `index.html`
- Mentor section uses placeholder avatar
- Weak proof/trust base for a high-ticket product
- Telegram-only CTA without qualification step

**Target Outcome:** A conversion-optimized, polished landing page that builds trust and clearly communicates value for the target audience.

---

## Phase 0: Product Foundation (Pre-Development)

> These decisions must be made before any code changes. Without them, implementation work will be wasted.

### Task 0.1: Define Target Audience
**Priority:** Critical | **Owner:** Product/Marketing

- [ ] Choose ONE primary audience segment:
  - Option A: Complete beginners entering tech
  - Option B: Existing IT professionals switching to Go
  - Option C: Junior developers seeking career acceleration
- [ ] Document the decision and reasoning
- [ ] All copy changes will follow this choice

### Task 0.2: Gather Real Proof Assets
**Priority:** Critical | **Owner:** Product/Marketing

Collect before implementation:
- [ ] Professional mentor photo (high-resolution, well-lit)
- [ ] 3-5 student success stories with:
  - Student name (or anonymized identifier)
  - Starting point (background, experience level)
  - Timeline to employment
  - Current role and company (with permission)
  - Quote or testimonial
- [ ] Company logos where graduates work (with permission)
- [ ] Verified salary data or remove salary claims entirely
- [ ] VIP guarantee terms (exact conditions, eligibility, refund process)

### Task 0.3: Define Conversion Strategy
**Priority:** High | **Owner:** Product/Marketing

- [ ] Decide primary CTA path:
  - Option A: Lead form (name, email, background) → Telegram follow-up
  - Option B: Diagnostic call booking → Telegram for questions
  - Option C: Keep Telegram-only (not recommended)
- [ ] Define urgency elements (if real):
  - Limited spots per cohort
  - Application deadline
  - Price increase date

### Task 0.4: Salary Section Decision
**Priority:** Medium | **Owner:** Product/Marketing

- [ ] If real data exists: prepare sources and timeline proofs
- [ ] If no verifiable data: plan to remove `SalaryGrowth.tsx` entirely

---

## Phase 1: Critical Bug Fixes & Cleanup

> These tasks fix issues that break the build or create immediate credibility damage.

### Task 1.1: Fix CSS Import Order (Build Blocker)
**Priority:** Critical | **File:** `src/index.css`

**Problem:** `@import` statements must come before `@tailwind` directives.

**Steps:**
1. Open `src/index.css`
2. Move all `@import` statements to the very top of the file (before line 1's `@tailwind base;`)
3. Verify order is:
   ```css
   @import url('...');  /* All imports first */
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Run `npm run build` to verify fix
5. Commit with message: `fix: CSS import order for successful build`

### Task 1.2: Clean Up index.html Head
**Priority:** Critical | **File:** `index.html`

**Problem:** Default Lovable meta tags destroy share previews and brand perception.

**Steps:**
1. Open `index.html`
2. Remove duplicate `<title>` tags (keep only one)
3. Replace meta content:
   ```html
   <title>ZaharGo - Go-разработка с нуля до продакшена</title>
   <meta name="description" content="Индивидуальное менторство по Go: 5 реальных проектов, 57 практических заданий, личное сопровождение до трудоустройства">
   <meta property="og:title" content="ZaharGo - Go-разработка с нуля до продакшена">
   <meta property="og:description" content="Индивидуальное менторство по Go: 5 реальных проектов, 57 практических заданий">
   <meta property="og:image" content="/og-image.jpg">
   <meta property="og:type" content="website">
   <meta name="twitter:card" content="summary_large_image">
   ```
4. Remove any Lovable-specific comments or TODO markers
5. Create or source `public/og-image.jpg` (1200x630px recommended)
6. Test with [OpenGraph Preview](https://www.opengraph.xyz/)

### Task 1.3: Replace Mentor Placeholder
**Priority:** Critical | **File:** `src/components/landing/Mentor.tsx`

**Problem:** Avatar with initials "ZJ" looks unprofessional for a premium product.

**Steps:**
1. Obtain professional mentor photo (from Task 0.2)
2. Save to `public/images/mentor.jpg` (optimize for web, ~200KB max)
3. In `Mentor.tsx`, replace the avatar fallback section:
   ```tsx
   // Replace placeholder div with actual image
   <img 
     src="/images/mentor.jpg" 
     alt="Захар Жаров - Go-ментор"
     className="w-full h-full object-cover"
   />
   ```
4. Remove the fallback initials code
5. Consider adding a short video thumbnail if available

### Task 1.4: Extract TG_LINK to Config
**Priority:** Medium | **Files:** Multiple components

**Problem:** Telegram link hardcoded in 5+ files creates maintenance risk.

**Steps:**
1. Create `src/config/links.ts`:
   ```typescript
   export const LINKS = {
     telegram: 'https://t.me/zahar_go',
     // Add other links as needed
   } as const;
   ```
2. Update imports in:
   - `Hero.tsx`
   - `Pricing.tsx`
   - `FinalCTA.tsx`
   - `Navigation.tsx` (if applicable)
   - Any other files using the link
3. Replace hardcoded strings with `LINKS.telegram`

### Task 1.5: Remove Unused Code
**Priority:** Low | **Files:** Various

**Steps:**
1. In `src/index.css`, remove unused animation helpers (around line 89)
2. Remove or update default README.md content
3. Review `src/test/example.test.ts` - update or remove placeholder test

---

## Phase 2: Accessibility & Mobile UX

> These tasks fix usability issues that affect user experience and accessibility.

### Task 2.1: Rebuild Mobile Menu as Proper Overlay
**Priority:** High | **File:** `src/components/landing/Navigation.tsx`

**Problem:** Current mobile menu doesn't isolate content or handle focus properly.

**Implementation Requirements:**
1. Add semi-transparent backdrop (scrim) behind menu
2. Implement scroll lock when menu is open:
   ```typescript
   useEffect(() => {
     if (isMenuOpen) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = '';
     }
     return () => { document.body.style.overflow = ''; };
   }, [isMenuOpen]);
   ```
3. Close menu on Escape key press
4. Trap focus within menu when open
5. Add proper `aria-expanded` and `aria-controls` attributes
6. Animate entrance/exit (slide from right or fade)

### Task 2.2: Fix Logo Navigation Behavior
**Priority:** Medium | **Files:** `Navigation.tsx`, `Footer.tsx`

**Problem:** Logo links to `/` causing full page reload instead of smooth scroll to top.

**Steps:**
1. In `Navigation.tsx` (around line 29), change logo link:
   ```tsx
   <a href="#top" onClick={(e) => {
     e.preventDefault();
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }}>
   ```
2. Apply same pattern in `Footer.tsx` (around line 9)
3. Add `id="top"` to the top-level element of the page

### Task 2.3: Add Scroll Offset for Fixed Navigation
**Priority:** Medium | **File:** `src/index.css` or individual sections

**Problem:** Fixed header overlaps section headers when using anchor links.

**Steps:**
1. Add CSS scroll-margin to all section headings:
   ```css
   [id] {
     scroll-margin-top: 80px; /* Height of fixed nav + padding */
   }
   ```
   Or use Tailwind class on each section: `scroll-mt-20`

### Task 2.4: Add Focus States to Interactive Elements
**Priority:** High | **Files:** `Navigation.tsx`, `FAQ.tsx`, `Curriculum.tsx`, buttons

**Problem:** Missing `focus-visible` states harm keyboard navigation.

**Steps:**
1. Ensure all clickable elements have visible focus states:
   ```tsx
   className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
   ```
2. Add `aria-expanded` to accordion triggers:
   ```tsx
   <button aria-expanded={isOpen} aria-controls={`panel-${id}`}>
   ```
3. Add corresponding `id` to accordion panels:
   ```tsx
   <div id={`panel-${id}`} role="region">
   ```

### Task 2.5: Add Sticky Mobile CTA
**Priority:** Medium | **File:** New component or `Hero.tsx`

**Problem:** CTA disappears after scroll on mobile.

**Steps:**
1. Create sticky bottom bar for mobile:
   ```tsx
   <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t md:hidden z-40">
     <Button className="w-full" asChild>
       <a href={LINKS.telegram}>Записаться на обучение</a>
     </Button>
   </div>
   ```
2. Add bottom padding to page content to prevent overlap

---

## Phase 3: Conversion Architecture

> These tasks restructure the page for better conversion flow.

### Task 3.1: Add Proof Block After Hero
**Priority:** Critical | **File:** New component `src/components/landing/Testimonials.tsx`

**Problem:** No social proof immediately after the main promise.

**Implementation:**
1. Create new component with 3-5 student testimonials
2. Each testimonial should include:
   - Photo (or anonymized avatar)
   - Name and current role
   - Quote about their journey
   - "Before" state (e.g., "Marketing manager")
   - "After" state (e.g., "Backend developer at Company X")
   - Timeline (e.g., "6 months")
3. Place immediately after `<Hero />` in `Index.tsx`

**Structure:**
```tsx
const testimonials = [
  {
    name: "Имя",
    role: "Go-разработчик в Company",
    avatar: "/images/students/name.jpg",
    quote: "Цитата о программе...",
    before: "Был: маркетолог",
    after: "Стал: backend-разработчик",
    timeline: "6 месяцев"
  },
  // ... more testimonials
];
```

### Task 3.2: Rewrite Hero for Single Audience
**Priority:** High | **File:** `src/components/landing/Hero.tsx`

**Problem:** Messaging is too broad, trying to appeal to everyone.

**Steps (after Task 0.1 decision):**
1. Update headline to speak directly to chosen segment
2. Rewrite subheadline with specific pain points
3. Adjust trust indicators to match audience concerns
4. Example for "Career Switchers":
   - Headline: "Войдите в Go-разработку за 6-9 месяцев"
   - Subhead: "Для тех, кто уже работает в IT и хочет перейти в backend на Go"

### Task 3.3: Show Full Pricing Transparently
**Priority:** High | **File:** `src/components/landing/Pricing.tsx`

**Problem:** Monthly price without total creates distrust.

**Steps:**
1. Display both monthly AND total price:
   ```tsx
   <p className="text-3xl font-bold">11 000 ₽/мес</p>
   <p className="text-sm text-muted-foreground">
     Итого за 36 месяцев: 396 000 ₽
   </p>
   ```
2. If installment terms vary, show range clearly
3. Add price comparison context if appropriate

### Task 3.4: Document VIP Guarantee Terms
**Priority:** High | **File:** `src/components/landing/Pricing.tsx`

**Problem:** "Guarantee" claim without details reduces trust.

**Steps:**
1. Add expandable section or tooltip with guarantee terms:
   - Who qualifies
   - What "no job" means (timeframe, effort requirements)
   - What student must do to qualify
   - Refund amount and process
2. If terms can't be disclosed, remove guarantee claim entirely

### Task 3.5: Add Lead Capture Form
**Priority:** High | **File:** New component or modify CTAs

**Problem:** Telegram-only CTA loses leads who aren't ready to message.

**Options:**
1. **Simple form**: Name, email, background → sends to webhook
2. **Calendly embed**: Direct booking for intro call
3. **Typeform/Quiz**: Qualification questions before Telegram

**Implementation:**
1. Create form component with validation
2. Set up form submission (Supabase, webhook, or email service)
3. Replace primary CTAs with form trigger
4. Keep Telegram as secondary option: "Или напишите в Telegram"

### Task 3.6: Rewrite FAQ for Real Objections
**Priority:** Medium | **File:** `src/components/landing/FAQ.tsx`

**Problem:** Current FAQ doesn't address key buying objections.

**Essential questions to answer:**
1. "Нужен ли опыт программирования?" (entry barrier)
2. "Сколько времени нужно уделять в неделю?" (commitment)
3. "Как быстро я смогу найти работу?" (outcome timeline)
4. "Что если у меня не получится?" (risk reduction)
5. "Как устроена гарантия трудоустройства?" (if offered)
6. "Можно ли совмещать с работой?" (logistics)
7. "Чем это отличается от бесплатных курсов?" (value prop)

---

## Phase 4: Information Architecture

> These tasks simplify the page structure and remove redundancy.

### Task 4.1: Merge Portfolio and Curriculum
**Priority:** High | **Files:** `Portfolio.tsx`, `Curriculum.tsx`

**Problem:** Both sections describe the same 5 projects, creating redundancy.

**Approach:**
1. Create unified "Program Journey" section
2. Structure: Module → What you learn → What you build
3. Keep project cards but integrate them into curriculum flow
4. Remove standalone Portfolio section

### Task 4.2: Decide Salary Section Fate
**Priority:** Medium | **File:** `SalaryGrowth.tsx`, `Index.tsx`

**Options:**
1. **If verified data exists:** Keep but add sources/timeframes
2. **If no proof:** Remove entirely from `Index.tsx`
3. **Alternative:** Integrate salary info into testimonials with real numbers

### Task 4.3: Expand Navigation
**Priority:** Low | **Files:** `Navigation.tsx`, `Footer.tsx`

**Problem:** Navigation is too limited for decision-making flow.

**Add links to:**
- Mentor section
- Testimonials/Results
- Final CTA

### Task 4.4: Add Pricing Comparison
**Priority:** Medium | **File:** `Pricing.tsx`

**Problem:** Hard to compare tiers at a glance.

**Implementation:**
1. Add feature comparison list or table
2. Clearly highlight VIP-exclusive features
3. Visual differentiation (badge, border, background)

---

## Phase 5: Visual Polish

> These tasks elevate the design from "clean template" to "premium product."

### Task 5.1: Add Hero Visual Element
**Priority:** High | **File:** `Hero.tsx`

**Problem:** Hero is text-only, missing visual anchor.

**Options (choose one):**
1. Animated terminal showing Go code
2. Project preview mockups
3. Abstract geometric illustration (branded)
4. Video thumbnail with play button

**Avoid:** Generic blur circles, stock photos, AI-generated filler.

### Task 5.2: Redesign One Key Section
**Priority:** Medium | **Files:** `Portfolio.tsx` or `Pricing.tsx`

**Problem:** All sections use same card pattern.

**Ideas for Portfolio:**
- Bento grid with varied card sizes
- Timeline/journey visualization
- Interactive project previews

**Ideas for Pricing:**
- Side-by-side comparison with feature matrix
- Visual "most popular" highlight
- Animated selection state

### Task 5.3: Enhance Dark Sections
**Priority:** Low | **File:** `src/index.css`, dark section components

**Problem:** Dark sections are flat, lacking atmosphere.

**Improvements:**
- Add subtle gradient overlays
- Increase contrast in key elements
- Add subtle glow effects on accent colors
- Consider grain texture on dark backgrounds

### Task 5.4: Unify Spacing System
**Priority:** Low | **File:** `tailwind.config.ts`, all components

**Problem:** Inconsistent section padding (py-24, py-20, py-32).

**Steps:**
1. Define section spacing tokens in Tailwind config:
   ```typescript
   spacing: {
     'section': '6rem',
     'section-lg': '8rem',
   }
   ```
2. Apply consistently across all sections
3. Document in component comments

### Task 5.5: Add Hover/Focus States to Cards
**Priority:** Medium | **Files:** All card components

**Problem:** Cards lack interactive feedback.

**Add to all card components:**
```tsx
className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary"
```

---

## Phase 6: Testing & Launch

> Final verification before production deployment.

### Task 6.1: Build Verification
**Priority:** Critical

**Steps:**
1. Run `npm run build` - must pass with no errors
2. Run `npm test` - all tests should pass
3. Run `npm run lint` - fix any warnings

### Task 6.2: Responsive Testing
**Priority:** High

**Test breakpoints:**
- 390px (small mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1440px (large desktop)

**Check especially:**
- Hero trust indicators layout
- Pricing cards spacing
- Mobile menu behavior
- FAQ accordion functionality
- Navigation truncation

### Task 6.3: Accessibility Testing
**Priority:** High

**Keyboard navigation test:**
1. Tab through entire page
2. Open/close mobile menu with keyboard
3. Expand/collapse FAQ items
4. Reach all CTAs
5. Verify visible focus indicators throughout

**Screen reader test:**
- Check landmark regions
- Verify heading hierarchy
- Test accordion announcements

### Task 6.4: Share Preview Testing
**Priority:** Medium

**Test on:**
- Telegram (paste link)
- Twitter/X
- LinkedIn
- Facebook
- Slack

**Verify:**
- Correct title appears
- Correct description appears
- OG image loads correctly

### Task 6.5: Analytics Setup
**Priority:** Medium

**Track:**
- Hero CTA click rate
- Scroll depth (25%, 50%, 75%, 100%)
- Form submission rate (if implemented)
- Telegram click rate
- Time on page by device type

---

## Implementation Order Summary

### Week 1: Critical Fixes
1. Task 1.1: Fix CSS import order
2. Task 1.2: Clean up index.html
3. Task 1.3: Replace mentor placeholder
4. Task 2.1: Rebuild mobile menu

### Week 2: Trust & Conversion
5. Task 3.1: Add proof block
6. Task 3.3: Show full pricing
7. Task 3.4: Document guarantee terms
8. Task 2.4: Add focus states

### Week 3: Content & UX
9. Task 3.2: Rewrite hero for audience
10. Task 3.6: Rewrite FAQ
11. Task 4.1: Merge portfolio/curriculum
12. Task 3.5: Add lead capture form

### Week 4: Polish & Launch
13. Task 5.1: Add hero visual
14. Task 5.5: Add card hover states
15. Task 6.1-6.5: All testing tasks

---

## Success Metrics

After implementation, track for 30 days:

| Metric | Current (estimate) | Target |
|--------|-------------------|--------|
| Hero CTA CTR | ~2% | 5%+ |
| Scroll to Pricing | ~40% | 60%+ |
| Form/CTA Conversion | N/A | 3%+ |
| Bounce Rate | ~60% | <45% |
| Mobile Conversion | ~1% | 2.5%+ |

---

## Notes

- All percentage improvements are estimates based on industry benchmarks
- Tasks marked "Critical" should block deployment if incomplete
- Phase 0 tasks require stakeholder decisions before development begins
- Visual polish tasks (Phase 5) can be deferred if timeline is tight
- Always verify build passes after each significant change
