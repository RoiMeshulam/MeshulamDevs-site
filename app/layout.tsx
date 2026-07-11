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
  title: {
    default: "Roi Meshulam – Software Engineer",
    template: "%s | Roi Meshulam",
  },
  description:
    "Software engineer building real-time, backend and AI-integrated automation systems. Node.js, React, React Native, event-driven architecture.",
  metadataBase: new URL("https://meshulam-devs-site.vercel.app"),
  openGraph: {
    title: "Roi Meshulam – Software Engineer",
    description:
      "Real-time, backend and AI-integrated automation systems. Node.js, React, React Native, event-driven architecture.",
    url: "https://meshulam-devs-site.vercel.app",
    siteName: "Roi Meshulam",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Roi Meshulam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roi Meshulam – Software Engineer",
    description:
      "Real-time, backend and AI-integrated automation systems.",
    images: ["/og.png"],
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
