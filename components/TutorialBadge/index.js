import { useState } from "react";
import styles from './TutorialOverlayPopup.module.css';

export default function TutorialOverlayPopup(){
    const [popup, setPopup] = useState(true);
    return(
        <>
        {
            popup ? 
                <div className={styles.container}>
                        <div className={styles.popupArea}>
                            <div onClick={() => setPopup(false)} className={styles.closePopup}>Close</div>
                       <p className={styles.popupHeader}>How to use Sqwell</p> 
                       <p className={styles.tutorialInfo}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore quis<br></br> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>Duis aute irure dolor in reprehenderit <br></br>in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br></br>sint occaecat cupidatat non proident, 
                       <br></br>sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
                       </p>
                        </div>
                </div> 
                : <></>
        }
        </>
    )
}