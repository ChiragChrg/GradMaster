import type { Metadata, Viewport } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Provider from "@/providers/Provider";

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: "normal"
    },
    {
      path: '../assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: "normal"
    },
    {
      path: '../assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: "normal"
    }
  ],
  display: 'swap',
  variable: "--Poppins"
})

const title = "GradMaster | University Management System"
const description = "GradMaster is an all-in-one university management software designed to streamline academic administration. From student enrollment to faculty management and course scheduling, GradMaster enhances efficiency and improves the educational experience."

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["GradMaster", "gradmaster", "university", "management", "system", "chiragchrg", "chirag", "chrgchirag"],
  authors: [{ name: "ChiragChrg" }, { url: "https://chiragchrg.netlify.app/" }],
  creator: "ChiragChrg",
  metadataBase: new URL("https://gradmaster.vercel.app/"),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'TSsuy8j81zZ0Ge0aestKiwZUPydASWd9aANj-ITDack',
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/Icons/144.png',
    shortcut: '/favicon.svg',
    apple: '/Icons/192.png',
  },
  openGraph: {
    title: title,
    description: description,
    url: 'https://gradmaster.vercel.app/',
    siteName: 'GradMaster',
    images: [
      {
        url: '/Icons/192.png',
        width: 192,
        height: 192,
        alt: 'GradMaster Logo',
      },
      {
        url: '/Icons/temp_wide_screenshot.png',
        width: 768,
        height: 359,
        alt: 'GradMaster Mockup Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@chrgchirag',
    images: ['/Icons/192.png', '/Icons/temp_wide_screenshot.png'],
  },
}

export const viewport: Viewport = {
  themeColor: 'hsl(0 0% 100%)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider attribute="class" enableSystem storageKey="gradmaster-theme">
          {children}
        </Provider>
      </body>
    </html>
  );
}
