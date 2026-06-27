import { motion } from "framer-motion";
import { Users, MessageCircle, Network, Cpu, Handshake, Timer, BarChart2, Briefcase } from "lucide-react";

const trusts = [
  { icon: Users, title: "Experienced HR Professionals" },
  { icon: MessageCircle, title: "Transparent Communication" },
  { icon: Network, title: "Large Talent Network" },
  { icon: Cpu, title: "Technology-Driven Hiring" },
  { icon: Handshake, title: "Long-Term Partnerships" },
  { icon: Timer, title: "Fast Response Time" },
  { icon: BarChart2, title: "Data-Driven Recruitment" },
  { icon: Briefcase, title: "Business-Centric Solutions" },
];

export default function TrustUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Why Clients Trust Us
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trusts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
