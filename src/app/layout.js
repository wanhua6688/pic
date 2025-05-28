import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import ClientWrapper from "../components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Policy Innovation Consortium (PIC)",
  description: "Building a trinity innovation cycle integrating policy-technology-industry to address Japan's core societal challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja-JP">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
