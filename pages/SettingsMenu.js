import styles from "@/styles/SettingsMenu.module.css"
import Link from "next/link";
import Image from "next/image";
import HeadArea from "@/components/HeadArea";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useState } from "react"
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from "react-intl";


export default function SettingsMenu({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" })
  const description = intl.formatMessage({ id: "page.home.head.meta.description" })

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <HeadArea
        title="Settings Menu"
      />
      <MenuBack />
      
      <div className={styles.languagesContainer}>
        <div className={styles.languageOptions}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/SettingsMenu" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </div>
      <main dir={dir} className={styles.main}>
        <div>
          <div className={styles.headerContainer}>
            <h5 className={styles.settingsHeader}>
              <FormattedMessage id="page.home.title" tabIndex={3} values={{ b: (info) => <b>{info}</b> }} /></h5>
          </div>
          <br></br>
          <hr className={styles.hr}></hr>
          <ul className={styles.menuList}>
            <div className={styles.languageContainer}>
              <li className={styles.listItem}>
                <FormattedMessage id="page.home.description" tabIndex={4}/> </li>
            </div>
            <li className={styles.listItem} ><FormattedMessage id="page.home.notifications" />
              <div className={styles.toggleContainer}>
                <label className={styles.switch} tabIndex={5}>
                  <input type="checkbox" checked={checked} onChange={handleChange} />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </div>
            </li>
            <div className={styles.privacyContainer} tabIndex={6}>
              <li className={styles.listItem}><FormattedMessage id="page.home.privacy" /></li>
              <Image
                src="/images_interface/lockIcon.png"
                width={27}
                height={29}
                alt="lock icon "
                className={styles.icon}
                tabIndex={7}
              />
            </div>
            <div className={styles.profileContainer} tabIndex={8}>
              <li className={styles.listItem}><FormattedMessage id="page.home.profile" />
              </li> <Image
                src="/images_interface/profile-settings.png"
                width={30}
                height={30}
                alt="profile photo icon "
                className={styles.icon}
                tabIndex={9}
              /></div>
          </ul>
        </div>
        <div className={styles.background}></div>
      </main>
      <Navbar />
    </>
  )
}