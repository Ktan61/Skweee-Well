import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import TutorialOverlayPopup from "@/components/TutorialOverlayPopop";
import { useState, useEffect } from "react";

export default function Home() {

  const [data, setData] = useState([]);
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
      <Navbar/>
    </>
  );
}
