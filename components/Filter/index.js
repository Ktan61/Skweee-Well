import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Filter.module.css';
import Image from 'next/image';
import { inventory } from "@/data/parksData";

const Filter = ({ onChange }) => {
  const [selectedCat, setSelectedCat] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = (category) => {
    setSelectedCat(category);
    onChange && onChange(category);
  };
  
  const closeFilter = () => {
    setFilterOpen(false);
    onChange && onChange("");
  };

  return (
    <div className={styles.filterContainer}>
      <aside className={`${styles.filter}`}>
        <div className={styles.sqweeeFilter}>
          <Image
            src="/images_interface/filterSqweee.svg"
            width={132}
            height={113}
            onClick={closeFilter}
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
              onClick={closeFilter}
              className={styles.sqweeeFilter}
            />
          </div>
          <br />
          <div className={styles.chips}>
            <ul className={styles.chipsList}>
              <li className={styles.links} onClick={() => toggleFilter("Washroom")}>
                <h5>Washroom</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Picnic Tables")}>
                <h5>Picnic Tables</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Golf Course")}>
                <h5>Golf Course</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Water Fountain")}>
                <h5>Water Fountain</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Pet Friendly")}>
                <h5>Pet Friendly</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Playground")}>
                <h5>Playground</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Swimming Pool")}>
                <h5>Swimming Pool</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Trails")}>
                <h5>Trails</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Sports Amenities")}>
                <h5>Sports Amenities</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Concession")}>
                <h5>Concession</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Stadium")}>
                <h5>Stadium</h5>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Sqweee Hunt")}>
                <h5>Sqweee Hunt</h5>
              </li>

            </ul>
          </div>
        </div>


        </aside>
      </div>

  );
};

export default Filter;