'use client'
import { useState } from "react";
import { quiz } from "@/data/quizData";
import styles from "@/styles/Quiz/QuizQuestions.module.css";
import MenuBack from "@/components/MenuBack";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import useSound from "use-sound";

export default function qPage() {
    const router = useRouter();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [success, setSuccess] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers:0,
    });
    const {questions} = quiz;
    const {question, answers, correctAnswer} = questions[activeQuestion];
    const [buttonSound] = useSound('/sound/button.mp3');

    // Select and check answer
    const onAnswerSelected = (answer, index) => {
        buttonSound();
        setSelectedAnswers(selectedAnswers + index);
        if (answer === correctAnswer) {
            setSuccess(true);
        }
        var questionResult = document.getElementById("resultDiv");
        questionResult.style.display = "block";
        console.log(selectedAnswers);
    };

    // Calculate score and increment to next question
    const nextQuestion = () => { 
        var questionResult = document.getElementById("resultDiv");
        questionResult.style.display = "none";
        setSuccess(false);

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } 
    };


    return (
        <main className={styles.page}>
            <HeadArea
                title="Central Park Quiz"
            />
            <MenuBack/>
            <div className={styles.innerQuizContainer}>
                <div className={styles.headingContainer}>
                    <h5 className={styles.questionHeading} tabIndex={30}>Question: {activeQuestion + 1} <span className={styles.questionHeading}>/{questions.length}</span></h5>
                    <h5 className={styles.questionHeadingAcorn}>{activeQuestion + 1}</h5>
                    <Image
                        src="/images_interface/acorn.svg"
                        width={75}
                        height={75}
                        alt="image of an acorn with the question number in front of it"
                        className={styles.imageAcorn}
                        tabIndex={31}
                    />
                </div>
                <div className={styles.answerPopUp} id="resultDiv">
                    {success? 
                        (
                            <div className={styles.popUpInner}>
                                <h3>Your answer is correct!</h3>
                                <Image
                                    src="/images_interface/quiz_acorn.svg"
                                    width={200}
                                    height={200}
                                    alt="image of an acorn received as a prize"
                                    className={styles.imageQuizAcorn}
                                />
                                <h5 className={styles.popUpBodyText}>Here's an acorn for getting the correct answer.</h5>
                            </div>
                        ):(
                            <div className={styles.popUpInner}>
                                <h3>Wrong answer</h3>
                                <Image
                                    src="/images_interface/quiz_acorn_broken.svg"
                                    width={250}
                                    height={250}
                                    alt="image of a broken acorn"
                                    className={styles.imageQuizAcorn}
                                />
                                <h5 className={styles.popUpBodyText}>Better luck next time!</h5>
                            </div>
                        )                          
                    }
                    {
                        (activeQuestion !== questions.length - 1) ?  
                        <button className={styles.button} tabIndex={10} onClick={() => {nextQuestion()}}>Next Question</button> 
                        : 
                        <Link 
                            href={{
                                pathname: '/Quiz/QuizResults',
                                query: {resultAnswers: selectedAnswers}, 
                            }}>
                            <button className={styles.button} tabIndex={31}>Results</button> 
                        </Link>
                    }
                </div>                    
                <div className='quiz-container'>
                    <h4 className={styles.activeQuestion} tabIndex={31}>{questions[activeQuestion].question}</h4>
                    {answers.map((answer, index) => (
                        <li 
                            key={index} 
                            onClick= {() => onAnswerSelected(answer, index)}
                            className={styles.answerOptions}
                            tabIndex={32}
                        >
                            <span className={styles.answerOptionsText}>{answer}</span>
                        </li>
                    ))}
                </div>
            </div>
            <div className={styles.indicator}>
                {
                (activeQuestion > -1) ? (activeQuestion > 0) ? (activeQuestion > 1) ? (activeQuestion > 2) ? 
                <p>
                    <Image
                        src="/images_interface/indicator_q4.svg"
                        width={430}
                        height={90}
                        alt="image of a forest with a trail curving into it"
                        className={styles.indicator}
                    />
                </p> : 
                <p> 
                    <Image
                        src="/images_interface/indicator_q3.svg"
                        width={430}
                        height={90}
                        alt="image of a forest with a trail curving into it"
                        className={styles.indicator}
                    />
                </p> :
                <p>
                    <Image
                        src="/images_interface/indicator_q2.svg"
                        width={430}
                        height={90}
                        alt="image of a forest with a trail curving into it"
                        className={styles.indicator}
                    />
                </p> :
                <p>
                    <Image
                        src="/images_interface/indicator_q1.svg"
                        width={430}
                        height={90}
                        alt="image of a forest with a trail curving into it"
                        className={styles.indicator}
                    /> 
                </p> :
                <p></p>  
                }
            </div>
            <Image
                src="/images_interface/orange_swirl.svg"
                width={760.51}
                height={610.78}
                alt="image of a forest with a trail curving into it"
                className={styles.imageSwirl}
            />
            <div className={styles.background}></div>
            <Navbar/>
        </main>
    )
}