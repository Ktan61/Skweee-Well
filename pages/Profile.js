import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";
import VerticalChart from "@/components/VerticalChart";

export default function Profile() {

  const handleButtonClick = () => {
    console.log("button clicked")
  }

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
          <div className={styles.profilePhotoContainer}>
            <Image
              src="/images_content/profile-photo.jpg"
              width={200}
              height={200}
              alt="profile photo of a woman with brown hair"
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.passportIconContainer}>
            <Image
              src="/images_interface/passport-icon.png"
              width={60}
              height={60}
              alt="orange book icon for badge collection"
              className={styles.passportIcon}
            />
          </div>
          <div className={styles.username}>
            <h4>@naturelover222</h4>
          </div>
          <div className={styles.bioContainer}>
            <textarea className={styles.bioText} placeholder="Lover of nature, family and friends"></textarea>
          </div>
          <div className={styles.friendsButtonContainer}>
            <Link href='/Friends'>
              <button className={styles.friendsButton}>Friends</button>
            </Link>
            <button className={styles.friendsButton}>Requests</button>
          </div>
        </div>

        <div className={styles.galleryContainer}>
          <h3 className={styles.galleryHeader}>My Gallery</h3>
        </div>
        <div className={styles.visitedParks}>
          <h3 className={styles.parksHeader}>Parks I've Visited</h3>
          <section className={styles.sectionFeaturedParks}>
         <div className={styles.FPContainer}>
          <div className={`${styles.featuredParksCard} ${styles.FPC_First}`}>
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
                onClick={() => router.push('/ParksLibrary')}
              >Learn more &#8594;</p>
            </div>
          </div>
          <div className={styles.featuredParksCard}>
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
          <div className={styles.featuredParksCard}>
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
          <div className={styles.featuredParksCard}>
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
          <div className={`${styles.featuredParksCard} ${styles.FPC_Last}`}>
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

        <div className={styles.chartContainer}>
          <Image
            src="/images_content/profile-tree.png"
            width={323}
            height={560}
            alt="profile photo of a woman with brown hair"
            className={styles.tree}
          />
          <h3 className={styles.chartHeader}>Park Report</h3>
          <VerticalChart />
          <Link href="/Community">
            <button className={styles.leaderboardButton} onClick={handleButtonClick}>View Leaderboard</button>
          </Link>
        </div>
      </main>
    </>
  );
}
