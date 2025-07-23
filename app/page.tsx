'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Horizontal scroll for rooms
      const rooms = gsap.utils.toArray('.room-card');
      if (rooms.length > 0) {
        gsap.to(rooms, {
          xPercent: -100 * (rooms.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: roomsRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (rooms.length - 1),
            end: () => `+=${roomsRef.current?.offsetWidth}`,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const rooms = [
    {
      path: '/living-room',
      title: 'Luxury Living Room',
      description: 'Contemporary elegance meets comfort',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/kitchen',
      title: 'Contemporary Kitchen',
      description: 'Modern functionality with style',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/bedroom',
      title: 'Minimalist Bedroom',
      description: 'Serene sanctuary for rest',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/office',
      title: 'Modern Workspace',
      description: 'Productivity meets aesthetics',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/dining-room',
      title: 'Elegant Dining',
      description: 'Where conversations flourish',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/outdoor',
      title: 'Garden Oasis',
      description: 'Nature meets design',
      image: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      path: '/bathroom',
      title: 'Spa Bathroom',
      description: 'Luxury wellness retreat',
      image: 'https://images.pexels.com/photos/4247693/pexels-photo-4247693.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
          
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
              Creators <span className="text-yellow-400">Design</span>Firm
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Experience the art of luxury interior design through our virtual room tours
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="animate-bounce"
            >
              <ChevronDown size={32} className="mx-auto text-yellow-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Rooms Scroll */}
      <section ref={roomsRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          {rooms.map((room, index) => (
            <div
              key={room.path}
              className="room-card flex-shrink-0 w-full h-full relative group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${room.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-4xl md:text-6xl font-light mb-4">{room.title}</h2>
                  <p className="text-lg md:text-xl font-light mb-8 max-w-md mx-auto">
                    {room.description}
                  </p>
                  <Link href={room.path}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black font-medium rounded-none hover:bg-yellow-300 transition-colors"
                    >
                      Explore Room
                      <ArrowRight className="ml-2" size={18} />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Connect with our design team to begin your luxury interior journey.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;