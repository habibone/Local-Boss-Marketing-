
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface Industry {
  name: string;
  problem: string;
  solution: string;
  icon: ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

// Context for managing global modals
export interface ModalContextType {
  isBookDemoOpen: boolean;
  openBookDemo: () => void;
  closeBookDemo: () => void;
}
