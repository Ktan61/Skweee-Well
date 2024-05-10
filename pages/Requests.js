import styles from "@/styles/Requests.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";

export default function Friends() {
    return (
        <>
            <HeadArea
                title="Requests"
            />
            <MenuBack />
            <main className={`${styles.main}`}>
                <div className={styles.requestPage}>
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
                <h3 className={styles.friendsHeader}>My Requests</h3>
            <div className={styles.friend}>andrewtito5
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
            </div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                sunshinelover123</div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                katherwin</div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                ellafella1</div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                madelineee</div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                riri4lyfe6</div>
            <div className={styles.friend}>
            <input type="checkbox" name="request" className={styles.requestBox}/>
            <input type="checkbox" name="request" className={styles.declineRequestBox}/>
                moongazer44</div>
            </div>
            </div>
            </main>
            <div className={styles.background}></div>
            <Navbar />
        </>
    )
}