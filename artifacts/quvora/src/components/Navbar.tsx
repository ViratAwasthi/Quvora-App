import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-06-27_at_10.15.50_PM_1782579392135.jpeg";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3">
            <img src={logoPath} alt="Quvora Consulting" className="w-10 h-10 object-cover rounded-full" />
            <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              QUVORA
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      isScrolled ? "text-foreground/80" : "text-white/90"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-accent hover:bg-accent/90 text-white border-0 shadow-lg shadow-accent/20"
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-medium text-primary hover:text-accent py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-4 bg-accent hover:bg-accent/90 text-white"
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
