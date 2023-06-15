import css from "./Modal.module.css"
import {Fragment} from "react";
import ReactDOM from "react-dom"

const Backdrop = props => {
    return (
        <div className={css.backdrop} onClick={props.onClick}></div>
    )
}

const ModalOverlay = props => {
    return(
        <div className={css.modal}>
            <div className={css.content}>
                {props.children}
            </div>
        </div>
    )
}

const overlayEl = document.getElementById("overlays")

const Modal = (props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onBackDropClick}/>, overlayEl)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayEl)}

        </Fragment>
    )
}

export default Modal