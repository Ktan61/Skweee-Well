import Head from "next/head";
import styles from "@/styles/Community.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Community() {
  return (
    <>
      <Head>
        <title>Skweee Well</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={`${styles.main}`}>
        Communiteee
      </main>
    </>
  );
}
