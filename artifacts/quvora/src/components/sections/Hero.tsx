import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Placements" },
  { value: "120+", label: "Partner Firms" },
  { value: "98%", label: "Satisfaction" },
  { value: "10+", label: "Industries" },
];

const services = [
  "Executive Search",
  "C-Suite Hiring",
  "HR Advisory",
  "Talent Strategy",
  "Leadership Development",
  "Workforce Planning",
];

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
      className="relative min-h-screen flex flex-col bg-[#071d42] overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,155,60,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(13,68,130,0.25),transparent)]" />

        {/* Subtle dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Decorative arcs at bottom */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
          <ellipse cx="50%" cy="115%" rx="65%" ry="55%" fill="none" stroke="#C89B3C" strokeWidth="1" />
          <ellipse cx="50%" cy="120%" rx="80%" ry="68%" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Thin diagonal accent line */}
        <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-transparent via-[#C89B3C]/8 to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-10 pt-32 pb-10 relative z-10">
          <div className="max-w-[860px] mx-auto flex flex-col items-center text-center gap-7">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C89B3C]/50" />
              <span className="text-[#C89B3C] text-xs font-bold uppercase tracking-[0.2em]">
                India's Premium HR Consulting Partner
              </span>
              <span className="h-px w-8 bg-[#C89B3C]/50" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.07] tracking-tight text-white"
            >
              Building{" "}
              <span className="relative text-[#C89B3C]">
                Exceptional
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.85, ease: "easeOut" }}
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C89B3C]/80 via-[#C89B3C]/40 to-transparent origin-left block rounded-full"
                />
              </span>{" "}
              Teams.
              <br />
              <span className="text-white/65 font-semibold">Driving Business Growth.</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-[2px] bg-[#C89B3C]/40 rounded-full origin-center"
            />

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-lg md:text-xl text-white/50 max-w-[600px] leading-relaxed"
            >
              We partner with India's leading organisations to attract, place and
              develop senior leadership — with precision, discretion and a deep
              understanding of what drives business success.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-1"
            >
              <motion.div whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={() => scrollTo("#contact")}
                  className="bg-[#C89B3C] hover:bg-[#b8892e] text-white text-[15px] font-semibold h-12 px-9 rounded-lg border-0 shadow-[0_8px_32px_rgba(200,155,60,0.25)]"
                >
                  Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("#services")}
                  className="text-white/80 border-white/20 hover:bg-white/6 hover:border-white/35 text-[15px] h-12 px-9 rounded-lg bg-transparent"
                >
                  Our Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Scrolling services ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full pt-4 overflow-hidden"
            >
              <div className="flex items-center gap-0 border-t border-b border-white/6 py-3">
                <div className="flex gap-8 animate-[marquee_28s_linear_infinite] whitespace-nowrap shrink-0">
                  {[...services, ...services].map((s, i) => (
                    <span key={i} className="flex items-center gap-2 text-[11px] text-white/25 font-medium uppercase tracking-[0.14em]">
                      <span className="w-1 h-1 rounded-full bg-[#C89B3C]/40 shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }}
                className="py-6 px-4 md:px-8 text-center"
              >
                <p className="text-[28px] md:text-[32px] font-black text-[#C89B3C] leading-none">{stat.value}</p>
                <p className="text-[10px] text-white/30 mt-1.5 font-medium tracking-[0.12em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2 text-white/20 hover:text-white/45 transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
