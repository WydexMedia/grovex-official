import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanced Meta Ads Course in Kerala  | advertising agency in Calicut",
  description:
    "Wydex Media is the best digital marketing agency in Calicut and a top advertising agency in Calicut, delivering creative, ROI-driven marketing solutions.",
  authors: [{ name: "Grovex", url: "https://www.grovexlearning.com " }],
  generator: "Next.js",
  applicationName: "Grovex",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Best digital marketing agency in Calicut",
    "Digital marketing Calicut",
    "Advertising agency Calicut",
    "Wydex Media",
    "Social media marketing Calicut",
    "SEO Calicut",
    "PPC Calicut",
  ],
  creator: "Grovex",
  publisher: "Grovex",
  metadataBase: new URL("https://www.grovexlearning.com"),
  alternates: {
    canonical: "https://www.grovexlearning.com",
  },
  openGraph: {
    title: "Grovex | Grovex",
    description:
      "We are Calicut's leading digital marketing and advertising agency offering SEO, PPC, social media marketing, and branding services.",
    url: "https://www.grovexlearning.com",
    siteName: "Grovex ",
    images: [
      {
        url: "wydex Clinets black/Grovex best digital marketing agency in calicut.webp", // Replace with real image
        width: 1200,
        height: 630,
        alt: "Grovex- Best Digital Course Providing institute in Calicut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grovex",
    description:
      "Top digital marketing and advertising agency in Calicut specializing in creative and ROI-driven strategies.",
    site: "@wydexmedia", // Replace with your real Twitter handle
    creator: "@wydexmedia",
    images: ["/wydex Clinets black/Grovex best digital marketing agency in calicut.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
