import styles from "@/styles/SettingsMenu.module.css"
import Link from "next/link";
import Image from "next/image";
import HeadArea from "@/components/HeadArea";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";

export default function SettingsMenu(){
    return(
        <>
                 <HeadArea
                title="Settings Menu"
            />
            <MenuBack />
      <main className={styles.main}>
      <div>
        <aside className={`${styles.sidebar}`}>
          <ul className={styles.menuList}>
            <li>
              <Image
                src="/images_interface/settings.png"
                width={30}
                height={30}
                alt="gear icon representing settings"
                className={styles.icon}
              />
              Language Settings</li>
           
            <li className={styles.user}><Link href="/Profile">
              <Image
                src="/images_interface/profile-settings.png"
                width={30}
                height={30}
                alt="logout icon "
                className={styles.userIcon}
              />
              <span className={styles.userName}>@naturelover222</span></Link></li>
          </ul>
        </aside>
      </div>
      <div className={styles.background}></div>
      <div className={styles.background}></div>
      </main>
      <Navbar />
        </>
    )
}