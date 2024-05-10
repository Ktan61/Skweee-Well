import { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import Image from 'next/image';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div>
        <aside className={`${styles.sidebar}`}>
          <ul className={styles.menuList}>
           
            <li className={styles.listItemFirst}><Link href="/SettingsMenu" className={styles.link}>
              <Image
                src="/images_interface/settings.png"
                width={30}
                height={30}
                alt="gear icon representing settings"
                className={styles.icon}
                onClick={toggleSidebar}
              />
              Account Settings</Link></li>
            <li className={styles.listItem}><Link href="/AboutUs" className={styles.link}>
              <Image
                src="/images_interface/acorn-settings.png"
                width={30}
                height={30}
                alt="acorn icon representing about us"
                className={styles.icon}
                
              />
              About Us</Link></li>
            <li className={styles.listItem}><Link href="/Community" className={styles.link}>
              <Image
                src="/images_interface/community-settings.png"
                width={30}
                height={30}
                alt="people icon representing community page"
                className={styles.icon}
              />
              Community Page</Link></li>
            <li className={styles.listItem}><Link href="/Help" className={styles.link}>
              <Image
                src="/images_interface/help-settings.png"
                width={30}
                height={30}
                alt="help icon representing help page"
                className={styles.icon}
              />
              Help</Link></li>
            <li className={styles.listItem}><Link href="/" className={styles.link}>
              <Image
                src="/images_interface/logout-settings.png"
                width={30}
                height={30}
                alt="logout icon "
                className={styles.icon}
              />
              Logout Account</Link></li>
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
      {sidebarOpen} 
    </>
  );
};

export default Sidebar;