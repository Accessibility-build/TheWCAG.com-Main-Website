# SEO File Changes Map - Quick Reference

**Quick reference guide mapping each SEO improvement to specific files**

---

## 🔴 Priority 1: Critical Fixes

### 1. Homepage (`app/page.tsx`)

| Change | Line(s) | Action |
|--------|---------|--------|
| Update title tag | ~50 | Change from "TheWCAG - An Accessibility Guide" to "WCAG 2.2 Compliance Guide 2025 \| Complete Accessibility Checklist & Tools" |
| Update meta description | ~52 | Enhance with more compelling copy and CTAs |
| Update keywords | ~54 | Add more relevant keywords |
| Add FAQ schema | ~158 | Add FAQPage structured data after existing StructuredData components |
| Add breadcrumb schema | ~158 | Add BreadcrumbList structured data |

**Files to modify:** `app/page.tsx`

---

### 2. Checklist Page (`app/checklist/layout.tsx`)

| Change | Line(s) | Action |
|--------|---------|--------|
| Update title tag | ~4 | Change to "Free WCAG 2.2 AA Compliance Checklist 2025 \| Download PDF \| TheWCAG" |
| Update meta description | ~5 | Enhance with download CTA and more keywords |
| Update keywords | ~7 | Add "WCAG AA checklist", "download WCAG checklist" |
| Add FAQ schema | New function | Create `getChecklistFAQSchema()` function |
| Add FAQ schema to component | ~58 | Add script tag in default export |
| Add breadcrumb schema | ~58 | Add BreadcrumbList schema |

**Files to modify:** `app/checklist/layout.tsx`

---

### 3. Criteria Pages

#### File: `app/criteria/[id]/layout.tsx`

| Change | Line(s) | Action |
|--------|---------|--------|
| Update title format | ~32 | Change to "WCAG 2.2 {number} {title} - Complete Guide with Examples \| TheWCAG" |
| Update description | ~33 | Enhance with "Includes examples, testing methods, implementation guide" |
| Update keywords | ~38-48 | Add more relevant keywords |
| Add FAQ schema function | New | Create `getCriterionFAQSchema()` function |
| Add FAQ schema to component | ~87 | Add script tag in default export |

#### File: `app/criteria/[id]/page.tsx`

| Change | Line(s) | Action |
|--------|---------|--------|
| Update title format | ~45 | Match layout.tsx title format |
| Update description | ~46 | Match layout.tsx description format |

**Files to modify:** 
- `app/criteria/[id]/layout.tsx`
- `app/criteria/[id]/page.tsx`

---

### 4. Breadcrumb Schema (All Pages)

| Component | File | Action |
|-----------|------|--------|
| Create component | `components/breadcrumb-schema.tsx` | NEW FILE - Create reusable breadcrumb component |
| Add to homepage | `app/page.tsx` | Add breadcrumb schema |
| Add to checklist | `app/checklist/layout.tsx` | Add breadcrumb schema |
| Criteria pages | `app/criteria/[id]/layout.tsx` | Already has breadcrumb in Article schema (no change needed) |

**Files to create:** `components/breadcrumb-schema.tsx`  
**Files to modify:** `app/page.tsx`, `app/checklist/layout.tsx`

---

## 🟡 Priority 2: High-Impact Improvements

### 5. Quick Answer Box Component

| Component | File | Action |
|-----------|------|--------|
| Create component | `components/quick-answer-box.tsx` | NEW FILE - Create QuickAnswerBox component |
| Add to criteria pages | `app/criteria/[id]/page.tsx` | Import and add after main heading |

**Files to create:** `components/quick-answer-box.tsx`  
**Files to modify:** `app/criteria/[id]/page.tsx`

---

### 6. Tools Page

| Change | File | Action |
|--------|------|--------|
| Update metadata | `app/tools/page.tsx` | Update title, description, keywords |

**Files to modify:** `app/tools/page.tsx`

---

### 7. Related Content Component

| Component | File | Action |
|-----------|------|--------|
| Create component | `components/related-content.tsx` | NEW FILE - Create RelatedContent component |
| Add to criteria pages | `app/criteria/[id]/page.tsx` | Import and add at end of page |

**Files to create:** `components/related-content.tsx`  
**Files to modify:** `app/criteria/[id]/page.tsx`

---

### 8. Internal Linking

| Change | File | Action |
|--------|------|--------|
| Add related criteria links | `app/criteria/[id]/page.tsx` | Use RelatedContent component |
| Add contextual links | Various pages | Add links to related content throughout site |

**Files to modify:** Multiple (add contextual links as you update pages)

---

## 🟢 Priority 3: Medium-Term Improvements

### 9. PDF Checklist Download

| Component | File | Action |
|-----------|------|--------|
| Create API route | `app/api/checklist/pdf/route.ts` | NEW FILE - Create PDF generation endpoint |
| Add download button | `app/checklist/page.tsx` | Add download button to checklist page |

**Files to create:** `app/api/checklist/pdf/route.ts`  
**Files to modify:** `app/checklist/page.tsx`

---

### 10. HowTo Schema

| Change | File | Action |
|--------|------|--------|
| Add HowTo schema | `app/how-to-make-website-accessible/page.tsx` | Add HowTo structured data |

**Files to modify:** `app/how-to-make-website-accessible/page.tsx`

---

### 11. Image Optimization

| Change | File | Action |
|--------|------|--------|
| Verify config | `next.config.mjs` | Already configured, verify settings |
| Create optimization script | `scripts/optimize-images.js` | NEW FILE - Optional image optimization script |

**Files to verify:** `next.config.mjs`  
**Files to create (optional):** `scripts/optimize-images.js`

---

### 12. Schema Wrapper Component

| Component | File | Action |
|-----------|------|--------|
| Create component | `components/schema-wrapper.tsx` | NEW FILE - Reusable schema wrapper |

**Files to create:** `components/schema-wrapper.tsx`

---

## 📋 Complete File List

### Files to CREATE (New):

1. `components/breadcrumb-schema.tsx`
2. `components/quick-answer-box.tsx`
3. `components/related-content.tsx`
4. `components/schema-wrapper.tsx`
5. `app/api/checklist/pdf/route.ts` (optional - for PDF download)
6. `scripts/optimize-images.js` (optional)

### Files to MODIFY (Existing):

1. `app/page.tsx` - Homepage metadata and schemas
2. `app/checklist/layout.tsx` - Checklist metadata and schemas
3. `app/checklist/page.tsx` - Add PDF download button
4. `app/criteria/[id]/layout.tsx` - Criteria metadata and FAQ schema
5. `app/criteria/[id]/page.tsx` - Criteria page content and components
6. `app/tools/page.tsx` - Tools page metadata
7. `app/how-to-make-website-accessible/page.tsx` - HowTo schema
8. `next.config.mjs` - Verify image optimization settings

---

## 🎯 Implementation Order

### Day 1-2: Critical Metadata Updates
1. ✅ `app/page.tsx` - Homepage
2. ✅ `app/checklist/layout.tsx` - Checklist
3. ✅ `app/criteria/[id]/layout.tsx` - Criteria pages
4. ✅ `app/criteria/[id]/page.tsx` - Criteria pages

### Day 3-4: Schema Markup
1. ✅ `app/page.tsx` - Add FAQ schema
2. ✅ `app/checklist/layout.tsx` - Add FAQ schema
3. ✅ `app/criteria/[id]/layout.tsx` - Add FAQ schema
4. ✅ Create `components/breadcrumb-schema.tsx`
5. ✅ Add breadcrumbs to pages

### Day 5-7: Components
1. ✅ Create `components/quick-answer-box.tsx`
2. ✅ Add to criteria pages
3. ✅ Create `components/related-content.tsx`
4. ✅ Add to criteria pages
5. ✅ Update `app/tools/page.tsx`

### Week 2: Additional Features
1. ✅ Add HowTo schema
2. ✅ Implement PDF download (if desired)
3. ✅ Improve internal linking
4. ✅ Test all changes

---

## 🔍 Testing Checklist

After each change, test:

- [ ] Schema markup with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Metadata in page source (View → Developer → View Source)
- [ ] Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Mobile-friendliness with [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📊 Expected File Sizes

| File | Current | After Changes | Notes |
|------|---------|--------------|-------|
| `app/page.tsx` | ~1,290 lines | ~1,350 lines | +60 lines (FAQ schema) |
| `app/checklist/layout.tsx` | ~65 lines | ~120 lines | +55 lines (FAQ + breadcrumb) |
| `app/criteria/[id]/layout.tsx` | ~184 lines | ~250 lines | +66 lines (FAQ schema) |
| `app/criteria/[id]/page.tsx` | ~272 lines | ~290 lines | +18 lines (QuickAnswerBox) |

---

## 🚨 Important Notes

1. **Test Before Deploy:** Always test schema markup with Google's Rich Results Test
2. **Backup First:** Consider committing current state before making changes
3. **Incremental Updates:** Make changes incrementally and test after each
4. **Monitor Search Console:** Check for errors after deploying changes
5. **Character Limits:** 
   - Titles: Max 60 characters
   - Descriptions: Max 160 characters

---

## 📝 Quick Copy-Paste Locations

### Homepage FAQ Schema
**Location:** `app/page.tsx`, after line 158  
**Add:** FAQ schema object and StructuredData component

### Checklist FAQ Schema
**Location:** `app/checklist/layout.tsx`, before default export  
**Add:** `getChecklistFAQSchema()` function and script tag

### Criteria FAQ Schema
**Location:** `app/criteria/[id]/layout.tsx`, before default export  
**Add:** `getCriterionFAQSchema()` function and script tag

### Quick Answer Box
**Location:** `app/criteria/[id]/page.tsx`, after main heading  
**Add:** `<QuickAnswerBox />` component

### Related Content
**Location:** `app/criteria/[id]/page.tsx`, before closing main tag  
**Add:** `<RelatedContent />` component

---

*Use this map alongside `SEO_TECHNICAL_IMPLEMENTATION_PLAN.md` for detailed code examples*
