import { useState } from "react";
import { Send, Heart, Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree integration - replace with your form ID
    const formspreeEndpoint = "https://formspree.io/f/your-form-id";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 💕",
          description: "We'll get back to you with love soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again or DM us on Instagram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-20 right-20 animate-float">
          <Heart className="w-8 h-8 text-primary/20 fill-primary/10" />
        </div>
        <div className="absolute bottom-16 left-16 animate-float animation-delay-300">
          <MessageCircle className="w-10 h-10 text-secondary/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium mb-4 animate-fade-up">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
              We're here to help you gift love better. Reach out and let's make 
              her wish come true together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Send us a message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We'd love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="romantic"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question about our products, need help with 
                  an order, or just want to say hello — we're always happy to hear 
                  from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="https://instagram.com/elanora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">
                      @elanora • DM us anytime
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@elanora.com"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@elanora.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Quick Response Promise
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours. For faster responses, 
                      DM us on Instagram!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
