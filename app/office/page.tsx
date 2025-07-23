'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Coffee, BookOpen, Lightbulb } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Office = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card-style vertical flip transitions
      const cards = gsap.utils.toArray('.office-card');
      
      cards.forEach((card: any, index) => {
        gsap.set(card, { rotationX: 90, opacity: 0 });
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(card, {
              rotationX: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power2.out',
              transformOrigin: 'center bottom'
            });
          }
        });
      });

      // Floating animation for productivity elements
      gsap.to('.floating-element', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.3
      });
    });

    return () => ctx.revert();
  }, []);

  const workspaceFeatures = [
    {
      icon: Monitor,
      title: 'Dual Display Setup',
      description: 'Ultra-wide monitors for maximum productivity',
      details: ['4K resolution displays', 'Ergonomic monitor arms', 'Blue light filtering'],
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Coffee,
      title: 'Comfort Zone',
      description: 'Ergonomic furniture designed for long work sessions',
      details: ['Herman Miller chair', 'Height-adjustable desk', 'Lumbar support system'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Library',
      description: 'Organized storage for books and references',
      details: ['Built-in shelving', 'Document filing system', 'Reference materials'],
      image: 'https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Optimal lighting for focus and creativity',
      details: ['Task lighting', 'Ambient mood lighting', 'Natural light integration'],
      image: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-white">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Modern <span className="text-blue-400">Workspace</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where productivity meets aesthetics in a perfectly balanced environment
          </motion.p>
        </div>
      </section>

      {/* Productivity Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Productivity by Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This workspace is engineered for focus, creativity, and well-being. Every element 
              has been carefully selected to enhance productivity while maintaining visual harmony.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="floating-element text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Monitor className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light mb-4">Technology Integration</h3>
              <p className="text-gray-600">Seamless tech setup with cable management and wireless solutions</p>
            </div>
            
            <div className="floating-element text-center p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Coffee className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-light mb-4">Ergonomic Excellence</h3>
              <p className="text-gray-600">Health-focused furniture that supports long working hours</p>
            </div>
            
            <div className="floating-element text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-light mb-4">Inspiring Environment</h3>
              <p className="text-gray-600">Designed to stimulate creativity and maintain motivation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section ref={cardsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Workspace Features</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workspaceFeatures.map((feature, index) => (
              <Card key={index} className="office-card bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center">
                      <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                      <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div 
                      className="bg-cover bg-center min-h-64 md:min-h-full"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Scheme */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Color Psychology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Colors chosen to enhance focus, reduce eye strain, and maintain energy throughout the workday
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Deep Navy', color: '#1E3A8A', effect: 'Focus & Concentration' },
              { name: 'Warm White', color: '#FAFAFA', effect: 'Clarity & Openness' },
              { name: 'Forest Green', color: '#166534', effect: 'Balance & Calm' },
              { name: 'Accent Orange', color: '#EA580C', effect: 'Energy & Creativity' },
            ].map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="w-24 h-24 rounded-lg mx-auto mb-4 border border-gray-200"
                  style={{ backgroundColor: color.color }}
                />
                <h3 className="text-lg font-medium mb-2">{color.name}</h3>
                <p className="text-sm text-gray-600">{color.effect}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Story */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">The Future of Work</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              This office space represents the evolution of modern work environments. 
              Blending technology with human-centered design, it creates a space that 
              adapts to different work styles while promoting health and creativity.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From video calls to deep focus work, every scenario has been considered 
              to create a workspace that enhances rather than hinders productivity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Office;