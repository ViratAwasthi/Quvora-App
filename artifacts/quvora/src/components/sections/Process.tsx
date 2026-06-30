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

        {/* Desktop layout: two-row grid */}
        <div className="hidden md:block">
          {/* Row 1: Circles */}
          <div className="flex justify-between px-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-accent font-bold text-xl hover:scale-110 transition-transform cursor-default">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Light grey connector line */}
          <div className="mx-12 mt-4 mb-6 h-px bg-border/50" />

          {/* Row 2: Text labels */}
          <div className="flex justify-between px-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 + 0.15 }}
                className="flex-1 text-center px-2"
              >
                <h3 className="font-semibold text-primary text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile layout: vertical stack with grey connector */}
        <div className="md:hidden relative">
          {/* Vertical grey line */}
          <div className="absolute top-8 bottom-8 left-8 w-px bg-border/50" />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-center gap-6 relative z-10"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-accent font-bold text-xl">
                  {step.id}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-border flex-1">
                  <h3 className="font-semibold text-primary text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
