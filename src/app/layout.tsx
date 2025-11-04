import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Piotr Glejzer - Frontend Developer",
  description:
    "Frontend Developer z ponad 7-letnim doświadczeniem w React.js, Next.js i SSR. Tworzę skalowalne aplikacje webowe i optymalizuję wydajność stron.",
  metadataBase: new URL("https://pglejzer.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Piotr Glejzer - Frontend Developer",
    description:
      "Doświadczony inżynier webowy, specjalista od React/Next.js, SSR i optymalizacji wydajności.",
    url: "https://pglejzer.github.io",
    siteName: "Piotr Glejzer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piotr Glejzer - Frontend Developer",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Glejzer - Frontend Developer",
    description:
      "Frontend Developer z 7+ lat doświadczenia w React.js, Next.js i SSR",
    images: ["/og-image.png"],
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
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "SSR",
    "Web Performance",
    "Piotr Glejzer",
    "Warsaw",
    "Poland",
    "E-commerce",
    "Empik Group",
  ],
  authors: [
    {
      name: "Piotr Glejzer",
      url: "https://pglejzer.github.io",
    },
  ],
  creator: "Piotr Glejzer",
  publisher: "Piotr Glejzer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="canonical" href="https://pglejzer.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Piotr Glejzer",
              jobTitle: "Frontend Developer",
              url: "https://pglejzer.github.io",
              sameAs: [
                "https://www.linkedin.com/in/piotr-glejzer/",
                "https://github.com/pglejzer",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Empik Group",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Frontend Development",
                "Web Performance",
                "SSR",
                "Progressive Web Apps",
                "E-commerce",
                "Web Accessibility",
                "Mobile Development",
                "UI/UX Design",
                "Agile Methodologies",
                "Version Control",
                "Testing and Debugging",
                "API Integration",
                "Responsive Web Design",
                "Cross-Browser Compatibility",
                "Performance Optimization",
                "SEO Best Practices",
                "State Management",
                "Component-Based Architecture",
                "Continuous Integration/Continuous Deployment (CI/CD)",
                "Cloud Services",
                "Web Security",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Warsaw",
                addressCountry: "Poland",
              },
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          themes={["light", "dark", "glejzer"]}
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
