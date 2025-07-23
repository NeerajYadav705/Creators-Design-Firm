'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Waves, Sparkles, Heart } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Bathroom = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Water ripple animation on hero
      const ripples = gsap.utils.toArray('.ripple');
      
      ripples.forEach((ripple: any, index) => {
        gsap.set(ripple, { 
          scale: 0, 
          opacity: 0,
          transformOrigin: 'center center'
        });
        
        gsap.to(ripple, {
          scale: 2,
          opacity: 0.3,
          duration: 3,
          repeat: -1,
          delay: index * 1,
          ease: 'power2.out',
        });
        
        gsap.to(ripple, {
          opacity: 0,
          duration: 1.5,
          delay: index * 1 + 1.5,
          repeat: -1,
          repeatDelay: 1.5,
          ease: 'power2.in',
        });
      });

      // Glass blur effect on scroll
      ScrollTrigger.create({
        trigger: '.blur-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.glass-blur', {
            backdropFilter: `blur(${progress * 20}px)`,
            duration: 0.3,
          });
        },
      });

      // Floating wellness elements
      gsap.to('.wellness-float', {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.4
      });

      // Water droplet animation
      gsap.to('.water-drop', {
        y: 100,
        opacity: 0,
        duration: 2,
        repeat: -1,
        delay: -1,
        ease: 'power2.in',
        stagger: {
          each: 0.3,
          repeat: -1
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const wellnessFeatures = [
    {
      icon: Droplets,
      title: 'Hydrotherapy',
      description: 'Therapeutic water features for ultimate relaxation',
      details: ['Rain shower system', 'Steam functionality', 'Temperature control']
    },
    {
      icon: Waves,
      title: 'Natural Materials',
      description: 'Stone and wood elements bring nature indoors',
      details: ['Marble surfaces', 'Teak accents', 'Natural stone tiles']
    },
    {
      icon: Sparkles,
      title: 'Ambient Lighting',
      description: 'Soft lighting that adapts to your wellness routine',
      details: ['Dimmable LEDs', 'Color temperature control', 'Mirror backlighting']
    },
    {
      icon: Heart,
      title: 'Wellness Focus',
      description: 'Every element designed for health and wellbeing',
      details: ['Air purification', 'Aromatherapy integration', 'Sound isolation']
    }
  ];

  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section with Water Ripple Effect */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4247693/pexels-photo-4247693.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        
        {/* Ripple Effect Overlay */}
        <div ref={rippleRef} className="absolute inset-0">
          <div className="ripple absolute top-1/3 left-1/4 w-32 h-32 border-2 border-blue-300 rounded-full"></div>
          <div className="ripple absolute top-2/3 right-1/3 w-24 h-24 border-2 border-cyan-300 rounded-full"></div>
          <div className="ripple absolute top-1/2 left-1/2 w-40 h-40 border-2 border-teal-300 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 bg-slate-900/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Spa <span className="text-cyan-400">Retreat</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transform your daily routine into a wellness ritual in this spa-inspired sanctuary
          </motion.p>
          
          {/* Animated water drops */}
          <div className="absolute top-0 left-1/4">
            <Droplets className="water-drop w-4 h-4 text-cyan-300 opacity-70" />
          </div>
          <div className="absolute top-10 right-1/3">
            <Droplets className="water-drop w-3 h-3 text-blue-300 opacity-60" />
          </div>
          <div className="absolute top-5 left-2/3">
            <Droplets className="water-drop w-5 h-5 text-teal-300 opacity-80" />
          </div>
        </div>
      </section>

      {/* Wellness Philosophy */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-cyan-200">
              Wellness by Design
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This bathroom transcends mere functionality to become a personal wellness sanctuary, 
              where every element contributes to your physical and mental well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="wellness-float text-center p-6"
              >
                <div className="w-20 h-20 bg-cyan-900/30 rounded-full mx-auto mb-6 flex items-center justify-center border border-cyan-500/30">
                  <feature.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-medium text-cyan-200 mb-4">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Blur Section */}
      <section className="blur-section relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        
        <div className="glass-blur absolute inset-0 bg-slate-900/40" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-6 text-white">
              Pure Tranquility
            </h2>
            <p className="text-xl md:text-2xl font-light text-slate-200 max-w-2xl mx-auto">
              Where water, light, and space converge to create moments of perfect serenity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Material Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-cyan-200">
              Premium Materials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each surface tells a story of luxury, durability, and natural beauty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-light mb-2">Carrara Marble</h3>
                <p className="text-slate-300">Timeless elegance with natural veining</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4247693/pexels-photo-4247693.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-light mb-2">Teak Wood</h3>
                <p className="text-slate-300">Naturally water-resistant luxury</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4050634/pexels-photo-4050634.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-light mb-2">Glass Elements</h3>
                <p className="text-slate-300">Crystal clear sophistication</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Journey */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-cyan-200">
              Your Daily Wellness Ritual
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              This spa-inspired bathroom transforms your daily routine into a rejuvenating 
              wellness experience. From the moment you enter, every detail works in harmony 
              to calm your mind, refresh your body, and restore your spirit.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              The integration of natural materials, therapeutic lighting, and water features 
              creates an environment where self-care becomes a luxury experience, turning 
              your home into a personal retreat from the outside world.
            </p>
            
            <div className="mt-12 flex justify-center space-x-8">
              <Waves className="wellness-float w-8 h-8 text-cyan-400 opacity-60" />
              <Sparkles className="wellness-float w-8 h-8 text-cyan-300 opacity-70" />
              <Heart className="wellness-float w-8 h-8 text-cyan-500 opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bathroom;