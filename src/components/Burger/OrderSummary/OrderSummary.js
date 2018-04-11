import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

import {INGREDIENT_PRICES} from '../../../store/reducers/burgerBuilder';

class OrderSummary extends Component {
  calculatePriceByIng = (key, amount) => {
    return (INGREDIENT_PRICES[key] * amount).toFixed( 2 );
  }
  
  render () {
    const ingredientSummary = Object.keys( this.props.ingredients )
      .map( igKey => {
        return (
          <li key={igKey}>
            <div
              className={classes.OrderItem}>
              {igKey}
            </div>
             x &nbsp; &nbsp;{ this.props.ingredients[igKey] }
             <span className={classes.TotalPrice}>
              { this.calculatePriceByIng(igKey, this.props.ingredients[igKey]) }
            </span>
          </li>
        );
      } );

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <ul>
          <li>
            <div
              className={classes.OrderItem}>
              Base
            </div>
            <span className={classes.TotalPrice}>4.00</span>
          </li>

          {ingredientSummary}
        </ul>
        <hr/>
        <p className={classes.Total}><strong>Total
          <span className={classes.TotalPrice}> {this.props.price.toFixed( 2 )} </span>
        </strong></p>
        <p className={classes.CheckoutText}>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;