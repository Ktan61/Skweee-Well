import Head from "next/head";
import styles from "@/styles/ParksLibrary.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";

export default function ParksLibrary() {
  return (
    <>
      <HeadArea
        title="Park Library"
      />
      <MenuBack/>
      <Navbar/>
      <main className={`${styles.main}`}>
        Park Library
        <Link href='/Quiz/QuizStart'>Quiz</Link>
      </main>
    </>
  );
}
