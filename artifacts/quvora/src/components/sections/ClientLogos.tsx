import { motion } from "framer-motion";

const companies = [
  { name: "Tata AIA", abbr: "TATA AIA", sub: "Insurance", color: "#00549E", bg: "#e8f0f8" },
  { name: "Logitech", abbr: "Logitech", sub: "Technology", color: "#00B8FF", bg: "#e0f7ff" },
  { name: "PwC", abbr: "PwC", sub: "Consulting", color: "#D93025", bg: "#fdecea" },
  { name: "MakeMyTrip", abbr: "MakeMyTrip", sub: "Travel", color: "#E8434E", bg: "#fdeaea" },
  { name: "EY", abbr: "EY", sub: "Advisory", color: "#B8860B", bg: "#fdf8e1" },
  { name: "Walmart", abbr: "Walmart", sub: "Retail", color: "#0071CE", bg: "#e0eeff" },
  { name: "Myntra", abbr: "Myntra", sub: "Fashion", color: "#FF3F6C", bg: "#ffe8ef" },
  { name: "Roche", abbr: "Roche", sub: "Pharma", color: "#0066CC", bg: "#e0ecff" },
  { name: "Sun Pharma", abbr: "Sun Pharma", sub: "Healthcare", color: "#E07B00", bg: "#fff3e0" },
  { name: "Sanofi", abbr: "Sanofi", sub: "Life Sciences", color: "#7C2D8E", bg: "#f5e8f8" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-3 tracking-wide">
            Our Network
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Talent Experience Across Leading Organizations
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            We've partnered with and placed talent across globally recognized brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group relative bg-white border border-border/60 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
              style={{ minHeight: 110 }}
            >
              {/* Color fill on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: company.bg }}
              />

              {/* Monogram circle */}
              <div
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: company.color }}
              >
                {company.abbr
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              {/* Name */}
              <div className="relative z-10 text-center">
                <div
                  className="font-bold text-sm leading-tight transition-colors duration-300"
                  style={{ color: "#0A2A5E" }}
                >
                  {company.abbr}
                </div>
                <div
                  className="text-xs mt-0.5 transition-colors duration-300"
                  style={{ color: company.color }}
                >
                  {company.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          * For illustrative purposes. Logos represent organizations where Quvora has prior talent experience.
        </motion.p>
      </div>
    </section>
  );
}
