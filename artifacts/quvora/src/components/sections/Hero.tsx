import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle, TrendingUp, Users, Search, Briefcase, Target } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Successful Placements" },
  { value: "120+", label: "Partner Companies" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Industries Served" },
];

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: `${5 + ((i * 13) % 90)}%`,
  y: `${5 + ((i * 17) % 88)}%`,
  size: 1.5 + (i % 3),
  duration: 3 + (i % 5),
  delay: i * 0.3,
}));

const pillars = [
  {
    icon: Search,
    title: "Executive Search",
    desc: "C-Suite, VP & Senior Leadership roles across India",
    accent: "#C89B3C",
    delay: 0.3,
  },
  {
    icon: Briefcase,
    title: "HR Advisory",
    desc: "Organisational design, strategy & people consulting",
    accent: "#4f8ef7",
    delay: 0.45,
  },
  {
    icon: Target,
    title: "Talent Strategy",
    desc: "Workforce planning, retention & leadership development",
    accent: "#10b981",
    delay: 0.6,
  },
];

function ElegantVisual() {
  return (
    <div className="relative w-full flex flex-col justify-center gap-6 py-4">
      {/* Decorative glows */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#C89B3C]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

      {/* Section eyebrow */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#C89B3C] flex items-center justify-center shadow-lg shadow-[#C89B3C]/25">
          <span className="text-white font-black text-[11px]">Q</span>
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none">Quvora Consulting</p>
          <p className="text-white/35 text-[10px] mt-0.5">Pan-India · Est. 2015</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-white/10 via-[#C89B3C]/30 to-transparent" />

      {/* Three pillars */}
      {pillars.map((p, i) => (
        <div key={i} className="flex items-start gap-4 group">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${p.accent}18, ${p.accent}08)`,
              border: `1px solid ${p.accent}28`,
            }}
          >
            <p.icon className="w-5 h-5" style={{ color: p.accent }} />
          </div>
          <div className="pt-0.5">
            <p className="text-white font-semibold text-sm leading-tight">{p.title}</p>
            <p className="text-white/40 text-xs mt-1 leading-relaxed max-w-xs">{p.desc}</p>
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* Bottom brand line */}
      <p className="text-[11px] text-white/25 font-medium tracking-wide italic">
        "People. Strategy. Growth."
      </p>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 28, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 28, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 35);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 35);
  };

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const scrollDown = () => sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-[#0A2A5E] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[3%] w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[2%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[40%] left-[35%] w-64 h-64 bg-[#C89B3C]/5 rounded-full blur-2xl"
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="52" height="52" patternUnits="userSpaceOnUse">
              <path d="M 52 0 L 0 0 0 52" fill="none" stroke="white" strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.5, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            className="absolute rounded-full bg-[#C89B3C]/50"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white space-y-7"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C89B3C] text-sm font-semibold tracking-wide"
              >
                <span className="w-2 h-2 bg-[#C89B3C] rounded-full mr-2 animate-pulse" />
                Premium HR Consulting
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight">
                Building{" "}
                <span className="text-[#C89B3C] relative inline-block">
                  Exceptional Teams.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C89B3C]/40 origin-left block"
                  />
                </span>
                <br />
                Driving Business Growth.
              </h1>

              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                Quvora Consulting partners with businesses to solve hiring challenges, attract exceptional talent, and build future-ready organisations through innovative HR consulting solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    className="bg-[#C89B3C] hover:bg-[#b8892e] text-white text-base h-12 px-8 rounded-lg shadow-lg shadow-[#C89B3C]/25 border-0"
                    onClick={() => scrollTo("#contact")}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 text-base h-12 px-8 rounded-lg bg-transparent"
                    onClick={() => scrollTo("#services")}
                  >
                    Explore Services
                  </Button>
                </motion.div>
              </div>

              {/* Key proof points */}
              <div className="pt-2 flex flex-wrap gap-3">
                {[
                  { icon: CheckCircle, label: "End-to-end talent lifecycle" },
                  { icon: TrendingUp, label: "Data-driven matching" },
                  { icon: Users, label: "Cross-industry expertise" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <Icon className="w-4 h-4 text-[#C89B3C] shrink-0" />
                    <span>{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Elegant brand visual */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative h-[380px] md:h-[420px] flex items-center"
              style={{ perspective: "1200px", rotateX: springY, rotateY: springX } as React.CSSProperties}
            >
              <ElegantVisual />
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
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="py-5 px-4 md:px-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-black text-[#C89B3C]">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1 font-medium tracking-wide uppercase">{stat.label}</p>
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
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
