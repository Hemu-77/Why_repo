export default function NewsletterFooter() {
    return (
      <footer className="bg-[#111] text-white">
        <div className="max-w-7xl mx-auto p-10 md:p-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mb-6">
                <span className="text-2xl">📩</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight mb-2">
                Keep up with the latest
              </h2>
              <p className="text-gray-400 text-sm">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
  
            {/* Right Side */}
            <div>
              <p className="text-sm mb-3">Stay up to date</p>
              <form className="flex gap-2">
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
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">WHYMEDIA</h4>
              <p className="text-gray-500">Make your complicated</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kindernest</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Payment</li>
                <li>Card</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Personal</li>
                <li>Business</li>
                <li>Invoices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Press Kit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Developer</h4>
              <ul className="space-y-2 text-gray-400">
                <li>API Documentation</li>
                <li>Guide</li>
                <li>Change Log</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Refer a Friend</li>
                <li>Gift</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  