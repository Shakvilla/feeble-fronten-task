/**
 * Design System UI Components
 * 
 * A collection of accessible, reusable React components following
 * React 19 best practices and WCAG 2.1 accessibility guidelines.
 * 
 * @example
 * import { Button, Badge, Heading, Text } from './components/ui';
 */

// Button
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Badge
export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';

// Typography
export { Heading, Text } from './Typography';
export type { 
  HeadingProps, 
  HeadingLevel, 
  HeadingSize,
  TextProps,
  TextSize,
  TextElement,
} from './Typography';