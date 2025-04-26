import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/lumare-hero-bg.jpg', '/images/lumare-beach.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {/* First Background Image - Always visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[0]})`,
            opacity: currentImage === 0 ? 1 : 0,
            transition: 'opacity 2s ease-in-out'
          }}
        />
        
        {/* Second Background Image - Always visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[1]})`,
            opacity: currentImage === 1 ? 1 : 0,
            transition: 'opacity 2s ease-in-out'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Welcome to <span className="text-primary">Lumare</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg"
            >
              Experience the art of fine dining in an atmosphere of elegance and sophistication.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="btn btn-primary px-8 py-3 text-lg font-medium"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-lg font-medium border border-white/20"
              >
                Make Reservation
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg ${
                    currentImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={image}
                    alt={`Background ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
          >
            <motion.div
              className="w-1 h-2 bg-white/70 rounded-full mt-2"
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection; 