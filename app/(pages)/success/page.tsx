
import Image from "next/image"
import Img from "@/public/img/high_growth_handbook.png"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}) {
  
    const paymentIntent = await stripe.paymentIntents.retrieve(
            searchParams.payment_intent,
        {
            stripeAccount: process.env.STRIPE_CONNECTED_ACCOUNT_ID
        }
     )
    

  const isSuccess = paymentIntent.status === "succeeded" || "pending"

  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <h1 className="text-2xl font-bold">
        {isSuccess ? "Your payment is successful!" : "Error!"}
      </h1>
      <div className="flex gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
        <Image
                        src={Img}
                        alt="An image of the book"
                        //fill={true}
                        style={{ objectFit: "contain" }}
                        width="768"
                        height="1200"
                        //className="w-8"
                    />
        </div>
      </div>
    </div>
  )
}