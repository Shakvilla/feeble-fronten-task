import React, { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

/**
 * Accessible Button component with multiple variants
 * 
 * Features:
 * - Three variants: primary, secondary, ghost
 * - Three sizes: sm, md, lg
 * - Loading state with aria-busy
 * - Icon support with optional divider
 * - Full keyboard accessibility
 * - forwardRef for ref forwarding
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      isLoading = false,
      showDivider = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Base styles shared by all variants
    const baseStyles = `
      inline-flex items-center justify-center gap-2.5
      font-medium rounded-full
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue
      disabled:opacity-50 disabled:cursor-not-allowed
      hover:scale-105 active:scale-95
    `;

    // Variant-specific styles
    const variantStyles: Record<typeof variant, string> = {
      primary: `
        bg-brand-blue text-white
        hover:bg-blue-600
        disabled:hover:bg-brand-blue
      `,
      secondary: `
        bg-transparent border border-[#1D2026] text-[#1D2026]
        hover:bg-[#dce4ef]
        disabled:hover:bg-transparent
      `,
      ghost: `
        bg-transparent text-gray-900
        hover:text-brand-blue hover:bg-gray-50
        disabled:hover:text-gray-900
      `,
    };

    // Size-specific styles
    const sizeStyles: Record<typeof size, string> = {
      sm: 'px-4 py-2 text-sm min-w-[120px]',
      md: 'px-5 py-3 text-base min-w-[180px]',
      lg: 'px-8 py-4 text-lg min-w-[220px]',
    };

    // Combine all styles
    const combinedStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        className={combinedStyles}
        {...props}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {leftIcon && !isLoading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Divider (for secondary variant with icon) */}
        {showDivider && leftIcon && !isLoading && (
          <span className="w-[1px] h-5 bg-current opacity-30" aria-hidden="true" />
        )}

        {/* Button Text */}
        <span>{children}</span>

        {/* Right Icon */}
        {rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;