import Link from 'next/link';
import styles from './ParksInfo.module.css';

export default function ParksInfo({ parksData }) {
    const { image, parkName } = parksData;
    const parkLinks = {
        "Robert Burnaby Park": "https://www.burnaby.ca/explore-outdoors/parks/robert-burnaby-park",
        "Burnaby Mountain Conservation Area": "https://www.burnaby.ca/explore-outdoors/parks/burnaby-mountain-conservation-area",
        "Central Park": "/CentralPark",
        "Taylor Park": "https://www.burnaby.ca/explore-outdoors/parks/taylor-park",
        "Confederation Park": "https://www.burnaby.ca/explore-outdoors/parks/confederation-park",
        "Kensington Park": "https://www.burnaby.ca/explore-outdoors/parks/kensington-park"
    };


    const isExternalLink = parkLinks[parkName].startsWith("http");

    return (
        <div className={styles.PC_Container}>
            {isExternalLink ? (
                <Link href={parkLinks[parkName]} target="_blank" rel="noopener noreferrer" className={styles.parkCard}>
                    <p className={styles.PC_ImageDiv}>{image}</p>
                    <div className={styles.PC_TextDiv}>
                        <h5 className={styles.PC_TextHeader}>{parkName}</h5>
                    </div>
                </Link>
            ) : (
                <Link href={parkLinks[parkName]} passHref>
                    <div className={styles.parkCard}>
                        <p className={styles.PC_ImageDiv}>{image}</p>
                        <div className={styles.PC_TextDiv}>
                            <h5 className={styles.PC_TextHeader}>{parkName}</h5>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
