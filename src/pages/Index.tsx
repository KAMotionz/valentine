import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "@/components/valentine/IntroSection";
import FactsSection from "@/components/valentine/FactsSection";
import PhotoGallery from "@/components/valentine/PhotoGallery";
import MemorySection from "@/components/valentine/MemorySection";
import ProposalSection from "@/components/valentine/ProposalSection";
import music from "@/public/NOTHING'S GONNA CHANGE MY LOVE FOR YOU (with lyrics) - GEORGE BENSON.mp3"

type Section = "intro" | "facts" | "photos" | "memory" | "proposal";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("intro");
  const containerRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef()

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSection = (section: Section) => {
    scrollToTop();
    setTimeout(() => {
      setCurrentSection(section);
    }, 300);
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <>
    <audio src={music} ref={musicRef}/>
    <div
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-x-hidden"
    >
      {/* Ambient pink blur background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top left pink glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-rose/20 rounded-full blur-[120px] animate-pulse" />
        {/* Top right pink glow */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px]" />
        {/* Center large pink blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/10 rounded-full blur-[150px]" />
        {/* Bottom left pink glow */}
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-pink-400/15 rounded-full blur-[80px]" />
        {/* Bottom right pink glow */}
        <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-rose-dark/30 rounded-full blur-[120px]" />
        {/* Floating accent */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blush/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {currentSection === "intro" && (
            <IntroSection onContinue={() => navigateToSection("facts")} musicref={musicRef}/>
          )}
          {currentSection === "facts" && (
            <FactsSection onContinue={() => navigateToSection("photos")} />
          )}
          {currentSection === "photos" && (
            <PhotoGallery onContinue={() => navigateToSection("memory")} />
          )}
          {currentSection === "memory" && (
            <MemorySection onContinue={() => navigateToSection("proposal")} />
          )}
          {currentSection === "proposal" && <ProposalSection />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {(["intro", "facts", "photos", "memory", "proposal"] as Section[]).map((section) => (
          <button
            key={section}
            onClick={() => navigateToSection(section)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === section
                ? "w-8 bg-rose"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Index;