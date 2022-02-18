import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/BuildControls/BuildControls';
// import BuildControl from '../../components/burger/BuildControls/BuildControl/BuildControl';
// import BuildControls from '../../components/burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    Salad: .5,
    Bacon: 0.6,
    Cheese: .4,
    Meat: 1.3
}
export class BurgerBUilder extends Component {
    state = {
        ingredient: {
            Bacon: 0,
            Meat: 0,
            Salad: 0,
            Cheese: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseHandler = (updateIngredient) => {
        // const ingredient = {
        //     ...this.state.ingredient
        // };
        const sum = Object.keys(updateIngredient)
            .map(val => {
                return updateIngredient[val]
            })
            .reduce(((initVal, preVal) => {
                return initVal + preVal
            }), 0);

        this.setState({ purchasable: sum > 0 })
        console.log("purchase able", sum > 0)
    }

    addIngredientHandler = (type) => {
        console.log("click handler")
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredient
        }
        updateIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredient: updateIngredient, totalPrice: newPrice })
        console.log("after", newPrice)
        this.updatePurchaseHandler(updateIngredient);
    }

    removeIngredientHandler = (type) => {
        console.log("rmeove handlelr")
        const oldCount = this.state.ingredient[type];
        const updatedCount = this.state.ingredient[type] == 0 ? 0 : oldCount - 1;
        const updateIngredient = {
            ...this.state.ingredient
        }
        updateIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredient: updateIngredient, totalPrice: newPrice })
        console.log("after", newPrice)
        this.updatePurchaseHandler(updateIngredient);
    }

    purchaseHandler = () => {
        const state = this.state.purchasing
        this.setState({ purchasing: !state })
    }

    purchaseCancelHandler = () => {
        const state = this.state.purchasing
        this.setState({ purchasing: !state })
    }

    purchaseContinueHandler = () => {
        alert("you continue here")
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }

        for (let vari in disabledInfo) {
            disabledInfo[vari] = disabledInfo[vari] <= 0
        }

        return (
            <Auxi>
                <Modal purchasing={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredient={this.state.ingredient}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        orderPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredient={this.state.ingredient} />

                <BuildControls
                    addFunc={this.addIngredientHandler}
                    removeFunc={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchase={this.state.purchasable}
                    summary={this.purchaseHandler}
                />
            </Auxi>
        )
    }
}

export default BurgerBUilder
