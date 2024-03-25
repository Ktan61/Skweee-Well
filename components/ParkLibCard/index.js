import styles from './ParkLibCard.module.css'

export default function ParkLibCard() {
    return (
        <>
            <Link>
                <div className={styles.parkCard}>
                    <div className={styles.parkImage}>
                        <Image
                            src="/"
                            alt="alt text"
                            width={185}
                            height={166}
                        />
                    </div>
                    <div className={styles.parkName}>
                        <h4>
                            Park Name
                        </h4>
                    </div>
                </div>
            </Link>
        </>
    )
}
