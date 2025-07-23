'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
        {/* About */}
        <div>
          <h3 className="text-white text-lg mb-4 font-medium">About Creators DesignFirm</h3>
          <p className="leading-relaxed text-gray-400">
            We blend contemporary style with luxury living. Explore virtual tours and reimagine your interiors with elegance and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg mb-4 font-medium">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg mb-4 font-medium">Contact</h3>
          <p className="mb-2 text-gray-400">📞 +91 79062 93268</p>
          <p className="mb-2 text-gray-400">📧 contact@creatorsdesignfirm.com</p>
          <p className="text-gray-400">📍 Dehradun, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Web Builder Studios. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
