import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebasNeue',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Refugio del lobo",
  description: "Website de refugio del lobo, un hotel boutique en la mejor zona de San Martin de los Andes.",
  icons: {
    icon: [
      {
        media:'(prefers-color-scheme: light)',
        url: 'assets/images/rdl-logo-black.svg',
        href: 'assets/images/rdl-logo-black.svg',
      },
      {
        media:'(prefers-color-scheme: dark)',
        url: 'assets/images/rdl-logo-white.svg',
        href: 'assets/images/rdl-logo-white.svg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
