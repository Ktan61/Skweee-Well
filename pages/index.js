import styles from "@/styles/Home.module.css";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuTutorial from "@/components/MenuTutorial";

const Loading = ({ progress }) => (
  <div className={styles.loadingContainer}>
    <div lassName={styles.loadingStyle}>
    <h1>Loading...</h1>
    <progress value={progress} max="100" className={styles.progressBar}></progress>
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const welcome = process.env.NEXT_PUBLIC_WELCOME;

  useEffect(() => {
    const fetchData = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setLoadingProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 200);
    };

    fetchData();
  }, []);

  return (
    <>
      <HeadArea title="Sqwell Home" />
      {loading ? ( 
        <Loading progress={loadingProgress} />
      ) : (
        <>
          <MenuTutorial />
          <main className={styles.main}>
            <section className={styles.sectionBanner}>
              <h1 className={styles.welcome} tabIndex={10}>
                {welcome}
              </h1>
              <Image
                src="/images_interface/sqwee_big_acorn.svg"
                width={148}
                height={115}
                alt="image of sqwee the squirrel holding a giant acorn"
                className={styles.imageSqweeAcorn}
                tabIndex={10}
              />
              <Image
                src="/images_interface/Tree_Home1.svg"
                width={355}
                height={289}
                alt="design image of part of a tree"
                className={styles.imageTree1}
              />
            </section>
            <section className={styles.sectionQuickLinks}>
              <h3 className={styles.headerQuickLinks} tabIndex={10}>Quick Links</h3>
              <div 
                className={`${styles.quickLinkBoxes} ${styles.box1}`}
                onClick={() => router.push('/ParksLibrary')}
                tabIndex={10}
              >
                <h5 className={styles.quickLinkBoxes_Text}>Park Library</h5>
              </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box2}`}
            onClick={() => router.push('/ScavengerHunts/AllHunts')}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Sqwee Scavenger Hunt</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box3}`}
            onClick={() => router.push('/Community')}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Community</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box4}`}
            onClick={() => router.push('/Profile')}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>My Profile</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box5}`}
            onClick={() => router.push('/Community')}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Upcoming Events</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box6}`}
            onClick={() => router.push('/Profile')}
            tabIndex={10}
          >
            <h5 className={styles.quickLinkBoxes_Text}>My Monthly Park Report</h5>
          </div>
        </section>
        <section className={styles.sectionFeaturedParks}>
         <h3 className={styles.headerFeaturedParks} tabIndex={10}>Featured Parks</h3>
         <div className={styles.FPContainer}>
          <div className={`${styles.featuredParksCard} ${styles.FPC_First}`} tabIndex={10}>
            <Image
                  src="/images_content/FP_Central.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Central Park</h4>
              <p>Find tranquility in the heart of Metrotown at Central Park, a sprawling 90-hectare... </p>
              <p 
                className={styles.FPC_LearnMore}
                onClick={() => router.push('/CentralPark')}
              >Learn more &#8594;</p>
            </div>
          </div>
          <div className={styles.featuredParksCard} tabIndex={10}>
            <Image
                  src="/images_content/FP_BurnabyMountain.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Burnaby Mountain Conservation Area</h4>
              <p>Green space offering a rose garden, playground & picnic sites...</p>
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
          <div className={styles.featuredParksCard} tabIndex={10}>
            <Image
                  src="/images_content/FP_Kensington.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Kensington Park</h4>
              <p>Kensington is sports central in the heart of north Burnaby. It offers everything for residents, schools... </p>
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
          <div className={styles.featuredParksCard} tabIndex={10}>
            <Image
                  src="/images_content/FP_RobertBurnaby.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Robert Burnaby Park</h4>
              <p>Quiet walks through leafy woods, family picnics under shady trees and acres of grassy, gently sloped... </p>
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
          <div className={`${styles.featuredParksCard} ${styles.FPC_Last}`} tabIndex={10}>
            <Image
                  src="/images_content/FP_Taylor.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Taylor Park</h4>
              <p>Opened in 2005 with a family area, playground and picnic tables, fountains, trees and a special... </p>
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
         </div>
         <Image
                src="/images_interface/Tree_Home2.svg"
                width={285}
                height={600}
                alt="design image of part of a tree"
                className={styles.imageTree2}
          />
        </section>
        </main>
          <Image
            src="/images_interface/orange_swirl.svg"
            width={760.51}
            height={610.78}
            alt="image of a forest with a trail curving into it"
            className={styles.imageSwirl}
          />
          <div className={styles.background}></div>
          <Navbar />
        </>
      )}
    </>
  );
}