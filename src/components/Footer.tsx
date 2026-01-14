import { Link } from "react-router-dom";
import { Instagram, Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Elanora
              </h3>
              <p className="text-sm text-muted-foreground italic tracking-wider">
                Her Wish
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium gifting solutions for couples. Every gift is not just a
              product, it's Her Wish.
            </p>
            <a
              href="https://instagram.com/elanora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              @elanora
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Products", "Gifting", "Best Sellers", "About Us"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@elanora.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                hello@elanora.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Creating magic, wherever you are</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Stay Connected
            </h4>
            <p className="text-sm text-muted-foreground">
              Follow us on Instagram for the latest romantic collections and
              gifting ideas.
            </p>
            <a
              href="https://instagram.com/elanora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Follow @elanora
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Elanora. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
