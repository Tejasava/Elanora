import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "./OrderModal";

interface DesignerCardProps {
  wishNumber: number;
  code: string;
  images?: string[];
}

const DesignerCard = ({ wishNumber, code, images = [] }: DesignerCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = images.length > 0 ? images.length + 1 : 5; // images + 1 video

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const wishName = `Wish ${String(wishNumber).padStart(2, "0")}`;

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm shadow-soft">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-serif text-sm font-medium text-foreground">
            {wishName}
          </span>
        </div>

        {/* Carousel */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Images */}
            {images.length > 0 ? (
              images.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 flex items-center justify-center overflow-hidden"
                >
                  {img.startsWith("/") ? (
                    <img
                      src={img}
                      alt={`Designer wish slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-float">
                        <span className="text-4xl">💝</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{img}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <>
                {/* 4 Image placeholders */}
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="min-w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 flex items-center justify-center"
                  >
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-float">
                        <span className="text-4xl">💝</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">im{num}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* Video placeholder */}
            <div className="min-w-full h-full bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-10 h-10 text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">v1</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/95 shadow-soft transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/95 shadow-soft transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-primary w-8"
                    : "bg-foreground/20 w-2 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {wishName}
              </h3>
              <p className="text-sm text-muted-foreground">Designer Collection</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Code</p>
              <p className="font-medium text-foreground">{code}</p>
            </div>
          </div>

          <Button
            variant="romantic"
            size="lg"
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
        productName={wishName}
      />
    </>
  );
};

export default DesignerCard;
