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

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: `${5 + ((i * 13) % 90)}%`,
  y: `${5 + ((i * 17) % 88)}%`,
  size: 1.5 + (i % 3),
  duration: 3 + (i % 5),
  delay: i * 0.3,
}));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const scrollDown = () =>
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-[#0A2A5E] overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient glows */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 35, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[40%] left-[40%] w-80 h-80 bg-[#C89B3C]/5 rounded-full blur-2xl"
        />

        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.6, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            className="absolute rounded-full bg-[#C89B3C]/40"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          />
        ))}

        {/* Decorative arcs */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="110%" r="55%" fill="none" stroke="#C89B3C" strokeWidth="1" />
          <circle cx="50%" cy="110%" r="70%" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main content — centered */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-8 pt-28 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-white/8 border border-white/15 text-[#C89B3C] text-sm font-semibold tracking-wide"
            >
              <span className="w-2 h-2 bg-[#C89B3C] rounded-full mr-2.5 animate-pulse" />
              India's Premium HR Consulting Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
            >
              Building{" "}
              <span className="relative inline-block text-[#C89B3C]">
                Exceptional
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C89B3C]/35 origin-left block"
                />
              </span>
              {" "}Teams.
              <br />
              <span className="text-white/80">Driving Business Growth.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed"
            >
              Quvora Consulting partners with businesses to solve hiring challenges,
              attract exceptional talent, and build future-ready organisations through
              innovative HR consulting solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="bg-[#C89B3C] hover:bg-[#b8892e] text-white text-base h-13 px-10 rounded-lg shadow-xl shadow-[#C89B3C]/20 border-0"
                  onClick={() => scrollTo("#contact")}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/25 hover:bg-white/8 hover:border-white/45 text-base h-13 px-10 rounded-lg bg-transparent"
                  onClick={() => scrollTo("#services")}
                >
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-4"
            >
              {["Executive Search", "HR Advisory", "Talent Strategy", "Leadership Development"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-white/40"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white/4 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="py-5 px-4 md:px-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-black text-[#C89B3C]">{stat.value}</p>
                <p className="text-xs text-white/35 mt-1 font-medium tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/50 transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
