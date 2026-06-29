import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, Globe2, RefreshCcw, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Speed to Hire",
    description: "Our streamlined process cuts average time-to-fill to 18 days — without compromising on candidate quality.",
    accent: "#C89B3C",
    bg: "from-[#C89B3C]/8 to-transparent",
    border: "border-[#C89B3C]/20",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Matching",
    description: "Proprietary talent-scoring models assess skills, culture fit, and growth potential — not just CVs.",
    accent: "#0d7cf2",
    bg: "from-blue-500/8 to-transparent",
    border: "border-blue-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "Every placement comes with a 90-day performance assurance. We stand behind every hire we make.",
    accent: "#10b981",
    bg: "from-emerald-500/8 to-transparent",
    border: "border-emerald-500/20",
  },
  {
    icon: Globe2,
    title: "Cross-Industry Reach",
    description: "A deep talent network spanning 10+ industries — from technology and finance to healthcare and retail.",
    accent: "#8b5cf6",
    bg: "from-violet-500/8 to-transparent",
    border: "border-violet-500/20",
  },
  {
    icon: RefreshCcw,
    title: "End-to-End Support",
    description: "From role scoping and sourcing through to onboarding — we manage the full talent lifecycle for you.",
    accent: "#f59e0b",
    bg: "from-amber-500/8 to-transparent",
    border: "border-amber-500/20",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We embed ourselves as an extension of your team, aligning with your culture, strategy, and long-term goals.",
    accent: "#ec4899",
    bg: "from-pink-500/8 to-transparent",
    border: "border-pink-500/20",
  },
];

const metrics = [
  { value: "18", unit: "days", label: "Avg. time to fill" },
  { value: "98", unit: "%", label: "Placement success rate" },
  { value: "90", unit: "day", label: "Performance guarantee" },
  { value: "3×", unit: "", label: "Faster than in-house hiring" },
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-[#F7F8FA] border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-3 tracking-wide">
            Why Quvora
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A5E] mb-4">
            The Hiring Edge You've Been Looking For
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Six principles that set us apart and ensure every engagement delivers measurable, lasting impact for your organisation.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map(({ icon: Icon, title, description, accent, bg, border }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-2xl border ${border} p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden group`}
            >
              {/* Gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="text-base font-bold text-[#0A2A5E] mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0A2A5E] rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metrics.map(({ value, unit, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center py-4 md:py-0 md:px-4"
              >
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-black text-[#C89B3C]">{value}</span>
                  {unit && <span className="text-lg font-bold text-[#C89B3C]/70 pb-1">{unit}</span>}
                </div>
                <p className="text-white/55 text-xs font-medium uppercase tracking-widest">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
