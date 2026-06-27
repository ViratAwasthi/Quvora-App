import logoPath from "@assets/WhatsApp_Image_2026-06-27_at_10.15.50_PM_1782579392135.jpeg";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoPath} alt="Quvora" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-bold text-2xl tracking-tight">QUVORA</span>
            </div>
            <p className="text-white/70">People. Strategy. Growth.</p>
            <p className="text-white/50 text-sm">Partnering with businesses to solve hiring challenges and attract exceptional talent.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Industries", "Careers", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)} 
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Recruitment</li>
              <li>Executive Search</li>
              <li>HR Consulting</li>
              <li>Payroll</li>
              <li>Talent Acquisition</li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
            <div className="flex gap-2 mb-8">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-accent w-full"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <a href="mailto:connect@quvoraconsulting.com" className="text-white/70 hover:text-accent transition-colors">
              connect@quvoraconsulting.com
            </a>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2026 Quvora Consulting. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
