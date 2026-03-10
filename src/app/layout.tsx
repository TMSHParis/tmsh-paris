import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMSH Paris | Agence de Communication & Content Marketing",
  description:
    "TMSH Paris, agence de communication avec 21 années d'expérience. Nous concevons et produisons tous vos contenus digitaux pour atteindre vos objectifs stratégiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
