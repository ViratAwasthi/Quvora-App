import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

const stories = [
  {
    tag: "Executive Search",
    company: "Leading FinTech Firm",
    industry: "Banking & Finance",
    title: "C-Suite Transformation in 90 Days",
    summary: "Placed a Chief Human Resources Officer and VP of Talent who restructured the entire people function for a 2,000-person fintech scaling aggressively across Asia.",
    metric: "90 Days",
    metricLabel: "Time to Placement",
    color: "from-[#0A2A5E] to-[#0d3575]",
    accentColor: "#C89B3C",
    challenge: "The client needed a seasoned CHRO capable of managing a high-growth environment with offices across 5 countries, while simultaneously replacing a VP of Talent amid organizational restructuring.",
    approach: "Quvora deployed a targeted executive search strategy, mapping the BFSI leadership landscape across Singapore, India, and the UAE. We shortlisted candidates with direct FinTech scale-up experience.",
    outcome: [
      "CHRO placed within 60 days, VP of Talent within 90 days",
      "Both leaders retained beyond 18-month mark",
      "Attrition reduced by 34% in first year under new leadership",
      "Employer brand score improved by 22 points",
    ],
  },
  {
    tag: "Talent Acquisition",
    company: "Global MNC",
    industry: "Information Technology",
    title: "50 Engineers Hired in 12 Weeks",
    summary: "Scaled a product engineering team from 80 to 130 across three cities for a global software company launching a new SaaS platform — on time, under budget.",
    metric: "12 Weeks",
    metricLabel: "Full-Team Deployed",
    color: "from-[#0A2A5E] to-[#13356e]",
    accentColor: "#C89B3C",
    challenge: "The client faced a hard 14-week product launch deadline requiring 50 mid-to-senior engineers across Backend, DevOps, and QA. Their internal TA team was overwhelmed.",
    approach: "We embedded a dedicated 4-member Quvora TA team operating as a seamless extension of the client's HR function. Leveraging deep tech talent networks and AI-assisted screening, we ran parallel pipelines.",
    outcome: [
      "50 of 52 target roles filled within 12 weeks",
      "Average offer-to-joining rate of 91%",
      "Cost-per-hire reduced by 28% vs. previous agency",
      "Product launch delivered on schedule",
    ],
  },
  {
    tag: "HR Consulting",
    company: "National FMCG Brand",
    industry: "Consumer Goods",
    title: "People Strategy Overhaul Across 8 Plants",
    summary: "Redesigned the HR operating model, compensation framework, and performance management system for a 4,000-employee FMCG manufacturer operating at national scale.",
    metric: "4,000+",
    metricLabel: "Employees Impacted",
    color: "from-[#0A2A5E] to-[#0f2e68]",
    accentColor: "#C89B3C",
    challenge: "Inconsistent HR practices across 8 manufacturing plants were creating compliance risk, high attrition among supervisors, and friction between management and workforce.",
    approach: "Quvora conducted an HR diagnostic across all 8 sites, benchmarked compensation against sector peers, and co-designed a unified HR policy framework with regional plant leads.",
    outcome: [
      "Unified HR policy framework adopted across all 8 plants",
      "Supervisor attrition dropped from 42% to 18% within 12 months",
      "Payroll compliance issues reduced by 95%",
      "Performance management rollout completed in 6 months",
    ],
  },
];

function Modal({ story, onClose }: { story: typeof stories[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className={`bg-gradient-to-br ${story.color} text-white p-8 rounded-t-2xl relative overflow-hidden`}>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/5" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 mb-3">{story.tag}</span>
            <h2 className="text-2xl font-bold mb-1">{story.title}</h2>
            <p className="text-white/70 text-sm">{story.company} · {story.industry}</p>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] mb-2">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] mb-2">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">{story.approach}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C89B3C] mb-3">Outcomes</h3>
              <ul className="space-y-2">
                {story.outcome.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState<typeof stories[0] | null>(null);

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
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Results That Speak for Themselves
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C]" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Real mandates, measurable outcomes, and lasting impact across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-background rounded-2xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
              onClick={() => setActiveStory(story)}
            >
              <div className={`bg-gradient-to-br ${story.color} text-white p-7 rounded-t-2xl relative overflow-hidden`}>
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5" />
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 mb-4">{story.tag}</span>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-[#C89B3C]">{story.metric}</div>
                    <div className="text-xs text-white/60 mt-0.5">{story.metricLabel}</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-white/20" />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#C89B3C]" />
                  <span className="text-xs text-muted-foreground font-medium">{story.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-[#C89B3C] transition-colors">{story.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{story.summary}</p>
                <button className="mt-6 flex items-center gap-2 text-[#C89B3C] font-semibold text-sm hover:gap-3 transition-all duration-200">
                  View Full Case Study <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeStory && <Modal story={activeStory} onClose={() => setActiveStory(null)} />}
    </section>
  );
}
