import Link from "next/link";
import styles from "@/styles/Quiz/QuizStart.module.css";
import Image from "next/image";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";

export default function Quiz() {
    return (
        <main className={styles.main}>
            <section className={styles.gridLeft}>

            </section>
            <section className={styles.gridCenter}>
                <MenuBack/>
                <div className={styles.QSContainer}>
                    <h3 tabIndex={30}>Scavenger Hunt Quiz</h3>
                    <div tabIndex={31}>
                        <Image
                            src="/images_content/image_33.png"
                            width={430}
                            height={430}
                            alt="image of a forest with a trail curving into it"
                            className={styles.Image}
                        />
                    </div>
                    <h4 className={styles.quizTime} tabIndex={32}>Quiz Time!</h4>
                    <p className={styles.quizBody} tabIndex={33}>You've completed the locations for this hunt, now it's time to test your knowledge about Central Park! </p>
                    <Link href='/Quiz/QuizQuestions' className={styles.button} tabIndex={34}>
                        <button >Start Quiz</button>
                    </Link>
                    <Navbar/>
                </div>
            </section>
            <section className={styles.gridRight}>

            </section>
        </main>
    )
}