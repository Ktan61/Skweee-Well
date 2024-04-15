import Link from "next/link";
import styles from "@/styles/Quiz/QuizStart.module.css";
import Image from "next/image";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import HeadArea from "@/components/HeadArea";

export default function Quiz() {
    const router = useRouter();

    return (
        <main className={styles.main}>
            <HeadArea
                title="Scavenger Hunt Quiz"
            />
            <section className={styles.gridLeft}></section>
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
                    <button 
                        className={styles.button}
                        tabIndex={34}               
                        onClick={() => router.push("/Quiz/QuizQuestions")}> Start Quiz
                    </button>
                    <Navbar/>
                </div>
            </section>
            <section className={styles.gridRight}></section>
        </main>
    )
}