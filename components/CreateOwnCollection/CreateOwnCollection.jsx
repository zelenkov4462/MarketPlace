import React from 'react';
import Image from "next/image";
import styles from './CreateOwnCollection.module.scss';
import classes from '../Buttom/Buttom.module.css';
import fun from '../../public/Icons/fun items.png';
import {Buttom} from "../Buttom/Buttom";

const onClick = () => {
    console.log('click');
}

export const CreateOwnCollection = () => {
    return (
        <>
            <div className={styles.conteiner}>
                <div className={styles.contentLeft}>
                        <div className={styles.image}>
                            <Image src={fun} alt='fun' width={350} height={280}/>
                        </div>
                        <div className={styles.info}>
                            <h2>
                                CREATE YOUR OWN NFT COLLECTION
                            </h2>
                        </div>
                        <div className={styles.rightSide}>
                            <h2>FOR ARTISTS</h2>
                            <p>Create a full-scale collection</p>
                            <Buttom onClick={onClick} value='CREATE' cl={classes.signIn}/>
                        </div>
                </div>
                <div className={styles.contentRight}>
                    <h2>FOR OTHERS</h2>
                    <p>Create a single NFT in a few clicks</p>
                    <Buttom value='QUICK CREATION' onClick={onClick} cl={styles.btn}/>
                </div>
            </div>
        </>
    )
}