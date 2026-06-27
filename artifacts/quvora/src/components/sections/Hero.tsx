import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-medium tracking-wide">
              Premium HR Consulting
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Building <span className="text-accent relative inline-block">Exceptional Teams.<motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-accent/30"
              /></span><br /> Driving Business Growth.
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              We partner with visionary businesses to solve complex hiring challenges, attract elite talent, and build future-ready organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-8 rounded-md shadow-lg shadow-accent/20" onClick={() => scrollTo('#contact')}>
                Get Started →
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg h-14 px-8 rounded-md bg-transparent" onClick={() => scrollTo('#services')}>
                Explore Services
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[500px]"
          >
            {/* Abstract Graphic representing HR/Talent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-md p-8 shadow-2xl flex flex-col justify-between">
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="self-end bg-white/10 border border-white/20 p-4 rounded-xl max-w-[200px] backdrop-blur-md shadow-xl"
              >
                <div className="text-xs text-white/50 mb-1">Top Talent Match</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">98%</div>
                  <div className="flex flex-col gap-1">
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                    <div className="w-12 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
              
              <div className="flex justify-center my-auto relative">
                <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />
                <div className="flex gap-8 relative z-10">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ y: [0, -5 * i, 0] }}
                      transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                      className={`w-16 h-16 rounded-full border-4 ${i === 2 ? 'border-accent bg-primary' : 'border-white/20 bg-primary'} flex items-center justify-center shadow-lg`}
                    >
                      <div className={`w-8 h-8 rounded-full ${i === 2 ? 'bg-accent' : 'bg-white/20'}`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-white/10 border border-white/20 p-4 rounded-xl max-w-[250px] backdrop-blur-md shadow-xl"
              >
                <div className="text-xs text-white/50 mb-2">Hiring Velocity</div>
                <div className="flex items-end gap-2 h-10">
                  {[40, 70, 45, 90, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-accent/40 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
