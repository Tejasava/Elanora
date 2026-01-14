import { Star, TrendingUp, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const BestSellers = () => {
  const bestSellers = [
    {
      name: "Eternal Rose Pendant",
      code: "ELN-BS001",
      images: [
          "/products/48.png",
          "/products/47.png",
          "/products/49.png",
          "/products/50.png",],
    },
    {
      name: "Celeste Black Gold Earrings",
      code: "ELN-BS002",
      images: [
          "/products/2.png",
          "/products/3.png",
          "/products/4.png",
          "/products/1.png",],
    },
    {
      name: "Love Letter Bracelet",
      code: "ELN-BS003",
      images: [
          "/products/36.png",
          "/products/35.png",
          "/products/34.png",
          "/products/37.png",],
    },
    {
      name: "Promise Ring Set",
      code: "ELN-BS004",
      images: ["im1", "im2", "im3", "im4"],
    },
    {
      name: "Crystal Love Box",
      code: "ELN-BS005",
      images: ["im1", "im2", "im3", "im4"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/10 via-secondary/5 to-background relative overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute top-24 left-16 animate-pulse">
          <Star className="w-6 h-6 text-primary fill-primary/30" />
        </div>
        <div className="absolute top-32 right-24 animate-pulse animation-delay-200">
          <Star className="w-8 h-8 text-secondary fill-secondary/30" />
        </div>
        <div className="absolute bottom-16 left-1/3 animate-pulse animation-delay-400">
          <Star className="w-5 h-5 text-primary fill-primary/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 text-foreground text-sm font-medium mb-4 animate-fade-up">
              <TrendingUp className="w-4 h-4" />
              Most Loved
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Best Sellers
            </h1>
            <p className="text-muted-foreground animate-fade-up animation-delay-200">
              Our most adored pieces that have captured hearts. Discover what 
              couples are loving the most.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 animate-fade-up animation-delay-300">
            {[
              { icon: Award, number: "Top 5", label: "Loved Products" },
              { icon: Star, number: "4.9★", label: "Average Rating" },
              { icon: TrendingUp, number: "500+", label: "Orders/Month" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-serif text-xl font-bold text-foreground">
                  {stat.number}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.slice(0, 3).map((product, index) => (
              <div
                key={product.code}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard
                  name={product.name}
                  code={product.code}
                  images={product.images}
                  isBestSeller={true}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
            {bestSellers.slice(3).map((product, index) => (
              <div
                key={product.code}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <ProductCard
                  name={product.name}
                  code={product.code}
                  images={product.images}
                  isBestSeller={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why They Love It */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Couples Love These
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What makes our best sellers special? It's the little details that 
              make all the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                emoji: "💎",
                title: "Premium Quality",
                description: "Only the finest materials and craftsmanship",
              },
              {
                emoji: "🎁",
                title: "Gift Ready",
                description: "Beautifully packaged for that perfect moment",
              },
              {
                emoji: "💌",
                title: "Emotional Value",
                description: "Designed to create lasting memories",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellers;
