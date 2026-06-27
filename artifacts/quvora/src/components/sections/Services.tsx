import { motion } from "framer-motion";
import { Briefcase, Search, Crown, ClipboardList, BarChart3, Target, Building2, TrendingUp, FileText, Heart, Calculator, Shield, GraduationCap, DollarSign, Map, LayoutGrid } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Permanent Recruitment", description: "Finding the right full-time talent to drive your long-term organizational success and culture fit." },
  { icon: Search, title: "Executive Search", description: "Targeted headhunting for C-suite and senior leadership roles with complete confidentiality." },
  { icon: Crown, title: "Leadership Hiring", description: "Building robust management teams that align with your strategic vision and growth goals." },
  { icon: ClipboardList, title: "Contract Staffing", description: "Flexible workforce solutions to meet dynamic business demands without long-term commitments." },
  { icon: BarChart3, title: "RPO", description: "End-to-end Recruitment Process Outsourcing for scalable, cost-efficient hiring at any volume." },
  { icon: Target, title: "Talent Acquisition Strategy", description: "Designing optimal recruitment frameworks and employer branding that attract top candidates." },
  { icon: Building2, title: "HR Consulting", description: "Strategic advisory to optimize your organizational structure, culture, and people operations." },
  { icon: TrendingUp, title: "Performance Management", description: "Implementing systems to track, evaluate, and meaningfully boost employee output and growth." },
  { icon: FileText, title: "HR Policy Development", description: "Crafting compliant, progressive workplace guidelines and employee handbooks tailored to your business." },
  { icon: Heart, title: "Employee Engagement", description: "Strategies to foster a positive, productive, and high-retention culture across your organization." },
  { icon: Calculator, title: "Payroll Management", description: "Accurate, timely, and fully compliant payroll processing with multi-state and multi-currency support." },
  { icon: Shield, title: "HR Compliance", description: "Ensuring your people practices adhere to local and international labour regulations and standards." },
  { icon: GraduationCap, title: "Campus Recruitment", description: "Connecting with top-tier graduates and emerging talent from India's leading institutions." },
  { icon: DollarSign, title: "Salary Benchmarking", description: "Market-aligned compensation analysis to keep your packages competitive and retention strong." },
  { icon: Map, title: "Talent Mapping", description: "Comprehensive market intelligence to identify, track, and engage future leadership hires." },
  { icon: LayoutGrid, title: "Workforce Planning", description: "Data-driven forecasting to align human capital strategy with your long-term business roadmap." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Our Services
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR and recruitment solutions tailored to elevate your organizational capabilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
              className="bg-[#F7F8FA] rounded-xl p-6 border border-border/50 hover:border-[#C89B3C]/40 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0d3575] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                <div className="mb-4 w-11 h-11 rounded-lg bg-primary/8 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[#C89B3C] group-hover:text-[#C89B3C] transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-primary group-hover:text-white transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-white/75 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
