## 2024-05-10 - Next.js Font Optimization
**Learning:** In Next.js applications, loading Google Fonts via `@import` in `globals.css` causes render-blocking network requests and hurts Core Web Vitals (specifically LCP and FCP).
**Action:** Always use `next/font/google` which automatically self-hosts any Google Font, ensuring zero layout shift and no external network requests during page load.

## 2026-05-11 - Avoid queueMicrotask in useEffect
**Learning:** Using `queueMicrotask` to wrap state updates inside `useEffect` (e.g., to bypass synchronous set-state linting errors) is an anti-pattern. It provides no actual performance benefit, as the microtask executes before the browser yields to the event loop, and it can cause sloppy lifecycle behavior.
**Action:** Re-evaluate structural need for effects or accept known acceptable violations rather than applying artificial microtask wrappers.

## 2024-05-14 - Next.js Route Prefetching via Links
**Learning:** Using programmatic navigation like `useRouter().push()` paired with standard `<button>` or `<div>` elements bypasses Next.js's automatic route prefetching capabilities. This leads to noticeable latency on interaction and misses out on hydration/SEO benefits.
**Action:** Always prefer using the Next.js `<Link>` component for internal routing. If building reusable UI elements (like `Button` or `Card`), support an `href` prop that gracefully downgrades/upgrades the underlying element to a `<Link>` when provided.
