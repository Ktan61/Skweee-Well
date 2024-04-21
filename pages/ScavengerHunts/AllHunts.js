import styles from "@/styles/ScavengerHunts/AllHunts.module.css";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuTutorial from "@/components/MenuTutorial";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AllHunts() {
  const router = useRouter();

  return (
    <>
      <HeadArea
        title="Scavenger Hunt List"
      />
      <MenuTutorial/>
      <main className={`${styles.main}`}>
        <section className={styles.sectionBanner}>
          <h3 className={styles.headingBanner}>Sqwee Scavenger Hunt</h3>
          <div className={styles.blueBanner}>
            <p className={styles.pTextBanner}>Featured Scavenger Hunt is location specific.</p>
          </div>
          <Image
              src="/images_content/ScavengerHuntBanner_Central.png"
              width={430}
              height={428}
              alt="design image of part of a tree"
              className={styles.imageTree1}
          />
          <p className={styles.pText}>Join Sqwee for a thrilling scavenger hunt at Central Park! Get ready for adventure, puzzles, and endless fun. Don't miss out – see you there!</p>
          <button 
            onClick={() => router.push('/Community')}
            className={styles.button}
            >Learn More
          </button>    
        </section>
        <section className={styles.sectionHuntMaps}>
          <h3 className={styles.headingHuntMaps}>Sqwee Hunt Maps</h3>
          <div className={`${styles.huntMapsBoxes} ${styles.box1}`}>
            <Image
                  src="/images_interface/hunt_locked.svg"
                  width={185}
                  height={166}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <h5 className={styles.boxText}>David Lam Park Scavenger Hunt</h5>
          </div>
          <div className={`${styles.huntMapsBoxes} ${styles.box2}`}>
            <Image
                  src="/images_interface/hunt_locked.svg"
                  width={185}
                  height={166}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <h5 className={styles.boxText}>David Lam Park Scavenger Hunt</h5>
          </div>
          <div className={`${styles.huntMapsBoxes} ${styles.box3}`}>
            <Image
                  src="/images_interface/hunt_locked.svg"
                  width={185}
                  height={166}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <h5 className={styles.boxText}>David Lam Park Scavenger Hunt</h5>
          </div>
          <div className={`${styles.huntMapsBoxes} ${styles.box4}`}>
            <Image
                  src="/images_interface/hunt_locked.svg"
                  width={185}
                  height={166}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <h5 className={styles.boxText}>David Lam Park Scavenger Hunt</h5>
          </div>
          <button 
              onClick={() => router.push('/Community')}
              className={styles.buttonHuntMaps}
              >Show More
          </button> 
          <Image
            src="/images_interface/orange_swirl.svg"
            width={760.51}
            height={610.78}
            alt="image of a forest with a trail curving into it"
            className={styles.imageSwirl}
          />
        </section>
      </main>
      <Navbar/>
    </>
  );
}
