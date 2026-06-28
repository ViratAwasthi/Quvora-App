import { motion } from "framer-motion";

/* SVG logo marks — brand-accurate representations */
const logos = [
  {
    name: "Tata AIA",
    sub: "Insurance",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="4" y="22" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="13" fill="#003087" letterSpacing="1">TATA</text>
        <line x1="4" y1="27" x2="60" y2="27" stroke="#003087" strokeWidth="1.5"/>
        <text x="4" y="42" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16" fill="#E31837" letterSpacing="2">AIA</text>
        <circle cx="100" cy="24" r="16" fill="#003087"/>
        <text x="100" y="29" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="12" fill="white" textAnchor="middle">AIA</text>
      </svg>
    ),
    hoverBg: "#eef2f8",
  },
  {
    name: "Logitech",
    sub: "Technology",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M14 34 C14 34 10 28 12 20 C14 12 22 10 28 14 C34 18 32 28 26 30 C20 32 18 26 22 24 C26 22 28 26 26 28" stroke="#004B9B" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <text x="40" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#004B9B">logitech</text>
      </svg>
    ),
    hoverBg: "#e8f0fb",
  },
  {
    name: "PwC",
    sub: "Consulting",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="12" cy="12" r="5" fill="#E0301E"/>
        <circle cx="26" cy="12" r="5" fill="#E0301E"/>
        <circle cx="12" cy="26" r="5" fill="#E0301E"/>
        <circle cx="26" cy="26" r="5" fill="#E0301E" opacity="0.4"/>
        <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="22" fill="#E0301E">PwC</text>
      </svg>
    ),
    hoverBg: "#fdf0ee",
  },
  {
    name: "MakeMyTrip",
    sub: "Travel Tech",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="8" width="16" height="16" rx="3" fill="#E8434E"/>
        <rect x="8" y="28" width="24" height="4" rx="2" fill="#003580"/>
        <text x="26" y="22" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#E8434E">Make</text>
        <text x="26" y="35" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#003580">MyTrip</text>
      </svg>
    ),
    hoverBg: "#fdeaeb",
  },
  {
    name: "EY",
    sub: "Advisory",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="4" width="40" height="40" rx="4" fill="#FFE600"/>
        <text x="24" y="32" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="22" fill="#2E2E38" textAnchor="middle">EY</text>
        <text x="58" y="20" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="10" fill="#2E2E38">Building a</text>
        <text x="58" y="32" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="10" fill="#2E2E38">better</text>
        <text x="58" y="44" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="10" fill="#2E2E38">working world</text>
      </svg>
    ),
    hoverBg: "#fffbe6",
  },
  {
    name: "Walmart",
    sub: "Retail",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Walmart spark */}
        {[0,60,120,180,240,300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 20 + Math.cos(rad) * 4;
          const y1 = 24 + Math.sin(rad) * 4;
          const x2 = 20 + Math.cos(rad) * 11;
          const y2 = 24 + Math.sin(rad) * 11;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round"/>;
        })}
        <circle cx="20" cy="24" r="3" fill="#FFC220"/>
        <text x="38" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="#0071CE">Walmart</text>
      </svg>
    ),
    hoverBg: "#e8f4ff",
  },
  {
    name: "Myntra",
    sub: "Fashion",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M8 38 L8 10 L20 26 L32 10 L32 38" stroke="#FF3F6C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="42" y="30" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="14" fill="#FF3F6C">myntra</text>
      </svg>
    ),
    hoverBg: "#fff0f4",
  },
  {
    name: "Roche",
    sub: "Pharma",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Roche hexagon style */}
        <polygon points="24,6 36,13 36,27 24,34 12,27 12,13" fill="#009FE3" opacity="0.15" stroke="#009FE3" strokeWidth="2"/>
        <polygon points="24,10 33,15 33,25 24,30 15,25 15,15" fill="#009FE3"/>
        <text x="24" y="24" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="8" fill="white" textAnchor="middle">Ro</text>
        <text x="46" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="#009FE3">Roche</text>
      </svg>
    ),
    hoverBg: "#e6f6fd",
  },
  {
    name: "Sun Pharma",
    sub: "Healthcare",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sun rays */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 20 + Math.cos(rad) * 6;
          const y1 = 20 + Math.sin(rad) * 6;
          const x2 = 20 + Math.cos(rad) * 13;
          const y2 = 20 + Math.sin(rad) * 13;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F7941D" strokeWidth="2" strokeLinecap="round"/>;
        })}
        <circle cx="20" cy="20" r="5" fill="#F7941D"/>
        <text x="40" y="18" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#F7941D">SUN</text>
        <text x="40" y="32" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="9" fill="#003087">PHARMA</text>
      </svg>
    ),
    hoverBg: "#fff6e8",
  },
  {
    name: "Sanofi",
    sub: "Life Sciences",
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sanofi swoosh */}
        <path d="M8 30 C12 14 28 10 36 18 C40 22 36 32 28 32 C20 32 18 24 24 22" stroke="#7A2182" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <circle cx="27" cy="21" r="2.5" fill="#7A2182"/>
        <text x="46" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="#7A2182">sanofi</text>
      </svg>
    ),
    hoverBg: "#f6eefa",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-3 tracking-wide">
            Our Network
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Talent Experience Across Leading Organizations
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            We've partnered with and placed talent across globally recognized brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {logos.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative bg-white border border-border/60 rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
              style={{ minHeight: 110 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: company.hoverBg }}
              />
              <div className="relative z-10 w-full h-10">
                {company.svg}
              </div>
              <div className="relative z-10 text-xs text-muted-foreground font-medium mt-1 group-hover:text-[#0A2A5E] transition-colors">
                {company.sub}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          * For illustrative purposes. Represents organisations where Quvora has prior talent experience.
        </motion.p>
      </div>
    </section>
  );
}
