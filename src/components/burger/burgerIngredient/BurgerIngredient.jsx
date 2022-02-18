import { isClosingBraceToken } from '@typescript-eslint/experimental-utils/dist/ast-utils';
import React from 'react';
import Auxi from '../../../hoc/Auxi';
import classes from './BurgerIngredient.module.css';
import propTypes from 'prop-types'

function BurgerIngredient(props) {

    let ingredient = null;
    switch (props.type) {
        case "BreadBottom":
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case "BreadTop":
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case "Meat": {
            ingredient = <div className={classes.Meat}></div>
        }
            break;
        case "Cheese": {
            ingredient = <div className={classes.Cheese}></div>
        }
            break;
        case "Salad": {
            ingredient = <div className={classes.Salad}></div>
        }
            break;
        case "Bacon": {
            ingredient = <div className={classes.Bacon}></div>
        }
            break;
        case "Meat": {
            ingredient = <div className={classes.Meat}></div>
        }
            break;
        default: ingredient = null;
            break;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default BurgerIngredient
