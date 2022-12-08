import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Poké <span className="text-[hsl(280,100%,70%)]">dex</span>
          </h1>
        </div>
        {children}
        <footer className="text-white">
          Pokédex power by
          <Link className="ml-2 font-bold text-[#e8ddff]" href={'https://create.t3.gg/'} target="_blank">
            T3 Stack
          </Link>
        </footer>
      </main>
    </>
  )
}