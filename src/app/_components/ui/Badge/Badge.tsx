import React from 'react';
import { motion } from 'framer-motion';
import type { BadgeProps } from './Badge.types';

/**
 * Accessible Badge component for status indicators, version tags, etc.
 * 
 * Features:
 * - Multiple variants: default, solid, outline
 * - Optional animated typing indicator
 * - Left/right element slots
 * - Screen reader support
 */
const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  leftElement,
  rightElement,
  animated = false,
  className = '',
  'aria-label': ariaLabel,
  children,
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center gap-2.5
    rounded-full
    transition-transform duration-200
    hover:scale-105
    cursor-default
  `;

  // Variant styles
  const variantStyles: Record<typeof variant, string> = {
    default: `
      bg-white
      shadow-[0_2px_8px_rgba(0,0,0,0.08)]
      border border-blue-50/50
    `,
    solid: `
      bg-brand-blue
      text-white
    `,
    outline: `
      bg-transparent
      border-2 border-brand-blue
      text-brand-blue
    `,
  };

  // Size styles
  const sizeStyles: Record<typeof size, string> = {
    sm: 'pl-1.5 pr-3 py-1 text-xs',
    md: 'pl-2 pr-4 py-1.5 text-sm',
  };

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Animated dots component
  const AnimatedDots = () => (
    <div className="flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full">
      <div className="flex gap-[3px] items-center">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, delay }}
            className="w-1 h-1 bg-white rounded-full"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={combinedStyles}
    >
      {/* Left Element (version tag, icon, etc.) */}
      {leftElement && (
        <span className="flex items-center gap-1.5">
          {leftElement}
          {animated && <AnimatedDots />}
        </span>
      )}

      {/* Animated dots without left element */}
      {animated && !leftElement && <AnimatedDots />}

      {/* Badge Text */}
      <span className="text-brand-blue font-semibold tracking-wide">
        {children}
      </span>

      {/* Right Element */}
      {rightElement && (
        <span aria-hidden="true">{rightElement}</span>
      )}
    </span>
  );
};

export default Badge;