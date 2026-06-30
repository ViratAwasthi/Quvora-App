import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, TrendingUp, Users, CheckCircle2, Building2, Code2, Factory } from "lucide-react";

/* Animated counter hook */
function useCounter(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const stories = [
  {
    tag: "Executive Search",
    company: "Leading FinTech Firm",
    industry: "Banking & Finance",
    title: "C-Suite Transformation in 90 Days",
    summary: "Placed a Chief Human Resources Officer and VP of Talent who restructured the entire people function for a 2,000-person fintech scaling aggressively across Asia.",
    metric: "90",
    metricSuffix: " Days",
    metricLabel: "Time to Placement",
    color: "#0A2A5E",
    colorTo: "#0d3575",
    Icon: Building2,
    outcomes: [
      { label: "Attrition reduced", value: 34, suffix: "%", color: "#C89B3C" },
      { label: "Employer brand lift", value: 22, suffix: " pts", color: "#10b981" },
    ],
    illustration: (
      <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* City skyline / fintech building */}
        <rect x="30" y="30" width="40" height="80" rx="4" fill="white" fillOpacity="0.08"/>
        <rect x="38" y="40" width="8" height="8" rx="1" fill="#C89B3C" fillOpacity="0.6"/>
        <rect x="52" y="40" width="8" height="8" rx="1" fill="#C89B3C" fillOpacity="0.4"/>
        <rect x="38" y="54" width="8" height="8" rx="1" fill="white" fillOpacity="0.2"/>
        <rect x="52" y="54" width="8" height="8" rx="1" fill="#C89B3C" fillOpacity="0.3"/>
        <rect x="38" y="68" width="8" height="8" rx="1" fill="white" fillOpacity="0.15"/>
        <rect x="52" y="68" width="8" height="8" rx="1" fill="white" fillOpacity="0.15"/>
        {/* Main tower */}
        <rect x="80" y="15" width="60" height="95" rx="4" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        {[25,38,51,64,77,90].map((y,i)=>(
          <g key={i}>
            <rect x="90" y={y} width="10" height="8" rx="1" fill="#C89B3C" fillOpacity={i<3?0.7:0.3}/>
            <rect x="106" y={y} width="10" height="8" rx="1" fill="white" fillOpacity={i<3?0.25:0.1}/>
            <rect x="122" y={y} width="10" height="8" rx="1" fill="white" fillOpacity={i<3?0.2:0.08}/>
          </g>
        ))}
        <rect x="150" y="45" width="35" height="65" rx="3" fill="white" fillOpacity="0.08"/>
        <rect x="195" y="60" width="28" height="50" rx="3" fill="white" fillOpacity="0.06"/>
        {/* Stars */}
        {[0,1,2].map(i=>(
          <circle key={i} cx={220+i*10} cy={25+i*8} r="1.5" fill="white" fillOpacity="0.4"/>
        ))}
      </svg>
    ),
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
    metric: "50",
    metricSuffix: " Hires",
    metricLabel: "12 Weeks",
    color: "#0A2A5E",
    colorTo: "#13356e",
    Icon: Code2,
    outcomes: [
      { label: "Offer-to-joining rate", value: 91, suffix: "%", color: "#C89B3C" },
      { label: "Cost-per-hire saved", value: 28, suffix: "%", color: "#10b981" },
    ],
    illustration: (
      <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Code brackets & tech elements */}
        <text x="8" y="40" fontSize="28" fontWeight="900" fill="white" opacity="0.08">{"{"}</text>
        <text x="230" y="40" fontSize="28" fontWeight="900" fill="white" opacity="0.08">{"}"}</text>
        {/* Engineer cards in grid — 5 cards, leaving space for ring */}
        {[0,1,2,3,4].map(i=>{
          const row = Math.floor(i/3), col = i%3;
          const x = 40 + col * 62, y = 12 + row * 52;
          const isHighlighted = i < 4;
          return (
            <g key={i}>
              <rect x={x} y={y} width={52} height={40} rx="6" fill="white" fillOpacity={isHighlighted?0.12:0.05} stroke={isHighlighted?"#C89B3C":"white"} strokeOpacity={isHighlighted?0.4:0.1} strokeWidth="1"/>
              <circle cx={x+26} cy={y+14} r="8" fill={isHighlighted?"#C89B3C":"white"} fillOpacity={isHighlighted?0.7:0.1}/>
              <text x={x+26} y={y+19} textAnchor="middle" fontSize="9" fill="white" opacity={isHighlighted?0.9:0.3}>{["BE","FE","DE","QA","SR"][i]}</text>
              <rect x={x+8} y={y+27} width={36} height={5} rx="2" fill="white" fillOpacity={isHighlighted?0.3:0.1}/>
            </g>
          );
        })}
        {/* Progress ring */}
        <circle cx="220" cy="90" r="22" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="4"/>
        <circle cx="220" cy="90" r="22" fill="none" stroke="#C89B3C" strokeWidth="4" strokeLinecap="round" strokeDasharray="116 23" strokeDashoffset="29"/>
        <text x="220" y="88" textAnchor="middle" fontSize="10" fontWeight="900" fill="#C89B3C">91%</text>
        <text x="220" y="99" textAnchor="middle" fontSize="7" fill="white" opacity="0.5">Joining</text>
      </svg>
    ),
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
    metric: "4000",
    metricSuffix: "+",
    metricLabel: "Employees Impacted",
    color: "#0A2A5E",
    colorTo: "#0f2e68",
    Icon: Factory,
    outcomes: [
      { label: "Attrition dropped", value: 57, suffix: "%", color: "#C89B3C" },
      { label: "Compliance fix", value: 95, suffix: "%", color: "#10b981" },
    ],
    illustration: (
      <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Factory silhouette */}
        <rect x="10" y="55" width="240" height="60" rx="4" fill="white" fillOpacity="0.05"/>
        {/* Chimneys */}
        <rect x="30" y="30" width="16" height="30" rx="2" fill="white" fillOpacity="0.1"/>
        <rect x="55" y="38" width="14" height="22" rx="2" fill="white" fillOpacity="0.08"/>
        <rect x="80" y="33" width="16" height="27" rx="2" fill="white" fillOpacity="0.1"/>
        {/* Smoke */}
        <circle cx="38" cy="24" r="6" fill="white" fillOpacity="0.05"/>
        <circle cx="41" cy="16" r="4" fill="white" fillOpacity="0.04"/>
        {/* Windows row */}
        {[0,1,2,3,4,5,6,7].map(i=>(
          <rect key={i} x={20+i*28} y={65} width={16} height={16} rx="2" fill={i<4?"#C89B3C":"white"} fillOpacity={i<4?0.25:0.08} stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
        ))}
        {/* 8 locations map dots */}
        <text x="180" y="25" fontSize="9" fill="white" opacity="0.4" fontWeight="600">8 Plants</text>
        {[0,1,2,3,4,5,6,7].map(i=>{
          const angle = (i/8)*Math.PI*2;
          const cx = 220 + Math.cos(angle)*22, cy = 65 + Math.sin(angle)*22;
          return <circle key={i} cx={cx} cy={cy} r="4" fill={i<5?"#C89B3C":"white"} fillOpacity={i<5?0.8:0.2}/>;
        })}
        <circle cx="220" cy="65" r="10" fill="#C89B3C" fillOpacity="0.15" stroke="#C89B3C" strokeOpacity="0.4" strokeWidth="1.5"/>
        <text x="220" y="69" textAnchor="middle" fontSize="8" fill="#C89B3C" fontWeight="800">Q</text>
        {/* Lines to plants */}
        {[0,1,2,3,4].map(i=>{
          const angle=(i/8)*Math.PI*2;
          return <line key={i} x1="220" y1="65" x2={220+Math.cos(angle)*18} y2={65+Math.sin(angle)*18} stroke="#C89B3C" strokeOpacity="0.3" strokeWidth="1"/>;
        })}
      </svg>
    ),
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

function MetricCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const count = useCounter(target, 1000, active);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

function StoryCard({ story, index, onClick }: { story: typeof stories[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.14 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl transition-shadow duration-400 group flex flex-col cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Illustrated header */}
      <div
        className="h-36 sm:h-40 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${story.color}, ${story.colorTo})` }}
      >
        {/* Illustration */}
        <div className="absolute inset-0 p-3">
          {story.illustration}
        </div>

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%]"
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* Metric strip — gold top border accent, unified with HR Trends */}
      <div
        className="flex flex-wrap items-center justify-between px-5 py-3 border-t border-[#C89B3C]/30 gap-x-2 gap-y-1"
        style={{ background: `linear-gradient(135deg, ${story.color}, ${story.colorTo})` }}
      >
        <span className="text-xs text-white/60 font-medium">{story.metricLabel}</span>
        <span className="text-2xl font-black text-[#C89B3C] leading-none tabular-nums">
          <MetricCounter target={parseInt(story.metric)} suffix={story.metricSuffix} active={inView} />
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            <story.Icon size={9} />
            {story.tag}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span className="text-xs text-muted-foreground font-medium">{story.industry} · {story.company}</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-[#C89B3C] transition-colors duration-200 leading-snug">
          {story.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{story.summary}</p>

        {/* Mini outcome bars */}
        <div className="mt-5 space-y-2.5">
          {story.outcomes.map((o, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex-1 bg-border/40 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: o.color }}
                  initial={{ width: "0%" }}
                  animate={inView ? { width: `${o.value}%` } : {}}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs font-bold shrink-0" style={{ color: o.color }}>
                {o.value}{o.suffix}
              </span>
              <span className="text-[10px] text-muted-foreground shrink-0">{o.label}</span>
            </div>
          ))}
        </div>

        <button className="mt-5 flex items-center gap-2 text-[#C89B3C] font-semibold text-sm hover:gap-3 transition-all duration-200">
          View Full Case Study <ArrowRight size={15} />
        </button>
      </div>
    </motion.div>
  );
}

function Modal({ story, onClose }: { story: typeof stories[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="text-white p-8 rounded-t-2xl relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${story.color}, ${story.colorTo})` }}
          >
            <div className="absolute inset-0 opacity-25 p-4">{story.illustration}</div>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10">
              <X size={16} />
            </button>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 mb-3">{story.tag}</span>
              <h2 className="text-2xl font-bold mb-1">{story.title}</h2>
              <p className="text-white/70 text-sm">{story.company} · {story.industry}</p>
            </div>
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
                  <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{o}</span>
                  </motion.li>
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
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C89B3C] rounded-full" />
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            Real mandates, measurable outcomes, and lasting impact across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {stories.map((story, i) => (
            <StoryCard key={i} story={story} index={i} onClick={() => setActiveStory(story)} />
          ))}
        </div>
      </div>

      {activeStory && <Modal story={activeStory} onClose={() => setActiveStory(null)} />}
    </section>
  );
}
