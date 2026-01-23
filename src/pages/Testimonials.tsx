import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Solomon Amlalo Donkor",
    role: "Director",
    company: "DAS GH LIMITED",
    content:
      "Thank you for the opportunity. My experience working with Rotimox was excellent. One thing I truly appreciate is his strong communication skills and ability to deliver effectively. I was pleasantly surprised when I saw my company listed online with a live URL, making all our services visible to clients. I was very happy with the result. Thank you.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Rotimox Sales transformed our online presence. Our Google My Business listing went from invisible to ranking #1 in local searches within just 2 months! The team was incredibly responsive and delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Owner",
    company: "Chen's Restaurant",
    content:
      "The review management service was incredible. We went from 3.2 to 4.8 stars on Google, and our customer inquiries doubled. The professionalism and attention to detail were outstanding.",
    rating: 5,
  },
  {
    name: "Emily Williams",
    role: "Marketing Director",
    company: "Williams & Co",
    content:
      "Professional, responsive, and results-driven. The social media growth strategy brought us 10x more engagement in just 3 months. I highly recommend their services to any business looking to grow online.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Founder",
    company: "Okonkwo Ventures",
    content:
      "Working with Rotimox Sales was a game-changer for our business. They built us a stunning website that perfectly represents our brand and converts visitors into clients. Truly world-class service.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Thompson Healthcare",
    content:
      "Our clinic's online reputation was struggling before we found Rotimox Sales. Now we have over 500 five-star reviews and new patient inquiries have increased by 400%. Absolutely phenomenal results!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "Rodriguez Auto Group",
    content:
      "The GMB optimization service is worth every penny. We're now the top result for auto services in our area, and our phone hasn't stopped ringing. Thank you, Rotimox Sales!",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Owner",
    company: "Foster's Boutique",
    content:
      "Our Instagram went from 500 followers to over 25,000 in just 4 months. The content strategy and engagement tactics they implemented were brilliant. Sales have never been better!",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "Managing Partner",
    company: "Kim Legal Associates",
    content:
      "As a law firm, reputation is everything. Rotimox Sales helped us establish a strong online presence with excellent reviews and a professional website. Client consultations have increased by 300%.",
    rating: 5,
  },
  {
    name: "Patricia Brown",
    role: "Director",
    company: "Brown Consulting",
    content:
      "I was skeptical at first, but the results speak for themselves. Our lead generation improved dramatically, and the ROI on their services has been incredible. A true partner in growth.",
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
