import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileNav from './components/MobileNav';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import HomeSection from './components/HomeSection';
import FooterSection from './components/FooterSection';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a 
                href="#home" 
                className="logo-link"
              >
                <h1 className="text-3xl font-serif font-bold text-primary tracking-wider hover:text-primary/80 transition-colors">
                  Lumare
                </h1>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#menu" className="nav-link">
                Menu
              </a>
              <a href="#gallery" className="nav-link">
                Gallery
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Home Section */}
      <HomeSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
