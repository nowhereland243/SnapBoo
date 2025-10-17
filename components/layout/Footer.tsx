import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4"
              style={{
                fontFamily: "'Helvetica Neue', 'Helvetica', Arial, sans-serif",
                fontWeight: 700,
                fontStretch: "condensed",
              }}
            >
              SnapBoo
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Snap Your Labubu, Share the Love.
            </p>
            <p className="text-xs text-gray-400">
              A fan-made creation for Labubu enthusiasts worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product/labubu-grip"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Pre-Order Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span>📦</span>
                <span>Limited to 100 units</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🚚</span>
                <span>Ships in 30 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🇺🇸</span>
                <span>Free US shipping</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💳</span>
                <span>Secure payment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
            <p>© {new Date().getFullYear()} SnapBoo. Fan-made with ❤️</p>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
              <p>Not affiliated with Pop Mart or Labubu™</p>
              <a
                href="https://www.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-xs">Powered by</span>
                <span className="font-semibold text-sm">Shopify</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
