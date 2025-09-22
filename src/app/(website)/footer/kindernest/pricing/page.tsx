import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function PricingPage() {
  return (
    <FooterPageLayout title="Pricing">
      <p>
        Our <span className="text-red-500 font-semibold">Pricing</span> is designed 
        to be flexible, transparent, and value-packed — so you only pay for what 
        truly helps your brand grow.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💡 Why Our Pricing Works</h3>
      <p>
        We don’t believe in one-size-fits-all. That’s why we offer multiple plans 
        tailored for creators, startups, and established businesses.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📦 Plans & Benefits</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Starter:</span> Perfect for individuals just getting started</li>
        <li><span className="text-red-500">Growth:</span> For small teams and businesses ready to scale</li>
        <li><span className="text-red-500">Pro:</span> Advanced features for enterprises and professionals</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">⚖️ Transparency Matters</h3>
      <p>
        No hidden costs, no surprise fees. What you see is what you get — 
        clear pricing that matches your needs.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Need a Custom Plan?</h3>
      <p>
        If your requirements don’t fit into our standard plans,{" "}
        <a href="/contact" className="text-red-500 underline">
          contact us
        </a>{" "}
        for a tailored package designed just for you.
      </p>
    </FooterPageLayout>
  );
}
