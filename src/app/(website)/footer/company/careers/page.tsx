import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function CareersPage() {
  return (
    <FooterPageLayout title="Careers">
      <p>
        Join a team that’s passionate about innovation and dedicated to
        making a real impact. At <span className="text-red-500 font-semibold">Your Company Name</span>,
        we're building the future, and we're looking for talented people to help us get there.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🌟 Our Mission & Culture</h3>
      <p>
        We believe in a collaborative, supportive, and inclusive environment
        where every voice is heard. We're a team of thinkers, doers, and problem-solvers
        who are passionate about learning and growing together.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🌱 Why You Should Work with Us</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Impactful Work:</span> A chance to solve challenging problems and see your work make a difference.</li>
        <li><span className="text-red-500">Growth Opportunities:</span> We invest in our people with professional development and clear career paths.</li>
        <li><span className="text-red-500">Flexible Work:</span> We offer flexible schedules and a supportive work-life balance.</li>
        <li><span className="text-red-500">Amazing Team:</span> Join a diverse group of talented and friendly individuals.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Current Opportunities</h3>
      <p>
        Explore our open positions and find the role that’s right for you. If your skills match our vision, we want to hear from you.
        <br />
        <span className="italic text-gray-400 mt-2">
          (Here you would list your open positions with links to apply.)
        </span>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Can't Find Your Role?</h3>
      <p>
        If you're interested in joining our team but don't see a role that fits your
        expertise, we’d still love to hear from you.{" "}
        <a href="/contact" className="text-red-500 underline">
          Send us your resume
        </a>{" "}
        and tell us what you’re passionate about.
      </p>
    </FooterPageLayout>
  );
}