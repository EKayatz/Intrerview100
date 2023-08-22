### Interview100

[Interview100](https://bayer-coding-challenge.vercel.app/)
![alt logo (https://github.com/EKayatz/Intrerview100/blob/main/public/logo.jpeg)](https://bayer-coding-challenge.vercel.app/)

Interview100 is a Website where you can learn coding interview questions. You can also share your own experience and add own questions. You can edit your Profile and change your profile name, avatar and add your work, linkedIn and GitHub.

## Learn More

This project was created in the course of the BayerCodingCHallenge:

# Our Task

We had to create a Web application with a FrontEnd, BackEnd and working Database. We should also deploy it to the Web.

# What we did

After along discussion, we decided to do a Website where you can prepare for an Interview

# Planing

Our first step was to create a Wireframe for our application:
![alt home wireframe] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/homewireframe.jpeg)
![alt profile wireframe] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/profilewireframe.jpeg)
![alt question wireframe] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/questionwireframe.jpeg)
![alt create wireframe] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/createwireframe.jpeg)

After that we created a user journey:
![alt logo] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/userjourney.jpeg)

Further, we did the final Mockup for our application:
![alt home mockup] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/homemockup.jpeg)
![alt profile mockup] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/profilemockup.jpeg)
![alt question mockup] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/questionmockup.jpeg)
![alt create mockup] (https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/createmockup.jpeg)

# Implementation

We used [NextJS](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/) and [headlessUI](https://headlessui.com/) for styling and for BackEnd [Grafbase](https://grafbase.com/)

# Deploy

We deployed our app on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Run it localy

Create an Account for grafbase create a new Project and also for Google OAth provider.

Then you have to add a .env Files in root of the directory and also in grafbase Folder.

In there add:

```bash
NEXT_PUBLIC_SERVER_URL: …
NEXTAUTH_URL: …
NEXT_PUBLIC_GRAFBASE_API_URL: …
NEXT_PUBLIC_GRAFBASE_API_KEY: …
GOOGLE_CLIENT_ID: …
GOOGLE_CLIENT_SECRET: …
NEXTAUTH_SECRET: …

```

after that you add it:

```bash
npm install
npm run dev
npx grafbase dev

```
