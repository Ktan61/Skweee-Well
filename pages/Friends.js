import styles from "@/styles/Friends.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";

export default function Friends() {
    return (
        <>
            <HeadArea
                title="Friends"
            />
            <MenuBack />
            <main className={`${styles.main}`}>
                <div className={styles.friendsPage}>
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
                <div className={styles.bioContainer}>
                    <textarea className={styles.bioText} placeholder="Lover of nature, family and friends"></textarea>
                </div>
                <div className={styles.swirlContainer}>
          <Image
            src="/images_interface/orange_swirl.svg"
            width={760.51}
            height={610.78}
            alt="orange swirl background"
            className={styles.imageSwirl}
          />
        </div>
            <div className={styles.friendListContainer}>
                <h3 className={styles.friendsHeader}>My Friends</h3>
            <div className={styles.friend}>bojackhorseman5</div>
            <div className={styles.friend}>sunshinelover222</div>
            <div className={styles.friend}>pre_malone</div>
            <div className={styles.friend}>tttamara01</div>
            <div className={styles.friend}>madelineee</div>
            <div className={styles.friend}>sillylilly2006</div>
            <div className={styles.friend}>seeyapia1</div>
            </div>
            </div>
            </main>
            <div className={styles.background}></div>
            <Navbar />
        </>
    )
}