import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Barreto — Backend Developer",
  description:
    "Desenvolvedor backend especializado em APIs, integrações e arquiteturas escaláveis. Node.js, Python, TypeScript. Lisboa, Portugal.",
  keywords: [
    "desenvolvedor backend",
    "Node.js",
    "Python",
    "TypeScript",
    "APIs",
    "integrações",
    "freelancer",
    "Portugal",
  ],
  authors: [{ name: "Gabriel Barreto" }],
  openGraph: {
    title: "Gabriel Barreto — Backend Developer",
    description:
      "APIs, integrações e arquiteturas escaláveis. Do zero à produção.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Barreto — Backend Developer",
    description:
      "APIs, integrações e arquiteturas escaláveis. Do zero à produção.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable} antialiased`}>
      <body
        className="min-h-screen"
        style={{ backgroundColor: "#060606", color: "#e8e8e8" }}
      >
        {children}
      </body>
    </html>
  );
}
