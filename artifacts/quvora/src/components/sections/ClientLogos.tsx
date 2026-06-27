import { motion } from "framer-motion";

const companies = [
  { name: "TechCorp Global", sector: "IT" },
  { name: "FinEdge Solutions", sector: "Finance" },
  { name: "MediCare Plus", sector: "Healthcare" },
  { name: "BuildGroup Inc.", sector: "Construction" },
  { name: "RetailNet", sector: "Retail" },
  { name: "AutoMotive Pro", sector: "Automobile" },
  { name: "EduSmart Systems", sector: "Education" },
  { name: "LogiSpeed", sector: "Logistics" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Trusted By Leading Companies</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-border h-24 rounded-lg flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span className="font-bold text-primary text-lg">{company.name}</span>
              <span className="text-xs text-accent font-medium">{company.sector}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
