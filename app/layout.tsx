import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/public-layout-files/Footer";
import Navbar from "../components/public-layout-files/Navbar";

export const metadata: Metadata = {
  title: "nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-col bg-gray-100">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
