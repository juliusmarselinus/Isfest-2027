import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISFEST 2027 | The Wild West Digital Frontier - UMN",
  description:
    "Portal resmi kompetisi Information Systems Festival (ISFEST) 2027 Universitas Multimedia Nusantara. Bertema Wild West Digital Frontier, ikuti kompetisi UI/UX, Data Science, Web Dev, Mobile Legends, dan Valorant.",
  keywords: [
    "ISFEST 2027",
    "ISFEST UMN",
    "Wild West Frontier",
    "Lomba Cowboy UMN",
    "UI/UX Competition",
    "Data Science Competition",
    "Valorant Tournament",
    "Mobile Legends Tournament",
  ],
  authors: [{ name: "Panitia ISFEST UMN 2027" }],
  icons: {
    icon: "/logo-isfest.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rye&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#190f08] text-[#fef3c7] relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
