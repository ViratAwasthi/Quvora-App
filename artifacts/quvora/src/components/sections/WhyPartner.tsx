import { motion } from "framer-motion";
import { Handshake, ShieldCheck, Lightbulb, Clock4, BarChart2, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Handshake,
    title: "Dedicated Partnership Model",
    description: "A named senior consultant works exclusively on your account — not a call-centre handoff. We become an extension of your leadership team.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    description: "From labour law adherence to employment contracts, we ensure every hire and every HR process is legally sound and audit-ready.",
  },
  {
    icon: Lightbulb,
    title: "Strategic HR Advisory",
    description: "Beyond recruitment, we advise on org design, workforce planning, and people strategy — helping you build a future-ready business.",
  },
  {
    icon: Clock4,
    title: "Speed Without Compromise",
    description: "Our pre-vetted talent networks and proprietary screening framework cut time-to-hire by up to 40% — without sacrificing quality.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Insights",
    description: "Regular talent-market intelligence reports and hiring analytics keep you ahead of compensation trends and talent availability shifts.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Retention Focus",
    description: "We don't close a hire and walk away. Our 90-day onboarding support and 6-month replacement guarantee protect your investment.",
  },
];

export default function WhyPartner() {
  return (
    <section id="partner" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            Long-Term Value
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Why Partner With Quvora
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just fill positions — we build lasting people partnerships that drive measurable organizational growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(10,42,94,0.08)" }}
              className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-[#C89B3C]/10 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-[#C89B3C] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-br from-primary to-[#0d3575] rounded-2xl p-10 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-12 -top-12 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#C89B3C]/10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build a Stronger People Function?</h3>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Let's discuss how Quvora can become your long-term HR partner — from your first hire to full organizational transformation.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b8892e] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Start a Conversation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
