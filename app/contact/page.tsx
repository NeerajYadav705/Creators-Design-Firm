'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@luxeinteriors.com',
      description: 'Send us your project details'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Schedule a consultation call'
    },
    {
      icon: MapPin,
      title: 'Studio',
      details: 'New York, NY',
      description: 'Visit our design studio'
    }
  ];

  const projectTypes = [
    'Residential Interior',
    'Commercial Space',
    'Kitchen Renovation',
    'Bathroom Design',
    'Full Home Makeover',
    'Consultation Only'
  ];

  const budgetRanges = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let's <span className="text-yellow-400">Create</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transform your vision into reality with our luxury interior design expertise
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to begin your design journey? We'd love to hear about your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-yellow-400/10 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-400/20">
                  <info.icon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light mb-2">{info.title}</h3>
                <p className="text-xl text-yellow-400 mb-2">{info.details}</p>
                <p className="text-gray-400">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Contact Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Start Your Project</h2>
            <p className="text-xl text-gray-400">
              Tell us about your vision and we'll bring it to life
            </p>
          </motion.div>

          <Card className="bg-neutral-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <Label 
                      htmlFor="name"
                      className={`absolute transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                          : 'text-gray-400 text-base top-3 left-4'
                      }`}
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-transparent border-gray-600 text-white pt-6 pb-3 px-4 focus:border-yellow-400"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <Label 
                      htmlFor="email"
                      className={`absolute transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                          : 'text-gray-400 text-base top-3 left-4'
                      }`}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-transparent border-gray-600 text-white pt-6 pb-3 px-4 focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="relative">
                    <Label 
                      htmlFor="phone"
                      className={`absolute transition-all duration-300 pointer-events-none ${
                        focusedField === 'phone' || formData.phone
                          ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                          : 'text-gray-400 text-base top-3 left-4'
                      }`}
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-transparent border-gray-600 text-white pt-6 pb-3 px-4 focus:border-yellow-400"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="relative">
                    <Label 
                      htmlFor="project"
                      className={`absolute transition-all duration-300 pointer-events-none ${
                        focusedField === 'project' || formData.project
                          ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                          : 'text-gray-400 text-base top-3 left-4'
                      }`}
                    >
                      Project Type
                    </Label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('project')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border border-gray-600 text-white pt-6 pb-3 px-4 focus:border-yellow-400 rounded-md focus:outline-none focus:ring-0"
                    >
                      <option value="" className="bg-neutral-900"></option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-neutral-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="relative">
                  <Label 
                    htmlFor="budget"
                    className={`absolute transition-all duration-300 pointer-events-none ${
                      focusedField === 'budget' || formData.budget
                        ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                        : 'text-gray-400 text-base top-3 left-4'
                    }`}
                  >
                    Budget Range
                  </Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border border-gray-600 text-white pt-6 pb-3 px-4 focus:border-yellow-400 rounded-md focus:outline-none focus:ring-0"
                  >
                    <option value="" className="bg-neutral-900"></option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range} className="bg-neutral-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <Label 
                    htmlFor="message"
                    className={`absolute transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? 'text-yellow-400 text-sm -top-2 left-3 bg-neutral-900 px-2'
                        : 'text-gray-400 text-base top-4 left-4'
                    }`}
                  >
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="bg-transparent border-gray-600 text-white pt-8 pb-4 px-4 focus:border-yellow-400 resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-4 text-lg transition-colors duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Every great design starts with a conversation. Let's discuss your vision 
              and create something extraordinary together.
            </p>
            <p className="text-lg text-gray-400">
              We typically respond within 24 hours and look forward to learning about your project.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;