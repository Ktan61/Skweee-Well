import { useState } from "react";
import styles from './Accordion.module.css'

export default function Accordion({
    question,
    answer,
    icon
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.main}>
            <hr className={styles.line}/>
            <div className={styles.block}>
                <span className={styles.icon}>{icon}</span>
                <h5 
                    className={styles.question}
                    onClick={() => setIsActive(!isActive)}
                    tabIndex={30}
                >
                    {question}
                </h5>
                <div 
                    className={styles.arrow}
                    onClick={() => setIsActive(!isActive)}
                >{isActive ? '∧' : '∨'}</div>
            </div>
            {isActive && <div className={styles.answer}>{answer}</div>}
        </div>
    )
}