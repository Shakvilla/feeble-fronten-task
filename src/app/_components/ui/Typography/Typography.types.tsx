import React from 'react';

// Heading Component Types
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'hero' | '2xl' | 'xl' | 'lg' | 'md' | 'sm';

export interface HeadingProps {
  /**
   * HTML heading element to render
   * @default 'h2'
   */
  as?: HeadingLevel;
  
  /**
   * Visual size of the heading (independent of semantic level)
   * @default 'lg'
   */
  size?: HeadingSize;
  
  /**
   * Text to highlight in brand color
   */
  highlight?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Heading content
   */
  children: React.ReactNode;
}

// Text Component Types
export type TextSize = 'lg' | 'md' | 'sm' | 'xs';
export type TextElement = 'p' | 'span' | 'div';

export interface TextProps {
  /**
   * HTML element to render
   * @default 'p'
   */
  as?: TextElement;
  
  /**
   * Visual size of the text
   * @default 'md'
   */
  size?: TextSize;
  
  /**
   * Renders text in muted/secondary color
   * @default false
   */
  muted?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Text content
   */
  children: React.ReactNode;
}