import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Barreto | Backend Developer & Integrações",
  description: "Desenvolvedor backend freelancer em Lisboa. APIs REST, integrações de sistemas, webhooks, bots e automações. Node.js, Python, MongoDB.",
  keywords: ["backend developer", "freelancer", "Node.js", "Python", "API", "integrações", "Lisboa", "Portugal", "webhooks", "automações"],
  authors: [{ name: "Gabriel Barreto" }],
  creator: "Gabriel Barreto",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://gabrielbarreto.vercel.app",
    siteName: "Gabriel Barreto",
    title: "Gabriel Barreto | Backend Developer & Integrações",
    description: "APIs, integrações de sistemas e automações para o seu negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Barreto | Backend Developer",
    description: "APIs, integrações e automações",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-100`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
