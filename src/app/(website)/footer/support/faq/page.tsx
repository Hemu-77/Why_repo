import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function FAQPage() {
  return (
    <FooterPageLayout title="FAQ">
      <p>
        Got questions? We have answers. Check out our list of{" "}
        <span className="text-red-500 font-semibold">Frequently Asked Questions</span>{" "}
        to get the information you need quickly. If you can't find your answer here,
        feel free to{" "}
        <a href="/help" className="text-red-500 underline">
          contact our support team.
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💳 Account & Billing</h3>
      
      <h4 className="font-semibold mt-4">How do I update my payment information?</h4>
      <p className="text-gray-300">
        You can update your billing details anytime from the "Billing" section
        within your account settings.
      </p>

      <h4 className="font-semibold mt-4">Can I change my plan?</h4>
      <p className="text-gray-300">
        Yes, you can upgrade or downgrade your plan at any time. The changes
        will take effect at the start of your next billing cycle.
      </p>

      <h4 className="font-semibold mt-4">How do I cancel my subscription?</h4>
      <p className="text-gray-300">
        You can cancel your subscription from your account dashboard. Your plan will
        remain active until the end of your current billing period.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">⚙️ Product & Features</h3>
      
      <h4 className="font-semibold mt-4">Is there a free trial?</h4>
      <p className="text-gray-300">
        Yes, we offer a 14-day free trial on our Pro plan, no credit card required.
        This gives you full access to all features to see if our service is right for you.
      </p>

      <h4 className="font-semibold mt-4">What browsers are supported?</h4>
      <p className="text-gray-300">
        Our platform is optimized for modern browsers, including the latest versions
        of Chrome, Firefox, Safari, and Edge.
      </p>

      <h4 className="font-semibold mt-4">How do I get started with a new project?</h4>
      <p className="text-gray-300">
        After logging in, simply click the "New Project" button on your dashboard.
        You'll be guided through the setup process.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🔒 Security & Privacy</h3>
      
      <h4 className="font-semibold mt-4">Is my data secure?</h4>
      <p className="text-gray-300">
        Yes, we take data security very seriously. We use advanced encryption and
        follow industry best practices to ensure your data is safe and private.
      </p>

      <h4 className="font-semibold mt-4">What is your privacy policy?</h4>
      <p className="text-gray-300">
        You can read our full{" "}
        <a href="/privacy-policy" className="text-red-500 underline">
          Privacy Policy
        </a>{" "}
        for details on how we collect, use, and protect your information.
      </p>
    </FooterPageLayout>
  );
}