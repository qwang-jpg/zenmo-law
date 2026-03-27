import { motion } from 'framer-motion'
import SubpageHero from '@/components/shared/SubpageHero'

export default function PrivacyPolicyContent() {
  return (
    <>
      <SubpageHero title="Privacy Policy" subtitle="Last Updated: 1/19/2026" centered={true} />
      <section className="py-12 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto prose"
          >
            <h3>Introduction</h3>
            <p>Global Focus Law Group PLLC, doing business as Zenmo Law (&ldquo;Zenmo Law,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is a New York–based law firm committed to protecting the privacy and security of personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information obtained through our website, <a href="https://www.zenmolaw.com">https://www.zenmolaw.com</a>, and other related subdomain websites (the &ldquo;Site&rdquo;), and through related communications.</p>
            <p>This Privacy Policy applies to visitors to our Site, individuals who contact us for inquiries or consultations, and clients who engage us for legal services. By accessing or using our Site, you acknowledge that you have read and understood this Privacy Policy.</p>
            <h3>No Attorney–Client Relationship Created by Website Use</h3>
            <p>Accessing this Site, submitting information through online forms, uploading documents, communicating with us via email, WeChat, WeCom, or other platforms, or electronically signing documents does not by itself create an attorney–client relationship.</p>
            <p>An attorney–client relationship with Zenmo Law is established only when all of the following conditions are satisfied:</p>
            <ul><li>A written legal services agreement or engagement letter has been fully executed (including electronic execution, where applicable);</li><li>An invoice issued by Zenmo Law has been accepted; and</li><li>Payment has been received in accordance with the agreed terms.</li></ul>
            <p>Until all such conditions are met, you are not considered a client of Zenmo Law, and any information provided may not be protected by the full scope of attorney–client privilege or confidentiality.</p>
            <h3>Information We Collect</h3>
            <p><strong>Information You Provide Voluntarily.</strong> We may collect personal information that you voluntarily provide, including but not limited to:</p>
            <ul><li>Name</li><li>Email address</li><li>Phone number</li><li>Information submitted through contact forms (including WPForms)</li><li>Documents or files uploaded through the Site</li><li>Information shared through communications with us</li></ul>
            <p><strong>Information Collected Automatically.</strong> When you visit our Site, we may automatically collect certain information, including:</p>
            <ul><li>IP address</li><li>Browser type and version</li><li>Pages visited and time spent on the Site</li><li>Date and time of access</li><li>Referring URLs and other diagnostic data</li></ul>
            <p>We use Google Analytics and similar tools to help us understand how visitors use our Site. These tools collect information in accordance with their own privacy policies.</p>
            <h3>How We Use Information</h3>
            <p>We may use collected information for the following purposes:</p>
            <ul><li>To respond to inquiries and communications</li><li>To evaluate potential legal engagements</li><li>To provide legal services to authorized clients</li><li>To administer and improve our Site</li><li>To monitor and analyze usage and performance</li><li>To comply with legal, ethical, and regulatory obligations</li><li>To maintain internal records and documentation</li></ul>
            <p>We do not sell or rent personal information for marketing purposes.</p>
            <h3>Disclosure of Information</h3>
            <p>We may disclose information in the following circumstances:</p>
            <ul><li>To provide legal services to authorized clients, including disclosure to co-counsel, experts, or service providers where reasonably necessary</li><li>To third-party service providers that support our operations (such as website hosting, analytics, document management, or electronic signature services)</li><li>To comply with applicable laws, court orders, subpoenas, or other legal processes</li><li>To protect the rights, property, or safety of Zenmo Law, our clients, or others</li></ul>
            <p>All disclosures are made consistent with applicable law and professional responsibility obligations.</p>
            <h3>Third-Party Platforms and Communications</h3>
            <p>Zenmo Law may communicate with individuals and clients through third-party platforms, including but not limited to WeChat, WeCom (enterprise WeChat), and Feishu, as well as electronic signature platforms.</p>
            <p>These platforms are not owned, operated, or controlled by Zenmo Law. By choosing to communicate with us through such platforms, you acknowledge and accept that:</p>
            <ul><li>Such platforms are subject to their own privacy and security practices;</li><li>Zenmo Law cannot guarantee the security or confidentiality of information transmitted through third-party systems; and</li><li>Your use of such platforms is voluntary.</li><li>Zenmo Law will nonetheless take reasonable measures consistent with professional standards to safeguard information under its control.</li></ul>
            <h3>Data Storage and Security</h3>
            <p>Information collected through the Site is primarily stored and processed within the United States. We use reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.</p>
            <p>However, no method of transmission over the internet or electronic storage system is completely secure, and we cannot guarantee absolute security.</p>
            <h3>Data Retention</h3>
            <p>Zenmo Law retains information in accordance with applicable laws, regulations, and professional responsibility requirements governing attorneys licensed in the State of New York.</p>
            <p>Information may be retained for a period required to:</p>
            <ul><li>Fulfill legal and ethical obligations</li><li>Resolve disputes</li><li>Enforce agreements</li><li>Comply with recordkeeping requirements</li></ul>
            <p>Where legally permissible, individuals may request deletion of their personal information, subject to any mandatory retention obligations.</p>
            <h3>Your Rights</h3>
            <p>Depending on your jurisdiction and applicable law, you may have certain rights regarding your personal information, including the right to:</p>
            <ul><li>Request access to personal information we hold about you</li><li>Request correction of inaccurate or incomplete information</li><li>Request deletion of information, where legally permitted</li></ul>
            <p>Requests may be subject to identity verification and legal or ethical limitations.</p>
            <h3>Children&rsquo;s Information</h3>
            <p>Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children without appropriate legal authorization.</p>
            <h3>Third-Party Websites</h3>
            <p>Our Site may contain links to third-party websites. Zenmo Law is not responsible for the privacy practices, content, or security of such external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
            <h3>Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of the Site after changes are posted constitutes acceptance of the revised Privacy Policy.</p>
            <h3>Contact Information</h3>
            <p>If you have any questions regarding this Privacy Policy or our data practices, please contact us at:</p>
            <p>Email: <a href="mailto:contact@zenmolaw.com">contact@zenmolaw.com</a></p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
