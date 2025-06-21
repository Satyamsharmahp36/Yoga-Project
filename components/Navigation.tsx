'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Flower2 as Lotus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about your yoga classes and workshops.");
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? 'nav-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Lotus className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-cormorant font-semibold text-deep-brown">
              Project Svaasthya
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-deep-brown hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full touch-target"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden touch-target p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-deep-brown" />
            ) : (
              <Menu className="w-6 h-6 text-deep-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-deep-brown hover:text-primary hover:bg-accent/50 transition-all duration-200 touch-target"
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-2">
              <Button 
                onClick={() => {
                  handleWhatsApp();
                  setIsOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full touch-target"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}