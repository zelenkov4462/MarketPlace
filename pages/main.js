import {MainLayout} from "../components/MainLayout/MainLayout";
import React from "react";
import {TopSectionPage} from "../components/TopSectionPage/TopSectionPage";
import {ListSelectionInfo} from "../components/ListSelectionInfo/ListSelectionInfo";
import dropOne from '../public/Icons/Group1.png';
import dropTwo from '../public/Icons/Group 2.png'
import styles from '../styles/main.module.css'
import Image from "next/image";


export default function Main() {
    return (
        <MainLayout>
           <TopSectionPage/>
           <ListSelectionInfo/>
           <div className={styles.slogan}>
               WAVES NFT RIDERS
           </div>
            <div className={styles.drops}>
                <div className={styles.dropsTitle}>
                    THE MOST NOTICEABLE DROPS

                </div>
                <ol className={styles.dropsList}>
                    <li>
                        <Image src={dropTwo} alt='drop1' height={95} width={229}/>
                    </li>
                    <li>
                        <Image src={dropOne} alt='drop2' height={95} width={229}/>
                    </li>
                    <li>
                        <Image src={dropTwo} alt='drop3' height={95} width={229}/>
                    </li>
                </ol>
                <div className={styles.dropsFooter}>
                    The second collection. ZOMBIES are the first step of the upcoming WAVES PUNKS Multiverse</div>
                </div>
        </MainLayout>
    )
}