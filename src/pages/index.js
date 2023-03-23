import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../../components/Shared/Header";
import Hero from "../../components/Main/Hero";
import Work from "../../components/Main/Work";
import Support from "../../components/Main/Support";
import Features from "../../components/Main/Features";
import EndPage from "../../components/Main/EndPage";
import Footer from "../../components/Shared/Footer";
import Layout from "../../components/Layouts/Layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
        <div className="mx-3 my-5">
          <Hero />
          <Work />
          <Support />
          <Features />
          <EndPage />
        </div>
        </Layout>
      </div>
    </>
  );
}
