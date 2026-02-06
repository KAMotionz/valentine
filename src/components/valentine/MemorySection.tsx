import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { valentineConfig } from "@/config/valentineConfig";

interface MemorySectionProps {
  onContinue: () => void;
}

const MemorySection = ({ onContinue }: MemorySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const { memoryLines, memoryClosingLine } = valentineConfig;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Deep wine background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine/30 via-background to-background" />

      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ y: y1 }}
      >
        <div className="w-full h-full bg-rose rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-10"
        style={{ y: y2 }}
      >
        <div className="w-full h-full bg-gold rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {memoryLines.map((line, index) => (
            <motion.p
              key={index}
              className="font-serif text-2xl md:text-4xl text-foreground font-light leading-relaxed mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            className="text-rose-light font-script text-3xl md:text-4xl mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {memoryClosingLine}
          </motion.p>

          <motion.button
            onClick={onContinue}
            className="group relative px-10 py-4 bg-transparent border border-rose/40 rounded-full text-foreground font-light tracking-widest uppercase text-sm overflow-hidden transition-all duration-500 hover:border-rose pulse-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">One more thing</span>
            <motion.div
              className="absolute inset-0 bg-rose/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/20"
          style={{
            left: `${10 + i * 20}%`,
            bottom: "10%",
          }}
          animate={{
            y: [-20, -60, -20],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </section>
  );
};

export default MemorySection;