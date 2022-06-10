import { Logo } from "../Logo/Logo";
import {InputSearch} from "../InputSearch/InputSearch";
import {Register} from "../Register/Register";
import React from "react";
import classes from './Header.module.css';

export function Header() {
return (
    <>
            <div className={classes.header}>
                <div className={classes.header_logo}>
                    <Logo/>
                    <InputSearch />
                </div>
                <div className={classes.header_logo}>
                    <Register/>
                </div>
            </div>

    </>
)
}
