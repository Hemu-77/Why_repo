import Link from "next/link";

export default function NewsletterFooter() {
    return (
      <footer className="bg-[#111] text-white mx-4 lg:my-10 rounded-2xl md:mx-20 -my-7">
        <div className="max-w-7xl mx-auto p-10 md:p-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mb-6">
                <span className="text-2xl">📩</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight mb-2 md:text-6xl">
                Keep up with the latest
              </h2>
              <p className="text-gray-400 text-sm">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
  
            {/* Right Side */}
            <div>
              <p className="text-m font-bold mb-3">Stay up to date</p>
              <form className="flex flex-col gap-2 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing you agree to our{" "}
                <a href="/footer/legal/privacypolicy" className="underline text-white" >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-8 gap-8 text-sm">
      <div>
        <h4 className="font-semibold mb-3">WHYMEDIA</h4>
        <p className="text-gray-500">Make your complicated</p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Kindernest</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/kindernest/payment">Payment</Link></li>
          <li><Link href="/footer/kindernest/card">Card</Link></li>
          <li><Link href="/footer/kindernest/pricing">Pricing</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Products</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/products/personal">Personal</Link></li>
          <li><Link href="/footer/products/business">Business</Link></li>
          <li><Link href="/footer/products/invoices">Invoices</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/footer/company/careers">Careers</Link></li>
          <li><Link href="/footer/company/presskit">Press Kit</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Developer</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/developer/document">API Documentation</Link></li>
          <li><Link href="/footer/developer/guide">Guide</Link></li>
          <li><Link href="/footer/developer/changelog">Change Log</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Community</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/community/referfriend">Refer a Friend</Link></li>
          <li><Link href="/footer/community/gift">Gift</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/support/help">Help</Link></li>
          <li><Link href="/footer/support/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Legal</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/footer/legal/privacypolicy">Privacy Policy</Link></li>
          <li><Link href="/footer/legal/termsofservices">Terms of Services</Link></li>
          <li><Link href="/footer/legal/cookies">Cookies</Link></li>
        </ul>
      </div>
    </div>
        </div>
      </footer>
    );
  }