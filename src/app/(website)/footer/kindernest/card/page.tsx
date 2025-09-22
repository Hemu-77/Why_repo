import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";


export default function CardPage() {
  return (
    <FooterPageLayout title="Card">
      <p>
        Your <span className="text-red-500 font-semibold">Card</span> is more than 
        just a digital identity — it’s your professional presence that you can 
        share instantly with anyone, anywhere.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎟 What is the Card?</h3>
      <p>
        Think of it as your <span className="text-red-500">personalized digital card</span>.  
        Whether you’re a creator, freelancer, or business professional, your card 
        makes it easy for others to connect with you, explore your work, and 
        engage with your brand.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✨ Features</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Customizable design to reflect your brand identity</li>
        <li>Shareable link for quick networking</li>
        <li>Supports profile photo, logo, and branding colors</li>
        <li>Works seamlessly across devices</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📲 Why Use the Card?</h3>
      <p>
        Instead of carrying physical business cards, go digital.  
        Share your <span className="text-red-500">Card</span> with a simple link or QR code 
        and leave a lasting impression.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Need Help?</h3>
      <p>
        Have questions about customizing your card?  
        <a href="/contact" className="text-red-500 underline">
          Reach out to our support team
        </a>{" "}
        and we’ll guide you.
      </p>
    </FooterPageLayout>
  );
}
