import { useState } from "react";
import { Heart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "./OrderModal";

interface GiftingCardProps {
  title: string;
  description: string;
  code: string;
  index: number;
  images?: string[];
}

const GiftingCard = ({ title, description, code, index, images = [] }: GiftingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const icons = ["💍", "🌹", "💫", "🎀", "💝"];

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating Hearts */}
        <div
          className={`absolute top-6 right-6 transition-all duration-500 ${
            isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
          }`}
        >
          <Heart className="w-8 h-8 text-primary/30 fill-primary/20" />
        </div>

        {/* Image Placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-lavender/10">
          {images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover"
              onMouseEnter={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-float">
                  <span className="text-4xl">{icons[index % icons.length]}</span>
                </div>
                <p className="text-sm text-muted-foreground">Gift Image</p>
              </div>
            </div>
          )}

          {/* Decorative overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="romantic"
              className="w-full"
              onClick={() => setIsModalOpen(true)}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productCode={code}
        productName={title}
      />
    </>
  );
};

export default GiftingCard;
