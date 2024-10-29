import { NextResponse, NextRequest } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
	const body = await req.json();
	const options = {
		amount: body.amount,
		currency: body.currency,
		automatic_payment_methods: {
			enabled: true,
		},
	};
	try {
		const paymentIntent = await stripe.paymentIntents.create(options);
		const lastResponse = paymentIntent.lastResponse;
		console.log(paymentIntent.lastResponse.req.method);
		const requestData = {
			requestId: lastResponse.requestId,
			statusCode: lastResponse.statusCode,
			apiVersion: lastResponse.apiVersion,
			method: lastResponse.req.method,
			path: lastResponse.req.path,
		};
		console.log(requestData);
		return NextResponse.json({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error: any) {
		console.log(error.message);
		throw error;
	}
}