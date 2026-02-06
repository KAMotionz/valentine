import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import { valentineConfig } from "@/config/valentineConfig";

const ProposalSection = () => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const { herName, celebrationMessage } = valentineConfig;

  const triggerCelebration = useCallback(() => {
    // Heart-shaped confetti burst
    const duration = 5000;
    const end = Date.now() + duration;

    const heartColors = ["#e11d48", "#f43f5e", "#fb7185", "#fecdd3", "#fda4af"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: heartColors,
        shapes: ["circle"],
        scalar: 1.2,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: heartColors,
        shapes: ["circle"],
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: heartColors,
    });

    frame();
  }, []);

  const handleAnswer = () => {
    setHasAnswered(true);
    triggerCelebration();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-rose-dark/20 to-background" />

      {/* Central glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background: "radial-gradient(circle, hsl(345 60% 50% / 0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!hasAnswered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center mb-8"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-16 h-16 text-rose fill-rose/50" />
              </motion.div>

              <motion.h2
                className="font-script text-4xl md:text-5xl text-foreground font-light mb-2 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Lillian Livinus Orack,
              </motion.h2>
              <motion.h2
                className="font-serif text-3xl md:text-5xl text-foreground font-light mb-2 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                will you be my
              </motion.h2>

              <motion.h2
                className="font-script text-6xl md:text-9xl text-romantic-gradient mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Valentine?
              </motion.h2>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  onClick={handleAnswer}
                  className="relative px-12 py-5 bg-rose text-primary-foreground rounded-full font-medium tracking-wider uppercase text-sm overflow-hidden romantic-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Yes</span>
                </motion.button>

                <motion.button
                  onClick={handleAnswer}
                  className="group relative px-12 py-5 bg-transparent border-2 border-rose/60 text-foreground rounded-full font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:border-rose"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Obviously Yes</span>
                  <motion.div
                    className="absolute inset-0 bg-rose/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating hearts background */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1.5, 0.5],
                    y: [0, -100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.div>
              ))}

              <motion.div
                className="inline-flex items-center justify-center mb-8"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-20 h-20 text-rose fill-rose" />
              </motion.div>

              <motion.h2
                className="font-serif text-4xl md:text-5xl text-foreground font-light mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                You've made me
              </motion.h2>

              <motion.h2
                className="font-script text-5xl md:text-8xl text-romantic-gradient mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                the happiest person alive.
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {celebrationMessage}
                <br />
                <span className="text-rose-light italic">Forever yours, Carino.</span>
              </motion.p>

              <motion.div
                className="mt-12 flex items-center justify-center gap-2 text-rose"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Heart className="w-5 h-5 fill-current floating-heart" />
                <Heart className="w-6 h-6 fill-current floating-heart" style={{ animationDelay: "0.5s" }} />
                <Heart className="w-5 h-5 fill-current floating-heart" style={{ animationDelay: "1s" }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProposalSection;