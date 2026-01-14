import { Heart, Sparkles } from "lucide-react";
import GiftingCard from "@/components/GiftingCard";

const Gifting = () => {
  const giftingIdeas = [
    {
      title: "Anniversary Dreams",
      description:
        "Celebrate your love story with a gift that marks another beautiful chapter together. Perfect for anniversaries that deserve to be remembered forever.",
      code: "ELN-G001",
      images: [
          "/products/11.png",
          "/products/8.png",
          "/products/9.png",
          "/products/10.png",
      ],
    },
    {
      title: "Birthday Bliss",
      description:
        "Make her birthday unforgettable with a thoughtfully curated gift that shows how much you cherish every moment with her.",
      code: "ELN-G002",
       images: [
          "/products/59.png",
          "/products/52.png",
          "/products/57.png",
          "/products/56.png",
      ],
    },
    {
      title: "Just Because",
      description:
        "The most beautiful surprises come without a reason. Show her she's on your mind with an unexpected gesture of love.",
      code: "ELN-G003",
      images: [
          "/products/26.png",
          "/products/25.png",
          "/products/23.png",
          "/products/24.png",
      ],
    },
    {
      title: "Promise of Forever",
      description:
        "A symbol of your eternal commitment. For the moments when words aren't enough to express what she means to you.",
      code: "ELN-G004",
        images: [
          "/products/75.png",
          "/products/77.png",
          "/products/76.png",
          "/products/78.png",
        ],
    },
    {
      title: "First Love Collection",
      description:
        "Capture the magic of new beginnings. Perfect for young couples embarking on their romantic journey together.",
      code: "ELN-G005",
        images: [
          "/products/41.png",
          "/products/42.png",
          "/products/44.png",
          "/products/45.png",
        ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 via-primary/5 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-8 h-8 text-primary/20 fill-primary/10" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-200">
          <Sparkles className="w-10 h-10 text-secondary/30" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-400">
          <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-4 animate-fade-up">
              Gift with Love
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Gifting Ideas
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200 leading-relaxed">
              Every occasion is a chance to make her feel loved. Discover our 
              curated collections designed for life's most romantic moments.
            </p>
          </div>
        </div>
      </section>

      {/* Gifting Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftingIdeas.slice(0, 3).map((gift, index) => (
              <div
                key={gift.code}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GiftingCard
                  title={gift.title}
                  description={gift.description}
                  code={gift.code}
                  index={index}
                  images={gift.images}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
            {giftingIdeas.slice(3).map((gift, index) => (
              <div
                key={gift.code}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <GiftingCard
                  title={gift.title}
                  description={gift.description}
                  code={gift.code}
                  index={index + 3}
                  images={gift.images}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-12 shadow-card">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-3xl">💕</span>
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground mb-4">
              "The best gift you can give someone is the gift of feeling loved."
            </blockquote>
            <p className="text-muted-foreground">— Elanora</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifting;
