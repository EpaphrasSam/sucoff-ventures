import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: {
    default: "Sucoff Ventures | Building Excellence Across Ghana",
    template: "%s | Sucoff Ventures",
  },
  description:
    "Sucoff Ventures is a leading Ghanaian construction company delivering roads, buildings, and civil engineering projects with quality, safety, and precision.",
  keywords: [
    "Sucoff Ventures",
    "construction",
    "road construction",
    "building construction",
    "civil engineering",
    "Ghana",
  ],
  openGraph: {
    title: "Sucoff Ventures | Building Excellence Across Ghana",
    description:
      "Leading construction company in Ghana delivering roads, buildings, and civil engineering with uncompromising quality and safety.",
    url: "https://sucoff.ventures/",
    siteName: "Sucoff Ventures",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Sucoff Ventures",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sucoff Ventures | Building Excellence Across Ghana",
    description:
      "Leading construction company in Ghana delivering roads, buildings, and civil engineering with uncompromising quality and safety.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
