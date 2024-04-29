import styles from "@/styles/Help.module.css";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import MenuTutorial from "@/components/MenuTutorial";

export default function Help() {
  const router = useRouter();
  return (
    <>
      <HeadArea
        title="Help"
      />
      <MenuTutorial/>
      <main className={`${styles.main}`}>
        <section className={styles.sectionQuickLinks}>
          <h3 className={styles.headerQuickLinks}>Help</h3>
          <h4 className={styles.headerQuickLinks}>Tutorials</h4>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box1}`}
            onClick={() => router.push('/ParksLibrary')}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Use Park Pages</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box2}`}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Play Scavenger Hunt</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box3}`}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Find Your Badges</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box4}`}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Update Your Profile</h5>
          </div>
        </section>
        <section className={styles.sectionFAQ}>
          <h4 className={styles.headerFAQ}>FAQ</h4>
          <div>Question 1</div>
        </section>
        <Image
            src="/images_interface/sqwee_2_trees.svg"
            width={253}
            height={193}
            alt="image of a forest with a trail curving into it"
            className={styles.imageSqwee}
        />
      </main>
      <Image
        src="/images_interface/orange_swirl.svg"
        width={760.51}
        height={610.78}
        alt="image of a forest with a trail curving into it"
        className={styles.imageSwirl}
      />
      <Navbar/>
    </>
  );
}
