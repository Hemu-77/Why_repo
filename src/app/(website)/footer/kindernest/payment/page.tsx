import FooterPageLayout from "@/Components/FooterSection/FooterPageLayout";



export default function PaymentPage() {
  return (
    <FooterPageLayout title="Payment">
      <p>
        We’ve made payments <span className="text-red-500 font-semibold">simple, fast, and secure</span>.  
        Whether you’re a business, creator, or individual, our platform ensures 
        that your transactions are smooth and transparent.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💳 Accepted Payment Methods</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>All major credit & debit cards (Visa, Mastercard, RuPay, Amex)</li>
        <li>UPI (Google Pay, PhonePe, Paytm, BHIM)</li>
        <li>Net Banking across leading banks</li>
        <li>Wallets & Pay Later options</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🔒 Secure Transactions</h3>
      <p>
        Every payment is encrypted with industry-standard 
        <span className="text-red-500 font-semibold"> SSL security</span>.  
        We never store sensitive card details, ensuring that your 
        information stays safe at all times.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">🧾 Billing & Invoices</h3>
      <p>
        Once your payment is complete, an invoice is automatically generated 
        and sent to your registered email address. You can also 
        <span className="text-red-500"> download invoices anytime</span> from your account dashboard.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">❓ Need Help?</h3>
      <p>
        Facing an issue with payment?  
        <a href="/contact" className="text-red-500 underline">
          Contact our support team
        </a>{" "}
        and we’ll assist you immediately.
      </p>
    </FooterPageLayout>
  );
}

