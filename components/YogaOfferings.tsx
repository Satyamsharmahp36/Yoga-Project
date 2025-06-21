'use client';

import { Button } from '@/components/ui/button';
import { Clock, Users, Video, Calendar } from 'lucide-react';

export function YogaOfferings() {
  const offerings = [
    {
      title: 'Beginner Hatha Yoga',
      description: 'Perfect introduction to yoga with gentle poses, breathing techniques, and meditation.',
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '60 min',
      participants: '15 max',
      type: 'Live Online',
      schedule: 'Mon, Wed, Fri',
      price: '₹300',
      features: ['Beginner-friendly', 'Stress relief', 'Flexibility building']
    },
    {
      title: 'Vinyasa Flow',
      description: 'Dynamic sequences linking breath with movement for strength and mindfulness.',
      image: 'https://images.pexels.com/photos/3823076/pexels-photo-3823076.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '75 min',
      participants: '20 max',
      type: 'Live Online',
      schedule: 'Tue, Thu, Sat',
      price: '₹400',
      features: ['Dynamic flow', 'Strength building', 'Cardio benefits']
    },
    {
      title: 'Meditation & Breathwork',
      description: 'Deepen your spiritual practice with guided meditation and pranayama techniques.',
      image: 'https://images.pexels.com/photos/3820994/pexels-photo-3820994.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '45 min',
      participants: '25 max',
      type: 'Live Online',
      schedule: 'Daily',
      price: '₹250',
      features: ['Stress reduction', 'Mental clarity', 'Spiritual growth']
    },
    {
      title: 'Restorative Yoga',
      description: 'Gentle, therapeutic practice using props for deep relaxation and healing.',
      image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '90 min',
      participants: '12 max',
      type: 'Live Online',
      schedule: 'Sun, Wed',
      price: '₹450',
      features: ['Deep relaxation', 'Injury recovery', 'Nervous system reset']
    },
    {
      title: 'Yoga Philosophy',
      description: 'Explore ancient wisdom texts and integrate yogic principles into daily life.',
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '60 min',
      participants: '30 max',
      type: 'Online Study',
      schedule: 'Saturdays',
      price: '₹300',
      features: ['Ancient wisdom', 'Life philosophy', 'Spiritual study']
    },
    {
      title: 'Private Sessions',
      description: 'One-on-one personalized yoga instruction tailored to your specific needs.',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '60 min',
      participants: '1-on-1',
      type: 'Video Call',
      schedule: 'Flexible',
      price: '₹1,100',
      features: ['Personalized practice', 'Flexible scheduling', 'Individual attention']
    }
  ];

  const handleWhatsApp = (className: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in joining your ${className} class. Could you provide more details?`);
    window.open(`https://wa.me/9882182880?text=${message}`, '_blank');
  };

  return (
    <section id="offerings" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mb-6">
            Our Yoga 
            <span className="text-primary"> Offerings</span>
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto leading-relaxed">
            Choose from a variety of classes designed to meet you wherever you are in your yoga journey. 
            All classes are taught by experienced, certified instructors.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover border border-accent/20"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-medium text-deep-brown mb-3">
                  {offering.title}
                </h3>
                
                <p className="text-deep-brown/70 text-sm leading-relaxed mb-4">
                  {offering.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-deep-brown/60 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {offering.duration}
                  </div>
                  <div className="flex items-center text-deep-brown/60 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {offering.participants}
                  </div>
                  <div className="flex items-center text-deep-brown/60 text-sm">
                    <Video className="w-4 h-4 mr-2" />
                    {offering.type}
                  </div>
                  <div className="flex items-center text-deep-brown/60 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {offering.schedule}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {offering.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/30 text-deep-brown/70 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-end">
                  <Button
                    onClick={() => handleWhatsApp(offering.title)}
                    className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full touch-target flex items-center gap-3"
                  >
                    <span className="text-2xl font-cormorant font-semibold">
                      {offering.price}
                    </span>
                    <span className="text-white/60">|</span>
                    <span>Join Class</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-earth-gradient p-8 rounded-3xl text-white">
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium mb-4">
              New to Yoga?
            </h3>
            <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
              Try your first class free! We'll help you find the perfect practice for your needs and goals.
            </p>
            <Button
              onClick={() => handleWhatsApp('Free Trial Class')}
              variant="outline"
              className="border-2 border-white text-secondary hover:bg-white hover:text-primary px-8 py-3 rounded-full touch-target"
            >
              Claim Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}