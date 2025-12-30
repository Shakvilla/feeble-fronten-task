/**
 * Design tokens and constants for consistent styling across the application
 * These values are based on the Figma design specifications
 */

import { NavLink } from "./types";

export const DesignTokens = {
  colors: {
    brandBlue: '#007AFF',
    brandDark: '#0f172a',
    brandLight: '#EBF5FF',
    brandText: '#1F2937',
    brandGray: '#6B7280',
    
    // Background gradient
    gradientFrom: '#F0F7FF',
    gradientVia: '#E6F3FF',
    gradientTo: '#DBEAFE',
  },
  
  typography: {
    hero: {
      fontSize: {
        mobile: '3rem',      // 48px
        tablet: '4.5rem',    // 72px
        desktop: '5rem',     // 80px
      },
      lineHeight: '1.1',
      fontWeight: '700',
      tracking: 'tight',
    },
    subheading: {
      fontSize: {
        mobile: '1.125rem',  // 18px
        tablet: '1.25rem',   // 20px
      },
      lineHeight: 'relaxed',
      fontWeight: '500',
    },
  },
  
  spacing: {
    navbar: {
      topOffset: {
        mobile: '1rem',      // 16px
        desktop: '1.5rem',   // 24px
      },
      height: '72px',
      paddingX: '1.5rem',  // 24px
      paddingY: '0.625rem', // 10px
    },
    hero: {
      paddingTop: {
        mobile: '8rem',      // 128px
        desktop: '10rem',    // 160px
      },
      paddingBottom: '5rem', // 80px
    },
  },
  
  borderRadius: {
    pill: '9999px',
    card: '1rem',
    icon: '0.75rem',
  },
  
  shadows: {
    nav: '0 8px 30px rgb(0,0,0,0.04)',
    navHover: '0 8px 30px rgb(0,0,0,0.08)',
    pill: '0 2px 10px rgba(0, 122, 255, 0.15)',
    badge: '0 2px 8px rgba(0,0,0,0.08)',
  },
  
  animation: {
    durations: {
      slow: 12,
      medium: 6,
      fast: 3,
      badge: 1.4,
    },
    easing: {
      inOut: 'easeInOut',
    },
  },
} as const;

// App Configs
export const AppConfig = {
  version: 'v1.0',
  badgeText: '#1 iMessage Automation Tool',
  ctaButtons: {
    primary: 'Get Started',
    secondary: 'Download the Mac app',
  },
} as const;

export const navLinks: NavLink[] = [
  { id: 1, label: 'How it Works', href: '#' },
  { id: 2, label: 'Pricing', href: '#' },
  { id: 3, label: 'Use Case', href: '#' },
  { id: 4, label: 'FAQ', href: '#' },
];