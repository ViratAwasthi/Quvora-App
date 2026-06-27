import { motion } from "framer-motion";

export default function About() {
  const processSteps = [
    "Understand Business",
    "Identify Talent",
    "Evaluate",
    "Hire",
    "Develop",
    "Grow"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Who We Are
            <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[600px] bg-gradient-to-br from-primary to-primary/80 shadow-2xl flex items-center justify-center group"
          >
            {/* Abstract Corporate Placeholder */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10 w-48 h-48 border-4 border-accent/50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <div className="w-32 h-32 bg-accent/20 rounded-full backdrop-blur-sm" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/90 to-transparent">
              <p className="text-white text-xl font-medium tracking-wide">Excellence in every placement.</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">Empowering Organizations Through People.</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Quvora Consulting is not just a recruitment agency; we are your strategic growth partner. We understand that a company's greatest asset is its people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With deep industry expertise and a meticulous selection process, we connect ambitious organizations with transformative talent. Our approach is consultative, confidential, and customized to your unique cultural and operational needs.
              </p>
            </motion.div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-primary mb-6">Our Methodology</h4>
              <div className="relative border-l-2 border-accent/30 pl-8 space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-accent" />
                    <h5 className="font-semibold text-primary text-lg">{step}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
