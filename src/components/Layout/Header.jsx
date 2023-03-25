import { Fragment } from "react";

import mealsImage from "/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FirstMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="The table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
