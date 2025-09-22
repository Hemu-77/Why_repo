import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function BusinessPage() {
  return (
    <FooterPageLayout title="Business">
      <p>
        Our <span className="text-red-500 font-semibold">Business</span> plan is
        the perfect solution for teams and growing companies that require
        powerful collaboration tools, advanced features, and dedicated support to
        scale their operations.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📈 Empower Your Team to Collaborate</h3>
      <p>
        This plan is designed to streamline your workflow and boost productivity.
        With shared dashboards, team accounts, and advanced analytics, you can
        align your entire team and make data-driven decisions to drive growth.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💼 What's Included for Businesses</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Team Accounts:</span> Easily grant access to multiple team members.</li>
        <li><span className="text-red-500">Advanced Analytics:</span> Unlock deeper insights into your data and user behavior.</li>
        <li><span className="text-red-500">Priority Support:</span> Get faster, dedicated responses from our support team.</li>
        <li><span className="text-red-500">Custom Integrations:</span> Connect with the tools your business already uses.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Scalability as You Grow</h3>
      <p>
        The Business plan provides the flexibility you need to grow without
        friction. Add or remove users, access more resources, and seamlessly upgrade
        to our Pro plan as your company's needs expand.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ Ready to Transform Your Workflow?</h3>
      <p>
        Start empowering your team with the tools they need to succeed.{" "}
        <a href="/signup" className="text-red-500 underline">
          Get started now
        </a>{" "}
        or{" "}
        <a href="/contact" className="text-red-500 underline">
          contact us
        </a>{" "}
        for a custom demo.
      </p>
    </FooterPageLayout>
  );
}