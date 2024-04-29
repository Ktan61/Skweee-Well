import styles from './ParksInfo.module.css';
import { inventory } from "@/data/parksData";


export default function ParksInfo({ parksData }) {
    const { image, parkName } = parksData;

    return (
        <div className={styles.PC_Container}>
             <div className={`${styles.parkCard}`}>
                <p className={styles.PC_ImageDiv}>{image}</p>
                <div className={styles.PC_TextDiv}>
                    <h5 className={styles.PC_TextHeader}>{parkName}</h5>
                </div>
             </div>
        </div>
    );
}
