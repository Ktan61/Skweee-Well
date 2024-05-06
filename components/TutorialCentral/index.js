import React from "react";
import styles from "./ TutorialCentral.module.css";
import Link from "next/link";

const TutorialCentral = ({ onClose }) => {
  return (
    <div className={styles.tutorialCentral}>
      <div className={styles.tutorialCentralContent}>
        <h2>How to Use Park Pages</h2>
        <p>Central Park Tutorial</p>
        <Link href="/CentralPark">
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorialCentral;
