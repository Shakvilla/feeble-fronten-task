import React from 'react';
import type { HeadingProps } from './Typography.types';

/**
 * Semantic Heading component with brand text highlighting
 * 
 * Features:
 * - Proper semantic HTML (h1-h6)
 * - Size independent of semantic level
 * - Text highlighting for brand emphasis
 * - Responsive typography
 */
const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'lg',
  highlight,
  className = '',
  children,
}) => {
  // Size styles with responsive breakpoints
  const sizeStyles: Record<typeof size, string> = {
    hero: 'text-5xl md:text-7xl lg:text-[5rem] leading-[1.1]',
    '2xl': 'text-4xl md:text-5xl lg:text-6xl leading-[1.1]',
    xl: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
    lg: 'text-2xl md:text-3xl leading-snug',
    md: 'text-xl md:text-2xl leading-snug',
    sm: 'text-lg md:text-xl leading-normal',
  };

  const baseStyles = `
    font-bold tracking-tight text-brand-dark
    ${sizeStyles[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // If highlight text is provided, wrap matching text in styled span
  const renderChildren = () => {
    if (!highlight || typeof children !== 'string') {
      return children;
    }

    const parts = children.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-brand-blue">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Component className={baseStyles}>
      {renderChildren()}
    </Component>
  );
};

export default Heading;