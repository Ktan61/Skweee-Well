import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <HeadArea
        title="Profile"
      />
      <MenuBack/>
      <Navbar/>
      <main className={`${styles.main}`}>
       <div className={styles.topSectionContainer}>
        <h3 className={styles.pageHeader}>My Profile</h3>
        <div className={styles.profilePhotoContainer}>
        <Image
        src="/images_content/profile-photo.jpg"
        width={200}
        height={200}
        alt="profile photo of a woman with brown hair"
        className={styles.profilePhoto}
      />
      </div>
      <div className={styles.passportIconContainer}>
      <Image
        src="/images_interface/passport-icon.png"
        width={60}
        height={60}
        alt="orange book icon for badge collection"
        className={styles.passportIcon}
      />
      </div>
      <div className={styles.username}>
    <h4>@naturelover222</h4>
      </div>
      </div>
      <h3 className={styles.galleryHeader}>My Gallery</h3>
      <div className={styles.galleryContainer}>

      </div>
      </main>
    </>
  );
}
