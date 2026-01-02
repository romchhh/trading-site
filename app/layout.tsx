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
  title: "AI.BOOST - Ваш ключ до фінансового успіху",
  description: "Відстежуйте ринки з нашими інноваційними інструментами та торговими сигналами. Професійна платформа для успішного трейдингу.",
  keywords: "трейдинг, торгові сигнали, фінанси, інвестиції, бінарні опціони",
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
