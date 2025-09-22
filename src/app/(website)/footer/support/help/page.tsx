import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function HelpPage() {
  return (
    <FooterPageLayout title="Help">
      <p>
        If you have a question or an issue, you've come to the right place. Our goal
        is to get you the support you need as quickly as possible. You can find
        answers to common questions and get in touch with our team on this{" "}
        <span className="text-red-500 font-semibold">Help</span> page.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💡 Find Your Answer First</h3>
      <p>
        Most questions can be answered by exploring our self-service resources. We
        recommend checking these pages first, as they contain detailed guides and
        answers to the most common inquiries.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>
          <a href="/guide" className="text-red-500 underline">
            Product Guide
          </a>
          : A comprehensive guide on how to use all our features.
        </li>
        <li>
          <a href="/faq" className="text-red-500 underline">
            FAQ Page
          </a>
          : Quick answers to frequently asked questions.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📧 Still Need Help? Contact Us</h3>
      <p>
        If you can't find the answer you're looking for, our support team is ready to
        assist you. For the fastest response, please use the email below to send
        us your inquiry.
      </p>
      <p className="mt-2">
        <a
          href="mailto:support@yourcompany.com"
          className="text-red-500 underline"
        >
          support@yourcompany.com
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💬 Get Help from Our Community</h3>
      <p>
        Join our community of users to get help from your peers, share ideas, and
        see what others are building. It’s a great place to learn and connect!
      </p>
      <p className="mt-2">
        <a href="#" className="text-red-500 underline">
          Visit Our Community Forum
        </a>
      </p>
    </FooterPageLayout>
  );
}