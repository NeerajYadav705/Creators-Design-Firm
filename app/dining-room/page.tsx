'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DiningRoom = () => {
  const splitRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<'before' | 'after'>('before');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split screen animation on scroll
      const splitContainer = splitRef.current;
      if (splitContainer) {
        const leftPanel = splitContainer.querySelector('.left-panel');
        const rightPanel = splitContainer.querySelector('.right-panel');
        
        // Initial state
        gsap.set(leftPanel, { xPercent: 0 });
        gsap.set(rightPanel, { xPercent: 0 });
        
        // Animation timeline
        ScrollTrigger.create({
          trigger: splitContainer,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(leftPanel, { xPercent: -50, duration: 1.5, ease: 'power2.inOut' });
            gsap.to(rightPanel, { xPercent: 50, duration: 1.5, ease: 'power2.inOut' });
          },
          onLeaveBack: () => {
            gsap.to(leftPanel, { xPercent: 0, duration: 1, ease: 'power2.inOut' });
            gsap.to(rightPanel, { xPercent: 0, duration: 1, ease: 'power2.inOut' });
          }
        });
      }

      // Parallax elements
      gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      gsap.utils.toArray('.parallax-fast').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const beforeAfterData = {
    before: {
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Before',
      description: 'Traditional dining space with limited functionality'
    },
    after: {
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'After',
      description: 'Elegant dining area perfect for entertaining'
    }
  };

  return (
    <div className="bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="parallax-slow absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elegant <span className="text-amber-400">Dining</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where culinary experiences meet sophisticated design and meaningful conversations flourish
          </motion.p>
        </div>
      </section>

      {/* Interactive Before/After Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Transformation Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Witness the evolution from a simple dining space to an elegant entertainment haven
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setCurrentView('before')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    currentView === 'before' 
                      ? 'bg-amber-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setCurrentView('after')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    currentView === 'after' 
                      ? 'bg-amber-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  After
                </button>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView}
                  initial={{ opacity: 0, x: currentView === 'after' ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: currentView === 'after' ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${beforeAfterData[currentView].image})` }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-light text-amber-400 mb-2">
                      {beforeAfterData[currentView].title}
                    </h3>
                    <p className="text-lg text-gray-300">
                      {beforeAfterData[currentView].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Animation Section */}
      <section ref={splitRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          {/* Left Panel */}
          <div className="left-panel w-1/2 h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-4xl font-light mb-4 text-amber-400">Traditional</h3>
                <p className="text-lg text-gray-300">Classic dining with timeless appeal</p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="right-panel w-1/2 h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-4xl font-light mb-4 text-amber-400">Modern</h3>
                <p className="text-lg text-gray-300">Contemporary elegance for today's lifestyle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center divider */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-black -ml-1" />
            <ChevronRight className="w-4 h-4 text-black -mr-1" />
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Dining Excellence</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light mb-4">Artisan Table</h3>
              <p className="text-gray-400">Handcrafted dining table from reclaimed wood, featuring unique grain patterns and sustainable craftsmanship</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light mb-4">Statement Lighting</h3>
              <p className="text-gray-400">Custom chandelier with adjustable brightness, creating the perfect ambiance for intimate dinners or large gatherings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-amber-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light mb-4">Curated Seating</h3>
              <p className="text-gray-400">Ergonomic chairs upholstered in premium fabrics, designed for comfort during extended dinner conversations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Entertaining Philosophy */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">The Art of Gathering</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              This dining room is designed around the belief that the best conversations happen 
              around a beautiful table. Every element contributes to creating memorable experiences, 
              from intimate family dinners to sophisticated dinner parties.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              The careful balance of lighting, acoustics, and spatial flow ensures that 
              every gathering feels special, transforming meals into moments that linger 
              in memory long after the last course is served.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiningRoom;