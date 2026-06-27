import { motion } from "framer-motion";
import { Monitor, Activity, Factory, ShoppingBag, Landmark, BookOpen, Radio, Hotel, Truck, HardHat, Package, Rocket, Building, Car, FlaskConical } from "lucide-react";

const industries = [
  { icon: Monitor, name: "Information Technology" },
  { icon: Activity, name: "Healthcare" },
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Landmark, name: "Banking & Finance" },
  { icon: BookOpen, name: "Education" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Truck, name: "Logistics" },
  { icon: HardHat, name: "Construction" },
  { icon: Package, name: "FMCG" },
  { icon: Rocket, name: "Startups" },
  { icon: Building, name: "Government" },
  { icon: Car, name: "Automobile" },
  { icon: FlaskConical, name: "Pharmaceutical" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Industries We Serve
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
              className="bg-background rounded-xl p-6 text-center border border-border/50 hover:border-accent/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <ind.icon className="w-10 h-10 mx-auto text-primary/60 group-hover:text-accent transition-colors duration-300 mb-4" />
              <h3 className="font-medium text-primary text-sm">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
