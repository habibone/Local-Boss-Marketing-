import React from 'react';
import { 
  Phone, Calendar, MessageCircle, Mic, CheckCircle2, 
  BarChart3, MapPin, Hammer, ArrowRight, Menu, X,
  ShieldCheck, LayoutTemplate, Users, Bot, Zap, Star
} from 'lucide-react';

// --- Icons Export ---
export const Icons = {
  Phone, Calendar, MessageCircle, Mic, Check: CheckCircle2,
  Chart: BarChart3, Map: MapPin, Hammer, ArrowRight, Menu, X,
  Shield: ShieldCheck, Layout: LayoutTemplate, Users, Bot, Zap, Star
};

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg",
    secondary: "bg-brand-navy text-white hover:bg-blue-900 focus:ring-blue-700 shadow-md",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy/5",
    ghost: "text-brand-navy hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// --- Card Component ---
// Removed hardcoded bg-white to allow bg-brand-navy etc. via className
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const hasBg = className.includes('bg-');
  return (
    <div className={`${hasBg ? '' : 'bg-white'} rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

// --- Section Heading ---
export const SectionHeading: React.FC<{ 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-brand-navy'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);