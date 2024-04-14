import Link from "next/link";
import styles from "@/styles/Quiz/QuizResults.module.css";
import Image from "next/image";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { quiz } from "@/data/quizData";
import { useState, useEffect } from "react";

export default function QuizResults() {
    const router = useRouter();
    const [selectedAnswers, setSelectedAnswers] = useState("0");
    const {questions} = quiz;
    let resultAnswers = [];
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (router.isReady) {
            setSelectedAnswers(router.query.resultAnswers);
        }
    }, [router.isReady]); 

    const calculateScore = () => {
        let totalScore = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].correctAnswer === questions[i].answers[Number(selectedAnswers.split("")[i])]) {
                totalScore += 1;
            }
        }
        setScore(totalScore);
    }

    return (
        <main className={styles.QSContainer}>
            <MenuBack/>
            <div className={styles.innerWrapper}>
                <Image
                    src="/images_interface/Tree.svg"
                    width={528}
                    height={650}
                    alt="image of a forest with a trail curving into it"
                    className={styles.imageTree}
                />
                <Image
                    src="/images_interface/badge_1st.png"
                    width={125}
                    height={125}
                    alt="image of central park quiz badge"
                    className={styles.imageBadge}
                />
                <Image
                    src="/images_interface/sqwee_4_acorns.svg"
                    width={120}
                    height={120}
                    alt="image of central park quiz badge"
                    className={styles.imageSqwee}
                />
                <h2 tabIndex={30}>Results</h2>
                {selectedAnswers.split("").map((answer, index) => { return (questions[index].correctAnswer === questions[index].answers[answer]) ? 
                    <div key={index} tabIndex={30}>
                        <h4 className={styles.Question}>
                            Question {index + 1}   
                            <p>Correct Answer: {questions[index].correctAnswer}</p>
                        </h4>
                        <p className={styles.yourCorrectAnswer}>
                            <Image
                                src="/images_interface/check.svg"
                                width={30}
                                height={30}
                                alt="check mark beside correct asnwer"
                                className={styles.Image}
                                />
                            Your Answer: 
                            <span>
                                 {" " + questions[index].answers[answer]}
                            </span>
                        </p>
                    </div>
                    : 
                    <div key={index} tabIndex={30}>
                        <h4 className={styles.Question}>
                            Question {index + 1}   
                            <p>Correct Answer: {questions[index].correctAnswer}</p>
                        </h4>
                        <p className={styles.yourWrongAnswer}>
                            <Image
                                src="/images_interface/cross.svg"
                                width={25}
                                height={25}
                                alt="check mark beside correct asnwer"
                                className={`${styles.Image} ${styles.iconCross}`}
                            />
                            Your Answer: 
                            <span>
                                {" " + questions[index].answers[answer]}
                            </span>
                        </p>
                    </div>
                })}
                <button 
                    onClick={() => calculateScore()}
                    className={styles.button}
                    tabIndex={31}
                    >{score}
                </button>
                <button 
                    onClick={() => router.push('/Quiz/QuizStart')}
                    className={styles.button}
                    tabIndex={31}
                    >Try Again
                </button>
            </div>
            <Image
                src="/images_interface/orange_swirl.svg"
                width={760.51}
                height={610.78}
                alt="image of a forest with a trail curving into it"
                className={styles.imageSwirl}
            />
            <Navbar/> 
        </main>
    )
}