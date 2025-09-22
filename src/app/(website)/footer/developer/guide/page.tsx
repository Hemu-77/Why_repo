import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";


export default function GuidePage() {
  return (
    <FooterPageLayout title="Guide">
      <p>
        Welcome to the official <span className="text-red-500 font-semibold">Guide</span>. This resource is designed to help you get
        started quickly and master all the features to make your experience seamless.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Getting Started in 3 Simple Steps</h3>
      <p>
        Follow these quick steps to set up your account and start your journey.
      </p>
      <ul className="list-decimal pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Sign Up:</span> Create your account in minutes.</li>
        <li><span className="text-red-500">Onboard:</span> Follow our interactive tour to explore the dashboard.</li>
        <li><span className="text-red-500">Create Your First Project:</span> Jump right in and bring your ideas to life.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">✨ Core Features You'll Love</h3>
      <p>
        Here's a quick look at the main features that will help you succeed.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Dashboard:</span> Your central hub for an overview of all your activity.</li>
        <li><span className="text-red-500">Analytics:</span> Understand your performance with easy-to-read charts and data.</li>
        <li><span className="text-red-500">Collaboration:</span> Invite team members and work together seamlessly.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">💡 Tips for a Smooth Workflow</h3>
      <p>
        To get the most out of our platform, we've put together a few pro-tips for a more efficient workflow.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Use Shortcuts:</span> Speed up your tasks with our keyboard shortcuts.</li>
        <li><span className="text-red-500">Integrate with Tools:</span> Connect your favorite apps for a streamlined process.</li>
        <li><span className="text-red-500">Explore Templates:</span> Save time by using our pre-built templates for your projects.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Ready to Dive Deeper?</h3>
      <p>
        This guide is just the beginning. For more detailed instructions, tutorials,
        and support, check out our full resources.
      </p>
      <p className="mt-2">
        <a href="/faq" className="text-red-500 underline">Visit our FAQ Page</a>
      </p>
    </FooterPageLayout>
  );
}