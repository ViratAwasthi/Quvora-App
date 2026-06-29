import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const focusIndustries = ["BFSI", "IT / SaaS", "Pharma", "D2C", "Manufacturing", "Consulting"];

function QuvoraEdgeCard() {
  return (
    <div
      className="bg-[#071d42] border border-white/12 rounded-2xl shadow-2xl overflow-hidden"
      style={{ width: 192 }}
    >
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2.5 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#C89B3C] flex items-center justify-center shrink-0">
            <span className="text-white font-black text-[10px]">Q</span>
          </div>
          <div>
            <p className="text-white font-bold text-[11px] leading-none">Quvora Consulting</p>
            <p className="text-[#C89B3C] text-[8px] tracking-wide mt-0.5">Leadership · HR Advisory</p>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="px-3.5 pt-2.5 pb-3">
        <p className="text-[7.5px] text-white/25 uppercase tracking-widest mb-2">Industries Served</p>
        <div className="flex flex-wrap gap-1.5">
          {focusIndustries.map((ind) => (
            <span
              key={ind}
              className="text-[9px] font-semibold px-2 py-1 rounded-full border border-white/10 text-white/55"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const demandRows = [
  { label: "C-Suite / Leadership", pct: 94, color: "#C89B3C" },
  { label: "Engineering & Tech", pct: 88, color: "#0d7cf2" },
  { label: "Finance & Risk", pct: 74, color: "#10b981" },
  { label: "HR / People Ops", pct: 81, color: "#8b5cf6" },
];

function RoleDemandCard() {
  return (
    <div
      className="bg-[#071d42] border border-white/12 rounded-2xl shadow-2xl overflow-hidden"
      style={{ width: 210 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5 border-b border-white/8">
        <span className="text-[9px] text-[#C89B3C] uppercase tracking-widest font-bold">Role Demand Index</span>
        <ArrowUpRight className="w-3 h-3 text-emerald-400" />
      </div>

      {/* Bar rows */}
      <div className="px-4 pt-3 pb-3.5 flex flex-col gap-2.5">
        {demandRows.map((row, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-white/50 truncate flex-1 mr-2">{row.label}</span>
              <span className="text-[9px] font-bold shrink-0" style={{ color: row.color }}>{row.pct}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${row.pct}%`, backgroundColor: row.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer label */}
      <div className="px-4 pb-3 border-t border-white/6 pt-2">
        <span className="text-[8px] text-white/20 uppercase tracking-widest">Demand score · Q2 2026</span>
      </div>
    </div>
  );
}

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

const recentPlacements = [
  { initials: "CP", role: "Chief People Officer", industry: "Banking & Finance · Mumbai", match: 96, color: "#C89B3C" },
  { initials: "CT", role: "Chief Technology Officer", industry: "IT / SaaS · Bengaluru", match: 94, color: "#0d7cf2" },
  { initials: "HC", role: "Head – HR & Culture", industry: "Pharma & Life Sciences · Hyderabad", match: 98, color: "#10b981" },
  { initials: "MD", role: "Managing Director", industry: "Investment Banking · Mumbai", match: 97, color: "#8b5cf6" },
  { initials: "CS", role: "Chief Strategy Officer", industry: "D2C / Consumer Brands · Delhi NCR", match: 95, color: "#f59e0b" },
  { initials: "VD", role: "VP – Digital", industry: "NBFC / Fintech · Pune", match: 93, color: "#ec4899" },
];

const dashStats = [
  { value: "500+", label: "Placements" },
  { value: "98%", label: "Match Score" },
  { value: "10+", label: "Industries" },
  { value: "18d", label: "Avg Fill Time" },
];

const teamDots = ["#C89B3C", "#0d7cf2", "#10b981"];

function AnimatedDashboard() {
  const [visibleStart, setVisibleStart] = useState(0);
  const VISIBLE = 4;

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleStart(n => (n + 1) % recentPlacements.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    recentPlacements[(visibleStart + i) % recentPlacements.length]
  );

  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071d42] via-[#0a2455] to-[#0d2d6b] border border-white/10" />

      {/* Subtle dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      <div className="relative z-10 h-full flex flex-col p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#C89B3C] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm">Q</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Talent Intelligence</p>
              <p className="text-white/40 text-[9px]">Powered by Quvora</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-emerald-400 text-[9px] font-semibold">Live Pipeline</span>
          </div>
        </div>

        {/* Recent Placements label */}
        <div className="flex items-center gap-1.5 mb-2.5 shrink-0">
          <Users className="w-3 h-3 text-white/30" />
          <span className="text-[9px] text-white/30 uppercase tracking-widest font-semibold">Recent Placements</span>
        </div>

        {/* Placement rows */}
        <div className="flex flex-col gap-2 flex-1 min-h-0">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-3 py-2"
              >
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-black text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}77)` }}
                >
                  {p.initials}
                </div>

                {/* Role info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[11px] font-bold truncate">{p.role}</p>
                  <p className="text-white/40 text-[9px] truncate">{p.industry}</p>
                </div>

                {/* Match + check */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="text-right">
                    <span className="text-[#C89B3C] font-black text-[13px] leading-none">{p.match}%</span>
                    <p className="text-white/30 text-[8px]">match</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats bar */}
        <div className="mt-3 grid grid-cols-4 gap-1.5 shrink-0">
          {dashStats.map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/8 rounded-lg py-2 text-center">
              <p className="text-[#C89B3C] font-black text-[12px] leading-none">{value}</p>
              <p className="text-white/30 text-[7.5px] mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-2.5 flex items-center gap-2 shrink-0">
          <div className="flex items-center">
            {teamDots.map((c, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border-2 border-[#071d42] -ml-1 first:ml-0"
                style={{ background: c, zIndex: teamDots.length - i }}
              />
            ))}
          </div>
          <p className="text-white/35 text-[9px] font-medium">People. Strategy. Growth.</p>
        </div>
      </div>
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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

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

            {/* Right: Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative h-[430px] md:h-[470px]"
              style={{ perspective: "1200px", rotateX: springY, rotateY: springX } as React.CSSProperties}
            >
              <AnimatedDashboard />

              {/* Floating card top-left — Quvora Edge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-20"
              >
                <QuvoraEdgeCard />
              </motion.div>

              {/* Floating card bottom-right — Role Demand */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-6 -right-6 z-20"
              >
                <RoleDemandCard />
              </motion.div>
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="py-5 px-4 text-center group hover:bg-white/5 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#C89B3C] group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[84px] left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors z-10"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
