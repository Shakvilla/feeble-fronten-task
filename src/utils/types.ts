export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface BirdProps {
  className?: string;
  withBubble?: boolean;
  scale?: number;
  delay?: number;
  duration?: number;
  initialY?: number;
}

