import styles from "@/styles/AboutUs.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import HeadArea from "@/components/HeadArea";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <HeadArea
        title="About Us"
      />
      <MenuBack />
      <Image
                  src="/images_interface/AboutUs_OrangeBG.svg"
                  width={430}
                  height={602}
                  alt="Orange swirl background"
                  className={styles.imageOrangeBG}
            />
            
      <Navbar />
      <main className={`${styles.main}`}>
        <section className={styles.sqwellDesc}>
          <div className={styles.textContent}>
            <h3 tabIndex={3}>About Us</h3>
            <br></br>
            <p>The Sqwell team comprises<br></br>passionate individuals with<br></br>diverse backgrounds in<br></br>design, and outdoor recreation,<br></br>driven by a shared love for nature. The app features<br></br>an interactive scavenger hunt, offering themed<br></br>adventures tailored to the unique "special tidbits" of<br></br>each park in British Columbia, Canada. From wildlife<br></br>spotting to historical discoveries and brain-teasing<br></br>riddles, these hunts turn park exploration into a playful<br></br>and immersive experience, encouraging users to engage deeply with their surroundings while fostering a deeper appreciation for the natural world.</p>
            <br></br>
            <p>With Sqwell, the team aims to make every visit to a<br></br>BC park an unforgettable adventure filled with<br></br>excitement and discovery.</p>
          </div>
            <Image
                  src="/images_interface/AboutUs_Tree.svg"
                  width={208}
                  height={534}
                  alt="tree design"
                  className={styles.imageTreeBG}
            />
        </section>
        <br></br>
        
        <section className={styles.sqwellTeam}>
        <h4>Meet Sqweee</h4>
          <div className={styles.members}>
            <div className={styles.headShot}>
              <Image
                src="/images_content/AboutUs_Sqwee.svg"
                width={163.3}
                height={123}
                alt="Sqwee the Squirrel photo"
              />
            </div>
            <div className={styles.memberBlurb}>
              <p>Sqweee is the ambassador of the Sqwell app! With his knack for finding the best acorns, Sqweee is more than just a squirrel; he's your trusty guide to navigating the Sqwell universe.</p>
            </div>
          </div>
          <br></br>
          <h4>Sqwell Team</h4>
          <div className={styles.members}>
            <div className={styles.headShot}>
            <Image
                    src="/images_content/Kathryn.svg"
                    width={129}
                    height={129}
                    alt="Kathryn Tan photo"
              />
              </div>
              <div className={styles.memberBlurb}>
              <h5>Kathryn Tan</h5>
              <p>Hello squirrel pals! I am part of the D3 program at BCIT, and am learning the ropes to be a designer and developer. With this web app, I hope to share my love for visiting parks, and biking outdoors. Thank you for visiting Sqwell!</p>
              </div>
          </div>
          <div className={styles.members}>
            <div className={styles.headShot}>
            <Image
                    src="/images_content/Madeline.svg"
                    width={129 }
                    height={129}
                    alt="Madeline Struthers photo"
              />
              </div>
              <div className={styles.memberBlurb}>
              <h5>Madeline Struthers</h5>
              <p>Hello! I am a D3 student finishing my first year at BCIT. I enjoy going outside, painting, and spending quality time with friends and family. I hope to continue to develop my design skills and have a successful career as a digital designer.</p>
              </div>
          </div>
          <div className={styles.members}>
            <div className={styles.headShot}>
            <Image
                    src="/images_content/Pia.svg"
                    width={129 }
                    height={129}
                    alt="Pia Mendoza photo"
              />
              </div>
              <div className={styles.memberBlurb}>
              <h5>Pia Mendoza</h5>
              <p>Hey Sqwell friends! I am a D3 student at BCIT. I hope to be a better designer and developer through the D3 program. I enjoy nature strolls, listening to music, and reading. I hope you had fun with Sqwee!</p>
              </div>
          </div>

        </section>
      </main>
    </>
  );
}

