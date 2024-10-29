'use client';

import * as React from 'react';
import {
    ConnectAccountOnboarding,
    ConnectComponentsProvider,
  } from "@stripe/react-connect-js";
import Container from '@/app/components/Container';
import { loadConnectAndInitialize } from "@stripe/connect-js/pure";
import { useState ,useMemo } from "react";
import EmbeddedComponentContainer from '@/app/components/EmbeddedComponentContainer';
import {useSession} from 'next-auth/react';
import {DarkTheme, LightTheme} from '@/app/contexts/themes/ThemeConstants';
//import EditAccountButton from '@/app/components/EditAccountButton';
//import {Link} from '@/components/link';

export default function Stripe() {
  
  //const businessName = session?.user.businessName;
  //const password = session?.user.password;

  //const canShowPassword = !session?.user.changedPassword;
  const [stripeConnectInstance] = useState(() => {
    const fetchClientSecret = async () => {
      // Fetch the AccountSession client secret
      const response = await fetch('/api/account_session', {
          method: 'POST'
        });
      if (!response.ok) {
        // Handle errors on the client side here
        const {error} = await response.json();
        console.log('An error occurred: ', error);
        return undefined;
      } else {
        const {client_secret: clientSecret} = await response.json();
        return clientSecret;
      }
    }
    return loadConnectAndInitialize({
        // This is your test publishable API key.
        publishableKey: `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`,
        fetchClientSecret: fetchClientSecret,
        appearance: {
          overlays: 'dialog',
          variables: LightTheme
        },
      })
    });

  return (
    <>
      <Container>
        <h1 className="text-xl font-bold">Onboarding Status</h1>
            <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
            <ConnectAccountOnboarding
          onExit={() => {
            console.log("The account has exited onboarding");
          }}
          // Optional: make sure to follow our policy instructions above
           fullTermsOfServiceUrl="{{URL}}"
           recipientTermsOfServiceUrl="{{URL}}"
           privacyPolicyUrl="{{URL}}"
           skipTermsOfServiceCollection={false}
           collectionOptions={{
             fields: 'eventually_due',
             futureRequirements: 'include',
           }}
           onStepChange={(stepChange) => {
             console.log(`User entered: ${stepChange.step}`);
           }}
        />
            </ConnectComponentsProvider>
      </Container>
    </>
  );
}
