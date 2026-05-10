## 2024-05-10 - Next.js Font Optimization
**Learning:** In Next.js applications, loading Google Fonts via `@import` in `globals.css` causes render-blocking network requests and hurts Core Web Vitals (specifically LCP and FCP).
**Action:** Always use `next/font/google` which automatically self-hosts any Google Font, ensuring zero layout shift and no external network requests during page load.
