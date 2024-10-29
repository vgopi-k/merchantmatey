import {type NextRequest} from 'next/server';
//import {getServerSession} from 'next-auth/next';
//import {authOptions} from '@/lib/auth';
import {stripe} from '@/app/lib/stripe'
import { fetchUserStripeAccountId } from '@/app/lib/data';
import { useSession } from "next-auth/react"


export async function POST(req: NextRequest) {
  try {
    

    /*const account = await stripe.accounts.retrieve(stripeAccountId);

    const isCustom =
      account?.controller?.stripe_dashboard?.type === 'none' &&
      account?.controller?.losses?.payments === 'application' &&
      account?.controller?.requirement_collection === 'application';

  */
     
     /* const { data: session } = useSession()
      if (session) {
        const email = {session}.session.user?.email}
        const stripeAccountId = await fetchUserStripeAccountId(email);
      }
    
    const stripeAccountId = await fetchUserStripeAccountId('user@nextemail.com');
    */
    const stripeAccountId = `${process.env.STRIPE_CONNECTED_ACCOUNT_ID}`
    console.log("stripe account ID : "+stripeAccountId)

    const accountSession = await stripe.accountSessions.create({
      account: stripeAccountId,
      components: {
        // Payments
        payments: {
          enabled: true,
          features: {
            refund_management: true,
            dispute_management: true,
            //external_account_collection: false,
          }
        },
        payouts: {
          enabled: true,
          features: {
            instant_payouts: true,
            standard_payouts: true,
            edit_payout_schedule: true,
            external_account_collection: true,
          },
        },
        // Connect
        account_management: {
          enabled: true,
          features: {external_account_collection: true},
        },
        account_onboarding: {
          enabled: true,
          features: {external_account_collection: true},
        },
        // @ts-ignore
        //payment_method_settings: {enabled: true},
        //documents: {enabled: true},
        notification_banner: {
          enabled: true,
          features: {external_account_collection: true},
        },
      },
    });

    return new Response(
      JSON.stringify({
        client_secret: accountSession.client_secret,
      }),
      {status: 200, headers: {'Content-Type': 'application/json'}}
    );
  } catch (error: any) {
    console.error(
      'An error occurred when calling the Stripe API to create an account session',
      error
    );
    return new Response(JSON.stringify({error: error.message}), {status: 500});
  }
}
