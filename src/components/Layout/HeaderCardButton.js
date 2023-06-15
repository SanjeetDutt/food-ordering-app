import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCardButton.module.css"
import {useContext} from "react";
import CartContext from "../../store/Cart/cartContext";

const Button = (props) => {

    const cartCtx = useContext(CartContext)

    const {items} = cartCtx

    const totalItems = items.reduce((count, item)=>{
        return count + item.amount
    }, 0)

    return (
        <button className={css.button} onClick={props.onClick}>
            <span className={css.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={css.badge}>{totalItems}</span>
        </button>
    )
}

export default Button