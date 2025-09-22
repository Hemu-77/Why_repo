import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";

export default function GiftPage() {
  return (
    <FooterPageLayout title="Gift">
      <p>
        Give the gift of creativity, productivity, or learning. Our gifted
        subscriptions are the perfect way to support a friend, family member,
        or colleague who wants to bring their ideas to life.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎁 Why It's the Perfect Present</h3>
      <p>
        Searching for a thoughtful and practical gift? Look no further.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500 font-semibold">A Gift of Growth:</span> Give them the tools they need to achieve their goals.</li>
        <li><span className="text-red-500 font-semibold">Instant Delivery:</span> The gift is sent directly to their inbox, making it a great last-minute gift.</li>
        <li><span className="text-red-500 font-semibold">No Expiration:</span> They can activate the gift whenever they're ready.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛍️ How to Give a Gift</h3>
      <p>
        It only takes a few minutes to make someone's day.
      </p>
      <ul className="list-decimal pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500 font-semibold">Select a Plan:</span> Choose a subscription plan or a specific gift amount.</li>
        <li><span className="text-red-500 font-semibold">Enter Details:</span> Provide the recipient's email and a personal message.</li>
        <li><span className="text-red-500 font-semibold">They Redeem:</span> They'll receive an email with instructions on how to activate their gift.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Give the Gift of Creativity Today</h3>
      <p>
        Ready to make an impact? Give a gift that truly matters.{" "}
        <a href="/shop-gifts" className="text-red-500 underline">
          Shop Gift Cards
        </a>
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Gift FAQs</h3>
      <p>
        Have questions about the process? We have answers.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li><span className="text-red-500 font-semibold">How is the gift delivered?</span> The gift card is sent via email to the recipient with a unique redemption code.</li>
        <li><span className="text-red-500 font-semibold">Can they choose a different plan?</span> Yes, if they don't want the gifted plan, the amount can be applied as a credit toward any other plan.</li>
      </ul>
    </FooterPageLayout>
  );
}