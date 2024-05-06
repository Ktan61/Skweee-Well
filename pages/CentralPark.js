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
import Map from "@/components/Map/MapIndex.js";

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
        <div className={styles.topHeadingContainer}>
          <h3 className={styles.header} tabIndex={30}>Central Park</h3>
          <Image
              src="/images_interface/tree_conifer.svg"
              width={40}
              height={55}
              alt="small decorative tree beside section heading"
              className={styles.iconAcorn}
          />
        </div>
        <section className={styles.sectionNavChips}>
            <h5 className={styles.navChip} tabIndex={30}>
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
            <h5 
              className={`${styles.navChip} ${styles.navChipText}`}
              id="addParkButton"
              tabIndex={30}
              onClick={() => 
                document.getElementById("popUpAddPark").style.display = "block"
              }
              >
                Add Park
                <Image
                src="/images_interface/AddHeart.svg"
                width={25}
                height={30}
                alt="design image of part of a tree"
                className={styles.chipIcon}
                />
            </h5>
            <div id="popUpAddPark" className={styles.popUpAddPark} tabIndex={30}>
              <div className={styles.innerPopUpAddPark}>
                <Image
                    src="/images_interface/close_white.svg"
                    width={50}
                    height={50}
                    alt="icon to close popup"
                    className={styles.closeButton}
                    tabIndex={10}
                    onClick={() => {
                      const popUpAddPark = document.getElementById("popUpAddPark");
                      const parkAddedMessage = document.getElementById("parkAddedButton");
                      const addParkButton = document.getElementById("addParkButton");
                      if (popUpAddPark && parkAddedMessage) {
                        popUpAddPark.style.display = "none";
                        addParkButton.style.display = "none";
                        parkAddedMessage.style.display = "flex";
                        parkAddedMessage.style.color = "#F7802B";
                        parkAddedMessage.style.border = "3px solid #F7802B"
                      }
                    }}
                  />
                <div className={styles.addParkContainer}>
                  <span className={styles.addParkTextBold}>Central Park</span> has been added to your favourites!
                </div>
                <Image
                  src="/images_interface/sqwee.svg"
                  width={148}
                  height={115}
                  alt="image of sqwee the squirrel holding a giant acorn"
                  className={styles.imageSqweeAcorn}
                />
                <button 
                  className={styles.savedParksButton}>
                  Go to Saved Parks
                </button>
              </div>
            </div>
            <h5 id="parkAddedButton" className={`${styles.navChip} ${styles.navChipText} ${styles.parkAdded}`} tabIndex={30}
                >Park Saved 
                <Image
                    src="/images_interface/iconHeart.svg"
                    width={25}
                    height={30}
                    alt="acorn icon indicating a scavenger hunt is in a particular park"
                    className={styles.chipIcon}
                    />
            </h5>
            <h5 className={styles.navChip} tabIndex={30}>
                <Link href="/CentralPark#parkMap" className={styles.navChipText}>Park Map</Link>
            </h5>
            <h5 className={styles.navChip} tabIndex={30}>
                <Link href="/CentralPark#trails" className={styles.navChipText}>Trails</Link>
            </h5>
            <h5 className={styles.navChip} tabIndex={30}>
                <Link href="/CentralPark#amenities" className={styles.navChipText}>Amenities</Link>
            </h5>
            <h5 
              className={`${styles.navChip} ${styles.navChipText}`}
              id="galleryButton"
              tabIndex={30}
              onClick={() => 
                document.getElementById("gallery").style.display = "block"
              }
              >
                Gallery
            </h5>
            <div id="gallery" className={styles.popUpGallery}>
              <div className={styles.innerPopUpGallery}>
                <div className={styles.galleryHeader}>
                  <h4 className={styles.galleryHeaderText}>Park Photo Gallery</h4>
                  <Image
                    src="/images_interface/close_white.svg"
                    width={50}
                    height={50}
                    alt="icon to close popup"
                    className={styles.closeButtonGallery}
                    tabIndex={10}
                    onClick={() => 
                      document.getElementById("gallery").style.display = "none"
                    }
                  />
                </div>
                <Image
                  src="/images_content/CPGallery_1.png"
                  width={383}
                  height={255}
                  tabIndex={30}
                  alt="ducks swimming under cherry blossoms"
                  className={styles.galleryImages}
                />
                <div className={styles.galleryGap}>
                  <Image
                    src="/images_content/CPGallery_2.png"
                    width={181}
                    height={120}
                    tabIndex={30}
                    alt="pitch and putt golf players walking into forest"
                    className={styles.galleryImages}
                  />
                  <Image
                    src="/images_content/CPGallery_3.png"
                    width={181}
                    height={120}
                    tabIndex={30}
                    alt="two ducks swimming away"
                    className={styles.galleryImages}
                  />
                </div>
                <Image
                  src="/images_content/CPGallery_4.png"
                  width={383}
                  height={255}
                  tabIndex={30}
                  alt="playground with slide"
                  className={styles.galleryImages}
                />
                <div className={styles.galleryGap}>
                  <Image
                    src="/images_content/CPGallery_5.png"
                    width={181}
                    height={279}
                    tabIndex={30}
                    alt="pitch and putt golf players walking into forest"
                    className={styles.galleryImages}
                  />
                  <Image
                    src="/images_content/CPGallery_6.png"
                    width={181}
                    height={279}
                    tabIndex={30}
                    alt="two ducks swimming away"
                    className={styles.galleryImages}
                  />
                </div>
                <Image
                  src="/images_content/CPGallery_7.png"
                  width={383}
                  height={255}
                  tabIndex={30}
                  alt="playground with slide"
                  className={styles.galleryImages}
                />
                <div className={styles.galleryGap}>
                  <Image
                    src="/images_content/CPGallery_8.png"
                    width={181}
                    height={213}
                    tabIndex={30}
                    alt="pitch and putt golf players walking into forest"
                    className={styles.galleryImages}
                  />
                  <Image
                    src="/images_content/CPGallery_9.png"
                    width={181}
                    height={213}
                    tabIndex={30}
                    alt="two ducks swimming away"
                    className={styles.galleryImages}
                  />
                </div>
              </div>
            </div>
        </section>
        <section className={styles.sectionCarousel}>
         <div className={styles.FPContainer}>
            <Image
              src="/images_content/CP_1.png"
              width={308}
              height={311}
              alt="landscape image of the lake at central park with trees surrounding it"
              className={`${styles.carouselCard} ${styles.carousel_First}`}
              tabIndex={30}
            />
            <Image
              src="/images_content/CP_2.png"
              width={308}
              height={311}
              alt="image of ducks swimming in the central park lower pond with cherry blossoms and foliage behind them"
              className={`${styles.carouselCard}`}
              tabIndex={30}
            />
            <Image
              src="/images_content/CP_3.png"
              width={308}
              height={311}
              alt="image of a woman jogging on the central park multi-use path with cherry blossom trees around her"
              className={`${styles.carouselCard}`}
              tabIndex={30}
            />
            <video 
              width="308" 
              height="311" 
              controls preload="none" 
              autoPlay
              muted
              loop
              className={styles.carouselCard}>
                tabIndex={30}
              <source src="/images_content/CP_4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Image
              src="/images_content/CP_5.png"
              width={308}
              height={311}
              alt="image of central park map displayed on a wooden post"
              className={`${styles.carouselCard}`}
              tabIndex={30}
            />
            <Image
              src="/images_content/CP_6.png"
              width={308}
              height={311}
              alt="image of a playground with two red slides"
              className={`${styles.carouselCard} ${styles.carousel_Last}`}
              tabIndex={30}
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
        <div className={styles.spacerWrapper}>
          <div id="parkMap" className={styles.spacer}></div>
        </div>
        <section className={styles.sectionMap}>
          <div className={styles.parkMapHeadingContainer}>
            <h4 className={styles.amenitiesBanner} tabIndex={30}>Interactive Park Map</h4>
            <Image
                src="/images_interface/tree_conifer.svg"
                width={40}
                height={55}
                alt="small decorative tree beside section heading"
                className={styles.iconAcorn}
            />
          </div>
          <Map/>
        </section>
        <div className={styles.spacerWrapper}>
          <div id="amenities" className={styles.spacer}></div>
        </div>
        <section className={styles.sectionFAQ}>
          <div className={styles.amenitiesHeadingContainer}>
            <h4 className={styles.amenitiesBanner} tabIndex={30}>Amenities</h4>
            <Image
                src="/images_interface/tree_conifer.svg"
                width={40}
                height={55}
                alt="small decorative tree beside section heading"
                className={styles.iconAcorn}
            />
          </div>
          {
            data && data.map((info, index) => {
              return(
                <Accordion
                  key={index}
                  icon={info.icon}
                  question={info.question}
                  answer={info.answer}
                  tabIndex={30}
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
            <h5 tabIndex={30}>Water Fountains</h5>
          </div>
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_playground.svg"
                width={30}
                height={30}
                alt="playground icon"
                className={styles.extraInfoIcons}
            />
            <h5 tabIndex={30}>Playground</h5>
          </div>
          <div className={styles.extraInfo}>
            <Image
                src="/images_interface/parkicon_picnic.svg"
                width={30}
                height={30}
                alt="picnic icon"
                className={styles.extraInfoIcons}
            />
            <h5 tabIndex={30}>Picnic Tables</h5>
          </div>
          <div className={`${styles.extraInfo} ${styles.concessionBottomBorder}`}>
            <Image
                src="/images_interface/parkicon_food.svg"
                width={25}
                height={25}
                alt="concession icon"
                className={styles.concessionIcon}
            />
            <h5 tabIndex={30}>Concession</h5>
          </div>
        </section>
        <div className={styles.spacerWrapper}>
          <div id="trails" className={styles.spacer}></div>
        </div>
        <section className={styles.sectionQuickLinks}>
          <div className={styles.trailsHeadingContainer}>
            <h4 className={styles.amenitiesBanner} tabIndex={30}>Trails</h4>
            <Image
                src="/images_interface/tree_conifer.svg"
                width={40}
                height={55}
                alt="small decorative tree beside section heading"
                className={styles.iconAcorn}
            />
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box1}`}
            tabIndex={30}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Walking Trails</h5>
          </div>
          <div 
            className={`${styles.quickLinkBoxes} ${styles.box2}`}
            tabIndex={30}
          >
            <h5 className={styles.quickLinkBoxes_Text}>Cycling Trails</h5>
          </div>
          <Image
              src="/images_interface/orange_swirl.svg"
              width={760.51}
              height={610.78}
              alt="image of a forest with a trail curving into it"
              className={styles.imageSwirlTwo}
            />
        </section>
        <div className={styles.spacerWrapper}>
          <div id="sqweeHunt" className={styles.spacer}></div>
        </div>
        <section className={styles.sectionHuntBanner}>
          <div className={styles.huntHeadingContainer}>
            <h4 className={styles.huntBanner} tabIndex={30}>Sqwee Scavenger Hunt</h4>
            <Image
                src="/images_interface/iconAcorn.svg"
                width={40}
                height={50}
                alt="acorn icon indicating a scavenger hunt is in a particular park"
                className={styles.iconAcorn}
                tabIndex={30}
            />
          </div>
          <Image
              src="/images_content/ScavengerHuntBanner_Central.png"
              width={430}
              height={428}
              alt="translucent purple banner showing a central park champion badge and sqwee standing in front of it"
              className={styles.imageTree1}
              tabIndex={30}
          />
          <p className={styles.pText2} tabIndex={30}>Join Sqwee as you navigate through Central Park, follow the clues, and conquer challenges together. Are you ready?</p>
          <button 
            onClick={() => router.push('/ScavengerHunts/LocationOne')}
            className={styles.button}
            tabIndex={30}
            >Start Now
          </button>    
        </section>
      </main>
      <Navbar/>
    </>
  );
}
