import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight, X, BookOpen } from "lucide-react";

const trends = [
  {
    tag: "Future of Work",
    readTime: "5 min read",
    title: "AI-Augmented Hiring: Where Human Judgment Meets Machine Intelligence",
    excerpt: "AI tools now handle screening and scheduling — but the best hiring decisions still depend on human intuition. Here's how leading CHROs are blending both.",
    gradient: "from-[#0A2A5E] to-[#1a4070]",
    full: `Artificial intelligence has irrevocably changed how organisations source, screen, and shortlist talent. Automated resume parsing, predictive candidate scoring, and AI-driven interview scheduling have compressed what once took weeks into hours.

Yet the most sophisticated HR leaders know that AI is a force-multiplier, not a replacement. The nuanced judgment required to assess cultural fit, leadership potential, and long-term trajectory remains deeply human.

**What the data tells us**

A 2025 McKinsey survey found that organisations using AI for initial screening saw a 40% reduction in time-to-shortlist — but also a 12% increase in early attrition when human validation was bypassed. The lesson: AI accelerates the funnel, but humans must own the final mile.

**The CHRO's new mandate**

Forward-thinking CHROs are building hybrid hiring architectures — AI for signal, humans for judgment. They're also asking harder questions: Which biases does our AI introduce? How do we audit its decisions? How do we keep candidates feeling seen?

**What to implement now**

Start with AI for high-volume, process-oriented roles. Keep executive and leadership hiring human-led with AI as a research tool. Build regular bias audits into your AI vendors' contractual commitments.

The organisations winning the talent war in 2026 aren't choosing between AI and humans — they're engineering the handoff between them.`,
  },
  {
    tag: "Talent Strategy",
    readTime: "4 min read",
    title: "The Skills-First Hiring Revolution and What It Means for Your Organisation",
    excerpt: "Traditional degree-based filters are giving way to skills assessments and portfolio evidence. Discover how global companies are rebuilding their hiring criteria.",
    gradient: "from-[#0A2A5E] to-[#0f3060]",
    full: `For decades, a degree from a recognised institution was the primary filter at the top of the hiring funnel. That paradigm is cracking — rapidly.

IBM, Google, and Accenture have publicly removed degree requirements for a majority of roles. In India, Infosys and Wipro have expanded their "skills-based hiring" programmes to include non-traditional candidates, with measurable improvements in retention and performance.

**Why the shift is happening**

The half-life of skills has compressed dramatically. A degree earned five years ago may not reflect what a candidate can do today. Meanwhile, self-taught developers, boot camp graduates, and online-certified professionals are demonstrably outperforming peers in execution-heavy roles.

**What skills-first looks like in practice**

Leading organisations are replacing resume screens with structured skills assessments, work samples, and portfolio reviews. They're defining roles by outcomes and competencies first — then working backwards to what experience or credentials might produce those outcomes.

**The talent opportunity**

Skills-first hiring expands your addressable talent pool by 3–5x. It brings in diverse thinkers, non-linear career paths, and candidates your competitors are systematically filtering out.

The question is no longer whether to shift to skills-first hiring — it's how fast your organisation can build the infrastructure to do it well.`,
  },
  {
    tag: "HR Leadership",
    readTime: "6 min read",
    title: "From Transactional to Strategic: The CHRO's Evolving Mandate in 2026",
    excerpt: "Chief Human Resources Officers are now boardroom fixtures. We unpack the expanded mandate — from workforce analytics to ESG reporting and culture metrics.",
    gradient: "from-[#0A2A5E] to-[#132d60]",
    full: `A decade ago, the Chief Human Resources Officer was primarily an administrator — managing payroll, resolving conflicts, running compliance. That role is unrecognisable today.

In 2026, the CHRO sits at the intersection of strategy, technology, culture, and risk. Boards now expect CHROs to speak fluently about workforce ROI, talent pipeline health, DEI outcomes, ESG disclosures, and the people implications of M&A.

**The four dimensions of the modern CHRO**

*Strategist*: Partnering with the CEO on org design, workforce planning, and leadership succession — not just filling requisitions.

*Technologist*: Owning the HR tech stack and AI governance — ensuring tools are effective, fair, and compliant.

*Culture Steward*: Making culture measurable. Not just "we have great culture" — but tracking it quarterly with data.

*Risk Manager*: Managing labour law exposure, remote-work compliance across jurisdictions, and the reputational risk of talent decisions.

**What boards want to see**

Boards are asking CHROs for the same rigour they expect from CFOs. Workforce analytics dashboards, attrition models, and succession depth charts are now standard board materials in high-performing organisations.

**The development gap**

Only 38% of CHROs in India have formal business education beyond HR specialisation, per a 2025 Korn Ferry study. Those who invest in finance, strategy, and data fluency are earning the boardroom credibility their role now demands.

The CHRO of 2026 is not a support function. They are a growth driver.`,
  },
  {
    tag: "Employee Experience",
    readTime: "3 min read",
    title: "Why Retention Is the New Recruitment — and How to Win at Both",
    excerpt: "With talent scarcity at a decade high, the cost of turnover has never been greater. Explore the evidence-backed strategies that keep high performers engaged.",
    gradient: "from-[#0A2A5E] to-[#0d3575]",
    full: `The cost of replacing a mid-level employee is estimated at 50–150% of their annual salary, when you factor in recruiting fees, onboarding time, lost productivity, and knowledge drain. For senior hires, that figure routinely exceeds 200%.

Yet most organisations spend 10x more on acquiring talent than retaining it.

**The retention equation**

Research consistently identifies three drivers of voluntary attrition: lack of growth opportunity, poor manager relationships, and misalignment with company purpose. Compensation ranks fourth — and only becomes the primary reason when it's significantly below market.

**What high-retention organisations do differently**

They build visible career pathways — not vague promises of "opportunity," but documented lateral and vertical paths with skill milestones. They train managers as coaches, not administrators. And they measure engagement quarterly, acting on the data rather than archiving it.

**The 90-day inflection point**

Studies show that 20% of turnover happens within the first 90 days of employment. Structured onboarding — with clear goals, a dedicated buddy, and a 30/60/90 check-in — reduces this by up to 60%.

**Practical steps to implement now**

Audit your exit interview data — are you collecting it, analysing it, and actually changing behaviour based on it? Map your top performers' career paths — what does the next 2 years look like for them, and have you had that conversation? Build stay interviews into your manager toolkit.

Retention is not an HR initiative. It is a leadership discipline.`,
  },
];

function Modal({ trend, onClose }: { trend: typeof trends[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto z-10"
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        {/* Header */}
        <div className={`bg-gradient-to-br ${trend.gradient} text-white p-8 rounded-t-2xl relative overflow-hidden`}>
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute right-16 bottom-0 w-16 h-16 rounded-full bg-[#C89B3C]/15" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X size={15} />
          </button>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20">{trend.tag}</span>
            <span className="flex items-center gap-1 text-white/50 text-xs">
              <Clock size={11} /> {trend.readTime}
            </span>
          </div>
          <h2 className="text-xl font-bold leading-snug pr-8">{trend.title}</h2>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
            {trend.full.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3 key={i} className="text-base font-bold text-primary mt-6 mb-2">
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (para.startsWith("*") && para.includes("*:")) {
                const [label, ...rest] = para.split("*:");
                return (
                  <p key={i}>
                    <strong className="text-primary">{label.replace(/\*/g, "")}:</strong>
                    {rest.join("")}
                  </p>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BookOpen size={13} />
              <span>Quvora HR Intelligence Series</span>
            </div>
            <button
              onClick={onClose}
              className="text-sm text-primary hover:text-[#C89B3C] font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HRTrends() {
  const [activeTrend, setActiveTrend] = useState<typeof trends[0] | null>(null);

  return (
    <section className="py-24 bg-[#F7F8FA]">
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

        <div className="grid md:grid-cols-2 gap-7">
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col cursor-pointer"
              onClick={() => setActiveTrend(trend)}
            >
              {/* Visual header */}
              <div className={`bg-gradient-to-br ${trend.gradient} h-44 relative overflow-hidden flex items-end p-6`}>
                {/* Subtle grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                </svg>

                {/* Decorative orb */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.7 }}
                  className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#C89B3C]/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="absolute right-8 bottom-4 w-16 h-16 rounded-full bg-white/5"
                />

                <div className="absolute top-4 left-5 z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                    {trend.tag}
                  </span>
                </div>

                {/* Big quote mark */}
                <div className="absolute bottom-3 right-5 text-white/10 font-serif text-8xl leading-none select-none">"</div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs">{trend.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-[#C89B3C] transition-colors duration-200">
                  {trend.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {trend.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[#C89B3C] font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Read Full Insight <ArrowUpRight size={15} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeTrend && <Modal trend={activeTrend} onClose={() => setActiveTrend(null)} />}
      </AnimatePresence>
    </section>
  );
}
