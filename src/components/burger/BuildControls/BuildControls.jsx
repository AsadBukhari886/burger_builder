import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: "Bacon" },
    { label: 'Meat', type: "Meat" },
    { label: 'Salad', type: "Salad" },
    { label: 'Cheese', type: "Cheese" },

]

function BuildControls(props) {
    return (
        <div className={styles.BuildControls}>
            <p>Current price : ${props.price.toFixed(2)}</p>
            {controls.map((val, index) => {
                return <BuildControl
                    label={val.label}
                    key={val.type}
                    add={() => props.addFunc(val.type)}
                    remove={() => props.removeFunc(val.type)}
                    disabled={props.disabled[val.type]}
                />
            })}
            <button
                disabled={!props.purchase}
                className={styles.OrderButton}
                onClick={props.summary}
            >ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls
