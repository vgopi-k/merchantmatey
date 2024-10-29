"use client"

//import { userOrderExists } from "@/app/actions/orders"
import { Button } from "@/app/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/buy/card"
//import { formatCurrency } from "@/lib/formatters"
import {
  Elements,
  LinkAuthenticationElement,
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Image from "next/image"
import { FormEvent, useState } from "react"

type CheckoutFormProps = {
  
  clientSecret: string
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string, {
    stripeAccount: process.env.NEXT_PUBLIC_STRIPE_CONNECTED_ACCOUNT_ID
  }
)

export function CheckoutForm({clientSecret }: CheckoutFormProps) {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form />
      </Elements>
    </div>
  )
}

function Form(){
 
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [email, setEmail] = useState<string>()
  

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (stripe == null || elements == null || email == null) return

    setIsLoading(true)

    /*const orderExists = await userOrderExists(email, productId)

    if (orderExists) {
      setErrorMessage(
        "You have already purchased this product. Try downloading it from the My Orders page"
      )
      setIsLoading(false)
      return
    }*/

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message)
        } else {
          setErrorMessage("An unknown error occurred")
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
        <div className="mt-4">
            <LinkAuthenticationElement
              onChange={e => setEmail(e.value.email)}
            />
          </div>
          <div>
          <AddressElement
              options={{
                mode: "shipping",
                fields: { phone: "always" },
                validation: { phone: { required: "auto" } },
              }}
			    />
          </div>
          <PaymentElement />
          
          
        </CardContent>
        <CardFooter>
        
          <Button
            
            
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading
              ? "Purchasing..."
              : `Pay`}
          </Button>
        
        </CardFooter>
      </Card>
    </form>
  )
}