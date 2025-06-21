'use client';

import { Heart, Users, Star, Compass } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Practice',
      description: 'Traditional yoga wisdom meets modern understanding for genuine transformation.'
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Join a supportive community of practitioners on their spiritual journey.'
    },
    {
      icon: Star,
      title: 'Personal Growth',
      description: 'Develop strength, flexibility, and inner peace at your own pace.'
    },
    {
      icon: Compass,
      title: 'Spiritual Guidance',
      description: 'Experienced teachers guide you toward deeper self-awareness and purpose.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-sand-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-deep-brown mb-6">
                Welcome to Your 
                <span className="block text-primary">Sacred Journey</span>
              </h2>
              
              <p className="text-lg text-deep-brown/80 leading-relaxed mb-6">
                At Project Svaasthya, we believe yoga is more than physical exercise—it's a path to 
                spiritual awakening and inner transformation. Our approach honors ancient traditions 
                while embracing the needs of modern practitioners.
              </p>
              
              <p className="text-deep-brown/70 leading-relaxed">
                Whether you're a complete beginner or experienced practitioner, our welcoming 
                community provides the support and guidance you need to deepen your practice 
                and connect with your authentic self.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300 card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-cormorant text-xl font-medium text-deep-brown mb-2">
                    {value.title}
                  </h3>
                  <p className="text-deep-brown/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Peaceful yoga meditation in natural setting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-cormorant text-2xl font-semibold">5+</span>
                </div>
                <div>
                  <div className="font-cormorant text-lg font-medium text-deep-brown">
                    Years of Guidance
                  </div>
                  <div className="text-deep-brown/60 text-sm">
                    Transforming Lives Daily
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}