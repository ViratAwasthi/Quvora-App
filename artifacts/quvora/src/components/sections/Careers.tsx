import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Join Our Growing Team</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Are you a passionate HR professional driven by excellence and innovation? 
            At Quvora Consulting, we are always looking for exceptional talent to join our internal team.
            Build a rewarding career shaping the future of global businesses.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 mt-4 rounded-md">
            View Open Positions →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
