'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const rooms = [
    { path: '/', name: 'Welcome Hall', icon: Home },
    { path: '/living-room', name: 'Living Room' },
    { path: '/kitchen', name: 'Kitchen' },
    { path: '/bedroom', name: 'Bedroom' },
    { path: '/office', name: 'Office' },
    { path: '/dining-room', name: 'Dining Room' },
    { path: '/outdoor', name: 'Outdoor' },
    { path: '/bathroom', name: 'Bathroom' },
    { path: '/contact', name: 'Contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Creators Design Firm
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {rooms.map((room) => (
              <Link
                key={room.path}
                href={room.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  pathname === room.path ? 'text-yellow-400' : 'text-white/80'
                }`}
              >
                {room.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={room.path}
                    className={`text-2xl font-medium transition-colors hover:text-yellow-400 ${
                      pathname === room.path ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {room.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;