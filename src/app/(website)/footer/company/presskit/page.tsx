import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function PressKitPage() {
  return (
    <FooterPageLayout title="Press Kit">
      <p>
        Welcome to the official <span className="text-red-500 font-semibold">Press Kit</span> for Your Company Name.
        This page is a resource for journalists, bloggers, and media professionals
        to easily access company information and brand assets.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📖 Our Story & Mission</h3>
      <p>
        Founded in [Year], Your Company Name is a leading provider of [Product/Service].
        Our mission is to [Mission Statement]. We are dedicated to [Company&apos;s core mission].
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📊 Key Facts at a Glance</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Founded:</span> [Month, Year]</li>
        <li><span className="text-red-500">Headquarters:</span> [City, State]</li>
        <li><span className="text-red-500">Founders:</span> [Founder Names]</li>
        <li><span className="text-red-500">Number of Employees:</span> [Number] (approx.)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎨 Brand Assets</h3>
      <p>
        Download our official logos, product mockups, and headshots for use in your
        publications. Please follow our brand guidelines for proper usage.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Logo Pack:</span> Includes our primary logo in various formats (.svg, .png). <a href="#" className="underline">Download Here</a>. </li>
        <li><span className="text-red-500">Product Images:</span> High-resolution product shots. <a href="#" className="underline">Download Here</a>.</li>
        <li><span className="text-red-500">Founder Headshots:</span> Professional photos of our key team members. <a href="#" className="underline">Download Here</a>.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📰 Recent News & Coverage</h3>
      <p>
        Catch up on the latest news and features about us.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>
          <a href="#" className="text-red-500 underline">
            [Title of News Article]
          </a>{" "}
          - [Source, Date]
        </li>
        <li>
          <a href="#" className="text-red-500 underline">
            [Title of Press Release]
          </a>{" "}
          - [Date]
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📞 Media Inquiries</h3>
      <p>
        For interviews, comments, or any specific media requests, please contact
        our PR team directly at{" "}
        <a href="mailto:press@yourcompany.com" className="text-red-500 underline">
          press@yourcompany.com
        </a>.
      </p>
    </FooterPageLayout>
  );
}