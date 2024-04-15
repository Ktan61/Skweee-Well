import styles from "@/styles/Community.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import HeadArea from "@/components/HeadArea";

export default function AboutUs() {
  return (
    <>
      <HeadArea
        title="About Us"
      />
      <MenuBack/>
      <Navbar/>
      <main className={`${styles.main}`}>
        About Us
      </main>
    </>
  );
}
