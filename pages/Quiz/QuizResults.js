import Link from "next/link";
import styles from "@/styles/Quiz/QuizResults.module.css";
import Image from "next/image";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { quiz } from "@/data/quizData";
import { useState, useEffect } from "react";
import HeadArea from "@/components/HeadArea";

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

        if (totalScore === questions.length) {
            document.getElementById("badgeDiv").style.display = "block";
            document.getElementById("championBadgeDiv").style.display = "block";
        } else if (totalScore === questions.length - 1) {
            document.getElementById("badgeDiv").style.display = "block";
            document.getElementById("goldBadgeDiv").style.display = "block";
        } else if (totalScore === questions.length - 2) {
            document.getElementById("badgeDiv").style.display = "block";
            document.getElementById("silverBadgeDiv").style.display = "block";
        } else if (totalScore === questions.length - 3) {
            document.getElementById("badgeDiv").style.display = "block";
            document.getElementById("bronzeBadgeDiv").style.display = "block";
        } else {
            document.getElementById("badgeDiv").style.display = "block";
            document.getElementById("noBadgeDiv").style.display = "block";
        }



        setScore(totalScore);
    }

    return (
        <main className={styles.QSContainer}>
            <HeadArea
                title="Quiz Results"
            />
            <MenuBack/>
            <div className={styles.innerWrapper}>
                <div id="badgeDiv" className={styles.badgeDiv}>
                    <div id="championBadgeDiv" className={styles.innerChampionDiv}>
                        <h3>You got 4 out of 4 correct!</h3>
                        <Image
                            src="/images_interface/central_champion.svg"
                            width={250}
                            height={250}
                            alt="image of central park quiz champion badge"
                            className={styles.imageBadge}
                        />
                        <h5 className={styles.popUpBodyText}>You received the champion badge for Central Park. Well done!</h5>
                    </div>
                    <div id="goldBadgeDiv" className={styles.innerGoldDiv}>
                        <h3>You got 3 out of 4 correct!</h3>
                        <Image
                            src="/images_interface/central_gold.svg"
                            width={250}
                            height={250}
                            alt="image of central park quiz gold badge"
                            className={styles.imageBadge}
                        />
                        <h5 className={styles.popUpBodyText}>You received the gold badge for Central Park. Nicely done!</h5>
                    </div>
                    <div id="silverBadgeDiv" className={styles.innerSilverDiv}>
                        <h3>You got 2 out of 4 correct!</h3>
                        <Image
                            src="/images_interface/central_silver.svg"
                            width={250}
                            height={250}
                            alt="image of central park quiz silver badge"
                            className={styles.imageBadge}
                        />
                        <h5 className={styles.popUpBodyText}>You received the silver badge for Central Park. Not too shabby!</h5>
                    </div>
                    <div id="bronzeBadgeDiv" className={styles.innerBronzeDiv}>
                        <h3>You got 1 out of 4!</h3>
                        <Image
                            src="/images_interface/central_bronze.svg"
                            width={250}
                            height={250}
                            alt="image of central park quiz bronze badge"
                            className={styles.imageBadge}
                        />
                        <h5 className={styles.popUpBodyText}>You tried. Here's the bronze badge for Central Park.</h5>
                    </div>
                    <div id="noBadgeDiv" className={styles.innerNoBadgeDiv}>
                        <h3>You got 0 out of 4!</h3>
                        <Image
                            src="/images_interface/sadsqwee.svg"
                            width={250}
                            height={250}
                            alt="image of sad sqwee squirrel with a broken acorn"
                            className={styles.imageBadge}
                        />
                        <h5 className={styles.popUpBodyText}>Sqwee is very sad.</h5>
                    </div>
                    <button 
                            onClick={() => router.push('/Quiz/QuizStart')}
                            className={styles.buttonTryAgain}
                            tabIndex={31}
                            >Try Again
                        </button>
                </div>
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
                                className={styles.iconCross}
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
                    className={styles.buttonCollectBadge}
                    tabIndex={31}
                    >Collect Badge
                </button>
                
            </div>
            <Image
                src="/images_interface/sqwee_4_acorns.svg"
                width={120}
                height={120}
                alt="image of central park quiz badge"
                className={styles.imageSqwee}
            />
            <Image
                src="/images_interface/Tree_cropped.svg"
                width={430}
                height={650}
                alt="image of a forest with a trail curving into it"
                className={styles.imageTree}
            />
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