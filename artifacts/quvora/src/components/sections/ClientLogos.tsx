import { motion } from "framer-motion";

/* 
  Inline SVG brand logos — brand-accurate colors & visual identity
  No external CDN required
*/

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
    {/* Logitech swirl mark */}
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

const MakeMyTrip = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* MMT logo mark — stylized plane/journey */}
    <rect x="4" y="6" width="30" height="30" rx="6" fill="#CE1A24"/>
    <text x="19" y="27" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">m</text>
    <text x="44" y="20" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="800" fontSize="9" fill="#CE1A24">Make</text>
    <text x="44" y="32" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="800" fontSize="9" fill="#003087">MyTrip</text>
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

const Walmart = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Walmart spark — 6 petals */}
    {[0,60,120,180,240,300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 20 + Math.cos(rad) * 5, y1 = 22 + Math.sin(rad) * 5;
      const x2 = 20 + Math.cos(rad) * 13, y2 = 22 + Math.sin(rad) * 13;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFC220" strokeWidth="4" strokeLinecap="round"/>;
    })}
    <circle cx="20" cy="22" r="4" fill="#FFC220"/>
    <text x="40" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="15" fill="#004C97">Walmart</text>
  </svg>
);

const Myntra = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Myntra M zigzag */}
    <path d="M6 38 L6 10 L20 26 L34 10 L34 38" stroke="#FF3F6C" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="46" y="29" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="14" fill="#FF3F6C">myntra</text>
  </svg>
);

const Roche = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Roche hexagon pair */}
    <polygon points="22,4 34,11 34,25 22,32 10,25 10,11" fill="#009FE3"/>
    <polygon points="34,11 46,18 46,32 34,39 22,32 22,18" fill="#009FE3" opacity="0.45"/>
    <text x="22" y="21" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="8" fill="white" textAnchor="middle">R</text>
    <text x="58" y="29" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="700" fontSize="16" fill="#009FE3">Roche</text>
  </svg>
);

const SunPharma = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Sun rays */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 20 + Math.cos(rad) * 7, y1 = 20 + Math.sin(rad) * 7;
      const x2 = 20 + Math.cos(rad) * 15, y2 = 20 + Math.sin(rad) * 15;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round"/>;
    })}
    <circle cx="20" cy="20" r="6" fill="#F7941D"/>
    <text x="42" y="17" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="10" fill="#F7941D">SUN</text>
    <text x="42" y="31" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="8.5" fill="#1A3A6B">PHARMA</text>
  </svg>
);

const Sanofi = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Sanofi loop/swoosh */}
    <path d="M8 32 C12 10 32 6 40 18 C46 26 38 38 28 36 C18 34 16 24 24 22 C32 20 36 28 30 30" stroke="#7A2182" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <circle cx="29" cy="30" r="3" fill="#7A2182"/>
    <text x="52" y="29" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="400" fontSize="16" fill="#7A2182" letterSpacing="0.5">sanofi</text>
  </svg>
);

const logos = [
  { name: "Tata AIA",    sub: "Insurance",       Logo: TataAIA,   hover: "#eef2fb" },
  { name: "Logitech",   sub: "Technology",       Logo: Logitech,  hover: "#e8f0fb" },
  { name: "PwC",        sub: "Consulting",       Logo: PwC,       hover: "#fdf0ed" },
  { name: "MakeMyTrip", sub: "Travel Tech",      Logo: MakeMyTrip,hover: "#fdeaea" },
  { name: "EY",         sub: "Advisory",         Logo: EY,        hover: "#fffce6" },
  { name: "Walmart",    sub: "Retail",           Logo: Walmart,   hover: "#e8f4ff" },
  { name: "Myntra",     sub: "Fashion",          Logo: Myntra,    hover: "#fff0f4" },
  { name: "Roche",      sub: "Pharma",           Logo: Roche,     hover: "#e6f6fd" },
  { name: "Sun Pharma", sub: "Healthcare",       Logo: SunPharma, hover: "#fff6e6" },
  { name: "Sanofi",     sub: "Life Sciences",    Logo: Sanofi,    hover: "#f6eefa" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {logos.map(({ name, sub, Logo, hover }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative bg-white border border-border/50 rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
              style={{ minHeight: 108 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: hover }}
              />
              <div className="relative z-10 w-full h-10">
                <Logo />
              </div>
              <p className="relative z-10 text-[11px] text-muted-foreground font-medium group-hover:text-[#0A2A5E] transition-colors">
                {sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[11px] text-muted-foreground/50 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Represents organisations where Quvora team members have prior talent placement experience.
        </motion.p>
      </div>
    </section>
  );
}
