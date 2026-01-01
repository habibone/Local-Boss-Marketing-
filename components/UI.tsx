
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

// --- Badge Component ---
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'gold' | 'navy' | 'white';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'red', 
  className = '' 
}) => {
  const variants = {
    red: "bg-brand-red/10 text-brand-red border-brand-red/20",
    gold: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
    navy: "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
    white: "bg-white/20 text-white border-white/30",
  };

  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-brand-red/20",
    secondary: "bg-brand-navy text-white hover:bg-slate-800 focus:ring-blue-700 shadow-md",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    ghost: "text-brand-navy hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg",
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
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const hasBg = className.includes('bg-');
  return (
    <div className={`${hasBg ? '' : 'bg-white'} rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

// --- Section Heading ---
export const SectionHeading: React.FC<{ 
  title: React.ReactNode; 
  subtitle?: React.ReactNode; 
  badge?: string;
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ title, subtitle, badge, align = 'center', light = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {badge && <Badge variant={light ? 'white' : 'red'} className="mb-4">{badge}</Badge>}
    <h2 className={`text-3xl md:text-5xl font-black mb-6 leading-tight ${light ? 'text-white' : 'text-brand-navy'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
        {subtitle}
      </p>
    )}
  </div>
);
