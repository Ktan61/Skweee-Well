import styles from "@/styles/Community.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";

export default function Community() {
  return (
    <>
      <HeadArea
        title="Community"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
        <h3>Community</h3>
      </main>
      <Navbar/>
    </>
  );
}
