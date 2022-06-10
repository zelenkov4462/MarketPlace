import React from "react";
import classes from './InputSearch.module.css'

export const InputSearch = () => {
    return (
        <>
            <input  className={classes.inputSearch} placeholder='Collection, item or users'/>
        </>
    )
}