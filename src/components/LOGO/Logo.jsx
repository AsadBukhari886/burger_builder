import React from 'react';
import LOGO from '../../assets/images/LOGO.png';
import classes from './Logo.module.css'

function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={LOGO} alt="burger" />
        </div>
    )
}

export default Logo
