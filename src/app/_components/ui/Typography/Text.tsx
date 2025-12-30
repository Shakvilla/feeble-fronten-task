import React from 'react';
import type { TextProps } from './Typography.types';

/**
 * Accessible Text component for body content
 * 
 * Features:
 * - Semantic HTML element selection
 * - Multiple size variants
 * - Muted color option for secondary text
 */
const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'md',
  muted = false,
  className = '',
  children,
}) => {
  // Size styles
  const sizeStyles: Record<typeof size, string> = {
    lg: 'text-lg md:text-xl leading-relaxed',
    md: 'text-base leading-relaxed',
    sm: 'text-sm leading-normal',
    xs: 'text-xs leading-normal',
  };

  const colorStyles = muted 
    ? 'text-gray-500' 
    : 'text-brand-text';

  const baseStyles = `
    font-normal
    ${sizeStyles[size]}
    ${colorStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <Component className={baseStyles}>
      {children}
    </Component>
  );
};

export default Text;