import Input from "../../UI/Input";
import css from "./MealItemForm.module.css"
import {useContext, useRef} from "react";
import CartContext from "../../../store/Cart/cartContext";


const MealItemForm = (props) => {
    const cartContext = useContext(CartContext)
    const amountRef = useRef()

    const addItem = (e)=>{
        e.preventDefault()

        cartContext.addItem({
            id:props.id,
            name:props.name,
            description: props.description,
            price: props.price,
            amount:+amountRef.current.value,
        })
    }

    return (
        <form action="" className={css.form}>
            <Input label="Amount" ref={amountRef}
                   input={
                    {
                        id:"amount_" + props.id,
                        type:"number",
                        min:"1",
                        max:"5",
                        step:"1",
                        defaultValue:"1"
                    }
            }/>
            <button type="submit" onClick={addItem}>+ Add</button>
        </form>
    )
}

export default MealItemForm