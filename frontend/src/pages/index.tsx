import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/provider/Auth/Auth";
import { FormEvent, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { getIsLoggedIn } = useAuth();
  if (getIsLoggedIn()) {
  }
  return (
    <>
      <Head>
        <title>blockchain battles</title>
      </Head>
      {/* <section className="w-full border-collapse bg-red-50 "> */}
      <h1>BlockChainBattles</h1>
      <p>A place to have fun on blockchain</p>
      {/* </section> */}
    </>
  );
}
