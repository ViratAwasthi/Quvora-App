import { motion } from "framer-motion";
import { Briefcase, Search, Crown, ClipboardList, BarChart3, Target, Building2, TrendingUp, FileText, Heart, Calculator, Shield, GraduationCap, DollarSign, Map, LayoutGrid } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Permanent Recruitment", description: "Finding the right full-time talent to drive your long-term success." },
  { icon: Search, title: "Executive Search", description: "Targeted headhunting for C-suite and senior leadership roles." },
  { icon: Crown, title: "Leadership Hiring", description: "Building robust management teams that align with your vision." },
  { icon: ClipboardList, title: "Contract Staffing", description: "Flexible workforce solutions to meet dynamic business demands." },
  { icon: BarChart3, title: "RPO", description: "End-to-end Recruitment Process Outsourcing for scalable hiring." },
  { icon: Target, title: "Talent Acquisition Strategy", description: "Designing optimal recruitment frameworks and employer branding." },
  { icon: Building2, title: "HR Consulting", description: "Strategic advisory to optimize your organizational structure." },
  { icon: TrendingUp, title: "Performance Management", description: "Implementing systems to track, evaluate, and boost employee output." },
  { icon: FileText, title: "HR Policy Development", description: "Crafting compliant, progressive workplace guidelines and manuals." },
  { icon: Heart, title: "Employee Engagement", description: "Strategies to foster a positive, productive, and retaining culture." },
  { icon: Calculator, title: "Payroll Management", description: "Accurate, timely, and compliant payroll processing services." },
  { icon: Shield, title: "HR Compliance", description: "Ensuring adherence to local and international labor regulations." },
  { icon: GraduationCap, title: "Campus Recruitment", description: "Connecting with top-tier graduates and emerging young talent." },
  { icon: DollarSign, title: "Salary Benchmarking", description: "Market-aligned compensation analysis to remain competitive." },
  { icon: Map, title: "Talent Mapping", description: "Comprehensive market intelligence to identify future hires." },
  { icon: LayoutGrid, title: "Workforce Planning", description: "Data-driven forecasting to align human capital with business goals." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Our Services
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR and recruitment solutions tailored to elevate your organizational capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4">
                <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow mb-4">{service.description}</p>
              <button className="text-accent text-sm font-medium hover:text-primary transition-colors text-left flex items-center gap-1">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
