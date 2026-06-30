import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const logoPath = "/logo.jpg";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Partner", href: "#partner" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = ["home", "about", "services", "industries", "process", "partner", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 50);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C89B3C] z-50 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(10,42,94,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3">
            <img src={logoPath} alt="Quvora Consulting" className="w-10 h-10 object-cover rounded-full" />
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
              QUVORA
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className={`relative text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
                        isActive
                          ? "text-[#C89B3C]"
                          : isScrolled
                          ? "text-foreground/70 hover:text-primary"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C89B3C] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-[#C89B3C] hover:bg-[#b8892e] text-white border-0 shadow-lg shadow-[#C89B3C]/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Consultation
            </Button>
          </nav>

          <button
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-primary hover:bg-primary/5" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border/50 md:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      isActive ? "text-[#C89B3C] bg-[#C89B3C]/5" : "text-primary hover:text-[#C89B3C] hover:bg-primary/3"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <Button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-4 bg-[#C89B3C] hover:bg-[#b8892e] text-white"
              >
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
