import { motion } from "framer-motion";

const companies = [
  { name: "Tata AIA", abbr: "TATA AIA", color: "#00549E" },
  { name: "Logitech", abbr: "LOGITECH", color: "#00B8FF" },
  { name: "PwC", abbr: "PwC", color: "#D93025" },
  { name: "MakeMyTrip", abbr: "MMT", color: "#E8434E" },
  { name: "EY", abbr: "EY", color: "#FFE600" },
  { name: "Walmart", abbr: "WALMART", color: "#0071CE" },
  { name: "Myntra", abbr: "MYNTRA", color: "#FF3F6C" },
  { name: "Roche", abbr: "ROCHE", color: "#0066CC" },
  { name: "Sun Pharma", abbr: "SUN", color: "#F7941E" },
  { name: "Sanofi", abbr: "SANOFI", color: "#7C2D8E" },
];

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
          <h2 className="text-xl md:text-2xl font-bold text-primary/70">
            Talent Experience Across Leading Organizations
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
              className="group bg-white border border-border h-20 rounded-xl flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer px-3"
              style={{ "--brand": company.color } as React.CSSProperties}
            >
              <span
                className="font-extrabold text-sm text-gray-400 group-hover:text-[var(--brand)] transition-colors duration-300 tracking-widest text-center leading-tight"
              >
                {company.abbr}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          * For illustrative purposes only. Logos represent organizations where Quvora has prior talent experience.
        </motion.p>
      </div>
    </section>
  );
}
