import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does GMB optimization take?",
    answer:
      "The initial setup and optimization typically takes 1-2 weeks. However, you'll start seeing improvements in your local search rankings within 2-4 weeks. Full results, including significant visibility growth and increased customer inquiries, are usually achieved within 2-3 months of consistent optimization.",
  },
  {
    question: "Are your review services safe and professional?",
    answer:
      "Absolutely! We use only ethical, white-hat strategies for review growth. Our approach focuses on encouraging genuine customer reviews through legitimate channels. We never use fake reviews or bots, which can harm your business reputation and violate platform terms of service. Our methods are compliant with Google and Facebook guidelines.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We are a worldwide digital agency serving clients across all countries. We've successfully worked with businesses from North America, Europe, Africa, Asia, and Australia. Our team is experienced in adapting strategies for different markets and time zones, ensuring seamless communication and excellent results regardless of your location.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with businesses across virtually every industry, including restaurants, healthcare, legal services, retail, e-commerce, professional services, automotive, real estate, hospitality, and more. Our strategies are customized to meet the unique needs and challenges of each industry.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply click the 'Get Free Consultation' button to message us on WhatsApp, or visit our Contact page. We'll schedule a free consultation call to understand your business needs, discuss your goals, and create a customized plan to help you achieve results. There's no obligation, and the consultation is completely free.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is flexible and depends on the specific services you need and the scope of your project. We offer packages for businesses of all sizes, from small local businesses to large enterprises. During your free consultation, we'll provide a detailed quote based on your requirements and budget.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We believe in transparency and measurable results. For each service, we track specific KPIs including search rankings, website traffic, review ratings and counts, social media engagement, and lead generation metrics. We provide regular reports so you can see exactly how your investment is performing.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide ongoing support and maintenance for all our services. This includes regular monitoring, updates, and optimization to ensure continued growth and success. Our team is available 24/7 to address any questions or concerns you may have.",
  },
  {
    question: "What makes Rotimox Sales different from other agencies?",
    answer:
      "What sets us apart is our combination of experience (5+ years), global reach (serving 50+ countries), and our commitment to personalized service. We don't use one-size-fits-all solutions. Instead, we create customized strategies for each client. Our 98% satisfaction rate speaks to the quality of our work and our dedication to client success.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Results vary depending on the service and your starting point. For GMB optimization, you'll typically see improvements within 2-4 weeks. Social media growth can show results within the first month. Website development projects are usually completed within 2-4 weeks. We'll provide realistic timelines during your consultation based on your specific situation.",
  },
];

const whatsappLink = "https://wa.me/234919945833?text=Hello%20Rotimox%20Sales!%20I%20have%20a%20question%20about%20your%20services.";

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Frequently Asked{" "}
            <span className="text-accent">Questions</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                <MessageCircle className="w-5 h-5" />
                Ask on WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Now that you know more about us, let's discuss how we can help your business grow.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
