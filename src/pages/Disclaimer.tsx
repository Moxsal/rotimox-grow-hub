import Layout from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground">
            Disclaimer
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
                  General Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on this website and through our services is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  No Guarantee of Results
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we use proven strategies and methodologies, we cannot guarantee specific results from our digital marketing services. Results may vary based on factors including but not limited to your industry, competition, market conditions, and the time and resources you invest in the process.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Third-Party Platforms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services often involve third-party platforms such as Google, Facebook, Instagram, TikTok, and others. We are not responsible for changes these platforms make to their policies, algorithms, or terms of service that may affect the results of our work. We will adapt our strategies as needed, but cannot control external platform decisions.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Professional Advice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services and the information we provide should not be considered professional legal, financial, or business advice. We recommend consulting with appropriate professionals for specific advice tailored to your situation.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  External Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of these external sites. The inclusion of any link does not imply endorsement.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Testimonials and Case Studies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The testimonials and case studies displayed on our website represent the experiences of individual clients. These results are not typical and should not be interpreted as a guarantee of similar results for your business. Individual outcomes depend on many factors unique to each business.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Rotimox Sales be liable for any damages arising out of or in connection with your use of our services or this website. This includes, without limitation, direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this disclaimer, please contact us at{" "}
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

export default Disclaimer;
