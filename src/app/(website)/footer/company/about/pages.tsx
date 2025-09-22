import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function AboutPage() {
  return (
    <FooterPageLayout title="About Us">
      <p>
        At <span className="text-red-500 font-semibold">[Your Company Name]</span>, 
        we’re not just another creative studio — we’re the reason your competitors panic.  
        From high-converting ads to studio-grade podcasts, we help brands capture attention, 
        build authority, and grow faster.
      </p>
      <p>
        Over the years, we’ve partnered with startups, creators, and enterprises to deliver 
        impactful campaigns that don’t just look good but actually convert.  
        We believe in storytelling backed by data — and that’s our edge.
      </p>
      <p>
        Whether you’re launching your first product or scaling to new markets, 
        we’ll craft the content that sets you apart.  
      </p>
    </FooterPageLayout>
  );
}
