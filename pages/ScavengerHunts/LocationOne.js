import styles from "@/styles/ScavengerHunts/Location.module.css"; 
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuBack from "@/components/MenuBack";

export default function LocationOne() {
  const router = useRouter();

  return (
    <>
      <HeadArea
        title="Location 1"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
      <section className={styles.sectionBanner}>
          <h3 className={styles.headingBanner}>Location 1</h3>
          <Image
              src="/images_content/Location1_Finder.png"
              width={430}
              height={428}
              alt="camera viewfinder showing Swangard Stadium"
              className={styles.imageLocation1_1}
          />
          <h4 className={styles.headingWelcome}>Instructions</h4>
          <p className={styles.pText}>Take a photo of a famous stadium that was the home of the Vancouver 86ers (more commonly known as the Vancouver Whitecaps) until 2010.</p>
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
        <section className={styles.sectionFinishedShot_2} id="sectionFinishedShot">
          <h3 className={styles.headingBanner_2}>Location 1</h3>
          <Image
              src="/images_content/Location1_Finished.png"
              width={430}
              height={428}
              alt="Swangard Stadium"
              className={styles.imageLocation1_2}
          />
          <h4 className={styles.headingWelcome}>Great Shot!</h4>
          <p className={styles.pText}>Swangard Stadium is a multi-purpose stadium in Central Park. Primarily used for soccer, rugby, football, and athletics, the stadium opened on April 26, 1969, and has a capacity of 5,288.</p>
          <button
            onClick={() => router.push('/ScavengerHunts/LocationTwo')}
            className={styles.button}
            >Next
          </button>
        </section>
      </main>
      <Navbar/>
    </>
  );
}