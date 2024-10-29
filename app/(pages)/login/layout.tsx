//import { Navbar } from "@/app/components/Navbar";
import '@/app/global.css';
import { Inter } from "next/font/google";
export const metadata = {
  title: 'MerchantMatey',
  description: 'MerchantMatey Login Page',
}

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          
          <div>{children}</div>
          
          
      </body>
    </html>
  );
}
