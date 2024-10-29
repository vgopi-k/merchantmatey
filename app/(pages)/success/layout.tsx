import '@/app/global.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/app/components/buy/Navsuccess";  


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Book Store",
  description: "Your Book Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          <Navbar />
          <div>{children}</div>
          
      </body>

    </html>
  );
}
