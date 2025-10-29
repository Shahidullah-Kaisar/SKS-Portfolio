import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
  { id: "works", label: "My Works" },
  { id: "skills", label: "Skills" },
  { id: "testimonial", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Md_Shahidullah_Kaisar_CV.pdf";
    link.download = "Md_Shahidullah_Kaisar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 250);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Kaisar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-primary-foreground border-t border-gray-600"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleDownloadCV}
              variant="default"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>

            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={handleDownloadCV}
                  variant="default"
                  size="sm"
                  className="w-full sm:hidden mt-2"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
