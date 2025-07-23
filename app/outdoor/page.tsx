'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trees, Sun, Flower, Wind } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Outdoor = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Multi-layer parallax effect
      gsap.set('.parallax-bg', { transformOrigin: 'center center' });
      gsap.set('.parallax-mid', { transformOrigin: 'center center' });
      gsap.set('.parallax-fg', { transformOrigin: 'center center' });

      // Background layer - slowest
      gsap.to('.parallax-bg', {
        yPercent: -20,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Middle layer - medium speed
      gsap.to('.parallax-mid', {
        yPercent: -40,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Foreground layer - fastest
      gsap.to('.parallax-fg', {
        yPercent: -60,
        scale: 1.02,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Zoom effect on scroll
      ScrollTrigger.create({
        trigger: '.zoom-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.zoom-content', {
            scale: 1 + progress * 0.3,
            opacity: 1 - progress * 0.5,
            duration: 0.3,
          });
        },
      });

      // Floating animation for natural elements
      gsap.to('.floating-leaf', {
        y: -15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      });

      gsap.to('.swaying-branch', {
        rotation: 3,
        transformOrigin: 'bottom center',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const gardenFeatures = [
    {
      icon: Trees,
      title: 'Native Landscaping',
      description: 'Carefully selected plants that thrive in the local climate',
      details: ['Drought-resistant plants', 'Seasonal color variations', 'Low maintenance design']
    },
    {
      icon: Sun,
      title: 'Solar Integration',
      description: 'Sustainable energy solutions for outdoor lighting',
      details: ['Solar pathway lights', 'Eco-friendly materials', 'Energy-efficient systems']
    },
    {
      icon: Flower,
      title: 'Botanical Harmony',
      description: 'Thoughtful plant arrangements for year-round beauty',
      details: ['Pollinator-friendly plants', 'Layered garden design', 'Fragrant herb sections']
    },
    {
      icon: Wind,
      title: 'Natural Flow',
      description: 'Design that works with natural wind and water patterns',
      details: ['Wind-resistant structures', 'Natural drainage', 'Airflow optimization']
    }
  ];

  return (
    <div className="bg-green-50 text-gray-900">
      {/* Hero Section with Parallax */}
      <section ref={parallaxRef} className="relative h-screen overflow-hidden">
        {/* Background Layer */}
        <div 
          className="parallax-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        
        {/* Middle Layer */}
        <div 
          className="parallax-mid absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Foreground Layer */}
        <div className="parallax-fg absolute inset-0 bg-green-900/30" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
              Garden <span className="text-green-400">Oasis</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Where nature meets design in perfect harmony, creating a sanctuary for body and soul
            </p>
            
            {/* Floating natural elements */}
            <div className="relative">
              <Trees className="floating-leaf absolute -top-4 -left-8 w-6 h-6 text-green-300 opacity-70" />
              <Flower className="floating-leaf absolute -top-2 right-4 w-4 h-4 text-yellow-300 opacity-70" />
              <Wind className="floating-leaf absolute top-6 -right-12 w-5 h-5 text-blue-300 opacity-70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Natural Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-green-800 mb-6">
              Biophilic Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our outdoor space embraces the principles of biophilic design, creating 
              a deep connection between inhabitants and the natural world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gardenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="swaying-branch w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Section */}
      <section className="zoom-section relative h-screen flex items-center justify-center overflow-hidden bg-green-800">
        <div 
          className="zoom-content absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-green-900/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-6">
              Living Architecture
            </h2>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Plants and structures work together to create spaces that evolve with the seasons
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Transitions */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-green-800 mb-6">
              Four Seasons, One Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                season: 'Spring', 
                color: 'from-green-400 to-green-600',
                image: 'https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                description: 'Fresh blooms and new growth'
              },
              { 
                season: 'Summer', 
                color: 'from-yellow-400 to-green-500',
                image: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                description: 'Lush foliage and vibrant colors'
              },
              { 
                season: 'Autumn', 
                color: 'from-orange-400 to-red-500',
                image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                description: 'Warm tones and harvest beauty'
              },
              { 
                season: 'Winter', 
                color: 'from-blue-400 to-gray-500',
                image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                description: 'Structural beauty and evergreen calm'
              },
            ].map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${season.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${season.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-light">{season.season}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-center">{season.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Sustainable Sanctuary</h2>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              This outdoor space demonstrates that luxury and sustainability can coexist beautifully. 
              Every plant, material, and system has been chosen for its environmental benefits, 
              creating a space that gives back to the earth while providing endless enjoyment.
            </p>
            <p className="text-lg text-green-200 leading-relaxed">
              From rainwater collection to native plant species that support local wildlife, 
              this garden is a testament to responsible design that honors both beauty and ecology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Outdoor;