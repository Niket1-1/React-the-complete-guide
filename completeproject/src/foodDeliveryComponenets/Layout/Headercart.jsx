import CartIcon from "../Cart/CartIcon";
import classes from "./HeadercartButton.module.css"
import React from "react";

const CartButton =(props)=>{
    return (
  
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
               Your Cart
        </span>
        <span className={classes.badge}>
              3
        </span>
    </button>

     )
}

export default CartButton


