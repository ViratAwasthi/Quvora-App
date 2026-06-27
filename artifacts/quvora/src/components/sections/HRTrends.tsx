import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

const trends = [
  {
    tag: "Future of Work",
    readTime: "5 min read",
    title: "AI-Augmented Hiring: Where Human Judgment Meets Machine Intelligence",
    excerpt: "AI tools now handle screening and scheduling — but the best hiring decisions still depend on human intuition. Here's how leading CHROs are blending both.",
    gradient: "from-[#0A2A5E]/90 to-[#0d3575]/80",
  },
  {
    tag: "Talent Strategy",
    readTime: "4 min read",
    title: "The Skills-First Hiring Revolution and What It Means for Your Organisation",
    excerpt: "Traditional degree-based filters are giving way to skills assessments and portfolio evidence. Discover how global companies are rebuilding their hiring criteria.",
    gradient: "from-[#0A2A5E]/80 to-[#1a4070]/70",
  },
  {
    tag: "HR Leadership",
    readTime: "6 min read",
    title: "From Transactional to Strategic: The CHRO's Evolving Mandate in 2026",
    excerpt: "Chief Human Resources Officers are now boardroom fixtures. We unpack the expanded mandate — from workforce analytics to ESG reporting and culture metrics.",
    gradient: "from-[#0A2A5E]/85 to-[#0f3060]/75",
  },
  {
    tag: "Employee Experience",
    readTime: "3 min read",
    title: "Why Retention Is the New Recruitment — and How to Win at Both",
    excerpt: "With talent scarcity at a decade high, the cost of turnover has never been greater. Explore the evidence-backed strategies that keep high performers engaged.",
    gradient: "from-[#0A2A5E]/80 to-[#132d60]/70",
  },
];

export default function HRTrends() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-4 tracking-wide">
            HR Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Latest HR Trends
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Perspectives and insights from Quvora's consulting team — keeping your people strategy ahead of the curve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 bg-background flex flex-col"
            >
              <div className={`bg-gradient-to-br ${trend.gradient} h-44 relative overflow-hidden flex items-end p-6`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                    {trend.tag}
                  </span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#C89B3C]/10" />
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs">{trend.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-[#C89B3C] transition-colors">
                  {trend.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {trend.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-1 text-[#C89B3C] font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                  Read Insight <ArrowUpRight size={15} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
