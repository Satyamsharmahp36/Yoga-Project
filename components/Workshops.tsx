'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

export function Workshops() {
  const workshops = [
    {
      title: 'Yoga Teacher Training (200-Hour)',
      description: 'Comprehensive certification program combining asana practice, philosophy, anatomy, and teaching methodology.',
      date: 'Starting March 15, 2024',
      duration: '8 weeks',
      location: 'Online + Weekend Retreats',
      participants: '20 max',
      price: '₹15,000',
      level: 'All Levels',
      featured: true,
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      highlights: [
        'Internationally recognized certification',
        'Weekly live sessions + recorded content',
        'Mentorship and teaching practice',
        'Sacred geometry and philosophy'
      ]
    },
    {
      title: 'Meditation Mastery Intensive',
      description: 'Deep dive into various meditation techniques including mindfulness, mantra, and visualization practices.',
      date: 'February 20-22, 2024',
      duration: '3 days',
      location: 'Online Workshop',
      participants: '50 max',
      price: '₹2,200',
      level: 'Beginner to Intermediate',
      featured: false,
      image: 'https://images.pexels.com/photos/3820994/pexels-photo-3820994.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      highlights: [
        'Multiple meditation styles',
        'Personal practice development',
        'Stress reduction techniques',
        'Daily life integration'
      ]
    },
    {
      title: 'Chakra Healing & Alignment',
      description: 'Explore the seven energy centers through yoga, breathwork, sound healing, and meditation.',
      date: 'March 5-7, 2024',
      duration: '3 days',
      location: 'Online Workshop',
      participants: '30 max',
      price: '₹2,800',
      level: 'All Levels',
      featured: false,
      image: 'https://images.pexels.com/photos/3820994/pexels-photo-3820994.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      highlights: [
        'Energy system understanding',
        'Chakra-specific practices',
        'Sound healing techniques',
        'Personal energy assessment'
      ]
    },
    {
      title: 'Ayurveda & Yoga Lifestyle',
      description: 'Learn to integrate ancient Ayurvedic principles with your yoga practice for optimal health.',
      date: 'April 10-12, 2024',
      duration: '3 days',
      location: 'Online Workshop',
      participants: '40 max',
      price: '₹2,500',
      level: 'All Levels',
      featured: false,
      image: 'https://images.pexels.com/photos/3823076/pexels-photo-3823076.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      highlights: [
        'Constitutional analysis',
        'Seasonal practices',
        'Nutrition guidance',
        'Lifestyle recommendations'
      ]
    }
  ];

  const handleWhatsApp = (workshopTitle: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${workshopTitle} workshop. Could you send me more information?`);
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  return (
    <section id="workshops" className="py-16 md:py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mb-6">
            Transformative
            <span className="text-secondary"> Workshops</span>
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto leading-relaxed">
            Deepen your practice and expand your knowledge with our intensive workshops 
            and teacher training programs led by experienced practitioners.
          </p>
        </div>

        {/* Workshops Timeline */}
        <div className="space-y-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < workshops.length - 1 && (
                <div className="absolute left-4 top-20 w-0.5 h-32 bg-primary/20 hidden md:block" />
              )}
              
              {/* Workshop Card */}
              <div className={`relative bg-white rounded-3xl shadow-lg overflow-hidden card-hover ${
                workshop.featured ? 'ring-2 ring-primary/20' : ''
              }`}>
                {workshop.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-deep-brown mb-4">
                          {workshop.title}
                        </h3>
                        
                        <p className="text-deep-brown/70 leading-relaxed mb-6">
                          {workshop.description}
                        </p>

                        {/* Workshop Details */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-deep-brown/70">
                            <Calendar className="w-5 h-5 mr-3 text-primary" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center text-deep-brown/70">
                            <Clock className="w-5 h-5 mr-3 text-primary" />
                            <span>{workshop.duration}</span>
                          </div>
                          <div className="flex items-center text-deep-brown/70">
                            <MapPin className="w-5 h-5 mr-3 text-primary" />
                            <span>{workshop.location}</span>
                          </div>
                          <div className="flex items-center text-deep-brown/70">
                            <Users className="w-5 h-5 mr-3 text-primary" />
                            <span>{workshop.participants}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-medium text-deep-brown mb-3">What You'll Learn:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {workshop.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center text-sm text-deep-brown/70">
                                <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-accent/30">
                        <div>
                          {/* <div className="text-3xl font-cormorant font-semibold text-primary">
                            {workshop.price}
                          </div> */}
                          <div className="text-sm text-deep-brown/60">
                            {workshop.level} • Early bird pricing
                          </div>
                        </div>
                        <Button
                          onClick={() => handleWhatsApp(workshop.title)}
                          className={`px-8 py-3 rounded-full touch-target ${
                            workshop.featured 
                              ? 'bg-primary hover:bg-primary/90 text-white' 
                              : 'bg-secondary hover:bg-secondary/90 text-white'
                          }`}
                        >
                          <span className="text-2xl font-cormorant font-semibold">
                          {workshop.price} &nbsp;
                          </span>
                            | &nbsp; Reserve Spot
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <h3 className="font-cormorant text-2xl font-medium text-deep-brown mb-4">
              Custom Workshop Requests
            </h3>
            <p className="text-deep-brown/70 mb-6">
              Looking for something specific? We can create custom workshops for groups, 
              corporate events, or special occasions.
            </p>
            <Button
              onClick={() => handleWhatsApp('Custom Workshop Request')}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full touch-target"
            >
              Inquire About Custom Workshops
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}