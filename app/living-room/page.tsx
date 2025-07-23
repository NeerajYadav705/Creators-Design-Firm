'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LivingRoom = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in effect
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center',
          }
        }
      );

      // Side-to-side image scroll
      const images = gsap.utils.toArray('.gallery-image');
      if (images.length > 0) {
        gsap.to(images, {
          xPercent: -100 * (images.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (images.length - 1),
end: () => {
  if (galleryRef.current) {
    return `+=${galleryRef.current.offsetWidth * 2}`;
  }
  return '+=1000'; // fallback value
},
          },
        });
      }

      // Feature cards animation
      gsap.fromTo('.feature-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const galleryImages = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  ];

  const features = [
    {
      title: 'Custom Furniture',
      description: 'Bespoke seating designed for comfort and elegance',
      items: ['Italian leather sectional', 'Handcrafted coffee table', 'Designer accent chairs']
    },
    {
      title: 'Material Selection',
      description: 'Premium materials creating a sophisticated atmosphere',
      items: ['Marble accent walls', 'Hardwood flooring', 'Silk window treatments']
    },
    {
      title: 'Lighting Design',
      description: 'Layered lighting for ambiance and functionality',
      items: ['Crystal chandelier', 'LED accent lighting', 'Natural light optimization']
    }
  ];

  const colorPalette = [
    { name: 'Charcoal', color: '#36454F' },
    { name: 'Cream', color: '#F5F5DC' },
    { name: 'Gold', color: '#FFD700' },
    { name: 'Marble White', color: '#F8F8FF' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Luxury <span className="text-yellow-400">Living</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where contemporary elegance meets timeless comfort in perfect harmony
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-image flex-shrink-0 w-full h-full relative"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="relative z-10 h-full flex items-end p-12">
                <div className="text-white">
                  <h3 className="text-3xl font-light mb-2">View {index + 1}</h3>
                  <p className="text-lg opacity-80">Multiple perspectives of luxury design</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interior Details */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Design Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This living room embodies the perfect balance between luxury and livability. 
              Every element has been carefully curated to create an atmosphere of sophisticated comfort.
            </p>
          </motion.div>

          <div className="features-section grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card bg-black/50 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-yellow-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Breakdown */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Color Palette</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {colorPalette.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-600"
                  style={{ backgroundColor: color.color }}
                />
                <h3 className="text-lg font-medium text-white">{color.name}</h3>
                <p className="text-sm text-gray-400">{color.color}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-light text-yellow-400 mb-4">Design Inspiration</h3>
            <p className="text-gray-300 leading-relaxed">
              Drawing inspiration from contemporary European design, this living room 
              combines the warmth of natural materials with the sophistication of modern 
              aesthetics. The neutral palette allows for flexibility while the carefully 
              chosen accents in gold create moments of luxury throughout the space.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LivingRoom;