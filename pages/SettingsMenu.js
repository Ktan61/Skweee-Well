import styles from "@/styles/SettingsMenu.module.css"
import Link from "next/link";
import Image from "next/image";
import HeadArea from "@/components/HeadArea";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useState } from "react"

export default function SettingsMenu(){
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

    return(
        <>
                 <HeadArea
                title="Settings Menu"
            />
            <MenuBack />
      <main className={styles.main}>
      <div>
        <div className={styles.headerContainer}>
       <h5 className={styles.settingsHeader}>Account Settings</h5>
           </div>  
           <br></br>
           <hr></hr> 
          <ul className={styles.menuList}>
            <div className={styles.languageContainer} tabIndex={3}>
            <li className={styles.listItem}>
              Language Preference</li>
              <Image
                src="/images_interface/enflag.png"
                width={30}
                height={25}
                alt="flag icon "
                className={styles.flagIcon}
                tabIndex={4}
              />
              </div>
              <li className={styles.listItem} tabIndex={5}>Notifications
             <div className={styles.toggleContainer}>
              <label className={styles.switch} tabIndex={6}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        </div>
             </li>
              <div className={styles.privacyContainer} tabIndex={7}>
              <li className={styles.listItem}>Privacy</li>
              <Image
                src="/images_interface/lockIcon.png"
                width={27}
                height={29}
                alt="lock icon "
                className={styles.privacyIcon}
                tabIndex={8}
              />
              </div>
              <div className={styles.profileContainer} tabIndex={9}>
            <li className={styles.listItem}>My Profile
           </li> <Image
                src="/images_interface/profile-settings.png"
                width={30}
                height={30}
                alt="profile photo icon "
                className={styles.userIcon}
                tabIndex={10}
              /></div>
          </ul>
      </div>
      <div className={styles.background}></div>
      </main>
      <Navbar />
        </>
    )
}