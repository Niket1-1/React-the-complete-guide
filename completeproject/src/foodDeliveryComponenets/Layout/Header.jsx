import React, { Fragment } from "react";

import classes from "./Header.module.css";
import CartButton from "./Headercart";




const Header =(props)=>{
         return (
             <Fragment>
                 <header className={classes.header} >
                     <h1>ReactMeals</h1>
                        <CartButton />
                 </header>
                <div className={classes["main-image"]}>
                     <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="" />
                </div>
                      
             </Fragment>
         )
}

export default Header