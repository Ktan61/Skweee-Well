import { useState } from 'react';
import Link from 'next/link';
import styles from './Filter.module.css';
import Image from 'next/image';

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <aside className={`${styles.filter}`}>
            <div className={styles.sqweeeFilter}>
                <Image
                    src="/images_interface/filterSqweee.svg"
                    width={132}
                    height={113}
                    alt="Sqweee helping filter the Parks Library"
                />
            </div>
            <div className={styles.filterContent}>
                <div className={styles.header}>
                    <h3>Filters</h3>
                    <Image
                        src="/images_interface/filter-Close.svg"
                        width={43}
                        height={44}
                        alt="Close icon to close filter"
                        onClick={toggleFilter}
                        className={styles.sqweeeFilter}
                    />
                </div>
                <br></br>
                <div className={styles.chips}>
                    <ul className={styles.chipsList}>
                        <Link href="/" className={styles.links}>
                          <li><h5>Washroom</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Picnic Tables</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Golf Course</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Water Fountain</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Pet Friendly</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Playground</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Swimming Pool</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Trails</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Sports Amenities</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Concession</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Stadium</h5></li>
                        </Link>
                        <Link href="/" className={styles.links}>
                          <li><h5>Sqweee Hunt</h5></li>
                        </Link>
                    </ul>

                </div>
               


            </div>


        </aside>
      </div>
    </>
  );
};

export default Filter;