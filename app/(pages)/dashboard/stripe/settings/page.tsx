'use client';

import {useEmbeddedComponentBorder} from '@/app/hooks/EmbeddedComponentBorderProvider';
import {DarkTheme, LightTheme} from '@/app/contexts/themes/ThemeConstants';
import Script from "next/script";
import Container from '@/app/components/Container';
import EmbeddedComponentContainer from '@/app/components/EmbeddedComponentContainer';
import React, { useState ,useMemo } from "react";
import { loadConnectAndInitialize } from "@stripe/connect-js/pure";
import {
  ConnectAccountManagement,
  ConnectNotificationBanner,
  ConnectComponentsProvider,
} from "@stripe/react-connect-js";
//import "./styles.css";

export default function accountsettings() {
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
 //const {enableBorder} = useEmbeddedComponentBorder();
  return (
    <>
    <div className="mt-6  grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    
    
    <Container>
        <h1 className="text-xl font-bold">Account Settings</h1>
            <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
                <ConnectAccountManagement />
            </ConnectComponentsProvider>
      </Container>
    </div>
      
    </>
  )
}