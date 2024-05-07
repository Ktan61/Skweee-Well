import styles from "@/styles/Community.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";

export default function Community() {
  return (
    <>
      <HeadArea
        title="Community"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
        <h3 className={styles.communityHeader}>Community Leaderboard</h3>
        <div className={styles.leaderboard}>
      <ol className={styles.list}>
        <div className={styles.topThree}>
        <li className={styles.secondPlace}><Image
         src="/images_content/second-place-photo.png"
         width={100}
         height={150}
         alt="profile photo of a woman with brown hair"
         className={styles.profilePhoto}
        /></li>
         <li className={styles.firstPlace}>  <Image
         src="/images_content/first-place-photo.png"
         width={115}
         height={200}
         alt="profile photo of a woman with brown hair"
         className={styles.profilePhoto}
        /></li>
        <li className={styles.thirdPlace}><Image
         src="/images_content/third-place-photo.png"
         width={100}
         height={150}
         alt="profile photo of a woman with brown hair"
         className={styles.profilePhoto}
        /></li>
        </div>
        <li className={styles.runnerUps}>
       <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>4th</div> 
        <Image
         src="/images_content/leaderboard-image.png"
         width={36}
         height={36}
         alt="profile photo of a woman with brown hair"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>marshamoo133</div>
       </div>
      </li>
        <li className={styles.runnerUps}>
        <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>5th</div> 
        <Image
         src="/images_content/leaderboard-image2.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>foodierubie</div>
       </div>
        </li>
        <li className={styles.runnerUps}>
        <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>6th</div> 
        <Image
         src="/images_content/leaderboard-image3.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>sunshinelover222</div>
       </div>
        </li>
        <li className={styles.runnerUps}>
        <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>7th</div> 
        <Image
         src="/images_content/leaderboard-image4.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>tttamara01</div>
       </div>
        </li>
        <li className={styles.runnerUps}>
        <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>8th</div> 
        <Image
         src="/images_content/leaderboard-image5.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>madelineee</div>
       </div>
        </li>
        <li className={styles.runnerUps}>   <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>9th</div> 
        <Image
         src="/images_content/leaderboard-image6.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>bojackhorseman5</div>
       </div></li>
        <li className={styles.runnerUps}>
        <div className={styles.leaderboardPhotoContainer}>
       <div className={styles.positionNumber}>10th</div> 
        <Image
         src="/images_content/leaderboard-image7.png"
         width={36}
         height={36}
         alt="profile photo of a woman"
         className={styles.leaderboardPhoto}
        />
       <div className={styles.runnerUpUsername}>silly_lilly2006</div>
       </div>
        </li>
      </ol>
        </div>
        <h3 className={styles.eventsHeader}>Upcoming Local Events</h3>
        <div className={styles.FPContainer}>
        <div className={styles.featuredParksCard}>
            <Image
                  src="/images_content/event-card-image.png"
                  width={390}
                  height={215}
                  alt="outdoorsy image of a young family sitting together"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Family Friday's</h4>
              <p>Join us for snacks, activities, and endless family fun every Friday! </p>
              <br></br>
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
        </div>
        <div className={styles.FPContainerTwo}>
        <div className={styles.featuredParksCard}>
            <Image
                  src="/images_content/event-card-image2.png"
                  width={390}
                  height={215}
                  alt="colourful image of a childs hand picking up chalk"
                  className={styles.FPC_Image}
            />
            <div className={styles.FPC_TextDiv}>
              <h4 className={styles.FPC_TextHeader}>Chalk in the Park</h4>
              <p>Let creativity shine as they decorate the pathways with vibrant colours and  designs. </p>
          
              <p 
                className={styles.FPC_LearnMore}
              >Learn more &#8594;</p>
            </div>
          </div>
        </div>
        <div className={styles.background}></div>
      </main>
      <Navbar/>
    </>
  );
}

