import type { Metadata, Viewport } from "next";
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
  title: "Tabernacle AR - Explore Biblical Furniture in Augmented Reality",
  description:
    "Experience the sacred furniture of the biblical tabernacle in augmented reality. View the Ark of the Covenant, Golden Lampstand, and more in your own space.",
  keywords: [
    "tabernacle",
    "ark of the covenant",
    "augmented reality",
    "AR",
    "bible",
    "exodus",
    "3D",
  ],
  authors: [{ name: "Tabernacle AR" }],
  openGraph: {
    title: "Tabernacle AR - Explore Biblical Furniture in Augmented Reality",
    description:
      "Experience the sacred furniture of the biblical tabernacle in augmented reality.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
