import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../LOGO/Logo';


function Toolbar() {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>menu</div>
                <Logo />
                <nav>
                    ....
                </nav>
            </header>

        </div>
    )
}

export default Toolbar
