import { TrendingUp } from "lucide-react";

const insights = [
  "Executive Hiring Demand ↑ 34% YoY across India",
  "BFSI Sector: 28% surge in CXO mandates · Q2 2026",
  "Average C-Suite Fill Time: 18 Days vs. 42 Days industry average",
  "Leadership Offer Acceptance Rate: 91.2% · Above industry benchmark",
  "IT / SaaS: Head of Engineering roles up 41% year-on-year",
  "Pharma India: Senior HR mandates grow 33% post-restructuring",
  "D2C Brands: Chief Marketing Officer demand doubles in 12 months",
  "NBFC / Fintech: Risk & Compliance leadership at a 5-year high",
  "Hybrid workforce policies driving 22% increase in HR consulting mandates",
  "India Inc. CEO succession planning accelerates — Board-level advisory up 38%",
];

const tickerContent = [...insights, ...insights];

export default function InsightsTicker() {
  return (
    <div className="w-full bg-[#071d42]/95 backdrop-blur-sm border-b border-white/8 overflow-hidden z-40 relative">
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 55s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center h-9">
        {/* Left pill */}
        <div className="shrink-0 flex items-center gap-1.5 px-4 h-full border-r border-white/10 bg-[#C89B3C]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] animate-pulse shrink-0" />
          <TrendingUp className="w-3 h-3 text-[#C89B3C]" />
          <span className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-widest whitespace-nowrap">
            HR Intelligence
          </span>
        </div>

        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-track">
            {tickerContent.map((item, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="text-[11px] text-white/60 whitespace-nowrap px-5 hover:text-white/90 transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-[#C89B3C]/40 text-xs shrink-0">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-l from-[#071d42] to-transparent" />
      </div>
    </div>
  );
}
