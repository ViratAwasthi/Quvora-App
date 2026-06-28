import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Target, Lightbulb, TrendingUp, Award, Globe, CheckCircle } from "lucide-react";

const methodology = [
  { icon: Target, step: "01", title: "Understand Business", desc: "Deep discovery of your culture, goals, and talent gaps" },
  { icon: Users, step: "02", title: "Identify Talent", desc: "Market mapping and proactive candidate engagement" },
  { icon: Lightbulb, step: "03", title: "Evaluate & Screen", desc: "Rigorous multi-stage assessment and profiling" },
  { icon: TrendingUp, step: "04", title: "Place & Onboard", desc: "Offer management, joining support and 90-day follow-up" },
  { icon: Award, step: "05", title: "Develop People", desc: "Ongoing HR advisory to help your people grow" },
  { icon: Globe, step: "06", title: "Grow Together", desc: "Long-term partnership across your business lifecycle" },
];

const profileCards = [
  { name: "Nisha Kapoor", role: "VP – Operations", industry: "BFSI", placed: "EY", match: 96, avatar: "NK", color: "#C89B3C" },
  { name: "Rohan Desai", role: "Chief Technology Officer", industry: "SaaS", placed: "Logitech", match: 94, avatar: "RD", color: "#0d7cf2" },
  { name: "Sunita Rao", role: "Head – HR & Culture", industry: "Pharma", placed: "Sanofi", match: 98, avatar: "SR", color: "#10b981" },
];

const impactStats = [
  { value: "500+", label: "Placements", icon: CheckCircle },
  { value: "98%", label: "Match Score", icon: Award },
  { value: "10+", label: "Industries", icon: Globe },
  { value: "18d", label: "Avg Fill Time", icon: TrendingUp },
];

const trustedLogos = [
  { name: "Tata AIA", domain: "tataaia.com" },
  { name: "PwC", domain: "pwc.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Roche", domain: "roche.com" },
  { name: "Sanofi", domain: "sanofi.com" },
  { name: "Walmart", domain: "walmart.com" },
];

function RichIllustration() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      {/* Background elements */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="about-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>

      {/* Glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-[#C89B3C]/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-blue-400/15 blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-4 pb-0 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#C89B3C] flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm">Q</span>
          </div>
          <div>
            <div className="text-white text-xs font-bold tracking-wide">Talent Intelligence</div>
            <div className="text-white/35 text-[9px]">Powered by Quvora</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-[9px] font-semibold">Live Pipeline</span>
        </div>
      </div>

      {/* Candidate cards */}
      <div className="relative z-10 flex flex-col gap-2 px-5 pt-3 flex-1">
        <div className="text-[9px] text-white/35 uppercase tracking-widest font-semibold mb-0.5 flex items-center gap-1">
          <Users className="w-2.5 h-2.5" /> Recent Placements
        </div>
        {profileCards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            onHoverStart={() => setHoveredCard(i)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 rounded-xl px-3 py-2.5 transition-all duration-300 cursor-default"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}88)` }}
            >
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[11px] font-semibold truncate">{c.name}</div>
              <div className="text-white/45 text-[9px] truncate">{c.role} · {c.industry}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-[#C89B3C] font-black text-sm leading-none">{c.match}%</div>
              <div className="text-white/30 text-[8px]">match</div>
            </div>
            <div className="shrink-0">
              <CheckCircle className="w-4 h-4 text-emerald-400 opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact stats row */}
      <div className="relative z-10 grid grid-cols-4 gap-2 px-5 py-3 shrink-0">
        {impactStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-2 text-center"
          >
            <div className="text-[#C89B3C] font-black text-base leading-none">{s.value}</div>
            <div className="text-white/35 text-[8px] mt-0.5 leading-tight">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="relative z-10 bg-gradient-to-r from-[#C89B3C]/15 to-transparent border-t border-white/8 px-5 py-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {["NK", "RD", "SR"].map((a, i) => (
              <div key={i} className="w-5 h-5 rounded-full border border-[#0A2A5E] flex items-center justify-center text-[7px] font-bold text-white"
                style={{ backgroundColor: ["#C89B3C", "#0d7cf2", "#10b981"][i] }}>
                {a}
              </div>
            ))}
          </div>
          <p className="text-white/50 text-[10px] font-semibold tracking-wide">People. Strategy. Growth.</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Empowering Organisations Through People
            <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#C89B3C] rounded-full" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Rich illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl flex items-stretch"
            style={{ background: "linear-gradient(135deg, #0A2A5E 0%, #0f3580 40%, #122d6a 100%)" }}
          >
            {/* Animated accent line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#C89B3C]/60 to-transparent z-20 pointer-events-none"
            />
            <div className="w-full">
              <RichIllustration />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Quvora Consulting is not just a recruitment agency — we are your{" "}
                <strong className="text-primary">strategic growth partner</strong>. We understand that a company's greatest asset is its people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With deep industry expertise and a meticulous selection process, we connect ambitious organisations with transformative talent. Our approach is consultative, confidential, and customised to your unique cultural and operational needs.
              </p>
            </motion.div>

            <div ref={ref} className="pt-2">
              <h4 className="text-lg font-bold text-primary mb-6">Our Methodology</h4>
              <div className="grid grid-cols-2 gap-3">
                {methodology.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: index * 0.09 }}
                    whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(10,42,94,0.1)" }}
                    className="bg-[#F7F8FA] hover:bg-white rounded-xl p-4 border border-border/40 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0A2A5E]/6 group-hover:bg-[#C89B3C]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                        <item.icon className="w-4 h-4 text-[#C89B3C]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#C89B3C] mb-0.5">{item.step}</div>
                        <div className="font-semibold text-primary text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trusted logos below methodology */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">
                Talent placed at
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {trustedLogos.map((logo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                    className="h-7 flex items-center"
                  >
                    <img
                      src={`https://logo.clearbit.com/${logo.domain}`}
                      alt={logo.name}
                      className="h-6 max-w-[72px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
                      onError={e => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                        const span = document.createElement("span");
                        span.className = "text-muted-foreground/60 text-xs font-semibold";
                        span.textContent = logo.name;
                        el.parentElement?.appendChild(span);
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
