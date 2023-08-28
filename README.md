# Interview100

<a href="https://bayer-coding-challenge.vercel.app/">
<img
  src="https://github.com/EKayatz/Intrerview100/blob/main/public/logo.jpeg"
  alt="Alt text"
  width="20%"
  style="display: inline-block; margin: 0 auto;"
  >
</a>

Welcome to Interview100, your go-to platform for mastering coding interview questions and enhancing your technical interview preparation. Whether you're a budding software engineer or an experienced developer aiming to sharpen your skills, Interview100 has you covered.

## About Interview100

**Prepare with Confidence**: Interview100 is designed to help you prepare for technical interviews with ease. Access a curated collection of coding interview questions covering a wide range of topics, including data structures, algorithms, system design, and more.

**Share Your Experience**: Share your own interview experiences and insights with the Interview100 community. Contribute your own questions and solutions to help fellow developers on their journey to success.

**Customize Your Profile**: Tailor your profile to showcase your skills and achievements. Update your profile name, avatar, and add links to your work, LinkedIn, and GitHub profiles. Build your personal brand and connect with like-minded professionals.

## Why Interview100?

- **Comprehensive Learning**: Dive deep into a diverse range of interview questions and gain a solid understanding of key concepts and problem-solving techniques.

- **Collaborative Community**: Join a vibrant community of developers, exchange knowledge, and learn from one another.

- **User-Friendly Interface**: Navigate Interview100 with ease, thanks to our user-friendly interface. Access questions, solutions, and your profile effortlessly.

- **Built with Modern Technologies**: Interview100 is powered by cutting-edge technologies, ensuring a smooth and responsive user experience.

## Get Started

Join Interview100 today and take your coding interview preparation to the next level. Whether you're just getting started or looking to fine-tune your skills, Interview100 is your trusted companion on your journey to success.

Visit [Interview100](https://bayer-coding-challenge.vercel.app/) and embark on your interview preparation adventure now!

## Project Overview

This project was created as part of the Bayer Coding Challenge.

### Our Task

We had to create a web application with a frontend, backend, and working database, and deploy it to the web.

### What We Did

After a long discussion, we decided to create a website to help you prepare for an interview.

#### Planning

Our first step was to create a wireframe for our application:

<a href="https://www.figma.com/file/jTnSRYsV1rtLALLRRsLFDr/Elias-Kayatz's-team-library?type=design&node-id=0%3A1&mode=design&t=U3wEXL3gQ85oSAks-1">
<img
  src="https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/wireframe.jpg"
  alt="Alt text"
  width="40%"
  style="display: inline-block; margin: 0 auto;"
  >
</a>

After that, we created a user journey:

<a href="">
<img
  src="https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/userjourney.jpg"
  alt="Alt text"
  width="40%"
  style="display: inline-block; margin: 0 auto;"
  >
</a>

Further, we did the final mockup for our application:

<a href="https://www.figma.com/file/jTnSRYsV1rtLALLRRsLFDr/Elias-Kayatz's-team-library?type=design&node-id=511%3A2&mode=design&t=U3wEXL3gQ85oSAks-1">
<img
  src="https://github.com/EKayatz/Intrerview100/blob/main/readmepictures/mockup.jpg"
  alt="Alt text"
  width="40%"
  style="display: inline-block; margin: 0 auto;"
  >
</a>

### Implementation

In the development of Interview100, we leveraged a stack of modern technologies and tools to deliver a robust and user-friendly web application. Here's an overview of what we used:

#### Frontend

- **Next.js:** We chose [Next.js](https://nextjs.org/) as our frontend framework for its server-rendered pages, routing capabilities, and ease of use. Next.js allowed us to build a fast and dynamic frontend with components that seamlessly integrate with our backend.

- **Tailwind CSS:** For styling our web application, we adopted [Tailwind CSS](https://tailwindcss.com/). Its utility-first approach allowed us to quickly create responsive and visually appealing user interfaces without writing extensive custom CSS.

- **Headless UI:** To enhance the user experience and create accessible user interface components, we incorporated [Headless UI](https://headlessui.com/). This library provided pre-designed building blocks that we customized to fit our application's needs.

#### Backend

- **Next.js:** Our backend for Interview100 is powered by [Next.js](https://nextjs.org/), a powerful React framework known for server-side rendering, routing, and API handling. With Next.js in our backend stack, we seamlessly handle API requests and deliver dynamic content.

- **Grafbase:** Our backend infrastructure is powered by [Grafbase](https://grafbase.com/). Grafbase is the easiest way to build and deploy your own GraphQL API to the edge with full end-to-end type safety. Integrate any datasource using resolvers and connectors, configure edge caching, set auth and permission rules, enable serverless search, and more with Grafbase.

### Deployment

- **Vercel:** To share our web application with the world, we deployed it on [Vercel](https://vercel.com/). Vercel's hosting platform is designed for Next.js applications, offering automatic deployments, serverless functions, and global content delivery.

By combining these technologies and tools, we were able to create Interview100, a platform that not only provides a rich user experience but also meets the technical challenges of modern web development. We hope you enjoy using it as much as we enjoyed building it!

## Run it Locally

To run this project locally, follow these steps:

1. Create an account for Grafbase, create a new project, and set up the Google OAuth provider.

2. Add a `.env` file in the root directory and in the Grafbase folder. In both `.env` files, add the following environment variables:

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
