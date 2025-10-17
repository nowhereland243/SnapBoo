import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Policy | SnapBoo",
  description: "Terms of service and privacy policy for SnapBoo pre-orders",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Terms & Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* Terms of Service */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-pink-500">
                  Terms of Service
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  1. Pre-Order Agreement
                </h3>
                <p className="text-gray-700 mb-4">
                  By placing a pre-order for SnapBoo, you agree to the following
                  terms:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>This is a pre-order for a limited batch of 100 units</li>
                  <li>Expected shipping time is 30 days from order date</li>
                  <li>All sales are final for pre-orders</li>
                  <li>
                    We reserve the right to extend the manufacturing timeline if
                    needed
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  2. Product Disclaimer
                </h3>
                <p className="text-gray-700 mb-4">
                  SnapBoo is a fan-made product and is not affiliated with,
                  endorsed by, or sponsored by Pop Mart or Labubu™. All
                  trademarks belong to their respective owners.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  3. Shipping & Delivery
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Free shipping within the United States</li>
                  <li>International shipping rates calculated at checkout</li>
                  <li>
                    You will receive tracking information once your order ships
                  </li>
                  <li>
                    We are not responsible for customs fees or import taxes
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  4. Return & Refund Policy
                </h3>
                <p className="text-gray-700 mb-4">
                  Due to the limited nature of this pre-order:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>All sales are final</li>
                  <li>
                    We will replace defective items within 30 days of delivery
                  </li>
                  <li>
                    Refunds may be issued if we are unable to fulfill your order
                  </li>
                  <li>
                    Cancellations must be requested within 24 hours of ordering
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  5. Contact
                </h3>
                <p className="text-gray-700 mb-4">
                  For questions or concerns, please contact us through our
                  Shopify store.
                </p>
              </section>

              {/* Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-pink-500">
                  Privacy Policy
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  1. Information We Collect
                </h3>
                <p className="text-gray-700 mb-4">
                  When you place an order, we collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Name and shipping address</li>
                  <li>Email address for order confirmation and updates</li>
                  <li>Payment information (processed securely by Shopify)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  2. How We Use Your Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Process and fulfill your order</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to customer service inquiries</li>
                  <li>Improve our product and service</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  3. Data Security
                </h3>
                <p className="text-gray-700 mb-4">
                  All payment processing is handled securely by Shopify. We do
                  not store credit card information on our servers. Your
                  personal data is encrypted and stored securely in compliance
                  with industry standards.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  4. Third-Party Services
                </h3>
                <p className="text-gray-700 mb-4">
                  We use the following third-party services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Shopify:</strong> E-commerce platform and payment
                    processing
                  </li>
                  <li>
                    <strong>Shipping carriers:</strong> To deliver your order
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  These services have their own privacy policies and we
                  encourage you to review them.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  5. Your Rights
                </h3>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>
                    Request deletion of your data (after order fulfillment)
                  </li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  6. Updates to This Policy
                </h3>
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy from time to time. The
                  latest version will always be available on this page with the
                  date of last update.
                </p>
              </section>

              {/* Additional Notice */}
              <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      First-Time Creator Notice
                    </h3>
                    <p className="text-gray-700 text-sm">
                      This is my first time creating and selling a product. I'm
                      doing my best to be transparent and fair. If you have any
                      questions or concerns, please don't hesitate to reach out.
                      I'm learning and appreciate your patience and support. 💜
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
