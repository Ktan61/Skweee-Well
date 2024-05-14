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
      <header>
        <div className={styles.languageOptions}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/SettingsMenu" locale={locale}>
            <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>
      <main dir={dir} className={styles.main}>
        <div>
          <div className={styles.headerContainer}>
            <h5 className={styles.settingsHeader}>
              <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b>}}/></h5>
          </div>
          <br></br>
          <hr></hr>
          <ul className={styles.menuList}>
            <div className={styles.languageContainer} tabIndex={3}>
              <li className={styles.listItem}>
                <FormattedMessage id="page.home.description"/> </li>
              <Image
                src="/images_interface/enflag.png"
                width={30}
                height={25}
                alt="flag icon "
                className={styles.flagIcon}
                tabIndex={4}
              />
            </div>
            <li className={styles.listItem} tabIndex={5}><FormattedMessage id="page.home.notifications"/>
              <div className={styles.toggleContainer}>
                <label className={styles.switch} tabIndex={6}>
                  <input type="checkbox" checked={checked} onChange={handleChange} />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </div>
            </li>
            <div className={styles.privacyContainer} tabIndex={7}>
              <li className={styles.listItem}><FormattedMessage id="page.home.privacy"/></li>
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
              <li className={styles.listItem}><FormattedMessage id="page.home.profile"/>
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