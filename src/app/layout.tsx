import type { Metadata, Viewport } from "next";
import { generalSans } from "./fonts";
import "./globals.css";
import JsonLd from "./json-ld";

const BASE_URL = "https://feeble-frontend-task.vercel.app"; 

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Coup - iMessage Automation for Teams and AI Workflows.",
    template: "%s | Coup",
  },
  description:
    "Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.",
  keywords: [
    "iMessage automation",
    "Mac automation",
    "AI workflows",
    "team messaging",
    "AppleScript",
    "business messaging",
    "productivity tool",
    "Coup app",
  ],
  authors: [{ name: "Coup Team" }],
  creator: "Coup",
  publisher: "Coup",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Coup - iMessage Automation for Teams and AI Workflows",
    description:
      "Send iMessages directly from your phone number using AI workflows. Secure, fast, and designed for teams running on Mac.",
    siteName: "Coup",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Coup - iMessage Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coup - iMessage Automation for Teams and AI Workflows",
    description:
      "Automate iMessage for your team and AI workflows securely on your Mac.",
    images: ["/images/og-image.png"],
    creator: "@coup_app", 
  },
  icons: {
    icon: "./favicon.ico",
    apple: "/images/apple-icon.png", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${generalSans.className} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
