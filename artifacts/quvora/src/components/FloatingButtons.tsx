import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#0A2A5E] hover:bg-[#C89B3C] text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
