import css from "./Cart.module.css"
import Modal from "../UI/Modal";

const getCartItem = (cartProducts) => {
    const item = cartProducts.map(item=><li>{item.name}</li>)

    return <ul>
        {item}
    </ul>
}

const Cart = (props) => {
    const cartItem = getCartItem([{id:"c1", name:"Sushi", price:2.99}])

    return(
        <Modal onBackDropClick={props.onClose}>
            {cartItem}
            <div className={css.total}>
                <span>Total Amount</span>
                <span>$35.62</span>
            </div>
            <div className={css.actions}>
                <button className={css["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={css.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart