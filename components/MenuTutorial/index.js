import styles from './Menu.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Sidebar from '../Sidebar'

export default function MenuTutorial() {

    const router = useRouter()

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };


    return (
        <div className={styles.Menu}>
            <div className={styles.innerWrapper}>
                <Image 
                        src="/images_interface/help_icon.svg"
                        width={50}
                        height={50}
                        alt="icon for help/tutorial"
                        onClick={() => router.push("/Help")}
                        tabIndex={1}
                />
                <Image 
                        src="/images_interface/hamburger_icon.svg"
                        width={50}
                        height={50}
                        alt="icon for hamburger drop down menu"
                        onClick={toggleSidebar}
                        tabIndex={2}
                />
            </div>
            {sidebarOpen && <Sidebar />} 
        </div>
    )
}