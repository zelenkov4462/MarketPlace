import styles from './SectionInfo.module.css';
import Image from "next/image";
import React from "react";

export const SectionInfo = ({ src, alt, title, content, width, height }) => {
    return (
        <>
           {/*<div className={styles.content}>*/}
           {/*    <div className={styles.sectionContent}>*/}
           {/*        <div className={styles.sectionContentImg}>*/}
           {/*            <Image src={src} alt={alt} width={width} height={height} />*/}
           {/*        </div>*/}
           {/*        <div className={styles.sectionContentTitle}>*/}
           {/*            {title}*/}
           {/*        </div>*/}
           {/*        <div className={styles.sectionContentContent}>*/}
           {/*            <p>{content}</p>*/}
           {/*        </div>*/}
           {/*    </div>*/}
           {/* </div>*/}


               <ul className={styles.sectionContent}>
                   <li className={styles.sectionContentImg}>
                       <Image src={src} alt={alt} width={width} height={height} />
                   </li>
                   <li className={styles.sectionContentTitle}>
                       {title}
                   </li>
                   <li className={styles.sectionContentContent}>
                       <p>{content}</p>
                   </li>
               </ul>
        </>
    )
}