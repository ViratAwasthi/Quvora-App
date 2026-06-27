import { motion } from "framer-motion";
import { Award, Users, Zap, HeartHandshake, Lock, Settings2 } from "lucide-react";

const reasons = [
  {
    title: "Industry Expertise",
    description: "Deep domain knowledge across multiple sectors to find the perfect fit.",
    icon: Award,
  },
  {
    title: "Quality Talent",
    description: "Access to an exclusive network of pre-vetted, high-caliber professionals.",
    icon: Users,
  },
  {
    title: "Fast Hiring",
    description: "Accelerated recruitment cycles without compromising on candidate quality.",
    icon: Zap,
  },
  {
    title: "Dedicated HR Partner",
    description: "A personalized approach where we act as an extension of your own team.",
    icon: HeartHandshake,
  },
  {
    title: "Confidential Hiring",
    description: "Discreet and secure executive searches for sensitive leadership roles.",
    icon: Lock,
  },
  {
    title: "Customized Solutions",
    description: "Tailored hiring strategies designed specifically for your business goals.",
    icon: Settings2,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Why Choose Quvora
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
