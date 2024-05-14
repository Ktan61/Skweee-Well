import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";
import VerticalChart from "@/components/VerticalChart";
import BadgeCollection from "@/components/BadgeCollection";
import { useState } from 'react';

export default function Profile() {
  const [popup, setPopup] = useState(false);
  const handleChipClick = () => {
    setPopup(true);
  };
  return (
    <>
      <HeadArea
        title="Profile"
      />
      <MenuBack />
      <Navbar />
      <main className={`${styles.main}`}>
        <div className={styles.topSectionContainer}>
          <h3 className={styles.pageHeader}>My Profile</h3>

          <section className={styles.sectionNavChips}>
            <h5 className={styles.navChip} onClick={handleChipClick} tabIndex={3}>
              Badge Collection
              <Image
                src="/images_interface/passport-icon.png"
                width={30}
                height={30}
                alt="orange passport icon representing badge journal"
                className={styles.chipIcon}
              />
            </h5>
            {popup && <BadgeCollection onClose={() => setPopup(false)} className={styles.badgeCollection} />}
          </section>
          <div className={styles.profilePhotoContainer}  tabIndex={4}>
            <Image
              src="/images_content/profile-photo.jpg"
              width={200}
              height={200}
              alt="profile photo of a woman with brown hair"
              className={styles.profilePhoto}
             
            />
          </div>
          <div className={styles.username}>
            <h4 tabIndex={5}>@naturelover222</h4>
          </div>
          <div className={styles.bioContainer}>
            <textarea className={styles.bioText} placeholder="Lover of nature, family and friends" tabIndex={6}></textarea>
          </div>
          <div className={styles.friendsButtonContainer}>
            <Link href='/Friends'>
              <button className={styles.friendsButton} tabIndex={7}>Friends</button>
            </Link>
            <Link href='/Requests'>
              <button className={styles.friendsButton} tabIndex={8}>Requests</button>
            </Link>
          </div>
        </div>
        <div className={styles.galleryContainer}>
          <h3 className={styles.galleryHeader} tabIndex={9}>My Gallery</h3>
          <section className={styles.sectionCarousel}>
            <div className={styles.FPContainer}>
              <Image
                src="/images_content/statue-image.png"
                width={308}
                height={311}
                alt="landscape image of the lake at central park with trees surrounding it"
                className={`${styles.carouselCard} ${styles.carousel_First}`}
                tabIndex={10}
              />
              <Image
                src="/images_content/CP_2.png"
                width={308}
                height={311}
                alt="image of ducks swimming in the central park lower pond with cherry blossoms and foliage behind them"
                className={`${styles.carouselCard}`}
                tabIndex={11}
              />
              <Image
                src="/images_content/CP_3.png"
                width={308}
                height={311}
                alt="image of a woman jogging on the central park multi-use path with cherry blossom trees around her"
                className={`${styles.carouselCard}`}
                tabIndex={12}
              />
              <video
                width="308"
                height="311"
                controls preload="none"
                autoPlay
                muted
                loop
                className={styles.carouselCard}
                tabIndex={13}>
                <source src="/images_content/CP_4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                src="/images_content/CP_5.png"
                width={308}
                height={311}
                alt="image of central park map displayed on a wooden post"
                className={`${styles.carouselCard}`}
                tabIndex={14}
              />
              <Image
                src="/images_content/CP_6.png"
                width={308}
                height={311}
                alt="image of a playground with two red slides"
                className={`${styles.carouselCard} ${styles.carousel_Last}`}
                tabIndex={15}
              />
            </div>
          </section>
        </div>
        <div className={styles.visitedParks}>
          <h3 className={styles.parksHeader} tabIndex={16}>Parks I've Visited</h3>
          <section className={styles.sectionFeaturedParks}>
            <div className={styles.FPContainer}>
              <div className={`${styles.featuredParksCard} ${styles.FPC_First}`}>
                <Image
                  src="/images_content/FP_Central.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
                  tabIndex={17}
                />
                <div className={styles.FPC_TextDiv}>
                  <h4 className={styles.FPC_TextHeader}>Central Park</h4>

                </div>
              </div>
              <div className={styles.featuredParksCard}>
                <Image
                  src="/images_content/FP_BurnabyMountain.png"
                  width={308}
                  height={204}
                  alt="landscape image of Burnaby Mountain Park"
                  className={styles.FPC_Image}
                  tabIndex={18}
                />
                <div className={styles.FPC_TextDiv}>
                  <h4 className={styles.FPC_TextHeader}>Burnaby Mountain Conservation Area</h4>

                </div>
              </div>
              <div className={styles.featuredParksCard}>
                <Image
                  src="/images_content/FP_Kensington.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
                  tabIndex={19}
                />
                <div className={styles.FPC_TextDiv}>
                  <h4 className={styles.FPC_TextHeader}>Kensington Park</h4>

                </div>
              </div>
              <div className={styles.featuredParksCard}>
                <Image
                  src="/images_content/FP_RobertBurnaby.png"
                  width={308}
                  height={204}
                  alt="landscape image of Robert bBuranby Park"
                  className={styles.FPC_Image}
                  tabIndex={20}
                />
                <div className={styles.FPC_TextDiv}>
                  <h4 className={styles.FPC_TextHeader}>Robert Burnaby Park</h4>

                </div>
              </div>
              <div className={`${styles.featuredParksCard} ${styles.FPC_Last}`}>
                <Image
                  src="/images_content/FP_Taylor.png"
                  width={308}
                  height={204}
                  alt="landscape image of the lake at central park with trees surrounding it"
                  className={styles.FPC_Image}
                  tabIndex={21}
                />
                <div className={styles.FPC_TextDiv}>
                  <h4 className={styles.FPC_TextHeader}>Taylor Park</h4>

                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.swirlContainer}>
          <Image
            src="/images_interface/orange_swirl.svg"
            width={760.51}
            height={610.78}
            alt="orange swirl background"
            className={styles.imageSwirl}
          />
        </div>
        <div className={styles.treeContainer}>
          <Image
            src="/images_content/profile-tree.png"
            width={295}
            height={489}
            alt="green tree background image"
          />
          </div>
          <div className={styles.chartContainer} tabIndex={23}>
          <h3 className={styles.chartHeader} tabIndex={22}>Park Report</h3>
            <VerticalChart />
          </div>
          <div className={styles.leaderboardButtonContainer}>
          <Link href="/Community">
            <button className={styles.leaderboardButton} tabIndex={24}>View Leaderboard</button>
          </Link>
          </div>
          
          <div className={styles.background}></div>
      </main>
    </>
  );
}
