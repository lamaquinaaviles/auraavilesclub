import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Aura Avilés Club",
  description: "Aura Avilés Club",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        <main className="pt-28 md:pt-32">
          {children}
        </main>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQWBNPBZLK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SQWBNPBZLK');
          `}
        </Script>
      </body>
    </html>
  );
}