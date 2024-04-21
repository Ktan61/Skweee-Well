import Head from "next/head";
import styles from "@/styles/ParksLibrary.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";

export default function ParksLibrary() {
  return (
    <>
      <HeadArea
        title="Park Library"
      />
      <MenuBack/>
      <Navbar/>
      <main className={`${styles.main}`}>
        <section className={styles.searchSection}>
         
        </section>

        <section className={styles.parkLibHeader}>
            <div className={styles.parksHeader}>
              <h3>Parks</h3>
            </div>
            <div className={styles.filterIcon}>
              <Image
                    src="/images_interface/filter_icon.svg"
                    width={31}
                    height={36}
                    alt="Filter icon for filtering through the Parks shown"
                    className={styles.imageFilter}
              />
          </div>
        </section>

        <section className={styles.PC_Library}>
          <div className={styles.PC_Container}>
            <div className={`${styles.parkCard}`}>
                <Image
                      src="/images_content/PC_RobertBurnabyPark.svg"
                      width={185}
                      height={166}
                      alt="Landscape image of Robert Burnaby Park"
                      className={styles.PC_Image}
                />
                <div className={styles.PC_TextDiv}>
                  <h5 className={styles.PC_TextHeader}>Robert Burnaby Park</h5>
                </div>
              </div>

              <div className={`${styles.parkCard}`}>
                <Image
                      src="/images_content/PC_BurnabyMtnConsArea.svg"
                      width={185}
                      height={166}
                      alt="Landscape image of Burnaby Mountain Conservation Area"
                      className={styles.PC_Image}
                />
                <div className={styles.PC_TextDiv}>
                  <h5 className={styles.PC_TextHeader}>Burnaby Mountain Conservation Area</h5>
                </div>
              </div>
          </div>

        <div className={styles.PC_Container}>
          <div className={`${styles.parkCard}`}>
              <Image
                    src="/images_content/PC_CentralPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Central Park"
                    className={styles.PC_Image}
              />
              <div className={styles.PC_TextDiv}>
                <h5 className={styles.PC_TextHeader}>Central Park</h5>
              </div>
            </div>

            <div className={`${styles.parkCard}`}>
              <Image
                    src="/images_content/PC_TaylorPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Taylor Park"
                    className={styles.PC_Image}
              />
              <div className={styles.PC_TextDiv}>
                <h5 className={styles.PC_TextHeader}>Taylor Park</h5>
              </div>
            </div>
          </div>

          <div className={styles.PC_Container}>
          <div className={`${styles.parkCard}`}>
              <Image
                    src="/images_content/PC_ConfederationPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Confederation Park"
                    className={styles.PC_Image}
              />
              <div className={styles.PC_TextDiv}>
                <h5 className={styles.PC_TextHeader}>Confederation Park</h5>
              </div>
            </div>

            <div className={`${styles.parkCard}`}>
              <Image
                    src="/images_content/PC_KensingtonPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Kensington Park"
                    className={styles.PC_Image}
              />
              <div className={styles.PC_TextDiv}>
                <h5 className={styles.PC_TextHeader}>Kensington Park</h5>
              </div>
            </div>
          </div>
         
        </section>
        <button className={styles.showMoreButton}>Show More</button>

        <section className={styles.discoverBCParks}>
          <div className={styles.discoverBCParks_header}>
            <h3>Discover BC Parks</h3>
          </div>
          <div className={styles.BCParksContainer}>
            <div className={styles.BCPark1}>
              <h5>Bert Flinn Park</h5>
            </div>
            <div className={styles.BCPark2}>
              <h5>Aspenwood Park</h5>
            </div>
            <div className={styles.BCPark3}>
              <h5>David Lam Park</h5>
            </div>
          </div>
        </section>

<br></br>
        <Link href='/Quiz/QuizStart'>Quiz</Link>
      </main>
    </>
  );
}
