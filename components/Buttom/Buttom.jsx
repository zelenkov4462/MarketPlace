import React from "react";
import style from './Buttom.module.css'

export const Buttom = ({ value, onClick, cl }) => {
    return (
        <>
            <div className={style.btn}>
                <button className={cl} onClick={onClick}>{value}</button>
            </div>
        </>
    )
}
