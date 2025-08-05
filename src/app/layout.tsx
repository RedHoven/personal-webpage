import type { Metadata } from "next";
import { Roboto_Slab} from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahor Dziomin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <script src="/theme.js" />
      </head>
      <body
        className={`${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
