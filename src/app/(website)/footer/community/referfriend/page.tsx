import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function ReferFriendPage() {
  return (
    <FooterPageLayout title="Refer a Friend">
      <p>
        Want to earn rewards for sharing something you love? With our <span className="text-red-500 font-semibold">Refer a Friend</span> program,
        you and your friends can both get great benefits. It&apos;s our way of saying
        thank you for spreading the word!
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🤝 How It Works</h3>
      <p>
        Getting started is easy. Just follow these simple steps to start earning rewards.
      </p>
      <ul className="list-decimal pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">Find Your Link:</span> Log into your account and copy your unique referral link from the dashboard.</li>
        <li><span className="text-red-500">Share with Friends:</span> Send your link to friends via email, social media, or text.</li>
        <li><span className="text-red-500">They Get a Reward:</span> When your friend signs up using your link, they&apos;ll automatically get a special welcome bonus.</li>
        <li><span className="text-red-500">You Get a Reward:</span> Once they complete their first purchase, we&apos;ll give you a reward as a thank you!</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎉 The Rewards</h3>
      <p>
        Here&apos;s what&apos;s in it for both of you.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500">For Your Friends:</span> They get a 15% discount on their first purchase.</li>
        <li><span className="text-red-500">For You:</span> You get 1 free month of service added to your subscription for every friend who signs up.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">➡️ Ready to Share?</h3>
      <p>
        Your unique referral link is waiting for you in your account dashboard.
        Just copy and share to start earning rewards today!
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Got Questions?</h3>
      <p>
        If you have any questions, please check our
        <a href="/faq" className="text-red-500 underline"> FAQ page </a>
        for more details or
        <a href="/contact" className="text-red-500 underline"> contact support.</a>
      </p>
    </FooterPageLayout>
  );
}