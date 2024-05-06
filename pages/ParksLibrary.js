import React, { useState, useEffect, useRef } from 'react';
import Filter from "@/components/Filter";
import styles from "@/styles/ParksLibrary.module.css";
import Link from "next/link";
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import MenuBack from "@/components/MenuBack";
import Image from "next/image";
import ParksInfo from '@/components/ParksInfo';
import { inventory } from "@/data/parksData";

const ParksLibrary = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef(null);

  useEffect(() => {
    setData(inventory.parks);
    setFilteredData(inventory.parks);

    // Add event listener for clicks outside the filter sidebar
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  useEffect(() => {
    filterParks();
  }, [data, searchQuery]);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChange = (category) => {
    if (category === "") {
      setFilteredData(data);
    } else {
      const filteredParks = data.filter(park => park.amenities.includes(category));
      setFilteredData(filteredParks);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterParks = () => {
    let filteredParks = data;
    if (searchQuery) {
      filteredParks = filteredParks.filter(park =>
        park.parkName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredData(filteredParks);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setFilterOpen(false);
    }
  };

  return (
    <>
      <HeadArea title="Park Library" />
      <MenuBack />
      <Navbar />
      <main className={`${styles.main}`}>
        <section className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search for Parks in Burnaby..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </section>

        <section className={styles.parkLibHeader}>
          <div className={styles.parksHeader}>
            <h3>Parks</h3>
          </div>
          <div className={styles.filterIcon}>
            <Image
              src="/images_interface/filter_icon.svg"
              width={31}
              height={36}
              alt="Filter icon for filtering through the Parks shown"
              onClick={toggleFilter}
              className={styles.imageFilter}
            />
          </div>
          {filterOpen && <div ref={filterRef}><Filter onChange={handleFilterChange} /></div>} 
        </section>

        <section className={styles.PC_Library}>
          <div className={styles.parkCard}>
            {filteredData.map((park, index) => (
              <ParksInfo key={index} parksData={park} />
            ))}
          </div>
        </section>

        <button className={styles.showMoreButton}>Show More</button>

        <section className={styles.discoverBCParks}>
          <div className={styles.discoverBCParks_header}>
            <h3>Discover BC Parks</h3>
          </div>
          <div className={styles.BCParksContainer}>
            <div className={styles.BCPark1}>
              <h5>Bert Flinn Park</h5>
            </div>
            <div className={styles.BCPark2}>
              <h5>Aspenwood Park</h5>
            </div>
            <div className={styles.BCPark3}>
              <h5>David Lam Park</h5>
            </div>
          </div>
        </section>

        <br />
        <Link href='/Quiz/QuizStart'>Quiz</Link>
      </main>
    </>
  );
};

export default ParksLibrary;
