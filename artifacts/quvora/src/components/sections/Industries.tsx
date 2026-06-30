import { motion } from "framer-motion";
import { Monitor, Activity, Factory, ShoppingBag, Landmark, BookOpen, Radio, Hotel, Truck, HardHat, Package, Rocket, Building, Car, FlaskConical } from "lucide-react";

const industries = [
  { icon: Monitor, name: "Information Technology", desc: "Product, SaaS, IT services & digital transformation" },
  { icon: Activity, name: "Healthcare", desc: "Hospitals, diagnostics, MedTech & pharmaceuticals" },
  { icon: Factory, name: "Manufacturing", desc: "Process, discrete & industrial manufacturing firms" },
  { icon: ShoppingBag, name: "Retail", desc: "E-commerce, D2C brands & omnichannel retail chains" },
  { icon: Landmark, name: "Banking & Finance", desc: "Banks, NBFCs, fintech & investment management" },
  { icon: BookOpen, name: "Education", desc: "EdTech, K–12, higher education & training institutes" },
  { icon: Radio, name: "Telecommunications", desc: "Telecom operators, ISPs & network infrastructure" },
  { icon: Hotel, name: "Hospitality", desc: "Hotels, resorts, F&B chains & travel management" },
  { icon: Truck, name: "Logistics", desc: "Supply chain, warehousing & last-mile delivery" },
  { icon: HardHat, name: "Construction", desc: "Real estate, infra projects & EPC contractors" },
  { icon: Package, name: "FMCG", desc: "Consumer goods, personal care & food & beverage" },
  { icon: Rocket, name: "Startups", desc: "Seed to Series-C ventures scaling their people function" },
  { icon: Building, name: "Government & PSU", desc: "Public sector enterprises & government bodies" },
  { icon: Car, name: "Automobile", desc: "OEMs, EV manufacturers & auto ancillary companies" },
  { icon: FlaskConical, name: "Pharmaceutical", desc: "Drug makers, CROs, biotech & regulatory affairs" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            Sector Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Industries We Serve
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Deep domain knowledge across 15+ verticals means we understand the talent landscape you operate in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-5 text-center border border-border/50 hover:border-[#C89B3C]/40 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-[#C89B3C]/10 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <ind.icon className="w-6 h-6 text-primary/60 group-hover:text-[#C89B3C] transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1.5">{ind.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
