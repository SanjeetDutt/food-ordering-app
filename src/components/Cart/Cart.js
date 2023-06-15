import css from "./Cart.module.css"
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/Cart/cartContext";
import CartItem from "./CartItem";



const getCartItem = (cartProducts, onAdd, onRemove) => {

    const item = cartProducts.map(item=>{
        const onAddHandler= ()=>{
            onAdd(item)
        }

        const onRemoveHandler = ()=>{
            onRemove(item.id)
        }

        return (<CartItem price={item.price}
                          name={item.name}
                          amount={item.amount}
                          summary={item.description}
                          onAdd={onAddHandler}
                          onRemove={onRemoveHandler}
        />)
    })

    return <ul className={css.itemlist}>
        {item}
    </ul>
}

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const onAddHandler = (item)=>{
        cartCtx.addItem(item)
    }

    const onRemoveHandler = (id)=>{
        cartCtx.removeItem(id)
    }

    const cartItem = getCartItem(cartCtx.items, onAddHandler, onRemoveHandler)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0

    return(
        <Modal onBackDropClick={props.onClose}>
            {cartItem}
            <div className={css.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={css.actions}>
                <button className={css["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={css.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart