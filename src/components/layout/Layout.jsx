import React from 'react';
import Auxi from '../../hoc/Auxi';
import Classes from './Layout.module.css';
import Toolbar from '../NAVIGATION/Toolbar/Toolbar';

function Layout(props) {
    return (
        <Auxi>
            <Toolbar />
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Auxi>
    )
}

export default Layout
