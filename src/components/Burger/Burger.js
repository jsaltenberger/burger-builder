import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

//const Burger = ( props ) => {

class Burger extends React.Component {

  _mounted = false;

  state = {
    divStyle: {
      height: 200
    }
  }
  
  componentDidMount() {
    this._mounted = true;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  setSize = () => {
    if(this._mounted) {
      const height = window.innerHeight - 425;
      this.setState( { divStyle: { height: height } } );
    }
  }

  render() {
    let transformedIngredients = Object.keys( this.props.ingredients )
      .map( igKey => {
          return [...Array( this.props.ingredients[igKey] )].map( ( _, i ) => {
              return <BurgerIngredient key={igKey + i} type={igKey} />;
          } );
      } )
      .reduce((arr, el) => {
          return arr.concat(el)
      }, []);
      
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className={classes.Burger} style={this.state.divStyle}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

export default Burger;