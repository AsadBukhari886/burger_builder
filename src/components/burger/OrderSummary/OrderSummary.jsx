import React from 'react';

import Button from '../../UI/button/Button';
import Auxi from '../../../hoc/Auxi';

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredient)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>
                :{props.ingredient[igKey]}
            </li>
        })
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>Dilicious Burger with following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price : ${props.orderPrice}</strong> </p>
            <p>Continue to checkout</p>
            <Button btnType={"Danger"} clicked={props.cancel}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.continue}>CONTINUE</Button>
        </Auxi>
    )
}

export default OrderSummary;
