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
    default: "MeshulamDev – Backend, Real-Time & Automation Systems",
    template: "%s | MeshulamDev",
  },
  description:
    "I build real-world backend, real-time and automation systems with end-to-end ownership. APIs, WebSockets, cloud infrastructure and production-ready solutions.",
  metadataBase: new URL("https://meshulam-devs-site.vercel.app"), // או הדומיין שלך
  openGraph: {
    title: "MeshulamDev – Real-World Software Systems",
    description:
      "Backend, real-time and automation systems with end-to-end ownership. APIs, WebSockets, cloud and production-ready delivery.",
    url: "https://meshulam-devs-site.vercel.app",
    siteName: "MeshulamDev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MeshulamDev",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshulamDev – Real-World Software Systems",
    description:
      "Backend, real-time and automation systems with end-to-end ownership.",
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
