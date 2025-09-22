import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <FooterPageLayout title="Privacy Policy">
      <p className="italic text-gray-400 border-l-4 border-red-500 pl-4 py-2 my-6">
        <span className="font-bold">Disclaimer:</span> This is a template for a Privacy Policy and should not be considered legal advice. You should consult with a legal professional to create a policy that is tailored to your specific business and complies with all applicable laws and regulations (such as GDPR and CCPA).
      </p>

      <p>
        Your privacy is important to us. This <span className="text-red-500 font-semibold">Privacy Policy</span> explains how [Your Company Name]
        ("we," "us," or "our") collects, uses, and discloses information about you when you
        use our website and services.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
      
      <h4 className="font-semibold mt-4">Information You Provide to Us</h4>
      <p className="text-gray-300">
        We collect information you provide directly to us when you create an account,
        subscribe to our newsletter, make a purchase, or contact us. This may include your
        name, email address, payment information, and any other information you choose
        to provide.
      </p>
      
      <h4 className="font-semibold mt-4">Information We Collect Automatically</h4>
      <p className="text-gray-300">
        When you use our services, we may automatically collect certain information about
        your device and your usage. This includes your IP address, browser type, operating
        system, pages visited, and the dates and times of your visits.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
      <p>
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500 font-semibold">Provide and improve our services:</span> To operate, maintain, and enhance our platform.</li>
        <li><span className="text-red-500 font-semibold">Communicate with you:</span> To send you updates, promotional materials, and support messages.</li>
        <li><span className="text-red-500 font-semibold">Process transactions:</span> To manage your purchases and subscriptions.</li>
        <li><span className="text-red-500 font-semibold">Ensure security:</span> To protect against fraudulent or unauthorized activity.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. How We Share Your Information</h3>
      <p>
        We do not sell or rent your personal information to third parties. We may share your
        information with third-party service providers who perform services on our behalf,
        such as payment processing and data analysis, under strict confidentiality agreements.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Your Data Rights</h3>
      <p>
        Depending on your location, you may have the right to access, correct, or
        delete your personal information. To exercise these rights, please contact us
        using the information provided below.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any
        changes by posting the new policy on this page and updating the "Effective Date"
        at the top.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <p className="mt-2">
        <a href="mailto:privacy@yourcompany.com" className="text-red-500 underline">
          privacy@yourcompany.com
        </a>
      </p>
    </FooterPageLayout>
  );
}