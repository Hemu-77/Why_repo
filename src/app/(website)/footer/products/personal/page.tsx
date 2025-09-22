import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function PersonalPage() {
  return (
    <FooterPageLayout title="Personal">
      <p>
        Our <span className="text-red-500 font-semibold">Personal</span> plan is
        designed for individuals, creators, and freelancers who need a powerful,
        yet simple, set of tools to bring their ideas to life.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Why It&apos;s Perfect for You</h3>
      <p>
        We believe everyone should have access to the best tools. This plan is
        designed for those just getting started, providing everything you need
        without the complexity of a team or enterprise-level solution.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✨ What&apos;s Included</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Core Tools:</span> Access to all essential features to get you started.</li>
        <li><span className="text-red-500">Community Access:</span> Connect with other users and share ideas.</li>
        <li><span className="text-red-500">Essential Support:</span> Get help when you need it from our dedicated support team.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📈 Grow with Us</h3>
      <p>
        The Personal plan is a stepping stone. As your projects grow and your
        needs evolve, you can easily upgrade to our Growth or Pro plans
        with no hassle. We&apos;re here to support your journey, every step of the way.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ Ready to Start?</h3>
      <p>
        Join thousands of creators who are already building amazing things.{" "}
        <a href="/signup" className="text-red-500 underline">
          Start your journey now
        </a>{" "}
        and see your ideas come to life.
      </p>
    </FooterPageLayout>
  );
}