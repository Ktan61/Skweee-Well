import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import TutorialOverlayPopup from "@/components/TutorialOverlayPopop";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  const [data, setData] = useState([]);

  var welcome = process.env.NEXT_PUBLIC_WELCOME;
  var name = process.env.NEXT_PUBLIC_NAME;
  var url = `https://gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData1/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json${name}`
    
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((info) => {
      setData(info.articles)
      console.log(info.articles)
    })
  }, [])
return (
    <>
      <HeadArea
        title="Sqwell Home"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
        <section className={styles.bannerSection}>
          <h1 className={styles.welcome}>
            {welcome}
          </h1>
          <Image
            src="/images_interface/sqwee_big_acorn.svg"
            width={148}
            height={122}
            alt="image of sqwee the squirrel holding a giant acorn"
            className={styles.imageSqweeAcorn}
            tabIndex={10}
          />
        </section>
        MAIN
        {name}
          {
        data.map((i, index) => {
          return(
            <div key={index}>
              {i.author}
            </div>
          )
        })
       }
        <button>
        <Link href={'/FAQ'}>FAQ Page</Link>
        </button>
      </main>
      <Image
                src="/images_interface/Tree_cropped.svg"
                width={430}
                height={650}
                alt="image of a forest with a trail curving into it"
                className={styles.imageTree}
            />
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
