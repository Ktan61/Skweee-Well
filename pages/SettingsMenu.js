import styles from "@/styles/SettingsMenu.module.css"
import Link from "next/link";
import Image from "next/image";

export default function SettingsMenu(){
    return(
        <>
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
              Account Settings</li>
           
            <li className={styles.user}><Link href="/Profile" className={styles.user}>
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
        </>
    )
}