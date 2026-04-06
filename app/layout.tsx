import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.conduitcompute.com"),
  title: "Conduit — AI Operating Partner",
  description: "Conduit embeds inside your business and builds AI systems that cut costs, accelerate revenue, and make your team more effective.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Conduit — AI Operating Partner",
    description: "Conduit embeds inside your business and builds AI systems that cut costs, accelerate revenue, and make your team more effective.",
    url: "https://www.conduitcompute.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
