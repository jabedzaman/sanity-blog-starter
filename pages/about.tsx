import type { NextPage } from "next";
import Head from "next/head";
import Techstack from "../components/containers/Techstack";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="text-white m-10 lg:mx-40">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <span className="font-semibold lg:text-6xl text-4xl flex lg:justify-start justify-center ">
          About Me
        </span>
        <span>
          <p className="text-justify lg:text-xl text-sm my-1 lg:my-7">
            An engineering undergrad with computer science background. A full
            stack developer with a passion for building scalable and
            maintainable web applications. Having experience in building web
            applications using cutting edge technologies like React, Next.js,
            Node.js, tailwindcss, sanity and Firebase. I am currently learning
            Native Development.
          </p>
        </span>
        <Techstack />
        <div className="sticky bottom-9">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
