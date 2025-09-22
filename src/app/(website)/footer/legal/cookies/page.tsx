import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";


export default function CookiesPage() {
  return (
    <FooterPageLayout title="Cookies">
      <p className="italic text-gray-400 border-l-4 border-red-500 pl-4 py-2 my-6">
        <span className="font-bold">Disclaimer:</span> This is a template for a Cookie Policy and should not be considered legal advice. You should consult with a legal professional to ensure your policy is tailored to your specific business and complies with all applicable laws and regulations (e.g., GDPR, ePrivacy Directive).
      </p>

      <p>
        This <span className="text-red-500 font-semibold">Cookie Policy</span> explains what cookies are and how we use them on our website.
        We encourage you to read this policy to understand what type of cookies we use,
        the information we collect, and how we use that information.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h3>
      <p className="text-gray-300">
        Cookies are small text files that are stored on your device when you visit a website.
        They are widely used to make websites work more efficiently and to provide a
        better user experience. They can remember your preferences, keep you logged in,
        and provide anonymized tracking data to website owners.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h3>
      <p>
        We use cookies for several reasons, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>To enable core functionality and security of the website.</li>
        <li>To understand how you use our website, so we can improve it.</li>
        <li>To provide a personalized experience by remembering your preferences.</li>
        <li>To analyze the performance of our marketing campaigns.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies We Use</h3>
      
      <h4 className="font-semibold mt-4">Essential Cookies</h4>
      <p className="text-gray-300">
        These cookies are strictly necessary for the website to function. Without them,
        you wouldn&apos;t be able to log in or add items to your shopping cart.
        They do not collect any personal information for marketing purposes.
      </p>

      <h4 className="font-semibold mt-4">Performance & Analytics Cookies</h4>
      <p className="text-gray-300">
        These cookies help us understand how visitors interact with our website. The
        information is aggregated and anonymous, and is used to improve the website&apos;s
        performance and design.
      </p>

      <h4 className="font-semibold mt-4">Marketing & Advertising Cookies</h4>
      <p className="text-gray-300">
        These cookies are used to track your browsing habits and activity. They are
        used to display advertisements that are relevant to your interests and to measure
        the effectiveness of our advertising campaigns.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Your Choices</h3>
      <p>
        You can control and manage cookies in various ways. Most web browsers allow you
        to manage your cookie preferences through their settings. You may also be able
        to opt-out of certain types of cookies through a cookie consent banner on your
        first visit to the website.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h3>
      <p>
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <p className="mt-2">
        <a href="mailto:privacy@yourcompany.com" className="text-red-500 underline">
          privacy@yourcompany.com
        </a>
      </p>
    </FooterPageLayout>
  );
}