import styles from "@/styles/CentralPark.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";
import { useRouter } from "next/router";
import { parkAmenities } from "../data/parkAmenities.js";
import { useState, useEffect } from "react";
import Accordion from "@/components/Accordion/index.js";

export default function CentralPark() {
    const router = useRouter();
    const [data, setData] = useState([...parkAmenities.parkAmenitiesArray]);
  return (
    <>
      <HeadArea
        title="Central Park"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
        <h3 className={styles.header}>Central Park</h3>
        <section className={styles.sectionNavChips}>
            <h5 className={styles.navChip}>
                <Link href="/CentralPark#sqweeHunt" className={styles.navChipText}>
                    Sqwee Scavenger Hunt
                    <Image
                    src="/images_interface/iconAcorn.svg"
                    width={25}
                    height={30}
                    alt="acorn icon indicating a scavenger hunt is in a particular park"
                    className={styles.chipIcon}
                    />
                </Link>
            </h5>
            <h5 className={`${styles.navChip} ${styles.navChipText}`}>
                Add Park
                <Image
                src="/images_interface/AddHeart.svg"
                width={25}
                height={30}
                alt="design image of part of a tree"
                className={styles.chipIcon}
                />
            </h5>
            <h5 className={`${styles.navChip} ${styles.navChipText}`}
                >Park Map
            </h5>
            <h5 className={styles.navChip}>
                <Link href="/CentralPark#trails" className={styles.navChipText}>Trails</Link>
            </h5>
            <h5 className={`${styles.navChip} ${styles.navChipText}`}
                >Amenities
            </h5>
            <h5 className={`${styles.navChip} ${styles.navChipText}`}
                >Gallery
            </h5>
        </section>
        <section className={styles.sectionCarousel}>
         <div className={styles.FPContainer}>
            <Image
              src="/images_content/CP_1.png"
              width={308}
              height={311}
              alt="landscape image of the lake at central park with trees surrounding it"
              className={`${styles.carouselCard} ${styles.carousel_First}`}
            />
            <Image
              src="/images_content/CP_2.png"
              width={308}
              height={311}
              alt="image of ducks swimming in the central park lower pond with cherry blossoms and foliage behind them"
              className={`${styles.carouselCard}`}
            />
            <Image
              src="/images_content/CP_3.png"
              width={308}
              height={311}
              alt="image of a woman jogging on the central park multi-use path with cherry blossom trees around her"
              className={`${styles.carouselCard}`}
            />
            <video 
              width="308" 
              height="311" 
              controls preload="none" 
              autoPlay
              muted
              loop
              className={styles.carouselCard}>
              <source src="/images_content/CP_4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Image
              src="/images_content/CP_5.png"
              width={308}
              height={311}
              alt="image of central park map displayed on a wooden post"
              className={`${styles.carouselCard}`}
            />
            <Image
              src="/images_content/CP_6.png"
              width={308}
              height={311}
              alt="image of a playground with two red slides"
              className={`${styles.carouselCard} ${styles.carousel_Last}`}
            />
            <Image
              src="/images_interface/orange_swirl.svg"
              width={760.51}
              height={610.78}
              alt="image of a forest with a trail curving into it"
              className={styles.imageSwirl}
            />
         </div>
        </section>
        <div id="amenities" className={styles.spacer}></div>
        <section className={styles.sectionFAQ}>
          <h4 className={styles.headerFAQ}>FAQ</h4>
          {
            data && data.map((info, index) => {
              return(
                <Accordion
                  key={index}
                  icon={info.icon}
                  question={info.question}
                  answer={info.answer}
                />
              )
            })
          }
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_water.svg"
                width={30}
                height={30}
                alt="water fountain icon"
                className={styles.extraInfoIcons}
            />
            <h5>Water Fountains</h5>
          </div>
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_playground.svg"
                width={30}
                height={30}
                alt="playground icon"
                className={styles.extraInfoIcons}
            />
            <h5>Playground</h5>
          </div>
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_picnic.svg"
                width={30}
                height={30}
                alt="picnic icon"
                className={styles.extraInfoIcons}
            />
            <h5>Picnic Tables</h5>
          </div>
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_food.svg"
                width={25}
                height={25}
                alt="concession icon"
                className={styles.concessionIcon}
            />
            <h5>Concession</h5>
          </div>
        </section>
        <div id="trails" className={styles.spacer}></div>
        <section className={styles.sectionQuickLinks}>
          <h4 className={styles.headerQuickLinks}>Trails</h4>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box1}`}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Walking Trails</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box2}`}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Cycling Trails</h5>
          </div>
        </section>
        <div id="sqweeHunt" className={styles.spacer}></div>
        <section className={styles.sectionHuntBanner}>
          <div className={styles.huntHeadingContainer}>
            <h4 className={styles.huntBanner}>Sqwee Scavenger Hunt</h4>
            <Image
                src="/images_interface/iconAcorn.svg"
                width={40}
                height={50}
                alt="acorn icon indicating a scavenger hunt is in a particular park"
                className={styles.iconAcorn}
            />
          </div>
          <Image
              src="/images_content/ScavengerHuntBanner_Central.png"
              width={430}
              height={428}
              alt="translucent purple banner showing a central park champion badge and sqwee standing in front of it"
              className={styles.imageTree1}
          />
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
