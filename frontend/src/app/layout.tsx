"use client";
import "@/assets/global.css";
import { ReactNode } from "react";
import clsx from "clsx";
import Layout from "@/components/layouts/RootLayout";
import { FiraCode } from "@/assets/fonts";

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>
) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={clsx("relative h-dvh w-screen overflow-auto")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
