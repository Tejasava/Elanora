import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "./OrderModal";

interface ProductCardProps {
  name: string;
  code: string;
  images: string[];
  hasVideo?: boolean;
  isBestSeller?: boolean;
}

const ProductCard = ({
  name,
  code,
  images,
  hasVideo = true,
  isBestSeller = false,
}: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = hasVideo ? images.length + 1 : images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const isVideoSlide = hasVideo && currentIndex === images.length;

  return (
    <>
      <div
        className="card-romantic group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image/Video Carousel */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          {/* Best Seller Badge */}
          {isBestSeller && (
            <div className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-medium shadow-soft">
              ✨ Best Seller
            </div>
          )}

          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="min-w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden"
              >
                {img.startsWith("/") ? (
                  <img
                    src={img}
                    alt={`Product slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{img}</p>
                  </div>
                )}
              </div>
            ))}
            {hasVideo && (
              <div className="min-w-full h-full bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <Play className="w-8 h-8 text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">v1</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 shadow-soft transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 shadow-soft transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-primary w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{code}</p>
          </div>

          <Button
            variant="romantic"
            className="w-full"
            onClick={() => setIsModalOpen(true)}
          >
            Order Now
          </Button>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productCode={code}
        productName={name}
      />
    </>
  );
};

export default ProductCard;
