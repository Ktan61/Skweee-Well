import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    
    return (
        <div className={styles.Navbar}>
            <section className={styles.gridLeft}></section>
            <section className={styles.gridCenter}>
                <Image 
                    src="/images_interface/home_icon.svg"
                    width={50}
                    height={50}
                    alt="icon for home"
                    onClick={() => router.push("/")}
                    style={{ borderBottom: router.pathname === "/" ? 'solid var(--orange) 5px' : 'solid var(--darkGreen) 4px' }}
                    tabIndex={100}
                />
                <Image 
                    src="/images_interface/community_icon.svg"
                    width={46}
                    height={46}
                    alt="icon for community"
                    onClick={() => router.push("/Community")}
                    style={{ borderBottom: router.pathname === "/Community" ? 'solid var(--orange) 5px' : 'solid var(--darkGreen) 4px' }}
                    tabIndex={101}
                />
                <Image 
                    src="/images_interface/parks_icon.svg"
                    width={50}
                    height={50}
                    alt="icon for parks"
                    onClick={() => router.push("/ParksLibrary")}
                    style={{ borderBottom: router.pathname === "/ParksLibrary" ? 'solid var(--orange) 5px' : 'solid var(--darkGreen) 4px' }}
                    tabIndex={102}
                />
                <Image 
                    src="/images_interface/profile_icon.svg"
                    width={46}
                    height={46}
                    alt="icon for profile"
                    onClick={() => router.push("/Profile")}
                    style={{ borderBottom: router.pathname === "/Profile" ? 'solid var(--orange) 5px' : 'solid var(--darkGreen) 4px' }}
                    tabIndex={103}
                />        
            </section>
            <section className={styles.gridLeft}></section>
        </div>
    )
}