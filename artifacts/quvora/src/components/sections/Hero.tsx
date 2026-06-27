import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "Successful Placements" },
  { value: "120+", label: "Partner Companies" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Industries Served" },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: `${8 + ((i * 13) % 84)}%`,
  y: `${10 + ((i * 17) % 78)}%`,
  size: 2 + (i % 3),
  duration: 3 + (i % 5),
  delay: i * 0.35,
}));

function AnimatedDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 2200);
    return () => clearInterval(t);
  }, []);

  const bars = [38, 62, 48, 84, 56, 91, 74];

  return (
    <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden p-5 flex flex-col justify-between">

      {/* Top: Talent Match Card */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="self-end bg-[#0A2A5E]/90 border border-white/20 rounded-xl p-4 w-48 shadow-xl"
      >
        <div className="text-[10px] text-white/50 uppercase tracking-widest mb-2">Talent Match</div>
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-full border-2 border-[#C89B3C] flex items-center justify-center text-[#C89B3C] font-black text-sm shrink-0 relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="19" fill="none" stroke="rgba(200,155,60,0.2)" strokeWidth="2.5" />
              <motion.circle
                cx="22" cy="22" r="19"
                fill="none" stroke="#C89B3C" strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="119.4"
                initial={{ strokeDashoffset: 119.4 }}
                animate={{ strokeDashoffset: 119.4 * 0.02 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </svg>
            98%
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <motion.div animate={{ width: ["60%", "80%", "60%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-1.5 bg-[#C89B3C]/70 rounded-full" />
            <div className="w-3/4 h-1.5 bg-white/25 rounded-full" />
            <div className="w-1/2 h-1.5 bg-white/15 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Center: Candidate selection */}
      <div className="flex justify-center items-center relative py-2">
        <div className="absolute w-4/5 h-px bg-white/12" />
        <div className="flex gap-5 relative z-10">
          {[
            { big: false, active: false, label: "A" },
            { big: true, active: true, label: "★" },
            { big: false, active: false, label: "B" },
          ].map((c, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, c.big ? -9 : -5, 0] }}
              transition={{ duration: 3.2, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className={`${c.big ? "w-16 h-16" : "w-11 h-11"} rounded-full flex items-center justify-center shadow-lg font-bold transition-all duration-500 ${c.active ? "border-[3px] border-[#C89B3C] bg-[#C89B3C]/20 text-[#C89B3C] text-lg" : "border-2 border-white/25 bg-white/10 text-white/50 text-sm"}`}
            >
              {c.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom: Hiring velocity chart */}
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-[#0A2A5E]/90 border border-white/20 rounded-xl p-4 w-56 shadow-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] text-white/50 uppercase tracking-widest">Hiring Velocity</div>
          <motion.div
            key={tick}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] text-[#C89B3C] font-bold"
          >
            +24% ↑
          </motion.div>
        </div>
        <div className="flex items-end gap-1.5 h-12">
          {bars.map((h, i) => (
            <motion.div
              key={`${tick}-${i}`}
              initial={{ height: "15%" }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
              className={`flex-1 rounded-t-sm ${i === 5 ? "bg-[#C89B3C]" : "bg-[#C89B3C]/35"}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-3 py-2 shadow-lg"
      >
        <div className="text-[10px] text-white/60 uppercase tracking-widest">Placement Rate</div>
        <div className="text-lg font-black text-[#C89B3C]">98%</div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-[#0A2A5E] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Rich background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient blobs */}
        <motion.div
          animate={{ y: [0, -35, 0], x: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[4%] w-80 h-80 bg-[#C89B3C]/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 28, 0], x: [0, -22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[15%] right-[4%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[45%] left-[30%] w-56 h-56 bg-[#C89B3C]/6 rounded-full blur-2xl"
        />

        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            className="absolute rounded-full bg-[#C89B3C]/60"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ y: 32 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-white space-y-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C89B3C] text-sm font-semibold tracking-wide"
              >
                <span className="w-2 h-2 bg-[#C89B3C] rounded-full mr-2 animate-pulse" />
                Premium HR Consulting
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Building{" "}
                <span className="text-[#C89B3C] relative inline-block">
                  Exceptional Teams.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C89B3C]/50 origin-left block"
                  />
                </span>
                <br />
                Driving Business Growth.
              </h1>

              <p className="text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
                Quvora Consulting partners with businesses to solve hiring challenges, attract exceptional talent, and build future-ready organisations through innovative HR consulting solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    className="bg-[#C89B3C] hover:bg-[#b8892e] text-white text-base h-12 px-8 rounded-lg shadow-lg shadow-[#C89B3C]/30 border-0"
                    onClick={() => scrollTo("#contact")}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/35 hover:bg-white/12 hover:border-white/50 text-base h-12 px-8 rounded-lg bg-transparent"
                    onClick={() => scrollTo("#services")}
                  >
                    Explore Services
                  </Button>
                </motion.div>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  {["S", "R", "M", "P"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0A2A5E] flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: ["#C89B3C", "#0d4a8a", "#1a6aa0", "#C89B3C88"][i] }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white/50 text-xs">Trusted by 120+ companies across India</span>
              </div>
            </motion.div>

            {/* Right: Interactive dashboard */}
            <motion.div
              initial={{ y: 24, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
              style={{ rotateX: springY, rotateY: springX }}
              className="relative h-[400px] md:h-[440px] perspective-1000"
            >
              <AnimatedDashboard />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="py-5 px-4 text-center group hover:bg-white/5 transition-colors duration-200"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#C89B3C] group-hover:scale-105 transition-transform duration-200">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/55 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors z-10"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
