import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Requirement Discussion", description: "Deep dive into your business needs." },
  { id: 2, title: "Research & Talent Mapping", description: "Analyzing the market for the best fit." },
  { id: 3, title: "Candidate Sourcing", description: "Engaging active and passive talent." },
  { id: 4, title: "Screening & Assessment", description: "Rigorous evaluation and profiling." },
  { id: 5, title: "Client Interviews", description: "Presenting the top shortlisted candidates." },
  { id: 6, title: "Offer Management", description: "Negotiating and closing the deal." },
  { id: 7, title: "Successful Onboarding", description: "Ensuring a smooth transition." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Our Recruitment Process
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="relative">
          {/* Desktop animated gold line only */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 origin-left w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Mobile animated gold line only */}
          <motion.div 
            className="md:hidden absolute top-0 left-8 w-1 bg-accent origin-top h-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 flex-1"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-accent font-bold text-xl relative z-10 group hover:scale-110 transition-transform">
                  {step.id}
                </div>
                <div className="md:mt-4 bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-sm md:shadow-none border md:border-none border-border w-full md:w-auto">
                  <h3 className="font-semibold text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
