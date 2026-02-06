import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { valentineConfig } from "@/config/valentineConfig";

interface PhotoGalleryProps {
  onContinue: () => void;
}

const PhotoGallery = ({ onContinue }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { photos, photoCaptions, herName } = valentineConfig;

  const hasPhotos = photos.length > 0;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-advance photos
  useEffect(() => {
    if (!hasPhotos || photos.length <= 1) return;
    const timer = setInterval(nextPhoto, 7000);
    return () => clearInterval(timer);
  }, [hasPhotos, photos.length]);

  if (!hasPhotos) {
    // Show a placeholder message if no photos are added
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-wine/10 to-background" />
        
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-12 h-12 text-rose mx-auto mb-8" />
            <h2 className="font-script text-4xl md:text-6xl text-foreground mb-6">
              Our Memories
            </h2>
            <p className="text-muted-foreground mb-8">
              Add your favorite photos in{" "}
              <code className="text-rose-light bg-wine/20 px-2 py-1 rounded">
                src/config/valentineConfig.ts
              </code>
            </p>
            <motion.button
              onClick={onContinue}
              className="group relative px-10 py-4 bg-transparent border border-rose/40 rounded-full text-foreground font-light tracking-widest uppercase text-sm overflow-hidden transition-all duration-500 hover:border-rose pulse-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Continue</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-wine/15 to-background" />

      {/* Ambient glow behind photo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, hsl(345 60% 50% / 0.2) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-script text-4xl md:text-6xl text-foreground mb-2">
            Moments with
          </h2>
          <h2 className="font-script text-5xl md:text-7xl text-romantic-gradient">
            {herName}
          </h2>
        </motion.div>

        {/* Photo carousel */}
        <div className="relative">
          <div className="relative aspect-[4/3] md:aspect-[16/10] max-w-3xl mx-auto overflow-hidden rounded-2xl romantic-glow">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex]}
                alt={photoCaptions[currentIndex] || `Memory ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Caption */}
            {photoCaptions[currentIndex] && (
              <motion.div
                key={`caption-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-0 right-0 text-center"
              >
                <p className="font-script text-2xl md:text-3xl text-foreground">
                  {photoCaptions[currentIndex]}
                </p>
              </motion.div>
            )}
          </div>

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-rose/30 text-foreground hover:bg-rose/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-rose/30 text-foreground hover:bg-rose/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {photos.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-rose"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={onContinue}
            className="group relative px-10 py-4 bg-transparent border border-rose/40 rounded-full text-foreground font-light tracking-widest uppercase text-sm overflow-hidden transition-all duration-500 hover:border-rose pulse-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Continue</span>
            <motion.div
              className="absolute inset-0 bg-rose/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
