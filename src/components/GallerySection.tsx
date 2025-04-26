import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/fine-dining-preparation.jpg",
    alt: "Fine Dining Preparation",
    category: "kitchen"
  },
  {
    id: 2,
    src: "/images/gallery/grilled-trout-dish.jpg",
    alt: "Grilled Trout Special",
    category: "food"
  },
  {
    id: 3,
    src: "/images/gallery/chef-preparing-dish.jpg",
    alt: "Chef's Expertise",
    category: "kitchen"
  },
  {
    id: 4,
    src: "/images/gallery/dough-making-process.jpg",
    alt: "Artisanal Dough Making",
    category: "kitchen"
  },
  {
    id: 5,
    src: "/images/gallery/GrilledLobsterwithBéarnaiseSauce.jpg",
    alt: "Grilled Lobster with Béarnaise Sauce",
    category: "food"
  },
  {
    id: 6,
    src: "/images/gallery/Chef.jpg",
    alt: "Our Master Chef",
    category: "team"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const velocitiesRef = useRef<Array<{ vx: number; vy: number }>>([]);

  // Initialize positions and velocities
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const initialPositions = galleryImages.map(() => ({
      x: Math.random() * (container.width - 300),  // 300 is card width
      y: Math.random() * (container.height - 200)   // Reduced height to avoid title
    }));

    velocitiesRef.current = galleryImages.map(() => ({
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2
    }));

    setPositions(initialPositions);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current || positions.length === 0) return;

    let animationFrameId: number;

    const animate = () => {
      if (!containerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();

      setPositions(prevPositions => {
        return prevPositions.map((pos, i) => {
          let newX = pos.x + velocitiesRef.current[i].vx;
          let newY = pos.y + velocitiesRef.current[i].vy;

          // Bounce off walls
          if (newX <= 0) {
            newX = 0;
            velocitiesRef.current[i].vx *= -1;
          } else if (newX >= container.width - 300) { // 300 is card width
            newX = container.width - 300;
            velocitiesRef.current[i].vx *= -1;
          }

          if (newY <= 0) {
            newY = 0;
            velocitiesRef.current[i].vy *= -1;
          } else if (newY >= container.height - 200) { // 200 is adjusted card height
            newY = container.height - 200;
            velocitiesRef.current[i].vy *= -1;
          }

          // Add small random variations to velocity for more dynamic movement
          velocitiesRef.current[i].vx += (Math.random() - 0.5) * 0.05;
          velocitiesRef.current[i].vy += (Math.random() - 0.5) * 0.05;

          // Ensure minimum and maximum velocity
          const minVelocity = 0.5;
          const maxVelocity = 2;
          const currentV = Math.sqrt(
            velocitiesRef.current[i].vx * velocitiesRef.current[i].vx +
            velocitiesRef.current[i].vy * velocitiesRef.current[i].vy
          );

          if (currentV < minVelocity) {
            const scale = minVelocity / currentV;
            velocitiesRef.current[i].vx *= scale;
            velocitiesRef.current[i].vy *= scale;
          } else if (currentV > maxVelocity) {
            const scale = maxVelocity / currentV;
            velocitiesRef.current[i].vx *= scale;
            velocitiesRef.current[i].vy *= scale;
          }

          return { x: newX, y: newY };
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [positions.length]);

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const handlePreviousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating bubbles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2))',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-800, 0],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 20,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Interactive wave effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.3) 0%, transparent 50%)'
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onMouseMove={(e) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            el.style.setProperty('--mouse-x', `${x}%`);
            el.style.setProperty('--mouse-y', `${y}%`);
          }}
        />

        {/* Glass effect overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Our Gallery
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Take a look at our beautiful restaurant and delicious dishes
          </p>
        </motion.div>

        {/* Gallery Container */}
        <div 
          ref={containerRef}
          className="relative h-[800px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="absolute"
              animate={{
                x: positions[index]?.x || 0,
                y: positions[index]?.y || 0
              }}
              transition={{
                type: "tween",
                duration: 0,
                ease: "linear"
              }}
            >
              {/* Card Container */}
              <div 
                className="relative w-[300px]"
                onClick={() => setSelectedImage(index)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-2xl aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors duration-500" />
                  
                  {/* Image */}
                  <div className="relative h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Error loading image: ${image.src}`);
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.style.backgroundColor = '#333';
                        imgElement.style.padding = '2rem';
                      }}
                    />
                    
                    {/* Hover overlay - Always show title and category */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-xl font-serif font-bold text-white mb-1">{image.alt}</h3>
                        <p className="text-white/80 text-sm capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full mx-4" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-all duration-300 z-[60] backdrop-blur-sm border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image container with caption */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Dark overlay for better text visibility - Always present */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-[1]" />
                
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black/50"
                />

                {/* Image caption - Always visible */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/70 to-transparent z-[55]"
                >
                  <h3 className="text-4xl font-serif font-bold text-white mb-3 drop-shadow-lg">
                    {galleryImages[selectedImage].alt}
                  </h3>
                  <p className="text-white/90 text-xl capitalize drop-shadow-lg">
                    {galleryImages[selectedImage].category}
                  </p>
                </motion.div>
              
                {/* Navigation arrows with improved visibility */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-[52]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePreviousImage();
                    }}
                    className="bg-black/50 hover:bg-black/70 p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/10 ml-2"
                  >
                    <ChevronLeft className="w-10 h-10 text-white" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="bg-black/50 hover:bg-black/70 p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/10 mr-2"
                  >
                    <ChevronRight className="w-10 h-10 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection; 