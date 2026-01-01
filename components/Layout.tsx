import React, { useState, useEffect, useContext, createContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Button, Icons } from './UI.tsx';
import { ModalContextType } from '../types.ts';

// --- Context Setup ---
export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModals must be used within a ModalProvider');
  return context;
};

// --- Header Component ---
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBookDemo } = useModals();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const serviceLinks = [
    { label: 'GMB Optimization', path: '/google-business-profile' },
    { label: 'Website & Lead Capture', path: '/website-and-lead-capture' },
    { label: 'AI Automation', path: '/ai-automation' },
    { label: 'Reputation Management', path: '/reputation-management' },
  ];

  const mainLinks = [
    { label: 'Home', path: '/' },
    { label: 'How it Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-brand-light/80 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="bg-brand-navy p-2 rounded-lg shadow-sm">
             <Icons.Shield className="w-6 h-6 text-brand-gold" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-navy">
            Local<span className="text-brand-red">Boss</span> <span className="text-brand-gold">Marketing</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-semibold transition-colors hover:text-brand-red ${isActive ? 'text-brand-red' : 'text-gray-700'}`}>Home</NavLink>
          
          <NavLink to="/how-it-works" className={({ isActive }) => `text-sm font-semibold transition-colors hover:text-brand-red ${isActive ? 'text-brand-red' : 'text-gray-700'}`}>How it Works</NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`flex items-center text-sm font-semibold transition-colors hover:text-brand-red ${location.pathname.includes('services') || serviceLinks.some(s => s.path === location.pathname) ? 'text-brand-red' : 'text-gray-700'}`}
            >
              Services <Icons.X size={14} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-0' : 'rotate-45'}`} />
            </button>
            
            {isServicesOpen && (
              <div 
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-4 mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {serviceLinks.map((link) => (
                  <NavLink 
                    key={link.path} 
                    to={link.path}
                    className={({ isActive }) => `block px-6 py-3 text-sm font-bold ${isActive ? 'text-brand-red bg-brand-red/5' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <hr className="my-2 border-gray-100" />
                <NavLink to="/services" className="block px-6 py-3 text-sm font-black text-brand-navy hover:text-brand-red">View Framework Overview</NavLink>
              </div>
            )}
          </div>

          {mainLinks.slice(2).map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => `text-sm font-semibold transition-colors hover:text-brand-red ${isActive ? 'text-brand-red' : 'text-gray-700'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+16072351747" className="font-bold text-brand-navy hover:text-brand-red transition-colors flex items-center">
            <Icons.Phone className="w-4 h-4 mr-2" />
            +1 (607) 235-1747
          </a>
          <Button onClick={openBookDemo} size="sm">
            Book Demo Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-navy rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-2 lg:hidden h-[calc(100vh-64px)] overflow-y-auto">
          <NavLink to="/" className="block text-lg font-bold p-3 rounded-lg text-brand-navy">Home</NavLink>
          <NavLink to="/how-it-works" className="block text-lg font-bold p-3 rounded-lg text-brand-navy">How it Works</NavLink>
          
          <div className="p-3">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Our Services</p>
            <div className="grid gap-2 pl-2 border-l-2 border-brand-light">
              {serviceLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="block py-2 text-brand-navy font-bold">{link.label}</NavLink>
              ))}
              <NavLink to="/services" className="block py-2 text-brand-red font-black">All Services Framework</NavLink>
            </div>
          </div>

          <NavLink to="/pricing" className="block text-lg font-bold p-3 rounded-lg text-brand-navy">Pricing</NavLink>
          <NavLink to="/about" className="block text-lg font-bold p-3 rounded-lg text-brand-navy">About Us</NavLink>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
            <Button onClick={openBookDemo} fullWidth size="lg">Book Demo Call</Button>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Footer Component ---
const Footer: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
             <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Local<span className="text-brand-red">Boss</span> <span className="text-brand-gold">Marketing</span></span>
            </div>
            <p className="text-gray-400">Turning local clicks into booked jobs for contractors and service businesses.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'How it Works', 'Pricing', 'Blog', 'Contact'].map(label => (
                <li key={label}>
                  <NavLink to={`/${label === 'Home' ? '' : label.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white transition-colors">{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><NavLink to="/google-business-profile" className="text-gray-400 hover:text-white">GMB Optimization</NavLink></li>
              <li><NavLink to="/website-and-lead-capture" className="text-gray-400 hover:text-white">Website & Funnels</NavLink></li>
              <li><NavLink to="/ai-automation" className="text-gray-400 hover:text-white">AI Automation</NavLink></li>
              <li><NavLink to="/reputation-management" className="text-gray-400 hover:text-white">Reputation Management</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <Button onClick={openBookDemo} size="sm" className="w-full">Book Demo Call</Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Local Boss Marketing LLC.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/terms" className="hover:text-white">Terms</NavLink>
            <NavLink to="/privacy" className="hover:text-white">Privacy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Modals ---

const BookDemoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl w-full max-w-lg relative z-10 shadow-2xl p-8 animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400"><Icons.X /></button>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-navy">Book Your Strategy Call</h3>
          <p className="text-gray-600">See how we can fill your calendar with local jobs.</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); onClose(); }}>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" required placeholder="Full Name" />
          <input type="text" className="w-full px-3 py-2 border rounded-lg" required placeholder="Business Name" />
          <input type="email" className="w-full px-3 py-2 border rounded-lg" required placeholder="Email Address" />
          <Button type="submit" fullWidth size="lg">Confirm Booking</Button>
        </form>
      </div>
    </div>
  );
};

export const Layout: React.FC<{ children?: React.ReactNode }> = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const contextValue: ModalContextType = {
    isBookDemoOpen,
    openBookDemo: () => setIsBookDemoOpen(true),
    closeBookDemo: () => setIsBookDemoOpen(false),
  };

  return (
    <ModalContext.Provider value={contextValue}>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
      </div>
    </ModalContext.Provider>
  );
};
