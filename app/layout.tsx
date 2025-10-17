import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Labubu Grip - Snap Your Labubu, Share the Love",
  description:
    "The first-ever MagSafe accessory designed exclusively for Labubu enthusiasts. Keep your favorite companion close, wherever you go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Umami Analytics */}
        <script
          defer
          src="https://snapboo-analytics.vercel.app/script.js"
          data-website-id="bdd16d84-aeeb-40fc-b586-3082ca06ecc9"
          data-auto-track="true"
        />
        {/* UTM Parameter Tracking with Malicious Bot Filtering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  // Detect malicious bots (but keep good bots like Googlebot, Facebook, etc.)
                  function isMaliciousBot() {
                    var ua = navigator.userAgent.toLowerCase();
                    var maliciousPatterns = [
                      'curl/',
                      'wget/',
                      'python-requests',
                      'scrapy',
                      'axios/',
                      'node-fetch',
                      'go-http-client',
                      'apache-httpclient',
                      'nikto',
                      'sqlmap',
                      'masscan',
                      'nmap',
                      'headless',
                      'phantom',
                      'selenium',
                      'webdriver'
                    ];
                    
                    return maliciousPatterns.some(function(pattern) {
                      return ua.includes(pattern);
                    });
                  }
                  
                  window.addEventListener('load', function() {
                    // Skip tracking if malicious bot detected
                    if (isMaliciousBot()) {
                      return;
                    }
                    
                    var params = new URLSearchParams(window.location.search);
                    var utmData = {};
                    
                    // Capture UTM parameters
                    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function(param) {
                      var value = params.get(param);
                      if (value) {
                        utmData[param] = value;
                      }
                    });
                    
                    // Send to Umami if any UTM parameters exist
                    if (Object.keys(utmData).length > 0 && window.umami) {
                      window.umami.track('utm-visit', utmData);
                    }
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
