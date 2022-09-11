import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/containers/Contact";
import Form from "../components/containers/Form";
import Navbar from "../components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 xl:px-72 text-white justify-between">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Form />
        <Contact />
        <Navbar />
      </div>
    </div>
  );
};

export default Home;