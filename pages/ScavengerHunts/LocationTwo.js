import styles from "@/styles/ScavengerHunts/Location.module.css"; 
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuBack from "@/components/MenuBack";

export default function LocationTwo() {
  const router = useRouter();

  return (
    <>
      <HeadArea
        title="Location 2"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
      <section className={styles.sectionBanner}>
          <h3 className={styles.headingBanner}>Location 2</h3>
          <Image
              src="/images_content/Location2_Finder.png"
              width={430}
              height={428}
              alt="camera viewfinder showing Swangard Stadium"
              className={styles.imageLocation1_1}
          />
          <h4 className={styles.headingWelcome}>Instructions</h4>
          <p className={styles.pText}>Take a photo of the the monument unveiled in July 2007, The Ambassador of Peace is in recognition of the 36 servicemen from BC who made the supreme sacrifice during the Korean War (1950–1953).</p>
          <div className={styles.buttons}>
            <Image
                src="/images_interface/camera_icon.svg"
                width={74}
                height={74}
                alt="design image of part of a tree"
                className={styles.iconCamera}
                onClick={() => 
                    document.getElementById("sectionFinishedShot").style.display = "block"
                }
            />
            <Image
                src="/images_interface/gallery_icon.svg"
                width={74}
                height={74}
                alt="design image of part of a tree"
                className={styles.iconGallery}
            />   
          </div>
        </section>
        <section className={styles.sectionFinishedShot} id="sectionFinishedShot">
          <h3 className={styles.headingBanner_2}>Location 2</h3>
          <Image
              src="/images_content/Location2_Finished.png"
              width={430}
              height={428}
              alt="Swangard Stadium"
              className={styles.imageLocation1_2}
          />
          <h4 className={styles.headingWelcome}>Great Shot!</h4>
          <p className={styles.pText}>The Korean War Memorial was donated to the City of Burnaby by the Korean Veterans Association of Canada in 2007.</p>
          <button
            onClick={() => router.push('/Quiz/QuizStart')}
            className={styles.button}
            >Next
          </button>
        </section>
      </main>
      <Navbar/>
    </>
  );
}