import '@/app/global.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MerchantMatey",
  description: "MerchantMatey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          <Navbar />
          <div>{children}</div>
          <Footer />
          
      </body>
    </html>
  );
}
