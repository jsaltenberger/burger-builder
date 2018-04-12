import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

import {INGREDIENT_PRICES} from '../../../store/reducers/burgerBuilder';

const checkoutSummary = (props) => {
  const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
      return (
        <li key={igKey}>
          <div
            className={classes.OrderItem}>
            {igKey}
          </div>
          x &nbsp; &nbsp;{ props.ingredients[igKey] }
          <span className={classes.TotalPrice}>
            { (INGREDIENT_PRICES[igKey] * props.ingredients[igKey]).toFixed( 2 ) }
          </span>
        </li>
      );
    } );

  return (
    <div>
      {/*<h1>We hope it tastes well!</h1>
      <div style={{width: '10%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>*/}
      <h3>Order Summary</h3>
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
        <span className={classes.TotalPrice}> {props.price.toFixed( 2 )} </span>
      </strong></p>
    </div>
  );
}

export default checkoutSummary;