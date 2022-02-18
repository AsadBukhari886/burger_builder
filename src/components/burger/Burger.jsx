import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient'

function Burger(props) {
    // console.log("defore", props.ingredient.Bacon)

    let T_Ingredient = Object.keys(props.ingredient)
        .map((main) => {
            // console.log("main", main)
            // console.log("after", props.ingredient[main])
            return [...Array(props.ingredient[main])]?.map((_, index) => {
                return <BurgerIngredient type={main} key={Math.random()} />
            })
        })
        .reduce((preVal, initVal) => {
            return preVal.concat(initVal)
        })
    // console.log("T_ingredeient", T_Ingredient)
    if (T_Ingredient?.length == 0) {
        T_Ingredient = <p>please start entering ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"BreadTop"} />
            {T_Ingredient}

            <BurgerIngredient type={"BreadBottom"} />
        </div>
    )
}

export default Burger
