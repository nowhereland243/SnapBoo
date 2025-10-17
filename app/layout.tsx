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
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
