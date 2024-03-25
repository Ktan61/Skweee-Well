import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            <div className={styles.innerWrapper}>
                <Link href="/"><Image href="/images_interface/temp_icon.png"/>
                    <Image 
                        src="/images_interface/temp_icon.png"
                        width={50}
                        height={50}
                        alt="temporary icon for home"
                    />
                </Link>
                <Link href="/ParksLibrary"><Image href="/images_interface/temp_icon.png"/>
                    <Image 
                        src="/images_interface/temp_icon.png"
                        width={50}
                        height={50}
                        alt="temporary icon for parks"
                    />
                </Link>
                <Link href="/Profile"><Image href="/images_interface/temp_icon.png"/>
                    <Image 
                        src="/images_interface/temp_icon.png"
                        width={50}
                        height={50}
                        alt="temporary icon for profile"
                    />
                </Link>
                <Link href="/Community"><Image href="/images_interface/temp_icon.png"/>
                    <Image 
                        src="/images_interface/temp_icon.png"
                        width={50}
                        height={50}
                        alt="temporary icon for community"
                    />
                </Link>
            </div>
        </div>
    )
}