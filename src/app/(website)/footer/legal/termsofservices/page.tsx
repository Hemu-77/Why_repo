import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function TermsOfServicesPage() {
  return (
    <FooterPageLayout title="Terms of Services">
      <p className="italic text-gray-400 border-l-4 border-red-500 pl-4 py-2 my-6">
        <span className="font-bold">Disclaimer:</span> This is a template for Terms of Services and should not be considered legal advice. You must consult with a legal professional to create a document that is tailored to your specific business and complies with all applicable laws and regulations.
      </p>

      <p>
        These <span className="text-red-500 font-semibold">Terms of Services</span> (&quot;Terms&quot;) govern your access to and use of the website, products, and services (&quot;Services&quot;) provided by [Your Company Name] (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our Services, you agree to be bound by these Terms.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h3>
      <p className="text-gray-300">
        By accessing and using our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you may not use our Services.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Your Account</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500 font-semibold">Eligibility:</span> You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent and warrant that you are of legal age.</li>
        <li><span className="text-red-500 font-semibold">Account Security:</span> You are responsible for safeguarding your account password and for any activities or actions under your account. We encourage you to use &quot;strong&quot; passwords and protect your login information.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Use of Service</h3>
      <p className="text-gray-300">
        You agree to use our Services for lawful purposes only and in a manner that does not infringe upon the rights of others. You are prohibited from using the Services to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Engage in any illegal or fraudulent activities.</li>
        <li>Transmit any material that is defamatory, obscene, or harmful.</li>
        <li>Interfere with or disrupt the integrity or performance of the Services.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h3>
      <p className="text-gray-300">
        All content and materials available on our website, including text, graphics, logos, and software, are the property of [Your Company Name] and are protected by intellectual property laws. You may not use, copy, or distribute any of our content without our express written permission.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. Disclaimers & Limitation of Liability</h3>
      <p className="text-gray-300">
        The Services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without any warranties of any kind. To the fullest extent permitted by law, [Your Company Name] disclaims all warranties, express or implied.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">6. Termination</h3>
      <p className="text-gray-300">
        We reserve the right to suspend or terminate your account and access to the Services at our sole discretion, without notice, for any reason, including a breach of these Terms.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">7. Governing Law</h3>
      <p className="text-gray-300">
        These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to the Terms</h3>
      <p className="text-gray-300">
        We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
      </p>
    </FooterPageLayout>
  );
}