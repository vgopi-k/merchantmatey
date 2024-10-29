import { Container } from "@/app/components/HomeContainer";
import Image from "next/image"
import Img from "@/public/img/high_growth_handbook.png"
import { benefitOne, benefitTwo } from "@/app/components/data";
import { CheckoutForm } from '@/app/components/buy/CheckoutForm';
import Stripe from "stripe"
import {product} from '@/app/lib/placeholder-data'




    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

    export default async function PurchasePage () {
    
      const paymentIntent = await stripe.paymentIntents.create({
            amount: product.amountInCents,
            currency: product.currency,
            automatic_payment_methods: {
                enabled: true
            },
        },
        {
            stripeAccount: process.env.STRIPE_CONNECTED_ACCOUNT_ID
        }
      )
    
      if (paymentIntent.client_secret == null) {
        throw Error("Stripe failed to create payment intent")
      }

  return (
    <Container>
    <div className="flex flex-row dark:text-black">
      
      <div className="w-1/2 p-4 border-r-2">
            <div className="max-w-xs m-auto text-mdtext-gray-600">
                <h2 className="text-lg text-center font-semibold">
                    {product.name}
                </h2>
                <p className="mt-2 text-xl text-center font-medium leading-none tracking-tight text-foreground/70">${product.amountInCents / 100}</p>
                <div className="h-96 w-full relative my-8 drop-shadow-2xl">
                    <Image
                        src={product.image}
                        alt="An image of the Mug"
                        //fill={true}
                        style={{ objectFit: "contain" }}
                        width="1200"
                        height="1600"
                        //className="w-8"
                    />
                </div>
                
            </div>
            
	   </div>
       <div className="flex-auto p-4 border-r-2">
            <CheckoutForm clientSecret={paymentIntent.client_secret}/>
	   </div>
            
    </div>
    
    
    </Container>
  );
}
