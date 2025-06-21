'use client';

import { Flower2 as Lotus, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to learn more about Project Svaasthya.");
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Yoga Classes', href: '#offerings' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Teacher Training', href: '#workshops' },
    { name: 'Private Sessions', href: '#offerings' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const classes = [
    'Beginner Hatha Yoga',
    'Vinyasa Flow',
    'Meditation & Breathwork',
    'Restorative Yoga',
    'Yoga Philosophy',
    'Chakra Healing'
  ];

  return (
    <footer id="contact" className="bg-deep-brown text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Lotus className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-cormorant font-semibold">
                Project Svaasthya
              </div>
            </div>
            
            <p className="text-accent-100/80 leading-relaxed mb-6">
              Transform your life through authentic yoga practice. Join our spiritual community 
              and discover inner peace, strength, and connection.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors touch-target"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors touch-target"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors touch-target"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <button 
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors touch-target"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-accent-100/80 hover:text-white transition-colors touch-target inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="font-cormorant text-xl font-medium mb-6">Our Classes</h3>
            <ul className="space-y-3">
              {classes.map((className, index) => (
                <li key={index}>
                  <span className="text-accent-100/80">
                    {className}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cormorant text-xl font-medium mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-accent-100/80">
                  Online Classes Worldwide<br />
                  Based in Haryana, India
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-accent-100/80 hover:text-white transition-colors"
                >
                  +91 8297985444
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@projectsvaasthya.com" 
                  className="text-accent-100/80 hover:text-white transition-colors"
                >
                  hello@projectsvaasthya.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-accent-100/80">
                  <div>Classes Daily</div>
                  <div>6:00 AM - 9:00 PM PST</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium text-green-400">Quick Response</span>
              </div>
              <p className="text-accent-100/80 text-sm mb-3">
                Message us on WhatsApp for instant support and class information.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors touch-target"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-100/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-accent-100/60 text-sm">
              © 2025 Project Svaasthya. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-100/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-100/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-accent-100/60 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}