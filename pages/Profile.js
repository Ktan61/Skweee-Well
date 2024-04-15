import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";

export default function Profile() {
  return (
    <>
      <HeadArea
        title="Profile"
      />
      <MenuBack/>
      <Navbar/>
      <main className={`${styles.main}`}>
        Profile
      </main>
    </>
  );
}
