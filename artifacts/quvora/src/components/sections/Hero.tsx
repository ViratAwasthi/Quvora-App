import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Successful Placements" },
  { value: "120+", label: "Partner Companies" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Industries Served" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    if (sectionRef.current) {
      const next = sectionRef.current.nextElementSibling as HTMLElement | null;
      if (next) next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-primary overflow-hidden"
    >
      {/* Animated background blobs — start visible, continuously animate */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[25%] w-48 h-48 bg-accent/5 rounded-full blur-2xl"
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            className="absolute w-2 h-2 bg-accent/50 rounded-full"
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
            }}
          />
        ))}
      </div>

      {/* Main hero content — NO opacity animations, content always visible */}
      <div className="flex-1 flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text — slide up from y=20, start at full opacity */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-medium tracking-wide">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                Premium HR Consulting
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Building{" "}
                <span className="text-accent relative">
                  Exceptional Teams.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/40 origin-left block"
                  />
                </span>
                <br />
                Driving Business Growth.
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                Quvora Consulting partners with businesses to solve hiring challenges, attract
                exceptional talent, and build future-ready organizations through innovative HR
                consulting solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  data-testid="button-get-started"
                  className="bg-accent hover:bg-accent/90 text-white text-base h-12 px-8 rounded-md shadow-lg shadow-accent/30 hover:scale-105 transition-transform"
                  onClick={() => scrollTo("#contact")}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-explore-services"
                  className="text-white border-white/40 hover:bg-white/10 text-base h-12 px-8 rounded-md bg-transparent"
                  onClick={() => scrollTo("#services")}
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>

            {/* Right: Abstract HR Dashboard illustration — visible immediately */}
            <motion.div
              initial={{ y: 20, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[380px] md:h-[420px]"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden p-6 flex flex-col justify-between">

                {/* Top-right: Match Score Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="self-end bg-primary/90 border border-white/20 backdrop-blur-md rounded-xl p-4 max-w-[200px] shadow-xl"
                >
                  <div className="text-xs text-white/50 mb-2 uppercase tracking-wide">Talent Match</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-accent flex items-center justify-center text-accent font-bold text-sm">98%</div>
                    <div className="flex flex-col gap-1.5">
                      <div className="w-20 h-1.5 bg-accent/50 rounded-full" />
                      <div className="w-14 h-1.5 bg-white/30 rounded-full" />
                      <div className="w-10 h-1.5 bg-white/15 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Center: Candidate circles */}
                <div className="flex justify-center items-center my-auto relative py-4">
                  <div className="absolute w-4/5 h-[1px] bg-white/15" />
                  <div className="flex gap-6 relative z-10">
                    {[
                      { big: false },
                      { big: true },
                      { big: false },
                    ].map((c, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, c.big ? -10 : -5, 0] }}
                        transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className={`${c.big ? "w-16 h-16" : "w-12 h-12"} rounded-full border-4 ${c.big ? "border-accent bg-primary" : "border-white/30 bg-white/10"} flex items-center justify-center shadow-lg`}
                      >
                        <div className={`${c.big ? "w-8 h-8" : "w-6 h-6"} rounded-full ${c.big ? "bg-accent" : "bg-white/30"}`} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom-left: Hiring chart */}
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-primary/90 border border-white/20 backdrop-blur-md rounded-xl p-4 max-w-[240px] shadow-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-white/50 uppercase tracking-wide">Hiring Velocity</div>
                    <div className="text-xs text-accent font-semibold">+24% ↑</div>
                  </div>
                  <div className="flex items-end gap-1.5 h-12">
                    {[35, 60, 45, 80, 55, 90, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "20%" }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                        className={`flex-1 rounded-t-sm ${i === 5 ? "bg-accent" : "bg-accent/35"}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar — always visible */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="py-5 px-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors z-10"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
