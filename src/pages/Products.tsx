import { useState } from "react";
import { Search, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = Array.from({ length: 15 }, (_, i) => {
    // First product gets the special images with 2.png as first
    if (i === 0) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/2.png",
          "/products/3.png",
          "/products/4.png",
          "/products/1.png",
        ],
      };
    }
    // Second product gets heart earrings with specific sequence
    if (i === 1) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/11.png",
          "/products/8.png",
          "/products/9.png",
          "/products/10.png",
        ],
      };
    }
    // Third product gets round diamond earrings
    if (i === 2) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/14.png",
          "/products/13.png",
          "/products/15.png",
          "/products/16.png",
        ],
      };
    }
    // Fourth product gets butterfly earrings
    if (i === 3) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/21.png",
          "/products/20.png",
          "/products/19.png",
          "/products/18.png",
        ],
      };
    }
    // Fifth product gets leaf/petal earrings
    if (i === 4) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/26.png",
          "/products/25.png",
          "/products/23.png",
          "/products/24.png",
        ],
      };
    }
    // Sixth product
    if (i === 5) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/30.png",
          "/products/32.png",
          "/products/28.png",
          "/products/31.png",
        ],
      };
    }
    // Seventh product
    if (i === 6) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/36.png",
          "/products/35.png",
          "/products/34.png",
          "/products/37.png",
        ],
      };
    }
    // Eighth product
    if (i === 7) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/41.png",
          "/products/42.png",
          "/products/44.png",
          "/products/45.png",
        ],
      };
    }
    // Ninth product
    if (i === 8) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/48.png",
          "/products/47.png",
          "/products/49.png",
          "/products/50.png",
        ],
      };
    }
    // Tenth product
    if (i === 9) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/59.png",
          "/products/52.png",
          "/products/57.png",
          "/products/56.png",
        ],
      };
    }
    // Eleventh product
    if (i === 10) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/61.png",
          "/products/62.png",
          "/products/63.png",
          "/products/65.png",
        ],
      };
    }
    // Twelfth product
    if (i === 11) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/69.png",
          "/products/68.png",
          "/products/71.png",
          "/products/70.png",
        ],
      };
    }
    // Thirteenth product
    if (i === 12) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/75.png",
          "/products/77.png",
          "/products/76.png",
          "/products/78.png",
        ],
      };
    }
    // Fourteenth product
    if (i === 13) {
      return {
        name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
        code: `ELN-P${String(i + 1).padStart(3, "0")}`,
        images: [
          "/products/83.png",
          "/products/82.png",
          "/products/81.png",
          "/products/80.png",
        ],
      };
    }
    // Other products use placeholder images
    return {
      name: `Romantic Gift ${String(i + 1).padStart(2, "0")}`,
      code: `ELN-P${String(i + 1).padStart(3, "0")}`,
      images: ["im1", "im2", "im3", "im4"],
    };
  });

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-4 animate-fade-up">
              Our Collection
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Products
            </h1>
            <p className="text-muted-foreground animate-fade-up animation-delay-200">
              Discover our complete range of premium romantic gifts, each crafted 
              to make her feel special.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-up animation-delay-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.code}
                  className="animate-fade-up"
                  style={{ animationDelay: `${(index % 8) * 50}ms` }}
                >
                  <ProductCard
                    name={product.name}
                    code={product.code}
                    images={product.images}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
