import { useState } from "react";
import styles from './BadgeCollection.module.css';
import Image from "next/image";

export default function BadgeCollection({ onClose }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.popupArea}>
                    <div onClick={onClose} className={styles.closePopup}>Close</div>
                    <div className={styles.bookContainer}>
                        <Image
                            src="/images_content/notebook2.png"
                            width={450}
                            height={320}
                            alt="a journal with three badges inside"
                            className={styles.journal}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}