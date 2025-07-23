'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Sun, Wind } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Bedroom = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll with fade zoom effect
      const slides = gsap.utils.toArray('.bedroom-slide');
      
      if (slides.length > 0) {
        // Create horizontal scroll timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sliderRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (slides.length - 1),
            end: () => `+=${sliderRef.current?.offsetWidth * 2}`,
          }
        });

        // Move slides horizontally
        tl.to(slides, {
          xPercent: -100 * (slides.length - 1),
          ease: 'none',
        });

        // Individual slide animations
        slides.forEach((slide: any, index) => {
          const image = slide.querySelector('.slide-image');
          const content = slide.querySelector('.slide-content');
          
          // Zoom and fade effects
          gsap.set(image, { scale: 1.2, opacity: 0.8 });
          gsap.set(content, { opacity: 0, y: 50 });
          
          ScrollTrigger.create({
            trigger: slide,
            start: 'left center',
            end: 'right center',
            onEnter: () => {
              gsap.to(image, { scale: 1, opacity: 1, duration: 1 });
              gsap.to(content, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
            },
            onLeave: () => {
              gsap.to(image, { scale: 1.1, opacity: 0.7, duration: 0.5 });
            },
            onEnterBack: () => {
              gsap.to(image, { scale: 1, opacity: 1, duration: 1 });
              gsap.to(content, { opacity: 1, y: 0, duration: 1 });
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      title: 'Serene Sanctuary',
      subtitle: 'Welcome to Minimalist Luxury',
      description: 'A bedroom designed for ultimate rest and rejuvenation, where every element contributes to peaceful sleep.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      icon: Moon
    },
    {
      title: 'Natural Light',
      subtitle: 'Awakening with Dawn',
      description: 'Floor-to-ceiling windows invite natural light while automated blinds ensure perfect darkness for sleep.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      icon: Sun
    },
    {
      title: 'Pure Materials',
      subtitle: 'Organic Textures',
      description: 'Linen bedding, solid wood furniture, and natural stone create a connection to nature indoors.',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      icon: Wind
    },
    {
      title: 'Mindful Storage',
      subtitle: 'Clutter-Free Living',
      description: 'Hidden storage solutions maintain the minimalist aesthetic while providing ample space for belongings.',
      image: 'https://images.pexels.com/photos/2480784/pexels-photo-2480784.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      icon: Moon
    },
    {
      title: 'Personal Retreat',
      subtitle: 'Your Private Oasis',
      description: 'Every detail crafted to create a personal sanctuary that nurtures both body and mind.',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      icon: Wind
    }
  ];

  return (
    <div className="bg-neutral-100">
      {/* Full-width Horizontal Slider */}
      <section ref={sliderRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bedroom-slide flex-shrink-0 w-full h-full relative"
            >
              <div
                className="slide-image absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="slide-content relative z-10 h-full flex items-center justify-center text-center text-white p-8">
                <div className="max-w-2xl">
                  <slide.icon className="w-16 h-16 mx-auto mb-6 text-white/80" />
                  <h3 className="text-lg font-light tracking-wide mb-2 text-white/60">
                    {slide.subtitle}
                  </h3>
                  <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
                    {slide.title}
                  </h2>
                  <p className="text-xl font-light leading-relaxed max-w-lg mx-auto">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex justify-center space-x-2">
                    {slides.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          dotIndex === index ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Minimalist Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Less is more. This bedroom strips away the unnecessary to focus on what truly matters: 
              quality sleep, natural materials, and peaceful simplicity. Every element has been 
              chosen for its contribution to rest and well-being.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Moon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sleep Optimization</h3>
                <p className="text-gray-600">Temperature control, blackout solutions, and ergonomic design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wind className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Natural Elements</h3>
                <p className="text-gray-600">Organic materials and textures that connect to nature</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sun className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Light Harmony</h3>
                <p className="text-gray-600">Balanced natural and artificial lighting for all hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Material Palette */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Material Harmony
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Linen', color: '#F5F5F0', description: 'Breathable, natural fiber bedding' },
              { name: 'Oak', color: '#D2B48C', description: 'Sustainable hardwood furniture' },
              { name: 'Stone', color: '#C0C0C0', description: 'Natural stone accent features' },
              { name: 'Cotton', color: '#FFFDD0', description: 'Organic cotton textiles' },
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="w-24 h-24 rounded-lg mx-auto mb-4 border border-gray-200"
                  style={{ backgroundColor: material.color }}
                />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{material.name}</h3>
                <p className="text-sm text-gray-600">{material.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bedroom;