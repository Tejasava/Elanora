import { X, Instagram, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productCode: string;
  productName: string;
}

const OrderModal = ({ isOpen, onClose, productCode, productName }: OrderModalProps) => {
  const [copied, setCopied] = useState(false);
  const instagramLink = "https://instagram.com/elanora";

  const handleCopy = () => {
    navigator.clipboard.writeText(productCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-3xl shadow-hover max-w-md w-full p-8 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Heart Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Order via Instagram
            </h3>
            <p className="text-muted-foreground text-sm">
              {productName}
            </p>
          </div>

          {/* Product Code */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-2">Your Unique Product Code</p>
            <div className="flex items-center justify-center gap-3">
              <span className="font-serif text-2xl font-bold text-foreground tracking-wider">
                {productCode}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-colors duration-300"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-foreground/80 text-sm leading-relaxed">
            To order this product, DM us this unique code on our Instagram. We'll
            get back to you with love! 💕
          </p>

          {/* CTA Button */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="romantic" size="lg" className="w-full">
              <Instagram className="w-5 h-5 mr-2" />
              Open Instagram
            </Button>
          </a>

          {/* Instagram Handle */}
          <p className="text-xs text-muted-foreground">
            @elanora • We typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
