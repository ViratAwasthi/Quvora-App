import { motion } from "framer-motion";

/* Inline SVG brand logos — accurate brand colors & visual identity */

const TataAIA = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <text x="4" y="20" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="15" fill="#003087" letterSpacing="1.5">TATA</text>
    <rect x="4" y="24" width="50" height="1.5" fill="#003087" rx="1"/>
    <text x="4" y="40" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="15" fill="#E4002B" letterSpacing="2">AIA</text>
    <circle cx="118" cy="22" r="18" fill="#E4002B"/>
    <text x="118" y="27" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="12" fill="white" textAnchor="middle">AIA</text>
  </svg>
);

const Logitech = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M22 36C14 36 8 30 8 22C8 14 14 8 22 8C30 8 36 14 36 22" stroke="#004B87" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="22" cy="22" r="4" fill="#004B87"/>
    <text x="44" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="15" fill="#1A1A1A">Logi</text>
    <text x="85" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="15" fill="#004B87">tech</text>
  </svg>
);

const PwC = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="14" cy="14" r="7" fill="#D04A02"/>
    <circle cx="30" cy="14" r="7" fill="#D04A02" opacity="0.5"/>
    <circle cx="14" cy="30" r="7" fill="#D04A02" opacity="0.5"/>
    <circle cx="30" cy="30" r="7" fill="#D04A02" opacity="0.2"/>
    <text x="50" y="31" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="300" fontSize="26" fill="#2D2D2D" letterSpacing="-0.5">PwC</text>
  </svg>
);

const EY = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="4" y="2" width="44" height="40" rx="4" fill="#FFE600"/>
    <text x="26" y="32" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="24" fill="#2E2E38" textAnchor="middle">EY</text>
    <text x="60" y="17" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8.5" fill="#2E2E38">Building a</text>
    <text x="60" y="27" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8.5" fill="#2E2E38">better working</text>
    <text x="60" y="37" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="8.5" fill="#2E2E38">world</text>
  </svg>
);

const Deloitte = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <text x="4" y="30" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="300" fontSize="20" fill="#86BC25" letterSpacing="-0.3">deloitte.</text>
  </svg>
);

const KPMG = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="4" y="4" width="36" height="36" rx="4" fill="#0091DA"/>
    <text x="22" y="27" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="11" fill="white" textAnchor="middle">KPMG</text>
    <text x="50" y="30" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="18" fill="#00338D" letterSpacing="1">KPMG</text>
  </svg>
);

const Walmart = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {[0,60,120,180,240,300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      return <line key={i} x1={20+Math.cos(rad)*5} y1={22+Math.sin(rad)*5} x2={20+Math.cos(rad)*13} y2={22+Math.sin(rad)*13} stroke="#FFC220" strokeWidth="4" strokeLinecap="round"/>;
    })}
    <circle cx="20" cy="22" r="4" fill="#FFC220"/>
    <text x="40" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="15" fill="#004C97">Walmart</text>
  </svg>
);

const Myntra = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 38 L6 10 L20 26 L34 10 L34 38" stroke="#FF3F6C" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="46" y="29" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="14" fill="#FF3F6C">myntra</text>
  </svg>
);

const MakeMyTrip = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="4" y="6" width="30" height="30" rx="6" fill="#CE1A24"/>
    <text x="19" y="27" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">m</text>
    <text x="44" y="20" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="800" fontSize="9" fill="#CE1A24">Make</text>
    <text x="44" y="32" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="800" fontSize="9" fill="#003087">MyTrip</text>
  </svg>
);

const SunPharma = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      return <line key={i} x1={20+Math.cos(rad)*7} y1={20+Math.sin(rad)*7} x2={20+Math.cos(rad)*15} y2={20+Math.sin(rad)*15} stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round"/>;
    })}
    <circle cx="20" cy="20" r="6" fill="#F7941D"/>
    <text x="42" y="17" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="10" fill="#F7941D">SUN</text>
    <text x="42" y="31" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="8.5" fill="#1A3A6B">PHARMA</text>
  </svg>
);

const Accenture = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Accenture > arrow mark */}
    <path d="M8 10 L22 22 L8 34" stroke="#A100FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="32" y="29" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="300" fontSize="14" fill="#1A1A1A">accenture</text>
  </svg>
);

const logos = [
  { name: "Tata AIA",    sub: "Insurance",       Logo: TataAIA,    hover: "#eef2fb" },
  { name: "Logitech",   sub: "Technology",       Logo: Logitech,   hover: "#e8f0fb" },
  { name: "PwC",        sub: "Consulting",       Logo: PwC,        hover: "#fdf0ed" },
  { name: "EY",         sub: "Advisory",         Logo: EY,         hover: "#fffce6" },
  { name: "Deloitte",   sub: "Consulting",       Logo: Deloitte,   hover: "#f2fae6" },
  { name: "KPMG",       sub: "Advisory",         Logo: KPMG,       hover: "#e6f4ff" },
  { name: "Walmart",    sub: "Retail",           Logo: Walmart,    hover: "#e8f4ff" },
  { name: "Myntra",     sub: "Fashion",          Logo: Myntra,     hover: "#fff0f4" },
  { name: "MakeMyTrip", sub: "Travel Tech",      Logo: MakeMyTrip, hover: "#fdeaea" },
  { name: "Sun Pharma", sub: "Healthcare",       Logo: SunPharma,  hover: "#fff6e6" },
  { name: "Accenture",  sub: "Technology",       Logo: Accenture,  hover: "#f9eeff" },
];

/* Auto-scroll marquee strip for the logos */
export default function ClientLogos() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm font-semibold rounded-full mb-3 tracking-wide">
            Talent Experience
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Trusted by India's Leading Organisations
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            We've sourced, screened, and placed exceptional talent across globally recognised brands
          </p>
        </motion.div>
      </div>

      {/* Scrolling logo marquee */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10 pointer-events-none"/>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10 pointer-events-none"/>

        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {/* Double the list for seamless loop */}
          {[...logos, ...logos].map(({ name, sub, Logo, hover }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-white border border-border/50 rounded-2xl px-5 py-4 flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-lg cursor-default overflow-hidden shrink-0"
              style={{ minWidth: 148, minHeight: 100 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: hover }}
              />
              <div className="relative z-10 w-full h-9">
                <Logo />
              </div>
              <p className="relative z-10 text-[11px] text-muted-foreground font-medium group-hover:text-[#0A2A5E] transition-colors text-center">
                {sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.p
        className="text-center text-[11px] text-muted-foreground/50 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        * Represents organisations where Quvora team members have prior talent placement experience.
      </motion.p>
    </section>
  );
}
