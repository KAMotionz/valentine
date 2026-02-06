import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { valentineConfig } from "@/config/valentineConfig";

interface IntroSectionProps {
  onContinue: () => void;
  musicref: any;

}

const IntroSection = ({ onContinue, musicref }: IntroSectionProps) => {
  const { herName } = valentineConfig;
  const handleClick = ()=>{
    console.log(musicref.current)
    musicref.current.volume = 0.5
    musicref.current.play()
    onContinue()
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-wine/20" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(345 60% 50% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-8 h-8 text-rose fill-rose/30" />
          </motion.div>
          
          <h1 className="font-script text-5xl md:text-7xl text-foreground mb-4 leading-tight">
            Dear
          </h1>
          <h1 className="font-script text-6xl md:text-8xl text-romantic-gradient mb-6 leading-tight">
            Lillian
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I know you said i shouldn't force anything and this is me trying not to. But i need you to know that every word here
            <br />
            comes from the deepest part of my heart❤️.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleClick}
          className="group relative px-10 py-4 bg-transparent border border-rose/40 rounded-full text-foreground font-light tracking-widest uppercase text-sm overflow-hidden transition-all duration-500 hover:border-rose pulse-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
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
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-rose/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </section>
  );
};

export default IntroSection;