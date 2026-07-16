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
  title: "Hubdar Hussain Hani | Full Stack Developer",
  description: "Portfolio of Hubdar Hussain Hani, Full Stack Developer specializing in Laravel, React.js, Shopify, and AI Integration.",
  metadataBase: new URL("https://hubdarhussain.com"), // Update to your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hubdar Hussain Hani | Full Stack Developer",
    description: "Portfolio of Hubdar Hussain Hani, Full Stack Developer specializing in Laravel, React.js, Shopify, and AI Integration.",
    url: "/",
    siteName: "Hubdar Hussain Hani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubdar Hussain Hani | Full Stack Developer",
    description: "Portfolio of Hubdar Hussain Hani, Full Stack Developer specializing in Laravel, React.js, Shopify, and AI Integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hubdar Hussain Hani",
              jobTitle: "Full Stack Developer",
              url: "https://hubdarhussain.com",
              sameAs: [
                "https://www.linkedin.com/in/hubdar-hussain-1115352b7/",
                "https://github.com/Hani-5110"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
