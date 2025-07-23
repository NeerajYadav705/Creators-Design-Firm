'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Utensils, Lightbulb } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Kitchen = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step-by-step scroll reveal sections
      const sections = gsap.utils.toArray('.reveal-section');
      
      sections.forEach((section: any, index) => {
        gsap.fromTo(section,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
            }
          }
        );
      });

      // Parallax effect for images
      gsap.utils.toArray('.parallax-image').forEach((image: any) => {
        gsap.to(image, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: ChefHat,
      title: 'Professional Grade',
      description: 'Commercial-quality appliances for the home chef',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      icon: Utensils,
      title: 'Smart Storage',
      description: 'Innovative solutions for maximum functionality',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Ambient Lighting',
      description: 'Perfect illumination for cooking and dining',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="parallax-image absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-white">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contemporary <span className="text-blue-400">Kitchen</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where culinary artistry meets modern functionality in perfect harmony
          </motion.p>
        </div>
      </section>

      {/* Step-by-step Feature Sections */}
      <div ref={sectionsRef}>
        {features.map((feature, index) => (
          <section key={index} className="reveal-section min-h-screen flex items-center py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="parallax-image relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className="w-16 h-16 text-blue-500 mb-6" />
                    <h2 className="text-4xl md:text-5xl font-light mb-6">{feature.title}</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-4">
                      {index === 0 && (
                        <>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Induction cooktop with precision control</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Built-in steam oven</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Wine storage system</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Pull-out pantry systems</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Hidden appliance garage</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Drawer organizer systems</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Under-cabinet LED strips</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Pendant lighting over island</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Recessed ceiling lights</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Materials Section */}
      <section className="reveal-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Premium Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every surface tells a story of quality and craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-light mb-4">Quartz Countertops</h3>
                <p className="text-gray-600">Engineered stone with exceptional durability and beauty</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-light mb-4">Oak Cabinetry</h3>
                <p className="text-gray-600">Sustainably sourced hardwood with natural grain patterns</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-light mb-4">Ceramic Backsplash</h3>
                <p className="text-gray-600">Handcrafted tiles with subtle texture variations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Story */}
      <section className="reveal-section py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">The Story Behind the Design</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              This kitchen represents the evolution of modern culinary spaces. Inspired by 
              Scandinavian minimalism and German engineering precision, every element serves 
              both form and function. The open layout encourages interaction while maintaining 
              distinct zones for preparation, cooking, and gathering.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Natural light floods the space through carefully positioned windows, while 
              the neutral palette creates a timeless backdrop for culinary creativity. 
              This is more than a kitchen—it's the heart of the home.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kitchen;