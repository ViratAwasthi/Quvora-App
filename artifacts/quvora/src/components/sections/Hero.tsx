import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle, TrendingUp, Users, Briefcase, MapPin, Sparkles, ArrowUpRight, Clock } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const activeMandates = [
  {
    role: "Chief People Officer",
    sector: "BFSI",
    city: "Mumbai",
    stage: "Shortlisting",
    stageColor: "#C89B3C",
    insight: "4 candidates advancing to panel interviews",
    elapsed: "Day 11",
  },
  {
    role: "VP – Engineering",
    sector: "SaaS",
    city: "Bengaluru",
    stage: "Interviews",
    stageColor: "#0d7cf2",
    insight: "Final round scheduled with 2 shortlists",
    elapsed: "Day 8",
  },
  {
    role: "Head of Finance",
    sector: "Pharma",
    city: "Hyderabad",
    stage: "Screening",
    stageColor: "#10b981",
    insight: "148 profiles reviewed, 12 progressing",
    elapsed: "Day 4",
  },
];

const marketSignals = [
  {
    headline: "BFSI leadership hiring",
    delta: "+38%",
    direction: "up",
    period: "Q2 · FY 2026",
    insight: "C-suite mandates rising across private banks and NBFCs in India.",
    sector: "BFSI",
    accentColor: "#C89B3C",
  },
  {
    headline: "Tech talent demand",
    delta: "+51%",
    direction: "up",
    period: "Q2 · FY 2026",
    insight: "AI, platform and product roles driving surge across Bengaluru & Pune.",
    sector: "IT / SaaS",
    accentColor: "#0d7cf2",
  },
  {
    headline: "D2C brand expansion",
    delta: "+29%",
    direction: "up",
    period: "Q2 · FY 2026",
    insight: "Supply chain and ops leaders in high demand as D2C brands scale tier-2.",
    sector: "D2C / Retail",
    accentColor: "#8b5cf6",
  },
];

function LiveMandateCard() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % activeMandates.length), 3800);
    return () => clearInterval(t);
  }, []);
  const m = activeMandates[idx];
  const stages = ["Screening", "Shortlisting", "Interviews", "Offer"];
  const stageIdx = stages.indexOf(m.stage);

  return (
    <div className="bg-[#071d42] border border-white/10 rounded-2xl overflow-hidden shadow-2xl" style={{ width: 210 }}>
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2 border-b border-white/8">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[9px] text-[#C89B3C] uppercase tracking-widest font-bold">Live Mandate</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] text-white/35">Active</span>
          </span>
        </div>
      </div>

      {/* Cycling role content */}
      <div className="px-3.5 py-2.5 min-h-[90px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-white font-bold text-[12px] leading-snug mb-1">{m.role}</p>
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="w-2.5 h-2.5 text-white/35 shrink-0" />
              <span className="text-[9px] text-white/45">{m.city}</span>
              <span className="text-white/20 text-[9px]">·</span>
              <span className="text-[9px] text-white/45">{m.sector}</span>
            </div>
            <p className="text-[9px] text-white/50 leading-relaxed italic mb-2.5">"{m.insight}"</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stage pipeline */}
      <div className="px-3.5 pb-2.5">
        <div className="flex items-center gap-1 mb-1.5">
          {stages.map((s, i) => (
            <div
              key={s}
              className="flex-1 h-1 rounded-full transition-all duration-500"
              style={{ backgroundColor: i <= stageIdx ? m.stageColor : "rgba(255,255,255,0.1)" }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: m.stageColor, backgroundColor: `${m.stageColor}18` }}>
            {m.stage}
          </span>
          <div className="flex items-center gap-1 text-white/30">
            <Clock className="w-2.5 h-2.5" />
            <span className="text-[8px]">{m.elapsed}</span>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1 pb-2.5">
        {activeMandates.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full transition-all duration-300" style={{ backgroundColor: i === idx ? "#C89B3C" : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
    </div>
  );
}

function MarketSignalCard() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % marketSignals.length), 4200);
    return () => clearInterval(t);
  }, []);
  const s = marketSignals[idx];
  const sparkline = [30, 42, 38, 55, 50, 68, 74, 88];

  return (
    <div className="bg-[#071d42] border border-white/10 rounded-2xl overflow-hidden shadow-2xl" style={{ width: 214 }}>
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2 border-b border-white/8">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-bold">India Market Signal</span>
          <Sparkles className="w-3 h-3 text-white/20" />
        </div>
      </div>

      {/* Cycling content */}
      <div className="px-3.5 py-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            {/* Headline + delta */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-white font-bold text-[12px] leading-snug">{s.headline}</p>
              <div className="flex items-center gap-0.5 shrink-0">
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-black text-[13px]">{s.delta}</span>
              </div>
            </div>
            {/* Period + sector tag */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-[8px] text-white/35">{s.period}</span>
              <span className="text-white/20 text-[8px]">·</span>
              <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ color: s.accentColor, backgroundColor: `${s.accentColor}18` }}>{s.sector}</span>
            </div>
            {/* Sparkline */}
            <div className="mb-2.5">
              <svg viewBox="0 0 80 28" className="w-full h-7">
                <defs>
                  <linearGradient id={`sg-${idx}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={s.accentColor} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={s.accentColor} stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <polyline
                  points={sparkline.map((v, i) => `${i * (80 / (sparkline.length - 1))},${28 - (v / 100) * 24}`).join(" ")}
                  fill="none"
                  stroke={s.accentColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points={[
                    ...sparkline.map((v, i) => `${i * (80 / (sparkline.length - 1))},${28 - (v / 100) * 24}`),
                    `80,28`, `0,28`
                  ].join(" ")}
                  fill={`url(#sg-${idx})`}
                />
              </svg>
            </div>
            {/* Insight text */}
            <p className="text-[9px] text-white/45 leading-relaxed">{s.insight}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1 pb-2.5">
        {marketSignals.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full transition-all duration-300" style={{ backgroundColor: i === idx ? "#10b981" : "rgba(255,255,255,0.15)" }} />
        ))}
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

const candidates = [
  { role: "VP – Human Resources", dept: "People & Culture", match: 97, status: "Interview", icon: "HR", color: "#C89B3C" },
  { role: "Chief Financial Officer", dept: "Finance & Strategy", match: 94, status: "Offered", icon: "CF", color: "#0d7cf2" },
  { role: "Head of Engineering", dept: "Technology", match: 91, status: "Screening", icon: "EG", color: "#10b981" },
];

const pipeline = [
  { label: "Applications", count: 148, color: "#C89B3C", pct: 100 },
  { label: "Screened", count: 62, color: "#0d7cf2", pct: 42 },
  { label: "Interviewed", count: 24, color: "#10b981", pct: 16 },
  { label: "Shortlisted", count: 9, color: "#8b5cf6", pct: 6 },
  { label: "Placed", count: 4, color: "#C89B3C", pct: 3 },
];

const bars = [38, 55, 48, 70, 62, 88, 74];

const statusColor: Record<string, string> = {
  Interview: "bg-blue-500/20 text-blue-300",
  Offered: "bg-emerald-500/20 text-emerald-300",
  Screening: "bg-amber-500/20 text-amber-300",
};

function AnimatedDashboard() {
  const [tick, setTick] = useState(0);
  const [activeCandidate, setActiveCandidate] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick(n => n + 1);
      setActiveCandidate(n => (n + 1) % candidates.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl" style={{ perspective: "1000px" }}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A5E]/95 via-[#0d3272]/90 to-[#122d6a]/95 backdrop-blur-md border border-white/12" />

      {/* Subtle inner grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dash-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dash-grid)" />
      </svg>

      <div className="relative z-10 h-full flex flex-col p-4 gap-3">
        {/* Header bar */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#C89B3C] flex items-center justify-center">
              <span className="text-white font-black text-[10px]">Q</span>
            </div>
            <span className="text-white/80 text-xs font-semibold tracking-wide">Quvora HR Suite</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/40 text-[10px]">Live</span>
          </div>
        </div>

        {/* Main content: 2 columns */}
        <div className="flex gap-3 flex-1 min-h-0">
          {/* Left: Candidates */}
          <div className="flex flex-col gap-2 w-[52%]">
            <div className="text-[9px] text-white/35 uppercase tracking-widest font-semibold flex items-center gap-1">
              <Users className="w-2.5 h-2.5" /> Active Candidates
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              {candidates.map((c, i) => (
                <motion.div
                  key={i}
                  animate={{
                    borderColor: i === activeCandidate ? "rgba(200,155,60,0.5)" : "rgba(255,255,255,0.08)",
                    backgroundColor: i === activeCandidate ? "rgba(200,155,60,0.08)" : "rgba(255,255,255,0.04)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg border px-2.5 py-1.5 flex items-center gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                    style={{ background: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-[10px] font-semibold truncate">{c.role}</div>
                    <div className="text-white/45 text-[9px] truncate">{c.dept}</div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-0.5">
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-semibold ${statusColor[c.status]}`}>
                      {c.status}
                    </span>
                    <span className="text-[#C89B3C] text-[9px] font-bold">{c.match}%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bar chart - hiring trend */}
            <div className="bg-white/4 border border-white/8 rounded-lg p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] text-white/40 uppercase tracking-widest">Hiring Trend</span>
                <motion.span key={tick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-bold text-emerald-400">
                  +24% ↑
                </motion.span>
              </div>
              <div className="flex items-end gap-1 h-8">
                {bars.map((h, i) => (
                  <motion.div
                    key={`${tick}-${i}`}
                    initial={{ height: "15%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
                    className={`flex-1 rounded-t-sm ${i === 5 ? "bg-[#C89B3C]" : "bg-[#C89B3C]/30"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["J","F","M","A","M","J","J"].map((m,i) => (
                  <span key={i} className="text-[7px] text-white/20 flex-1 text-center">{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pipeline + metrics */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Talent Match */}
            <div className="bg-white/4 border border-white/8 rounded-lg p-2.5">
              <div className="text-[9px] text-white/35 uppercase tracking-widest mb-2">Talent Match</div>
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(200,155,60,0.15)" strokeWidth="3" />
                    <motion.circle
                      cx="20" cy="20" r="16"
                      fill="none" stroke="#C89B3C" strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="100.5"
                      initial={{ strokeDashoffset: 100.5 }}
                      animate={{ strokeDashoffset: 100.5 * 0.02 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[#C89B3C] font-black text-[10px]">98%</span>
                </div>
                <div className="flex-1 space-y-1">
                  {[80, 65, 50].map((w, i) => (
                    <motion.div key={i} className="h-1 rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-[#C89B3C]/70"
                        initial={{ width: "0%" }}
                        animate={{ width: `${w}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pipeline funnel */}
            <div className="bg-white/4 border border-white/8 rounded-lg p-2.5 flex-1">
              <div className="text-[9px] text-white/35 uppercase tracking-widest mb-2 flex items-center gap-1">
                <Briefcase className="w-2.5 h-2.5" /> Pipeline
              </div>
              <div className="flex flex-col gap-1.5">
                {pipeline.map((p, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="text-[8px] text-white/35 w-14 shrink-0 truncate">{p.label}</div>
                    <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: p.color }}
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${p.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                    <span className="text-[8px] font-bold text-white/50 w-5 text-right">{p.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open roles badge */}
            <div className="bg-[#C89B3C]/10 border border-[#C89B3C]/25 rounded-lg p-2 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-[#C89B3C]/70 uppercase tracking-widest">Open Roles</div>
                <div className="text-white font-black text-lg leading-none">12</div>
              </div>
              <div className="flex flex-col gap-0.5 text-right">
                <span className="text-[8px] text-emerald-400">5 Active</span>
                <span className="text-[8px] text-blue-400">4 Offered</span>
                <span className="text-[8px] text-white/30">3 Final Rnd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const trustedLogos = [
  { name: "PwC", domain: "pwc.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Roche", domain: "roche.com" },
  { name: "Walmart", domain: "walmart.com" },
  { name: "Sanofi", domain: "sanofi.com" },
];

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

              {/* Floating card top-left — Live Mandate */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-20"
              >
                <LiveMandateCard />
              </motion.div>

              {/* Floating card bottom-right — Market Signal */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 z-20"
              >
                <MarketSignalCard />
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
