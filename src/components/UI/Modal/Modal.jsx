import React from 'react';
import classes from './Modal.module.css';
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
    return (
        <Auxi>
            <Backdrop show={props.purchasing} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)"
                }}
            >
                {props.children}
            </div>
        </Auxi>
    )
}

export default Modal
