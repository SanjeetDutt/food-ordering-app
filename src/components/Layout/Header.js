import {Fragment} from "react";
import mealsImage from "../../assets/meals.jpg"
import css from "./Header.module.css"
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {

    return <Fragment>
        <header className={css.header} >
            <h1>Food ordering app</h1>
            <HeaderCardButton onClick={props.onShowCart} />
        </header>
        <div className={css["main-image"]}>
            <img src={mealsImage} alt="Meals banner"/>
        </div>
    </Fragment>
}

export default Header