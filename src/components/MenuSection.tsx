import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MenuSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic tomato sauce, mozzarella, and fresh basil',
      price: '£12.99',
      image: '/images/menu/margarita.jpg'
    },
    {
      id: 2,
      name: 'Pasta Carbonara',
      description: 'Spaghetti with creamy egg sauce, pancetta, and parmesan',
      price: '£14.99',
      image: '/images/menu/PastaCarbonara.jpg'
    },
    {
      id: 3,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: '£6.99',
      image: '/images/menu/tiramisu.jpg'
    },
    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'Spicy pepperoni, mozzarella, and tomato sauce',
      price: '£13.99',
      image: '/images/menu/PepperoniPizza.jpg'
    },
    {
      id: 5,
      name: 'Lasagna',
      description: 'Layers of pasta, rich meat sauce, and melted cheese',
      price: '£15.99',
      image: '/images/menu/Lasagna.jpg'
    },
    {
      id: 6,
      name: 'Bruschetta',
      description: 'Grilled bread with tomatoes, garlic, and fresh basil',
      price: '£7.99',
      image: '/images/menu/Bruschetta.jpg'
    },
    {
      id: 7,
      name: 'Fettuccine Alfredo',
      description: 'Creamy parmesan sauce with fettuccine pasta',
      price: '£14.99',
      image: '/images/menu/FettuccineAlfredo.jpg'
    },
    {
      id: 8,
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
      price: '£9.99',
      image: '/images/menu/CapreseSalad.jpg'
    },
    {
      id: 9,
      name: 'Garlic Bread',
      description: 'Freshly baked bread with garlic butter and herbs',
      price: '£4.99',
      image: '/images/menu/GarlicBread.jpg'
    },
    {
      id: 10,
      name: 'Cannoli',
      description: 'Sweet crispy pastry filled with ricotta cream',
      price: '£5.99',
      image: '/images/menu/Cannoli.jpg'
    },
    {
      id: 11,
      name: 'Chicken Parmigiana',
      description: 'Breaded chicken with marinara sauce and melted cheese',
      price: '£16.99',
      image: '/images/menu/ChickenParmigiana.jpg'
    },
    {
      id: 12,
      name: 'Gelato',
      description: 'Italian ice cream in various flavors',
      price: '£4.99',
      image: '/images/menu/Gelato.jpg'
    }
  ];

  const visibleItems = showAll ? menuItems : menuItems.slice(0, 3);

  const handleShowMoreClick = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);
    
    // If showing more items, scroll to the first new item smoothly
    if (newShowAll) {
      const timeout = setTimeout(() => {
        const element = document.getElementById('additional-items');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  };

  return (
    <section id="menu" className="relative py-20 overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0">
        {/* Gradient transition from Home to Menu */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-blue-400 to-blue-500">
          {/* Overlay gradient for smoother transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/50 to-blue-500/80" />
        </div>
      </div>
      
      {/* Animated Waves Container */}
      <div className="absolute inset-0">
        {/* Wave 1 - Slowest and Biggest */}
        <motion.div
          className="absolute bottom-0 w-[200%] h-56"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23ffffff' fill-opacity='.15'/%3E%3C/svg%3E")`,
            backgroundSize: '1200px 100%'
          }}
          animate={{
            x: [0, -1200]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Wave 2 - Medium Speed */}
        <motion.div
          className="absolute bottom-10 w-[200%] h-48"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23ffffff' fill-opacity='.25'/%3E%3C/svg%3E")`,
            backgroundSize: '1200px 100%'
          }}
          animate={{
            x: [0, -1200]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Wave 3 - Fastest */}
        <motion.div
          className="absolute bottom-20 w-[200%] h-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23ffffff' fill-opacity='.35'/%3E%3C/svg%3E")`,
            backgroundSize: '1200px 100%'
          }}
          animate={{
            x: [0, -1200]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Sparkle Effects */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
        
        {/* Additional Wave Details */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 20%)',
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our delicious dishes made with love and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={index === 3 ? 'additional-items' : undefined}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glass Card Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg">
                  <div 
                    className="h-48 overflow-hidden cursor-pointer"
                    onClick={() => setHoveredItem(item.id)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full">
                        Click to preview
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative bg-white/30 backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-primary to-transparent"
                    />
                    
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg text-sm font-medium hover:from-primary/90 hover:to-primary/70 transition-colors"
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {menuItems.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={handleShowMoreClick}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg 
                       font-medium transition-all hover:bg-white/30 
                       shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <span className="flex items-center gap-2">
                {showAll ? 'Show Less' : 'Show More'}
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {hoveredItem !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setHoveredItem(null)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="relative max-w-4xl w-full mx-4"
            >
              {menuItems.find(item => item.id === hoveredItem) && (
                <img
                  src={menuItems.find(item => item.id === hoveredItem)?.image}
                  alt={menuItems.find(item => item.id === hoveredItem)?.name}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              )}
              <button
                onClick={() => setHoveredItem(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection; 