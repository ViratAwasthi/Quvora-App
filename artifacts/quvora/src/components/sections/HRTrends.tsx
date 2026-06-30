import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight, X, BookOpen, Brain, GraduationCap, BarChart3, Heart } from "lucide-react";

const trends = [
  {
    tag: "Future of Work",
    readTime: "5 min read",
    title: "AI-Augmented Hiring: Where Human Judgment Meets Machine Intelligence",
    excerpt: "AI tools now handle screening and scheduling — but the best hiring decisions still depend on human intuition. Here's how leading CHROs are blending both.",
    accentColor: "#C89B3C",
    bgFrom: "#0A2A5E",
    bgTo: "#1a4070",
    Icon: Brain,
    stat: "40%",
    statLabel: "Faster Screening",
    illustration: (
      <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Circuit board background */}
        <line x1="0" y1="40" x2="260" y2="40" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="0" y1="80" x2="260" y2="80" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="0" y1="120" x2="260" y2="120" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="60" y1="0" x2="60" y2="140" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="130" y1="0" x2="130" y2="140" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        <line x1="200" y1="0" x2="200" y2="140" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
        {/* AI brain outline */}
        <ellipse cx="130" cy="65" rx="38" ry="34" stroke="#C89B3C" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 3"/>
        <circle cx="130" cy="65" r="22" fill="#C89B3C" fillOpacity="0.12" stroke="#C89B3C" strokeOpacity="0.4" strokeWidth="1.5"/>
        {/* Neural lines */}
        {[[130,65,88,30],[130,65,172,30],[130,65,80,90],[130,65,180,90],[130,65,105,108],[130,65,155,108]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3"/>
        ))}
        {/* Nodes */}
        {[[88,30],[172,30],[80,90],[180,90],[105,108],[155,108]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="5" fill="#C89B3C" fillOpacity="0.5"/>
        ))}
        {/* Center icon */}
        <text x="130" y="70" textAnchor="middle" fontSize="16" fill="#C89B3C" opacity="0.9">🧠</text>
      </svg>
    ),
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
    accentColor: "#C89B3C",
    bgFrom: "#0A2A5E",
    bgTo: "#0f3060",
    Icon: GraduationCap,
    stat: "3–5×",
    statLabel: "Larger Talent Pool",
    illustration: (
      <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Skill badges floating */}
        <rect x="20" y="15" width="68" height="26" rx="13" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        <text x="54" y="32" textAnchor="middle" fontSize="10" fill="white" opacity="0.8" fontWeight="600">✦ Leadership</text>
        <rect x="100" y="8" width="60" height="26" rx="13" fill="#C89B3C" fillOpacity="0.2" stroke="#C89B3C" strokeOpacity="0.5" strokeWidth="1"/>
        <text x="130" y="25" textAnchor="middle" fontSize="10" fill="#C89B3C" fontWeight="700">★ Strategy</text>
        <rect x="172" y="18" width="72" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        <text x="208" y="35" textAnchor="middle" fontSize="10" fill="white" opacity="0.7" fontWeight="600">Analytics</text>
        {/* Second row */}
        <rect x="8" y="57" width="56" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        <text x="36" y="74" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">Finance</text>
        <rect x="76" y="52" width="74" height="28" rx="14" fill="#C89B3C" fillOpacity="0.15" stroke="#C89B3C" strokeOpacity="0.4" strokeWidth="1.5"/>
        <text x="113" y="70" textAnchor="middle" fontSize="11" fill="#C89B3C" fontWeight="800">✦ HR Mastery</text>
        <rect x="162" y="56" width="66" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <text x="195" y="73" textAnchor="middle" fontSize="10" fill="white" opacity="0.6">Product Mgmt</text>
        {/* Third row */}
        <rect x="30" y="98" width="60" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <text x="60" y="115" textAnchor="middle" fontSize="10" fill="white" opacity="0.6">DevOps</text>
        <rect x="105" y="100" width="52" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        <text x="131" y="117" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">Design</text>
        <rect x="168" y="97" width="68" height="26" rx="13" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <text x="202" y="114" textAnchor="middle" fontSize="10" fill="white" opacity="0.6">Sales Ops</text>
      </svg>
    ),
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
    accentColor: "#C89B3C",
    bgFrom: "#0A2A5E",
    bgTo: "#132d60",
    Icon: BarChart3,
    stat: "62%",
    statLabel: "CHROs in C-Suite",
    illustration: (
      <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Org chart top */}
        <rect x="100" y="8" width="60" height="28" rx="6" fill="#C89B3C" fillOpacity="0.9"/>
        <text x="130" y="26" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">CHRO</text>
        {/* Connect lines */}
        <line x1="130" y1="36" x2="130" y2="52" stroke="#C89B3C" strokeOpacity="0.4" strokeWidth="1.5"/>
        <line x1="60" y1="52" x2="200" y2="52" stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1.5"/>
        <line x1="60" y1="52" x2="60" y2="62" stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1.5"/>
        <line x1="130" y1="52" x2="130" y2="62" stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1.5"/>
        <line x1="200" y1="52" x2="200" y2="62" stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1.5"/>
        {/* Level 2 boxes */}
        {[["Talent Acq", 60], ["L&D", 130], ["HR Ops", 200]].map(([label, cx], i) => (
          <g key={i}>
            <rect x={(cx as number)-30} y={62} width={60} height={24} rx="5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
            <text x={cx} y={78} textAnchor="middle" fontSize="8" fill="white" opacity="0.85" fontWeight="600">{label as string}</text>
          </g>
        ))}
        {/* L3 */}
        <line x1="60" y1="86" x2="60" y2="96" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        <line x1="130" y1="86" x2="130" y2="96" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        <line x1="200" y1="86" x2="200" y2="96" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        {[60,130,200].map((cx,i)=>(
          <g key={i}>
            <circle cx={cx} cy={103} r="8" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
            <circle cx={cx-14} cy={103} r="8" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
            <circle cx={cx+14} cy={103} r="8" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
          </g>
        ))}
      </svg>
    ),
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
    accentColor: "#C89B3C",
    bgFrom: "#0A2A5E",
    bgTo: "#0d3575",
    Icon: Heart,
    stat: "60%",
    statLabel: "Turnover Reduction",
    illustration: (
      <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* People figures */}
        {[40, 80, 120, 160, 200, 240].map((cx, i) => (
          <g key={i} opacity={i < 4 ? 1 : 0.35}>
            <circle cx={cx} cy={55} r={i === 0 ? 14 : 11} fill={i===0?"#C89B3C":i<4?"white":"white"} fillOpacity={i===0?0.9:0.12} stroke={i===0?"#C89B3C":"white"} strokeOpacity={i<4?0.3:0.1} strokeWidth="1.5"/>
            <text x={cx} y={60} textAnchor="middle" fontSize="14" opacity={i<4?0.8:0.2}>{["👑","👤","👤","👤","👤","👤"][i]}</text>
            <rect x={cx-16} y={72} width={32} height={20} rx="4" fill={i===0?"#C89B3C":"white"} fillOpacity={i===0?0.2:0.06} stroke={i<4?"white":"white"} strokeOpacity={i<4?0.2:0.05} strokeWidth="1"/>
            <text x={cx} y={85} textAnchor="middle" fontSize="7" fill="white" opacity={i<4?0.7:0.2}>{["Leader","Sr. Eng","Analyst","Mgr","Exec","Dir"][i]}</text>
          </g>
        ))}
        {/* Retention rate chart */}
        <rect x="6" y="100" width="248" height="34" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        <text x="16" y="114" fontSize="8" fill="white" opacity="0.5">Attrition Rate</text>
        {/* Before bar */}
        <rect x="16" y="118" width="90" height="8" rx="4" fill="white" fillOpacity="0.08"/>
        <rect x="16" y="118" width="90" height="8" rx="4" fill="#ef4444" fillOpacity="0.7"/>
        <text x="110" y="126" fontSize="7" fill="white" opacity="0.5">42%</text>
        {/* After bar */}
        <rect x="130" y="118" width="38" height="8" rx="4" fill="#C89B3C" fillOpacity="0.8"/>
        <rect x="130" y="118" width="90" height="8" rx="4" fill="white" fillOpacity="0.04"/>
        <text x="224" y="126" fontSize="7" fill="#C89B3C" fontWeight="700">18% ↓</text>
        {/* Growth arrow */}
        <text x="8" y="40" fontSize="9" fill="#C89B3C" opacity="0.8" fontWeight="700">Retention</text>
        <path d="M 6 30 Q 40 10 80 18 Q 120 28 160 14 Q 200 4 245 8" stroke="#C89B3C" strokeWidth="2" fill="none" strokeOpacity="0.5"/>
        <circle cx="245" cy="8" r="3" fill="#C89B3C" fillOpacity="0.8"/>
      </svg>
    ),
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
      <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto z-10"
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        <div
          className="text-white p-8 rounded-t-2xl relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${trend.bgFrom}, ${trend.bgTo})` }}
        >
          <div className="absolute inset-0 opacity-20">
            {trend.illustration}
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10">
            <X size={15} />
          </button>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20">{trend.tag}</span>
              <span className="flex items-center gap-1 text-white/50 text-xs"><Clock size={11} /> {trend.readTime}</span>
            </div>
            <h2 className="text-xl font-bold leading-snug pr-8">{trend.title}</h2>
          </div>
        </div>
        <div className="p-8">
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
            {trend.full.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="text-base font-bold text-primary mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("*") && para.includes("*:")) {
                const [label, ...rest] = para.split("*:");
                return <p key={i}><strong className="text-primary">{label.replace(/\*/g, "")}:</strong>{rest.join("")}</p>;
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BookOpen size={13} /><span>Quvora HR Intelligence Series</span>
            </div>
            <button onClick={onClose} className="text-sm text-primary hover:text-[#C89B3C] font-medium transition-colors">Close</button>
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
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C] rounded-full" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Perspectives and insights from Quvora's consulting team — keeping your people strategy ahead of the curve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.14 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-400 bg-white flex flex-col cursor-pointer"
              onClick={() => setActiveTrend(trend)}
            >
              {/* Visual header with illustration */}
              <div
                className="h-36 sm:h-44 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${trend.bgFrom}, ${trend.bgTo})` }}
              >
                {/* Illustration fills the header */}
                <div className="absolute inset-0 p-4">
                  {trend.illustration}
                </div>

                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />

                {/* Tag badge — top-left only */}
                <div className="absolute top-4 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/15">
                    <trend.Icon size={10} />
                    {trend.tag}
                  </span>
                </div>
              </div>

              {/* Metric strip — dedicated row, no overlap */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ background: `linear-gradient(135deg, ${trend.bgFrom}, ${trend.bgTo})` }}
              >
                <span className="text-xs text-white/60 font-medium">{trend.statLabel}</span>
                <span className="text-xl font-black text-[#C89B3C] leading-none tabular-nums">{trend.stat}</span>
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
                <div className="mt-5 flex items-center gap-1.5 text-[#C89B3C] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
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
