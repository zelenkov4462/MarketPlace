import {SectionInfo} from "../SectionInfo/SectionInfo";
import king from "../../public/Icons/pic 1.png";
import easy from '../../public/Icons/pic 2.png';
import tru from '../../public/Icons/pic 3.png';
import create from '../../public/Icons/pic 4.png';

import React from "react";
import styles from './ListSelectionInfo.module.css'

export const ListSelectionInfo = () => {
    return (
        <>
            <ul className={styles.list}>
                <li>
                    <SectionInfo src={king} alt='king' width={143} height={70} title='BE AMONG THE FIRST' content='This is the world`s first multifunctional NFT marketplace, based on Waves Platform'/>
                </li>
                <li>
                    <SectionInfo src={easy} alt='easy' width={156} height={129} title='EASY TO USE' content='Buying and selling NFTs was never that easy. Create your account, and you`re in!'/>
                </li>
                <li>
                    <SectionInfo src={tru} alt='true' width={87} height={131} title='TRUE DIGITAL ART' content='Waves Marketplace provides professional moderation for almost every NFT listed on the platform'/>
                </li>
                <li>
                    <SectionInfo src={create} alt='create' width={94} height={85} title='CREATE YOUR OWN COLLECTION' content='If you`re a digital artist, it`s your chance to step into the top league of the NFT-industry.'/>
                </li>
            </ul>
        </>
    )
}