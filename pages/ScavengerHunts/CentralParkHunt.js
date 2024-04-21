import styles from "@/styles/ScavengerHunts/CentralParkHunt.module.css"; 
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuBack from "@/components/MenuBack";

export default function CentralParkHunt() {
  const router = useRouter();

  return (
    <>
      <HeadArea
        title="Central Park Hunt"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
        <section className={styles.sectionBanner}>
          <h3 className={styles.headingBanner}>Sqwee Scavenger Hunt</h3>
          <Image
              src="/images_content/ScavengerHuntBanner_CentralBlue.png"
              width={430}
              height={428}
              alt="design image of part of a tree"
              className={styles.imageTree1}
          />
          <h4 className={styles.headingWelcome}>Welcome to the Central Park <br/> Sqwee Hunt!</h4>
          <p className={styles.pText}>Embark on an exciting adventure with Sqwee and unlock a special badge at the end of the journey!</p>
          <p className={styles.pText2}>Join Sqwee as you navigate through Central Park, follow the clues, and conquer challenges together. Are you ready?</p>
          <button 
            onClick={() => router.push('/ScavengerHunts/LocationOne')}
            className={styles.button}
            >Start Now
          </button>    
        </section>
      </main>
      <Navbar/>
    </>
  );
}
