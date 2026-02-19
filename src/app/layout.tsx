import type { Metadata } from "next";
import { Sora, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afformation × Sinar Mas | K-Commerce Partnership",
  description:
    "Your Infrastructure. Our Intelligence. One Platform. — K-브랜드 인도네시아 독점 파이프라인 파트너십 제안",
  openGraph: {
    title: "Afformation × Sinar Mas Partnership",
    description:
      "We install the OS that makes your infrastructure print money.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${sora.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-dark-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
