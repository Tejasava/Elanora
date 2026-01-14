import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesignerCard from "@/components/DesignerCard";

const Index = () => {
  const designerWishes = [
    { 
      wishNumber: 1, 
      code: "ELN-W01",
      images: [
        "/products/14.png",
        "/products/13.png",
        "/products/15.png",
        "/products/16.png",
      ],
    },
    { 
      wishNumber: 2, 
      code: "ELN-W02",
      images: [
        "/products/26.png",
        "/products/25.png",
        "/products/23.png",
        "/products/24.png",
      ],
    },
    { 
      wishNumber: 3, 
      code: "ELN-W03",
      images: [
        "/products/36.png",
        "/products/35.png",
        "/products/34.png",
        "/products/37.png",
      ],
    },
    { 
      wishNumber: 4, 
      code: "ELN-W04",
      images: [
        "/products/41.png",
        "/products/42.png",
        "/products/44.png",
        "/products/45.png",
      ],
    },
    { 
      wishNumber: 5, 
      code: "ELN-W05",
      images: [
        "/products/59.png",
        "/products/52.png",
        "/products/57.png",
        "/products/56.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-300" />
        
        {/* Floating Hearts */}
        <div className="absolute top-1/4 left-1/4 animate-float animation-delay-100">
          <Heart className="w-8 h-8 text-primary/30 fill-primary/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-200">
          <Heart className="w-6 h-6 text-secondary/40 fill-secondary/20" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float animation-delay-400">
          <Sparkles className="w-10 h-10 text-primary/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-card shadow-soft animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Premium Romantic Gifts
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4 animate-fade-up animation-delay-100">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
                Elanora
              </h1>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-primary">
                Her Wish
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
              Where every gift tells a love story. Discover premium, aesthetic gifts 
              designed to make her heart flutter and her wishes come true.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up animation-delay-300">
              <Link to="/products">
                <Button variant="romantic" size="lg" className="group">
                  Explore Her Wishes
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/gifting">
                <Button variant="outline" size="lg">
                  <Gift className="w-5 h-5 mr-2" />
                  View Gifting Ideas
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 md:gap-16 pt-12 animate-fade-up animation-delay-400">
              {[
                { number: "500+", label: "Happy Couples" },
                { number: "100+", label: "Unique Gifts" },
                { number: "4.9★", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Designer Cards Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-4">
              Designer Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Curated Wishes
            </h2>
            <p className="text-muted-foreground">
              Each piece in our designer collection is thoughtfully crafted to 
              express love in the most beautiful way.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designerWishes.slice(0, 3).map((wish, index) => (
              <div
                key={wish.code}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DesignerCard
                  wishNumber={wish.wishNumber}
                  code={wish.code}
                  images={wish.images}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
            {designerWishes.slice(3).map((wish, index) => (
              <div
                key={wish.code}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <DesignerCard
                  wishNumber={wish.wishNumber}
                  code={wish.code}
                  images={wish.images}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="group">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💝",
                title: "Handpicked with Love",
                description:
                  "Every gift is carefully selected to ensure it speaks the language of love.",
              },
              {
                icon: "✨",
                title: "Premium Quality",
                description:
                  "We believe in gifting only the finest, most aesthetic pieces for your loved one.",
              },
              {
                icon: "🎀",
                title: "Beautiful Packaging",
                description:
                  "Each gift arrives in elegant packaging, ready to make her heart skip a beat.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-background hover:shadow-card transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Heart className="w-12 h-12 mx-auto text-primary fill-primary/20" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Ready to Make Her Wish Come True?
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our collection and find the perfect gift that speaks your heart.
            </p>
            <div className="pt-4">
              <Link to="/products">
                <Button variant="romantic" size="lg" className="group">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
