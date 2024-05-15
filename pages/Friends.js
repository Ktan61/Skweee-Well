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
                    <div className={styles.profilePhotoContainer} tabIndex={3}>
                        <Image
                            src="/images_content/profile-photo.jpg"
                            width={200}
                            height={200}
                            alt="profile photo of a woman with brown hair"
                            className={styles.profilePhoto}
                        />
                    </div>

                    <div className={styles.username} >
                        <h4 tabIndex={4}>@naturelover222</h4>
                    </div>
                    <div className={styles.bioContainer}>
                        <textarea className={styles.bioText} placeholder="Lover of nature, family and friends" tabIndex={5}></textarea>
                    </div>
                    <div className={styles.friendListContainer}>
                        <h3 className={styles.friendsHeader}>My Friends</h3>
                        <div className={styles.friend} tabIndex={6}>bojackhorseman5</div>
                        <div className={styles.friend} tabIndex={7}>sunshinelover222</div>
                        <div className={styles.friend} tabIndex={8}>pre_malone</div>
                        <div className={styles.friend} tabIndex={9}>tttamara01</div>
                        <div className={styles.friend} tabIndex={10}>madelineee</div>
                        <div className={styles.friend} tabIndex={11}>sillylilly2006</div>
                        <div className={styles.friend} tabIndex={12}>seeyapia1</div>
                    </div>
                </div>
            </main>
            <div className={styles.background}></div>
            <Navbar />
        </>
    )
}