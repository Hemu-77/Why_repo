import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function InvoicesPage() {
  return (
    <FooterPageLayout title="Invoices">
      <p>
        Our <span className="text-red-500 font-semibold">Invoices</span> feature
        makes billing simple, fast, and professional. Create stunning invoices
        in minutes and get paid on time, every time.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">⚡️ The Easiest Way to Get Paid</h3>
      <p>
        Say goodbye to manual tracking and complicated spreadsheets. Our
        intuitive invoicing tool automates your billing workflow, so you can focus
        on your work instead of paperwork.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ Powerful Features for Your Business</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Customizable Templates:</span> Create professional invoices that match your brand.</li>
        <li><span className="text-red-500">Automated Reminders:</span> Send gentle reminders to clients when payments are due.</li>
        <li><span className="text-red-500">Secure Payments:</span> Allow clients to pay directly through a secure link.</li>
        <li><span className="text-red-500">Real-Time Tracking:</span> Know when an invoice has been viewed, paid, or is overdue.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🔒 Secure & Organized</h3>
      <p>
        All your invoices are securely stored and organized in one place, giving
        you a clear overview of your business finances at a glance. Manage clients
        and track payments with confidence.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Ready to Simplify Your Billing?</h3>
      <p>
        Start sending professional invoices today and get paid faster.{" "}
        <a href="/signup" className="text-red-500 underline">
          Get started now
        </a>{" "}
        or{" "}
        <a href="/contact" className="text-red-500 underline">
          book a demo
        </a>{" "}
        for a quick tour.
      </p>
    </FooterPageLayout>
  );
}