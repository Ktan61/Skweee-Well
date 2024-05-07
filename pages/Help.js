import styles from "@/styles/Help.module.css";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import MenuTutorial from "@/components/MenuTutorial";
import { matrix } from "../data/matrix.js";
import { useState } from "react";
import Accordion from "@/components/Accordion/index.js";

export default function Help() {
  const router = useRouter();
  const [data, setData] = useState([...matrix.faqArray]);

  return (
    <>
      <HeadArea
        title="Help"
      />
      <MenuTutorial/>
      <main className={`${styles.main}`}>
        <section className={styles.sectionQuickLinks}>
          <h3 className={styles.headerQuickLinks} tabIndex={10}>Help</h3>
          <h4 className={styles.headerQuickLinks} tabIndex={10}>Tutorials</h4>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box1}`}
            tabIndex={10}
            onClick={() => router.push('/ParksLibrary')}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Use Park Pages</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box2}`}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Play Scavenger Hunt</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box3}`}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Find Your Badges</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box4}`}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>How to Update Your Profile</h5>
          </div>
          <Image
                src="/images_interface/Tree_Home1.svg"
                width={355}
                height={289}
                alt="design image of part of a tree"
                className={styles.imageTree1}
          />
          <Image
            src="/images_interface/orange_swirl.svg"
            width={760.51}
            height={610.78}
            alt="image of a forest with a trail curving into it"
            className={styles.imageSwirl}
          />
        </section>
        <section className={styles.sectionFAQ}>
          <h4 className={styles.headerFAQ} tabIndex={10}>FAQ</h4>
          {
            data && data.map((info, index) => {
              return(
                <Accordion
                  key={index}
                  question={info.question}
                  answer={info.answer}
                />
              )
            })
          }
        </section>
        <Image
            src="/images_interface/sqwee_2_trees.svg"
            width={190}
            height={145}
            alt="image of sqwee the squirrel near some trees"
            className={styles.imageSqwee}
        />
      </main>
      <Navbar/>
    </>
  );
}
