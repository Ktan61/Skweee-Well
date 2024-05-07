// Import necessary modules/components
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


  const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.BCParksLink}>
      {children}
    </a>
  );


  useEffect(() => {
    setData(inventory.parks);
    setFilteredData(inventory.parks);

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
    } else if (category === "distance") {
      const sortedParks = [...filteredData].sort((a, b) => a.distance - b.distance);
      setFilteredData(sortedParks);
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

        {/* Search input */}
        <section className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search for Parks in Burnaby..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
            tabIndex={3}
          />
        </section>
        
        {/* Parks header with filter icon */}
        <section className={styles.parkLibHeader}>
          <div className={styles.parksHeader}>
            <h3 tabIndex={4}>Parks</h3>
          </div>
          <div className={styles.filterIcon} tabIndex={5}>
            <Image
              src="/images_interface/filter_icon.svg"
              width={31}
              height={36}
              alt="Filter icon for filtering through the Parks shown"
              onClick={toggleFilter}
              className={styles.imageFilter}
            />
          </div>
          {/* Render filter sidebar */}
          {filterOpen && <div ref={filterRef}><Filter onChange={handleFilterChange} /></div>} 
        </section>

        {/* Park cards section */}
        <section className={styles.PC_Library} tabIndex={6}>
          <div className={styles.parkCard}>
            {filteredData.map((park, index) => (
              <ParksInfo key={index} parksData={park} />
            ))}
          </div>
        </section>

        {/* Show More button */}
        <button className={styles.showMoreButton} tabIndex={7}>Show More</button>

        {/* Discover BC Parks section */}
        <section className={styles.discoverBCParks}>
          <div className={styles.discoverBCParks_header} tabIndex={8}>
            <h3>Discover BC Parks</h3>
          </div>
          <div className={styles.BCParksContainer}>
            <ExternalLink href="https://www.vancouvertrails.com/trails/bert-flinn-park/">
              <div className={styles.BCPark1} tabIndex={9}>
                <h5>Bert Flinn Park</h5>
              </div>
            </ExternalLink>
            <ExternalLink href="https://storymaps.arcgis.com/stories/705025c0363a44e6b0d5ce80e65a2198">
              <div className={styles.BCPark2} tabIndex={10}>
                <h5>Aspenwood Park</h5>
              </div>
            </ExternalLink>
            <ExternalLink href="https://covapp.vancouver.ca/parkfinder/parkdetail.aspx?inparkid=16">
              <div className={styles.BCPark3} tabIndex={11}>
                <h5>David Lam Park</h5>
              </div>
            </ExternalLink>
          </div>
        </section>

        {filterOpen && <div className={styles.overlayBackground}></div>}
        <div className={styles.background}></div>
      </main>
    </>
  );
};

export default ParksLibrary;
