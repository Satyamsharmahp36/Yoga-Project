'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSwipeable } from 'react-swipeable';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Executive',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Yoga Sanctuary transformed my life completely. The teachers are incredibly knowledgeable and create such a safe, welcoming space. I went from being completely inflexible and stressed to finding inner peace and physical strength I never knew I had.',
      highlight: 'Found inner peace and strength'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Developer',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'As someone who sits at a desk all day, I was dealing with chronic back pain and anxiety. The online classes fit perfectly into my schedule, and the personalized attention even in group sessions is amazing. My posture has improved dramatically.',
      highlight: 'Eliminated chronic back pain'
    },
    {
      name: 'Emily Thompson',
      role: 'Teacher & Mom',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'The meditation and breathwork classes have been life-changing. I\'m better able to handle the stress of teaching and parenting. The philosophy discussions help me see life from a completely different perspective.',
      highlight: 'Better stress management'
    },
    {
      name: 'David Park',
      role: 'Retired Engineer',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'I started yoga at 65 thinking I was too old and inflexible. The teachers modified everything perfectly for my needs. Now I\'m more flexible than I was in my 40s and have found a wonderful community of fellow practitioners.',
      highlight: 'Improved flexibility at 65'
    },
    {
      name: 'Lisa Wang',
      role: 'Healthcare Worker',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'Working in healthcare during the pandemic was incredibly stressful. The restorative yoga classes became my sanctuary. The teachers\' compassion and the healing environment they create online is remarkable.',
      highlight: 'Found sanctuary during pandemic'
    },
    {
      name: 'James Miller',
      role: 'Financial Advisor',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      text: 'The teacher training program was incredibly comprehensive. Not only did I become a certified instructor, but I discovered a passion for helping others that changed my entire career path. The mentorship was invaluable.',
      highlight: 'Changed career path through yoga'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd love to hear more about your yoga classes. The testimonials look amazing!");
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  // Add swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    trackMouse: true,
  });

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mb-6">
            What Our Students
            <span className="text-primary"> Say</span>
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto leading-relaxed">
            Real stories from our yoga community members who have transformed their lives 
            through dedicated practice and spiritual growth.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            {...swipeHandlers}
            className="bg-sand-gradient rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden select-none"
          >
            {/* Background Quote Icon */}
            <div className="absolute top-2 right-2 sm:top-6 sm:right-6 opacity-10">
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-primary" />
            </div>

             {/* Subtle Progress Indicator */}
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-0.5 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/20 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-base sm:text-lg md:text-xl text-deep-brown/80 leading-relaxed text-center mb-6 sm:mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Highlight */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block bg-primary/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                  <span className="text-primary font-medium text-xs sm:text-sm">
                    ✨ {testimonials[currentIndex].highlight}
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-cormorant text-lg sm:text-xl font-medium text-deep-brown">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-deep-brown/60 text-sm sm:text-base">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-deep-brown/50 text-xs sm:text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
           {/* Subtle Counter */}
           <div className="absolute bottom-4 right-4 text-xs text-deep-brown/30">
              {currentIndex + 1} / {testimonials.length}
            </div>
          </div>
          </div>

        {/* Testimonial Grid */}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-earth-gradient p-8 rounded-3xl text-white max-w-2xl mx-auto">
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-accent-100 mb-6">
              Join hundreds of students who have transformed their lives through yoga. 
              Your wellness journey begins with a single step.
            </p>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white text-primary px-8 py-3 rounded-full touch-target"
            >
              Begin Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}