import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TurboClone",
    default: "TurboClone - Instantly Clone GitHub Repositories",
  },
  description:
    "Clone GitHub repositories instantly with a simple right-click. TurboClone streamlines your workflow on Mac with one-click repository cloning.",
  keywords: [
    "GitHub",
    "Git",
    "Repository",
    "Clone",
    "Mac",
    "MacOS",
    "Developer Tools",
    "Workflow",
  ],
  authors: [{ name: "Lorenzo Palaia" }],
  creator: "Lorenzo Palaia",
  publisher: "Lorenzo Palaia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://turboclone.lorenzopalaia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TurboClone - Instantly Clone GitHub Repositories",
    description:
      "Clone GitHub repositories instantly with a simple right-click. TurboClone streamlines your workflow on Mac.",
    url: "https://turboclone.lorenzopalaia.com",
    siteName: "TurboClone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboClone - Instantly Clone GitHub Repositories",
    description:
      "Clone GitHub repositories instantly with a simple right-click",
    creator: "@lorenzopalaia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verificaConGoogle",
    other: {
      me: ["mailto:info@lorenzopalaia.com", "https://lorenzopalaia.com"],
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TurboClone",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    description:
      "Clone GitHub repositories instantly with a simple right-click. TurboClone streamlines your workflow on Mac with one-click repository cloning.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Lorenzo Palaia",
    },
  };

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/assets/demo.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
