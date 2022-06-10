import marketPlace from '../../public/logo/marketPlace.png';
import waves from '../../public/logo/waves.png';
import React from "react";
import Image from "next/image";
import style from './Logo.module.css'

export function Logo() {
    return (
        <>
            <div className={style.logo}>
                <Image src={waves} width={94.88} height={21.12} alt='waves'/>
            </div>
            <div className={style.logo}>
                <Image src={marketPlace} width={80.19} height={61.62} alt='marketPlace'/>
            </div>

        </>
    )
}