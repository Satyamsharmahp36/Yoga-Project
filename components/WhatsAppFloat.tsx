'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about your yoga classes and community.");
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 touch-target ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulse animation */}
      <div className="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-20" />
    </button>
  );
}