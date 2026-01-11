import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Local Restaurant Chain",
    category: "GMB Optimization",
    beforeStats: {
      searches: "500/month",
      calls: "20/month",
      rating: "3.2 stars",
    },
    afterStats: {
      searches: "5,000/month",
      calls: "150/month",
      rating: "4.8 stars",
    },
    description:
      "We helped a local restaurant chain increase their Google visibility by 10x through strategic GMB optimization and review management.",
  },
  {
    title: "E-commerce Store",
    category: "Social Media Marketing",
    beforeStats: {
      followers: "1,200",
      engagement: "0.5%",
      sales: "$5,000/month",
    },
    afterStats: {
      followers: "45,000",
      engagement: "8%",
      sales: "$50,000/month",
    },
    description:
      "Our social media strategy helped this e-commerce store grow their Instagram following by 37x and increase monthly sales by 10x.",
  },
  {
    title: "Professional Services Firm",
    category: "Website Development",
    beforeStats: {
      visitors: "200/month",
      leads: "5/month",
      conversion: "2.5%",
    },
    afterStats: {
      visitors: "3,000/month",
      leads: "75/month",
      conversion: "8%",
    },
    description:
      "We built a conversion-optimized website that increased their monthly leads by 15x and improved their conversion rate significantly.",
  },
  {
    title: "Healthcare Clinic",
    category: "Reviews Growth",
    beforeStats: {
      reviews: "45",
      rating: "3.8 stars",
      inquiries: "30/month",
    },
    afterStats: {
      reviews: "500+",
      rating: "4.9 stars",
      inquiries: "200/month",
    },
    description:
      "Our review management strategy helped this healthcare clinic build trust and increase patient inquiries by over 500%.",
  },
];

const whatsappLink = "https://wa.me/234919945833?text=Hello%20Rotimox%20Sales!%20I'd%20like%20to%20discuss%20my%20project.";

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Our Results Speak{" "}
            <span className="text-accent">For Themselves</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Explore our case studies and see the real impact we've made for businesses across various industries.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: TrendingUp, value: "10x", label: "Average Growth" },
              { icon: Star, value: "98%", label: "Satisfaction Rate" },
              { icon: MessageCircle, value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Case Studies
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Before & After{" "}
              <span className="text-accent">Results</span>
            </h2>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <h3 className="font-display text-2xl text-foreground">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-8">{study.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-destructive rounded-full" />
                        Before
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(study.beforeStats).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">
                              {key}
                            </span>
                            <span className="font-medium text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-accent/10 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        After
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(study.afterStats).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">
                              {key}
                            </span>
                            <span className="font-bold text-accent">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Want Results Like These?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve similar transformative results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Start Your Project
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

export default Portfolio;
