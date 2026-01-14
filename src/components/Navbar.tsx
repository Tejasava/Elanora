import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Gifting", path: "/gifting" },
  { name: "Best Sellers", path: "/best-sellers" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground transition-all duration-300 group-hover:text-primary">
              Elanora
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-light tracking-widest italic">
              Her Wish
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Instagram Icon */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/elanora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-card">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://instagram.com/elanora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium py-2 px-4 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
