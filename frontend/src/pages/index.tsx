import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/provider/Auth/Auth";
import { FormEvent, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoggedIn, login, signup } = useAuth();
  const userRef = useRef<HTMLInputElement>(null!);
  const passRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    console.log(userRef.current.value);
    signup(userRef.current.value, passRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="user" ref={userRef} />
      <input type="text" placeholder="pass" ref={passRef} />
      <button type="submit">signup</button>
    </form>
  );
}
