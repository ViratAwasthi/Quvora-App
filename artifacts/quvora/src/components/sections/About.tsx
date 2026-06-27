import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Lightbulb, TrendingUp, Award, Globe } from "lucide-react";

const methodology = [
  { icon: Target, step: "01", title: "Understand Business", desc: "Deep discovery of your culture, goals, and talent gaps" },
  { icon: Users, step: "02", title: "Identify Talent", desc: "Market mapping and proactive candidate engagement" },
  { icon: Lightbulb, step: "03", title: "Evaluate & Screen", desc: "Rigorous multi-stage assessment and profiling" },
  { icon: TrendingUp, step: "04", title: "Place & Onboard", desc: "Offer management, joining support and 90-day follow-up" },
  { icon: Award, step: "05", title: "Develop", desc: "Ongoing HR advisory to help your people grow" },
  { icon: Globe, step: "06", title: "Grow Together", desc: "Long-term partnership across your business lifecycle" },
];

function AnimatedIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#C89B3C]/20"
          style={{ width: `${180 + i * 80}px`, height: `${180 + i * 80}px` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}

      {/* Center logo mark */}
      <motion.div
        className="relative z-20 w-28 h-28 rounded-full bg-[#C89B3C] flex items-center justify-center shadow-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white font-black text-2xl tracking-tight">Q</span>
      </motion.div>

      {/* Orbiting icons */}
      {[
        { icon: Users, angle: 0, label: "Talent", delay: 0 },
        { icon: Target, angle: 60, label: "Strategy", delay: 0.3 },
        { icon: TrendingUp, angle: 120, label: "Growth", delay: 0.6 },
        { icon: Award, angle: 180, label: "Results", delay: 0.9 },
        { icon: Lightbulb, angle: 240, label: "Advisory", delay: 1.2 },
        { icon: Globe, angle: 300, label: "Global", delay: 1.5 },
      ].map(({ icon: Icon, angle, label, delay }, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 140;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{ left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            animate={{ y: [0, -5, 0] }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: delay }}
              className="w-12 h-12 rounded-xl bg-white shadow-lg border border-border/60 flex flex-col items-center justify-center group hover:bg-[#0A2A5E] transition-colors duration-300 cursor-default"
              title={label}
            >
              <Icon className="w-5 h-5 text-[#C89B3C] group-hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connecting lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const r = 140;
          const x2 = 50 + (Math.cos(rad) * r * 100) / 320;
          const y2 = 50 + (Math.sin(rad) * r * 100) / 320;
          return (
            <motion.line
              key={i}
              x1="50%" y1="50%"
              x2={`${x2}%`} y2={`${y2}%`}
              stroke="#C89B3C"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
            />
          );
        })}
      </svg>
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
            <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Animated illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A2A5E] via-[#0d3070] to-[#1a4080] shadow-2xl flex items-center justify-center"
          >
            {/* Background grid */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-grid)" />
            </svg>

            {/* Animated corner blobs */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#C89B3C]/20 blur-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-blue-400/15 blur-3xl"
            />

            <div className="relative z-10 w-full h-full">
              <AnimatedIllustration />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2A5E]/90 to-transparent">
              <p className="text-white font-semibold tracking-wide text-center">People. Strategy. Growth.</p>
            </div>
          </motion.div>

          {/* Right: Content + methodology */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Quvora Consulting is not just a recruitment agency — we are your <strong className="text-primary">strategic growth partner</strong>. We understand that a company's greatest asset is its people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With deep industry expertise and a meticulous selection process, we connect ambitious organisations with transformative talent. Our approach is consultative, confidential, and customised to your unique cultural and operational needs.
              </p>
            </motion.div>

            <div ref={ref} className="pt-4">
              <h4 className="text-lg font-bold text-primary mb-6">Our Methodology</h4>
              <div className="grid grid-cols-2 gap-4">
                {methodology.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(10,42,94,0.08)" }}
                    className="bg-[#F7F8FA] rounded-xl p-4 border border-border/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/8 group-hover:bg-[#C89B3C]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
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
