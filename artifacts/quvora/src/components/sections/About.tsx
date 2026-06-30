import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Lightbulb, TrendingUp, Award, Globe, ShieldCheck, Handshake } from "lucide-react";

const methodology = [
  { icon: Target, step: "01", title: "Understand Business", desc: "Deep discovery of your culture, goals, and talent gaps" },
  { icon: Users, step: "02", title: "Identify Talent", desc: "Market mapping and proactive candidate engagement" },
  { icon: Lightbulb, step: "03", title: "Evaluate & Screen", desc: "Rigorous multi-stage assessment and profiling" },
  { icon: TrendingUp, step: "04", title: "Place & Onboard", desc: "Offer management, joining support and 90-day follow-up" },
  { icon: Award, step: "05", title: "Develop People", desc: "Ongoing HR advisory to help your people grow" },
  { icon: Globe, step: "06", title: "Grow Together", desc: "Long-term partnership across your business lifecycle" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Confidential",
    desc: "Every mandate handled with the utmost discretion and professional integrity.",
    accent: "#C89B3C",
  },
  {
    icon: Handshake,
    title: "Consultative",
    desc: "We advise, not just recruit — understanding your business deeply before we begin.",
    accent: "#0d7cf2",
  },
  {
    icon: Target,
    title: "Customised",
    desc: "No template hiring. Every search is designed around your unique needs.",
    accent: "#10b981",
  },
  {
    icon: Globe,
    title: "Pan-India",
    desc: "Active across Mumbai, Bengaluru, Delhi NCR, Hyderabad and Pune.",
    accent: "#8b5cf6",
  },
];

function BrandVisual() {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      {/* Subtle background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="about-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-dots)" />
      </svg>

      {/* Glow accents */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -left-12 w-52 h-52 rounded-full bg-[#C89B3C]/30 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col p-6 sm:p-8 gap-5">

        {/* Brand mark */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C89B3C] flex items-center justify-center shadow-lg shadow-[#C89B3C]/30 shrink-0">
            <span className="text-white font-black text-base">Q</span>
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm leading-none">Quvora Consulting</p>
            <p className="text-white/35 text-[10px] mt-0.5 tracking-wide">Strategic HR Partner · Since 2015</p>
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-[#C89B3C]/40 via-white/10 to-transparent" />

        {/* Quote */}
        <div>
          <p className="text-white/70 text-sm leading-relaxed italic">
            "We believe every great organisation is built on the strength of its people.
            Our mission is to place leaders who don't just fill roles — they transform them."
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/8 rounded-xl p-3 sm:p-3.5 flex flex-col gap-2"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${p.accent}18`, border: `1px solid ${p.accent}30` }}
              >
                <p.icon className="w-4 h-4" style={{ color: p.accent }} />
              </div>
              <div>
                <p className="text-white text-xs font-bold">{p.title}</p>
                <p className="text-white/40 text-[9px] mt-0.5 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="h-px bg-gradient-to-r from-white/8 via-white/4 to-transparent" />
        <p className="text-white/25 text-[10px] font-medium tracking-[0.12em] uppercase">
          People · Strategy · Growth
        </p>
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

        {/* Section header */}
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

          {/* Left: Brand Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(135deg, #071d42 0%, #0a2a5e 50%, #0d2d6b 100%)" }}
          >
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#C89B3C]/50 to-transparent z-20 pointer-events-none"
            />
            <div className="w-full">
              <BrandVisual />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-9">
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

            {/* Methodology grid */}
            <div ref={ref}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
