import { useState } from "react";

export default function Accordion({
    question,
    answer
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            Question: 
            <div onClick={() => setIsActive(!isActive)}>
                {question}
                <div>{isActive ? '∨' : '∧'}</div>
            </div>
            {isActive && <div>{answer}</div>}
        </>
    )
}