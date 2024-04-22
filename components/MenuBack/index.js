import styles from './Menu.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Sidebar from '../Sidebar'
import { useState } from 'react'


export default function MenuBack() {

    const router = useRouter()

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={styles.Menu}>
            <div className={styles.innerWrapper}>
                <Image 
                        src="/images_interface/back_icon.svg"
                        width={50}
                        height={50}
                        alt="icon for back"
                        onClick={() => router.back()}
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