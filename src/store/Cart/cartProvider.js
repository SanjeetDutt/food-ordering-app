import {useReducer} from "react";
import CartContext from "./cartContext";

const defaultCartState = {
    items:[],
    totalAmount:0,
}

const cartReducer = (state, action)=>{

    if(action.type === "ADD"){

        const items = state.items.concat(action.item)
        const totalAmount = state.totalAmount + action.item.price * action.item.amount

        return {
            items : items,
            totalAmount: totalAmount
        };
    }

    if(action.type === "DELETE"){

    }

    return defaultCartState
}


const CartProvider = props => {

    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItem = (item) => {
        cartDispatch({type:"ADD", item})
    };

    const removeItem = (id) => {
        cartDispatch({type:"DELETE", id})
    };

    const ctxValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem,
        removeItem
    }

    return <CartContext.Provider value={ctxValue}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider