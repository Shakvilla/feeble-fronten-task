import React from 'react';

export type BadgeVariant = 'default' | 'solid' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: BadgeVariant;
  
  /**
   * Size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Element to display before the text (e.g., version tag, icon)
   */
  leftElement?: React.ReactNode;
  
  /**
   * Element to display after the text
   */
  rightElement?: React.ReactNode;
  
  /**
   * Shows animated typing indicator dots
   * @default false
   */
  animated?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Accessible label for screen readers
   */
  'aria-label'?: string;
  
  /**
   * Badge content
   */
  children: React.ReactNode;
}