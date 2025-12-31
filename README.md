# Coup Landing Page - Implementation Notes

Here is my implementation for the Coup landing page. I wanted to build this not just as a static page, but as a scalable foundation for a real product site. Below are the decisions I made regarding the stack and architecture.

## Why I chose this stack

I decided to go with **Next.js 16 (App Router)** and **React 19**.
Even for a landing page, the App Router's server-first approach gives me the best performance baseline. I can generate the static parts at build time while keeping the interactive islands (like the mobile menu or the hero animations) as Client Components.

I used **Tailwind CSS v4** for styling. I prefer utility classes because they let me iterate on the design directly in the markup without jumping between files. It also keeps the bundle size small since unused styles are purged.

## Implementation Decisions

### Atomic Design Architecture
I organized the `_components` folder using **Atomic Design principles** (Atoms, Molecules, Organisms).
*   **Why?** I didn't want a flat folder of 50 components. By separating "Atoms" (like my `Badge` and `Typography` tokens) from "Molecules" (like `Button` with its icon variants), I can reuse these consistent building blocks everywhere. It keeps my design system rigid but flexible.
*   Check out `src/app/_components/ui` to see this in action.

### Animations (Framer Motion)
For the bird animations and the entrance effects, I used **Framer Motion**.
*   **Why?** CSS transitions are great for hover states, but for orchestrated sequences (like the birds flying in after a delay, or the staggered hero text), Framer Motion’s layout animations and easy `initial/animate` prop API saved me a ton of time compared to writing complex keyframes manually.
*   *Note:* I intentionally delayed the "Flying Birds" animation by 800ms (`setTimeout` in `page.tsx`) to prioritize the Largest Contentful Paint (LCP). I didn't want heavy JS animation blocking the initial render of the headline.

### Typography & SEO
I treated fonts and metadata as first-class citizens:
*   **Fonts**: I used `next/font/local` for General Sans. This eliminates layout shifts (CLS) because Next.js automatically injects the fallback size overrides.
*   **SEO**: I built a dedicated `JsonLd` component to inject structured data. This helps search engines understand that "Coup" is a software application, not just a blog post.

### Testing Strategy
I set up **Vitest** for unit testing.
*   **Why Vitest?** It's significantly faster than Jest and works natively with ES modules, which plays nice with my Vite/Next.js setup.
*   I focused my tests on the reusable UI components (`Button`, `Badge`) because if those break, everything breaks.
*   *Self-correction:* I initially tried to force E2E testing with Playwright into this PR, but I decided to remove it for now. I'd rather have a solid, passing unit test suite than a flaky E2E suite that blocks deployment. I'll bring Playwright back once the user flows are fully stabilized.

## Storybook
I included **Storybook** because I believe in building UI components in isolation. It forces me to define clear component APIs (props) without relying on global app state. You can run `bun storybook` to click through the component inventory I built.

## How to run it

I use **Bun** for everything because it's fast.

1.  `bun install`
2.  `bun dev` (Runs the app at localhost:3000)
3.  `bun test` (Runs the unit tests)

Let me know if you have questions about the `BackgroundLayers` logic or the `json-ld` setup.
