import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  console.log(props);
  const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
      return (
        <li key={igKey}>
          <div
            className={classes.OrderItem}>
            {igKey}
          </div>
          x &nbsp; &nbsp;{ props.ingredients[igKey] }
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