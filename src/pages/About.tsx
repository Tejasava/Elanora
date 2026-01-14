import { Heart, Sparkles, Gift, Star, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/10 via-secondary/5 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-24 left-10 animate-float">
          <Heart className="w-10 h-10 text-primary/20 fill-primary/10" />
        </div>
        <div className="absolute bottom-20 right-16 animate-float animation-delay-300">
          <Sparkles className="w-12 h-12 text-secondary/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
              About <span className="text-gradient">Elanora</span>
            </h1>
            <p className="font-serif text-2xl md:text-3xl italic text-primary mb-8 animate-fade-up animation-delay-200">
              Her Wish
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto text-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg animate-fade-up">
                  <span className="font-serif text-foreground font-semibold text-xl">
                    Elanora
                  </span>{" "}
                  is more than just a gifting brand — it's a celebration of love, 
                  connection, and the beautiful moments that make relationships special.
                </p>
                
                <p className="animate-fade-up animation-delay-100">
                  We are a <span className="text-foreground font-medium">premium gifting solution for couples</span>, 
                  especially designed for the Gen-Z generation who believe in expressing 
                  love through meaningful, aesthetic gestures.
                </p>

                <p className="animate-fade-up animation-delay-200">
                  From delicate earrings to thoughtfully curated collectibles, every 
                  piece in our collection is designed to capture emotions and turn them 
                  into timeless memories. We understand that behind every gift is a 
                  story waiting to be told.
                </p>

                <div className="py-8 animate-fade-up animation-delay-300">
                  <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
                </div>

                <p className="font-serif text-2xl text-foreground italic animate-fade-up animation-delay-400">
                  "At Elanora, every gift is not just a product — it's Her Wish."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values guide everything we do, from product selection to customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Love First",
                description:
                  "Every product is selected with love, for love. We believe that the best gifts come from the heart.",
              },
              {
                icon: Sparkles,
                title: "Aesthetic Excellence",
                description:
                  "We curate only the most beautiful, Instagram-worthy pieces that make gifting a visual delight.",
              },
              {
                icon: Gift,
                title: "Meaningful Moments",
                description:
                  "We help create memorable experiences that strengthen bonds between couples.",
              },
              {
                icon: Star,
                title: "Premium Quality",
                description:
                  "Quality is non-negotiable. Every item is crafted with attention to detail and durability.",
              },
              {
                icon: Users,
                title: "Gen-Z Focused",
                description:
                  "Designed for the modern lovers who express themselves through style and sentiment.",
              },
              {
                icon: Clock,
                title: "Timeless Elegance",
                description:
                  "Our pieces are designed to be cherished forever, not just for the moment.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-card shadow-soft hover:shadow-card transition-all duration-500 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-12 md:p-16 shadow-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-4xl">💕</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                To be the go-to destination for couples seeking to express their love 
                through thoughtfully curated, premium gifts that speak louder than words. 
                We believe that every relationship deserves beautiful moments, and every 
                wish deserves to come true.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
