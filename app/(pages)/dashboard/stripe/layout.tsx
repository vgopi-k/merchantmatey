'use client';

//import {signOut} from 'next-auth/react';
import SubNav from '@/app/components/SubNav';
//import {Button} from '@/components/button';
//import {Avatar, AvatarFallback, AvatarImage} from '@/components/avatar';
import {useConnectJSContext} from '@/app/hooks/EmbeddedComponentProvider';

export default function StripeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const connectJSContext = useConnectJSContext();
  return (
    
    <>
      <header className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-row">
          <h1 className="text-3xl font-bold">Your account</h1>
        </div>
        <div className="mt-4 flex flex-row md:mt-0">
          <SubNav
            base="/"
            routes={[
              {path: '/dashboard/stripe', label: 'Onboarding'},
              {path: '/dashboard/stripe/payments', label: 'Payments'},
              {path: '/dashboard/stripe/payouts', label: 'Payouts'},
              {path: '/dashboard/stripe/settings', label: 'Settings'},
            ]}
          />
        </div>
      </header>
      {children}
    </>
    
  );
}
