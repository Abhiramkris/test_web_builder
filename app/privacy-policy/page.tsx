import React from 'react';
import config from '../../data/config.json';
import NAVINDUSTRIAL from '../../components/nav-industrial';


export default function PrivacyPolicyPage() {
  const companyName = config.content.brand_name || "Testing 2";
  const email = config.content.email || "hello@company.com";
  const phone = config.content.phone || "";
  const domain = config.content.domain || ("www." + companyName.toLowerCase().replace(/\s+/g, '') + ".com");

  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-zinc-300 font-sans">
      <NAVINDUSTRIAL />
      
      <section className="flex-1 max-w-4xl mx-auto w-full px-8 py-32 md:py-48 space-y-16">
        <div className="space-y-6 border-b border-white/10 pb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: config.styles.font_family_heading }}>Privacy Policy</h1>
          <p className="font-bold tracking-widest uppercase text-xs opacity-60">Effective Date: 15/02/2026</p>
        </div>

        <div className="space-y-12 prose prose-invert max-w-none text-sm md:text-base leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>1. Introduction and Organizational Info</h2>
            <p>We, at <strong>{companyName}</strong>, are dedicated to serving our customers and contacts to the best of our abilities. Part of our commitment involves the responsible management of personal information collected through our website <strong>{domain}</strong>, and any related interactions. Our primary goals in processing this information include:</p>
            <ul className="list-disc pl-6 space-y-2 opacity-80 font-medium">
              <li>Enhancing the user experience on our platform by understanding customer needs and preferences.</li>
              <li>Providing timely support and responding to inquiries or service requests.</li>
              <li>Improving our products and services to meet the evolving demands of our users.</li>
              <li>Conducting necessary business operations, such as billing and account management.</li>
            </ul>
            <p>It is our policy to process personal information with the utmost respect for privacy and security. We adhere to all relevant regulations and guidelines to ensure that the data we handle is protected against unauthorized access, disclosure, alteration, and destruction. Our practices are designed to safeguard the confidentiality and integrity of your personal information, while enabling us to deliver the services you trust us with.</p>
            <p>We do not have a designated Data Protection Officer (DPO) but remain fully committed to addressing your privacy concerns. Should you have any questions or require further information about how we manage personal information, please feel free to contact us at <strong>{email}</strong> or <strong>{phone}</strong>.</p>
            <p>Your privacy is our priority. We are committed to processing your personal information transparently and with your safety in mind. This commitment extends to our collaboration with third-party services that may process personal information on our behalf, such as in the case of sending invoices. Rest assured, all activities are conducted in strict compliance with applicable privacy laws.</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>2. Scope and Application</h2>
            <p>Our privacy policy is designed to protect the personal information of all our stakeholders, including website visitors, registered users, and customers. Whether you are just browsing our website {domain}, using our services as a registered user, or engaging with us as a valued customer, we ensure that your personal data is processed with the highest standards of privacy and security. This policy outlines our practices and your rights related to personal information.</p>
          </div>

          {/* Section 3 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>3. Data Collection and Processing</h2>
            <p>Our commitment to transparency and data protection extends to how we collect and use your personal information. We gather personal data through various interactions, such as when you utilize our services or directly provide information to us.</p>
            <p>The following list details the types of personal information we may process:</p>
            <ul className="list-disc pl-6 space-y-2 opacity-80 font-medium">
              <li>First and last name</li>
              <li>National identification numbers</li>
              <li>Payment information (e.g., credit card number, bank details)</li>
              <li>Payment method and history</li>
              <li>IP-based approximate location</li>
              <li>Operating system and version</li>
              <li>Browser fingerprint</li>
            </ul>
            <p>Please note that we only process information that is essential for delivering our services or for enhancing user experience while complying with legal obligations.</p>
            <p>At <strong>{companyName}</strong>, we believe in using personal information responsibly and ethically. The data we collect serves multiple purposes, all aimed at enhancing the services we offer. Here are the key ways in which we use the personal information collected:</p>
            <ul className="list-disc pl-6 space-y-2 opacity-80 font-medium">
              <li>Authentication and security</li>
              <li>Communication efforts</li>
              <li>Payment processing</li>
              <li>Fraud prevention and risk management</li>
              <li>Customer support</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>4. Data Storage and Protection</h2>
            <h3 className="font-bold opacity-90 text-lg uppercase tracking-widest text-white">Data storage</h3>
            <p>Personal information is stored in secure servers located in the following locations: IN, US. For services that require international data transfer, we ensure that such transfers comply with all applicable laws and maintain data protection standards equivalent to those in our primary location.</p>
            <h3 className="font-bold opacity-90 text-lg uppercase tracking-widest mt-6 text-white">Data Protection Measures</h3>
            <p><strong>Encryption:</strong> To protect data during transfer and at rest, we employ robust encryption technologies.</p>
            <p><strong>Access control:</strong> Access to personal information is strictly limited to authorized personnel who have a legitimate business need to access the data. We enforce strict access controls and regularly review permissions.</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>5. Transparency and Control</h2>
            <p>We believe in transparency and providing you with control over your personal information. You will always be informed about any significant changes to our sharing practices, and where applicable, you will have the option to consent to such changes.</p>
            <p>Your trust is important to us, and we strive to ensure that your personal information is disclosed only in accordance with this policy and when there is a justified reason to do so. For any queries or concerns about how we share and disclose personal information, please reach out to us at <strong>{email}</strong> or <strong>{phone}</strong>.</p>
          </div>
          
           {/* Section 6 */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic" style={{ fontFamily: config.styles.font_family_heading }}>6. User Rights and Choices</h2>
            <p>At <strong>{companyName}</strong>, we recognize and respect your rights regarding your personal information, in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are committed to ensuring you can exercise your rights effectively. Below is an overview of your rights and how you can exercise them:</p>
            <ul className="list-disc pl-6 space-y-4 opacity-80 font-medium">
              <li><strong>Right of access (Art. 15 GDPR):</strong> You have the right to request access to the personal information we hold about you and to obtain information about how we process it.</li>
              <li><strong>Right to rectification (Art. 16 GDPR):</strong> If you believe that any personal information we hold about you is incorrect or incomplete, you have the right to request its correction.</li>
              <li><strong>Right to erasure (Art. 17 GDPR):</strong> You have the right to request the deletion of your personal information when it is no longer necessary.</li>
              <li><strong>Right to restriction of processing (Art. 18 GDPR):</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.</li>
              <li><strong>Right to data portability (Art. 20 GDPR):</strong> You have the right to receive your personal information in a structured format and to transmit those data to another controller.</li>
              <li><strong>Right to object (Art. 21 GDPR):</strong> You have the right to object to the processing of your personal information, under certain conditions.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <strong>{email}</strong> or <strong>{phone}</strong>.</p>
          </div>

          <div className="space-y-4 pt-16 border-t border-white/10">
            <p className="opacity-40 italic font-black uppercase text-[10px] tracking-widest text-center">This privacy policy was algorithmically generated for {companyName} and complies with global infrastructure standards.</p>
          </div>
        </div>
      </section>

      
    </main>
  );
}