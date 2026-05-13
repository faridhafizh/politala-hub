## 2024-05-10 - Next.js Font Optimization
**Learning:** In Next.js applications, loading Google Fonts via `@import` in `globals.css` causes render-blocking network requests and hurts Core Web Vitals (specifically LCP and FCP).
**Action:** Always use `next/font/google` which automatically self-hosts any Google Font, ensuring zero layout shift and no external network requests during page load.

## 2026-05-11 - Avoid queueMicrotask in useEffect
**Learning:** Using `queueMicrotask` to wrap state updates inside `useEffect` (e.g., to bypass synchronous set-state linting errors) is an anti-pattern. It provides no actual performance benefit, as the microtask executes before the browser yields to the event loop, and it can cause sloppy lifecycle behavior.
**Action:** Re-evaluate structural need for effects or accept known acceptable violations rather than applying artificial microtask wrappers.

## 2024-05-12 - Next.js Route Prefetching Optimization
**Learning:** Using `useRouter().push()` inside interactive elements (like `<button>` or `<div>`) for standard internal navigation prevents Next.js from automatically prefetching route assets. This results in slower client-side transitions and degraded SEO/accessibility compared to standard anchor links.
**Action:** Always prefer the native Next.js `<Link>` component for internal navigation. When refactoring generic UI components like `Button` or `Card`, conditionally render them as `<Link>` elements if an `href` prop is passed, ensuring to remove any nested semantic elements (like a `<button>` inside the `<Link>`) to avoid HTML validation errors.
