
### Architecture

The web application is implemented as as full-stack application using React, Typescript, and Tailwind CSS

This demo is built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)


## Requirements to run this app in your local machine

1. You'll need a Stripe account with "Connect" configured. Note down the Stripe publishable and secret keys. You will need this to configure in .env file.

2. ### Database
    This project uses Postgress DB hosted hosted in Vercel. 
    Spin up a postgres DB in Vercel and note down
    Follow the steps as documented here -> https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-vercel-account 




### Getting started in your local machine [localhost]

1. Install dependencies using npm:

    ```
    npm install --force
    ```

2. copy the environment variables example file and set the values in the .env file

    cp .env.example .env

3. Update the .env file with Stripe Keys and Vercel Postgress DBs

4. Run the app:


    ```bash
    npm run dev

    ```
    Open [http://localhost:3000/] with your browser to see the Platform's Home page.


### Steps to access the MerchantMatey nextjs App [public]

1. Home Page - To access the landing page of MerchantMatey's website, please use [https://merchantmatey-new.vercel.app]

2. Login Page - To login with an existing user,  use one of the below credentials by accessing [https://merchantmatey-new.vercel.app/login]

        Username: `mike-01@test.com` Password: `Stripe1!`
        Username: `lisa-01@test.com` Password: `Stripe1!`

    Note: Login page currently doesn't redirect you automatically after the successful auth. I'm currently working on to fix this bug. Once you hit the login button, please manually access the admin page using the link [https://merchantmatey-new.vercel.app/dashboard] for time being.

3. Registration Page-

        To access the registration page, navigate to [http://merchantmatey-new.vercel.app/register]
        Note: Registration page still has issues with creation of a new Stripe account.

4. Admin Page - 

    To access the Merchant Dashboard page, navigate to [https://merchantmatey-new.vercel.app/dashboard]



### Steps to access the MerchantMatey nextjs App [localhost]

1. Home Page - To access the landing page of MerchantMatey's website, please use [http://localhost:3000]

2. Login Page - 

    Note: Since you are running this in your localhost, at the moment you can't login until registration page issue is fixed.

3. Registration Page-

        To access the registration page, navigate to [http://localhost:3000/register]
        Note: Registration page still has issues with creation of a new Stripe account.

4. Admin Page - 

    To access the Merchant Dashboard page, navigate to [http://localhost:3000/dashboard]



## Future work / To-do

* Fix the Registration Page functionality
* Fix the registration flow to create new Stripe connected account and update the details in Postgres DB.
* Read the logged in session details and fetch the Stripe account details dynamically to rended embedded components
* Enhance the buy page to 2-step checkout flow (currently it is in default page and doesn't reuse the existing PI). A new PI creates for every page refresh.
