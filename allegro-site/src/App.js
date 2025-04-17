import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import { Button } from './components/ui/button';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [hoverStates, setHoverStates] = useState({});
  const containerRef = useRef(null);

  // Parallax effect for hero section
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://pamphlet.onrender.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        
        // Initialize hover states
        const initialHoverStates = {};
        data.forEach(product => {
          initialHoverStates[product._id] = false;
        });
        setHoverStates(initialHoverStates);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchProducts();
    
    // Welcome animation
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    // Scroll listener for parallax
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % selectedProduct.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length
    );
  };

  const handleProductHover = (productId, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [productId]: isHovering
    }));
  };

  const openWhatsApp = (product) => {
    const message = `Hi, I'm interested in the ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/919650534838?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-allegro-cream flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-12 h-12 border-4 border-allegro-accent border-t-transparent rounded-full mb-4"
          />
          <p className="text-allegro-text text-lg font-medium">Loading Allegro Collection...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-allegro-cream">
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-allegro-cream z-50 animate-scale-in">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-allegro-text mb-4">ALLEGRO</h1>
            <p className="text-xl text-allegro-gray">Premium Fashion Collection</p>
          </div>
        </div>
      )}

      

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product._id}
              className="bg-allegro-light rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105 border border-allegro-sand"
              onMouseEnter={() => handleProductHover(product._id, true)}
              onMouseLeave={() => handleProductHover(product._id, false)}
            >
              <div 
                className="relative aspect-square cursor-pointer group bg-allegro-cream"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-allegro-text bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-allegro-light opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-allegro-text mb-2">{product.name}</h3>
                <p className="text-allegro-gray mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-allegro-accent font-bold text-xl">{product.price}</span>
                  <Button 
                    variant="outline" 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="border-allegro-sand text-allegro-text hover:bg-allegro-sand hover:text-allegro-text"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
        <DialogContent className="bg-allegro-light text-allegro-text max-w-6xl">
          {selectedProduct && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery Section */}
              <div className="space-y-4">
                <div className="relative aspect-square bg-allegro-cream rounded-lg">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain p-8"
                  />
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-allegro-text bg-opacity-50 text-allegro-light p-2 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-allegro-text bg-opacity-50 text-allegro-light p-2 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {selectedProduct.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative aspect-square cursor-pointer bg-allegro-cream rounded-lg overflow-hidden ${
                        index === currentImageIndex ? 'ring-2 ring-allegro-accent' : ''
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${selectedProduct.name} - ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-allegro-text mb-2">{selectedProduct.name}</h2>
                  <p className="text-xl text-allegro-accent font-bold mb-4">{selectedProduct.price}</p>
                  <p className="text-allegro-gray mb-6">{selectedProduct.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-allegro-text mb-2">Product Details</h3>
                    <ul className="space-y-2 text-allegro-gray">
                      {selectedProduct.details?.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-allegro-accent mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-allegro-text mb-2">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-4 py-2 bg-allegro-sand text-allegro-text rounded-full"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <Button
                  className="w-full bg-allegro-accent text-allegro-light hover:bg-allegro-accent/90 py-6 text-lg"
                  onClick={() => openWhatsApp(selectedProduct)}
                >
                  Contact Us for More Information
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-allegro-light py-8 mt-12 border-t border-allegro-sand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-allegro-text">ALLEGRO</h2>
          <p className="text-allegro-gray">Premium Fashion Collection</p>
          <p className="mt-4 text-allegro-gray">© 2025 ALLEGRO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 