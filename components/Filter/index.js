import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Filter.module.css';
import Image from 'next/image';
import { inventory } from "@/data/parksData";

const Filter = ({ onChange }) => {
  const [selectedCat, setSelectedCat] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const toggleFilter = (category) => {
    setSelectedCat(category);
    onChange && onChange(category);
  };

  const closeFilter = () => {
    setFilterOpen(false);
  };

  const sortByDistance = () => {
    setSortBy("distance");
    onChange && onChange("distance");
  };

  const clearFilters = () => {
    setSelectedCat("");
    setSortBy("");
    onChange && onChange(""); 
  };

  return (
    <div className={styles.filterContainer}>
        {filterOpen && <div className={styles.overlay} onClick={closeFilter}></div>}
        <aside className={`${styles.filter} ${filterOpen ? styles.open : ""}`}>
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
          </div>
          <br />
          <div className={styles.chips}>
            <ul className={styles.chipsList}>
              <li className={styles.links} onClick={() => toggleFilter("Washroom")}>
                <p>Washroom</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Picnic Tables")}>
                <p>Picnic Tables</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Golf Course")}>
                <p>Golf Course</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Water Fountain")}>
                <p>Water Fountain</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Pet Friendly")}>
                <p>Pet Friendly</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Playground")}>
                <p>Playground</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Swimming Pool")}>
                <p>Swimming Pool</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Trails")}>
                <p>Trails</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Sports Amenities")}>
                <p>Sports Amenities</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Concession")}>
                <p>Concession</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Stadium")}>
                <p>Stadium</p>
              </li>
              <li className={styles.links} onClick={() => toggleFilter("Sqweee Hunt")}>
                <p>Sqweee Hunt</p>
              </li>
              <li li className={styles.links} onClick={sortByDistance}>
                <p>Sort by Distance</p>
              </li>
              <br></br>
            </ul>
          </div>

          <div className={styles.clearFilters}>
            <ul className={styles.chipsList}>
              {selectedCat || sortBy ? (
                  <li className={styles.clearFilters} onClick={clearFilters}>
                    <p>Clear Filters</p>
                  </li>
              ) : null}
            </ul>
          </div>

        </div>

      </aside>
    </div>

  );
};

export default Filter;
