import type { Metadata } from "next";
import { Roboto_Slab} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahor Dziomin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              try {
                const root = document.documentElement;
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (prefersDark ? 'dark' : 'light');

                root.classList.remove('dark', 'light');
                root.classList.add(theme);
              } catch (_) {}
            })();
            `
          }}
        />
      </head>
      <body
        className={`${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
