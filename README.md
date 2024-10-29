
### Architecture

The web application is implemented as as full-stack application using React, Typescript, and Material UI.

This demo is built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)


## Requirements

You'll need a Stripe account to manage the connected accounts's onboarding, payments and payouts:



### Getting started

Install dependencies using npm (or yarn):

```
yarn
```

Update your platform Stripe account's secret and public keys to the .env file.


Install MongoDB Community Edition. Refer to the [official documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/). Then, run MongoDB:

```
brew tap mongodb/brew && brew update
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

Run the app:


```bash
pnpm run dev

```
Open [http://localhost:3000/] with your browser to see the Platform's Home page.

### Database

This project uses Postgress DB hosted in Vercel. 

Spin up a postgres DB in Vercel and update the values in the .env file.

### 

To login with a existing user,  use one of the below credentials.

1. Username: `mike-01@test.com` Password: `Stripe1!`
2. Username: `lisa-01@test.com` Password: `Stripe1!`

To spin a new account, navigate to Open [http://localhost:3000/register]
Note: Registration page still has issues with creation of a new Stripe account.




## Future work / To-do
* Fix the Login/Logout functionality
* Fix the registration flow to create Stripe account and update the details in DB.
* Read the session details and fetch the Stripe account details of each user dynamically.
* Enhance the buy page to 2-step checkout flow (currently it is in default page and doesn't reuse the existing PI). A new PI creates for every page refresh.
