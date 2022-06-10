import React from 'react';
import {Buttom} from "../Buttom/Buttom";

import style from "./Register.module.css";
import classes from '../Buttom/Buttom.module.css';

const onClick = () => {
    console.log('click')
}

export function Register() {
    return (
        <>
                <Buttom cl={classes.logIn} onClick={onClick} value='LOG IN' />
                <Buttom cl={classes.signIn} onClick={onClick} value='SIGN IN' />
        </>
    )
}
