# MyShop – Accessibility & Performance Improvements

This project is part of an individual frontend assignment focused on improving
accessibility (WCAG) and performance, with special attention to
Largest Contentful Paint (LCP).

The project is based on an existing product list page that initially had
accessibility issues and poor perceived performance.

---

##  Objectives

- Improve accessibility according to WCAG guidelines
- Ensure full keyboard navigation support
- Identify and optimize the Largest Contentful Paint (LCP)
- Measure and compare performance before and after optimizations
- Verify accessibility improvements using axe-core

---

##  Accessibility Improvements

- Semantic HTML structure using `header`, `nav`, `main`, `section`, `article`, and `footer`
- Correct heading hierarchy (single `h1`, followed by `h2` and `h3`)
- Replaced non-semantic interactive elements (`div`) with proper `button` elements
- Added labels to all form inputs
- Improved color contrast to meet WCAG AA requirements
- Added visible focus indicators for keyboard navigation
- All images include appropriate `alt` text

---

## ⌨ Keyboard Navigation

The page can be fully navigated using only the keyboard:
- `Tab` to move between interactive elements
- `Enter` to activate buttons and links
- Visible focus indicators show the current active element

A short video demonstrating keyboard navigation is included in the submission.

---

## ⚡ Performance & LCP Optimization

- Identified the hero image as the LCP element
- Deferred JavaScript loading to avoid render blocking
- Replaced blocking JavaScript with non-blocking logic using `requestIdleCallback`
- Added `width` and `height` attributes to images to reduce layout shift
- Lazy-loaded images below the fold
- Improved perceived performance by prioritizing above-the-fold content

---

##  Testing

### Accessibility Testing (axe-core)
- axe-core was used to detect accessibility issues
- Significant reduction in violations after improvements
- Results are logged in the browser console

### Performance Measurement
- LCP measured using:
    - Chrome DevTools (Performance tab)
    - PerformanceObserver (Largest Contentful Paint)
- Measurements were compared before and after optimizations
- Tests were performed in multiple browsers

---






