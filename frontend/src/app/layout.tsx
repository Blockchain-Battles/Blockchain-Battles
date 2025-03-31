"use client";
import "@/assets/global.css";
import { ReactNode } from "react";
import clsx from "clsx";
import Layout from "@/components/layouts/RootLayout";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>
) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={clsx("relative h-dvh w-screen overflow-hidden")}>
        <Layout>{children}</Layout>
        <GoogleAnalytics gaId="G-780DNEFLNM" /> 
      </body>
    </html>
  );
}
