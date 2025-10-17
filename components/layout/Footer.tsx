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
                <svg className="h-4" viewBox="0 0 108 31" fill="currentColor">
                  <path d="M38.983 11.807c0-1.024.827-1.688 2.048-1.688 1.83 0 4.145.553 5.975 1.536V6.81c-2-1.024-3.977-1.425-5.975-1.425-4.884 0-8.17 2.56-8.17 6.825 0 6.656 9.163 5.59 9.163 8.462 0 1.118-.973 1.77-2.212 1.77-1.913 0-4.392-.79-6.337-1.85V25.5c2.212 1.024 4.474 1.5 6.337 1.5 4.967 0 8.5-2.462 8.5-6.826 0-7.18-9.33-5.92-9.33-8.367zm19.07-6.577c-1.88 0-3.32.89-4.024 1.512l-.277-1.176h-5.195V30.91l5.94-.89V20.72c.734.527 1.82 1.26 3.597 1.26 3.64 0 6.952-2.92 6.952-8.367 0-5.283-3.35-8.382-6.993-8.382zm-1.42 11.836c-1.2 0-1.912-.432-2.4-.965V12.15c.528-.592 1.28-1.024 2.4-1.024 1.83 0 3.1 2.054 3.1 4.97 0 2.957-1.24 4.97-3.1 4.97zm18.78-11.51c-3.68 0-5.975 3.167-5.975 8.367 0 5.53 2.563 8.382 6.583 8.382 1.912 0 3.35-.436 4.434-1.063v-4.465c-1.084.545-2.274.877-3.763.877-1.492 0-2.78-.516-2.94-2.31h9.947c.03-.31.054-.938.054-1.376 0-5.01-1.985-8.41-6.34-8.41zm-2.007 6.653c0-1.733 1.063-2.433 2.007-2.433.904 0 1.913.7 1.913 2.433h-3.92zm11.663-5.86l.318-1.512h5.266V5.36l-5.94.89v4.49h-2.274v4.76h2.273v5.817c0 4.402 2.435 5.986 5.713 5.986.885 0 1.77-.118 2.4-.355v-4.624c-.57.158-1.063.237-1.77.237-1.2 0-1.985-.475-1.985-2.103V15.5H96v-4.76h-4.932zM25.252 9.36c0-.64-.475-1.04-1.274-1.04H18.77v22.33h6.14V17.55c1.455-1.89 3.92-1.533 4.683-1.256V10.38c-.8-.28-3.155-.715-4.34 1.34V9.36zM11.2.1c-1.573 0-2.69.75-3.267 1.41L7.667.49H2.105v25.87l6.214-.925v-6.865c.605.436 1.49 1.048 2.85 1.048 2.883 0 5.508-2.312 5.508-8.572C16.677 5.588 14.513.1 11.2.1zm-1.483 15.62c-.996 0-1.587-.356-2-1.036V7.01c.442-.742 1.062-1.116 2-1.116 1.524 0 2.578 1.71 2.578 4.913 0 3.26-1.034 4.913-2.578 4.913z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
