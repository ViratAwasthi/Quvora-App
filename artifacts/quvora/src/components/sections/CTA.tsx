import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[10%] w-[100%] h-[200%] border border-white/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[20%] w-[120%] h-[160%] border border-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Build Your <span className="text-accent">Dream Team?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your hiring challenges and outline a strategic roadmap to secure the talent that will drive your business forward.
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo('#contact')}
              className="bg-accent hover:bg-accent/90 text-white text-lg h-16 px-10 rounded-md shadow-2xl shadow-accent/20 transition-all hover:scale-105"
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
