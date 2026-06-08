import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://healthydollars.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "healthydollars.wealthcareportal.com";
const SITE_BRAND = "Healthy Dollars";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Healthy Dollars Login, Portal Access & Customer Service Guide",
    template: "%s | Healthy Dollars",
  },
  keywords: [
    "Healthy Dollars",
    "healthy dollars login,"
    "benefits login",
    "employee benefits portal",
    "FSA login",
    "How to Access Healthy Dollars Through Employee Navigator",
    "Download the Healthy Dollars Claim Form PDF,"
    "How do I submit a claim to Healthy Dollars?,"
    "healthy dollars eligible expenses list",
    "healthy dollars app",
    "healthy dollars card balance check",
    "healthy dollars employee navigator login",
    "HSA login",
    "healthy dollars portal",
    "healthy dollars participant portal",
    "healthy dollars login wealthcare",
    "healthy dollars card balance login"
    "healthy dollars card balance check",
    "healthy dollars reimbursement form",
    "COBRA login",
    "account access",
    "health benefits",
    "dependent care",
    "reimbursement account",
    "secure login",
    "participant portal",
    "employer portal",
    "handshake authentication",
    "wellness benefits",
    "healthcare portal"
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Quickly access your Healthy Dollars participant portal, check your debit card balance, find the customer service phone number, or submit a claim online., and sign in securely through Healthy Dollars.`,

  authors: [{ name: "Healthy Dollars" }],
  creator: "Healthy Dollars",
  publisher: "Healthy Dollars",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Healthy Dollars Login, Portal Access & Customer Service Guide",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Healthy Dollars.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Healthy Dollars - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Healthy Dollars.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "Healthy Dollars sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your Healthy Dollars profile.",
  publisher: {
    "@type": "Organization",
    name: "Healthy Dollars",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
