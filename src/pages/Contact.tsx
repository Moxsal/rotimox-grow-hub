import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

const whatsappLink = "https://wa.me/234919945833?text=Hello%20Rotimox%20Sales!%20I'm%20interested%20in%20your%20services.";
const emailLink = "mailto:Rotimiexpert42@gmail.com";
const phoneLink = "tel:+234919945833";

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Open WhatsApp with the message
    const message = `Hello Rotimox Sales!

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}

Message: ${formData.message.trim()}`;

    window.open(
      `https://wa.me/234919945833?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    toast({
      title: "✅ Message Ready!",
      description: "WhatsApp opened with your message. Send it to complete!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Let's Start Your{" "}
            <span className="text-accent">Success Story</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Ready to grow your business? Get in touch with us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center group-hover:bg-success group-hover:scale-110 transition-all duration-200">
                    <MessageCircle className="w-6 h-6 text-success group-hover:text-success-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">WhatsApp</h3>
                    <p className="text-accent font-medium">+234 919 945 833</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Tap to chat with us directly →
                    </p>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={phoneLink}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">Call Us</h3>
                    <p className="text-accent font-medium">+234 919 945 833</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Tap to call us directly →
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={emailLink}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-200">
                    <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">Email</h3>
                    <p className="text-accent font-medium">Rotimiexpert42@gmail.com</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Tap to send us an email →
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                    <p className="text-accent font-medium">Worldwide Digital Agency</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Serving clients across all countries
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                    <p className="text-accent font-medium">24/7 Support</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h2 className="font-display text-2xl text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or ask any questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Preparing Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>We typically respond within 1 hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Prefer a Quick Chat?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Skip the form and reach out to us directly on WhatsApp for an instant response.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
