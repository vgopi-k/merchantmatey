import { notFound } from "next/navigation"
import Stripe from "stripe"
import { CheckoutForm } from "@/app/components/buy/CheckoutForm"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function PurchasePage () {

  const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: "AUD",
        automatic_payment_methods: {
            enabled: true
        }
    },
    {
        stripeAccount: process.env.STRIPE_CONNECTED_ACCOUNT_ID
    }
  )

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent")
  }

  return (
    <CheckoutForm
      clientSecret={paymentIntent.client_secret}
    />
  )
}