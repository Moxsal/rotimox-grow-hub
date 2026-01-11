import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground">
            Terms & Conditions
          </h1>
          <p className="text-primary-foreground/80 text-lg mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Rotimox Sales, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rotimox Sales provides digital marketing services including but not limited to Google My Business optimization, review management, social media marketing, and website development. The specific scope of services will be agreed upon between you and our team before commencement.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Payment Terms
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment terms will be agreed upon before service commencement</li>
                  <li>Prices are subject to change with prior notice</li>
                  <li>Refunds are handled on a case-by-case basis</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Grant necessary access to accounts and platforms</li>
                  <li>Respond promptly to communications</li>
                  <li>Comply with all applicable laws and platform terms of service</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive ownership of deliverables created specifically for them. Rotimox Sales retains ownership of proprietary tools, methodologies, and processes used to deliver services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rotimox Sales shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice. Upon termination, any outstanding payments become immediately due. We will provide reasonable assistance in transitioning services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us at{" "}
                  <a href="mailto:Rotimiexpert42@gmail.com" className="text-accent hover:underline">
                    Rotimiexpert42@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
