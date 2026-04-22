import type { Metadata } from "next";
import { Playfair_Display, Lora, Dancing_Script } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";
import MusicPlayer from "@/components/MusicPlayer";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-nmp-nha.vercel.app'), // THAY BẰNG LINK THẬT CỦA BẠN
  title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} — Wedding`,
  description: "Chúng mình mong được đón tiếp bạn trong ngày trọng đại.",
  openGraph: {
    title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} — Wedding Invitation`,
    description: "Chúng mình mong được đón tiếp bạn trong ngày trọng đại.",
    siteName: 'Wedding Invitation',
    images: [
      {
        url: '/openGraph.jpeg',
        width: 1200,
        height: 1800,
        alt: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} Wedding`,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${weddingConfig.groom.name} & ${weddingConfig.bride.name} — Wedding`,
    description: "Chúng mình mong được đón tiếp bạn trong ngày trọng đại.",
    images: ['/openGraph.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${playfair.variable} ${lora.variable} ${dancingScript.variable}`}>
      <body className="antialiased">
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
