import styles from './SectionPage.module.css';
import Image from "next/image";
import NFTIcons from "../../public/NFTIcons/Rectangle 26.png";
import React from "react";
import enquiry from '../../public/Icons/enquiry.png';

export const SectionPage = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <h1>RIDE THE WAVE OF NFTs</h1>
                    <p>on the fast-growing Waves Blockchain</p>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.contentRightIcon}>
                        <Image src={NFTIcons} width={400} height={400} alt='Icons'/>
                    </div>
                    <div className={styles.descriptionIcon}>
                        <div>
                            <p><strong>Zombie #124</strong></p>
                            <p>Rare</p>
                        </div>
                        <div>
                            <Image src={enquiry} height={30} width={30}  alt='enquiry'/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}