'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in starting my yoga journey with Project Svaasthya.");
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover video-background"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1556816723-1ce827b9cfbb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        >
          <source
            src="https://videos.pexels.com/video-files/3196406/3196406-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
            Transform Your Life Through 
            <span className="block text-accent-200 font-medium">projectsvaasthya <span className="text-accent-100 font-bold">Yoga Practice</span></span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-accent-100/90 max-w-2xl mx-auto leading-relaxed">
            Join our spiritual community and discover inner peace, strength, and authentic connection 
            through ancient yoga wisdom adapted for modern life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 touch-target"
            >
              Start Your Journey
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 touch-target text-secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-cormorant font-semibold text-accent-200">500+</div>
              <div className="text-sm md:text-base text-accent-100/80">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-cormorant font-semibold text-accent-200">50+</div>
              <div className="text-sm md:text-base text-accent-100/80">Online Classes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-cormorant font-semibold text-accent-200">5+</div>
              <div className="text-sm md:text-base text-accent-100/80">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce-soft mt-20">
          <ArrowDown className="w-6 h-6 text-accent-200" />
        </div>
      </div>
    </section>
  );
}