import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-dark hover:text-primary transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-dark hover:text-primary transition-colors">
              Home
            </a>
            <a href="#menu" className="text-dark hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-dark hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-dark hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav; 