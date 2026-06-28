import { motion } from "framer-motion";
import { useState } from "react";

const companies = [
  { name: "Tata AIA", domain: "tataaia.com" },
  { name: "Logitech", domain: "logitech.com" },
  { name: "PwC", domain: "pwc.com" },
  { name: "MakeMyTrip", domain: "makemytrip.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Walmart", domain: "walmart.com" },
  { name: "Myntra", domain: "myntra.com" },
  { name: "Roche", domain: "roche.com" },
  { name: "Sun Pharma", domain: "sunpharma.com" },
  { name: "Sanofi", domain: "sanofi.com" },
];

function LogoCard({ name, domain, index }: { name: string; domain: string; index: number }) {
  const [errored, setErrored] = useState(false);
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="group relative bg-white border border-border/60 rounded-2xl px-5 py-6 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
      style={{ minHeight: 110 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0A2A5E]/0 to-[#0A2A5E]/0 group-hover:from-[#F7F8FA] group-hover:to-white transition-all duration-300" />
      <div className="relative z-10 h-10 flex items-center justify-center">
        {!errored ? (
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={name}
            className="max-h-10 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-[#0A2A5E]/8 flex items-center justify-center">
            <span className="text-lg font-black text-[#0A2A5E]">{initials}</span>
          </div>
        )}
      </div>
      <p className="relative z-10 text-xs text-muted-foreground font-medium group-hover:text-[#0A2A5E] transition-colors">
        {name}
      </p>
    </motion.div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-3 tracking-wide">
            Talent Experience
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Trusted by India's Leading Organisations
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            We've sourced, screened, and placed exceptional talent across globally recognised brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {companies.map((c, i) => (
            <LogoCard key={i} name={c.name} domain={c.domain} index={i} />
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-muted-foreground/60 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          * Represents organisations where Quvora team members have prior talent placement experience.
        </motion.p>
      </div>
    </section>
  );
}
