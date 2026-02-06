import { motion } from "framer-motion";
import { Sparkles, Star, Moon, Sun } from "lucide-react";
import { valentineConfig } from "@/config/valentineConfig";

interface FactsSectionProps {
  onContinue: () => void;
}

const icons = [Sparkles, Star, Moon, Sun];

const FactsSection = ({ onContinue }: FactsSectionProps) => {
  const { facts, herName } = valentineConfig;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(345 40% 8%) 0%, hsl(345 30% 12%) 100%)",
            "linear-gradient(135deg, hsl(345 30% 10%) 0%, hsl(345 40% 15%) 100%)",
            "linear-gradient(135deg, hsl(345 40% 8%) 0%, hsl(345 30% 12%) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.h2
          className="font-script text-4xl md:text-6xl text-center text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Things I love about you🌚
        </motion.h2>
        
        <motion.h2
          className="font-script text-5xl md:text-7xl text-center text-romantic-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Mama
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Until now.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {facts.map((fact, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card/50 border border-rose/10 backdrop-blur-sm transition-all duration-500 hover:border-rose/30"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, hsl(345 60% 50% / 0.1) 0%, transparent 70%)",
                  }}
                />
                
                <div className="relative z-10">
                  <IconComponent className="w-6 h-6 text-rose-light mb-4" />
                  <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
                    {fact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={onContinue}
            className="group relative px-10 py-4 bg-transparent border border-rose/40 rounded-full text-foreground font-light tracking-widest uppercase text-sm overflow-hidden transition-all duration-500 hover:border-rose pulse-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">There's more</span>
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

export default FactsSection;