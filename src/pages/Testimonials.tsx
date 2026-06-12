import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/sections/TestimonialCard";
import DynamicTestimonials from "@/components/sections/DynamicTestimonials";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Nia Spa",
    role: "Founder",
    company: "Nia Spa",
    content:
      "Working with Rotimox Sales was one of the best decisions for my business. I was honestly impressed by the quality, professionalism, and attention to detail delivered on my website project. Since launching the website, I have gained more clients, improved my online presence, and increased my business profits significantly. The entire process was smooth, professional, and exceeded my expectations. I highly recommend his services to anyone looking to grow their business professionally online.",
    rating: 5,
  },
  {
    name: "Gerald",
    role: "Director",
    company: "BGM Realty Limited",
    content:
      "Rotimox Sales is one of the most reliable and professional experts I have ever worked with. The support, dedication, and quality of service provided helped scale my business beyond what I expected. The website development and business growth strategies greatly improved my company's visibility and professionalism. I truly appreciate the hard work and commitment invested into my business growth and will continue recommending these services.",
    rating: 5,
  },
  {
    name: "Solomon Amlalo Donkor",
    role: "Director",
    company: "DAS GH LIMITED",
    content:
      "My experience working with Rotimox was excellent. What I truly appreciate is his strong communication skills and ability to deliver effectively. I was pleasantly surprised when I saw my company listed online with a live URL, making all our services visible to clients. Very happy with the result.",
    rating: 5,
  },
];

const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!%20I've%20seen%20your%20testimonials%20and%20I'm%20interested%20in%20your%20services.";

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            What Our Clients{" "}
            <span className="text-accent">Say About Us</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients from around the world have to say about working with Rotimox Sales.
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-foreground mb-2">
                4.9
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                ))}
              </div>
              <div className="text-muted-foreground text-sm">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-foreground mb-2">
                1,000+
              </div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-foreground mb-2">
                98%
              </div>
              <div className="text-muted-foreground text-sm">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      <DynamicTestimonials />

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Screenshots Placeholder */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Social Proof
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
            Our Reviews on{" "}
            <span className="text-accent">Google & Facebook</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Check out our authentic reviews from Google and Facebook. Our clients' success stories are our greatest achievement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-8 text-center card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-warning fill-warning" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Google Reviews
              </h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-muted-foreground">4.9 out of 5 stars</p>
            </div>

            <div className="bg-card rounded-2xl shadow-lg p-8 text-center card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-warning fill-warning" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Facebook Reviews
              </h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-muted-foreground">4.8 out of 5 stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to experience the same results? Contact us today and let's start your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Get Started Today
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
