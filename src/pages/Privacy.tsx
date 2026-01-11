import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground">
            Privacy Policy
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
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rotimox Sales ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Information We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information when you engage our services</li>
                  <li>Communication records between you and our team</li>
                  <li>Website usage data through cookies and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you about your projects</li>
                  <li>To send you relevant updates and marketing communications (with your consent)</li>
                  <li>To analyze and improve our website performance</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services (such as Google Analytics, WhatsApp, and email providers) to enhance our services. These third parties have their own privacy policies governing how they use your information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Your Rights
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or how we handle your data, please contact us at{" "}
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

export default Privacy;
