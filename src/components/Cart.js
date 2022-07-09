import React, { useContext, useState } from 'react'
import noteContext from "../context/noteContext"
import Notes from './Notes';
import { Link, useHistory } from 'react-router-dom'
import './Cart.css'


const Cart = (props) => {
    const context = useContext(noteContext);
    const { addHistory, getNotes, notes, mihir, mihir1,setMihir1, deleteCart, addToHistory } = context;
    const { note } = props;
    let history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        notes.map((item) => {addToHistory(item.title,item.tag,item.image);})
        const {user} = mihir;
        setMihir1(user);
        console.log(mihir1);
        deleteCart(mihir1);
        history.push('/proceedtobuy');
        // notes.map((item) => { addHistory(item._id, item.title, item.tag, item.image); })
        // console.log(mihir1);
        // proceedToBuy();
    }

    if (notes.length < 1) {
        return (
            <h1 className="cart-heading">Your Cart is currently empty, please add some products here</h1>
        )
    }
    else {
        return (
            <div className="container-fluid">
                <h2 className="cart-heading">My Cart&ensp;<i class="fas fa-cart-plus fa-sm" aria-hidden="true"></i></h2>
                <h5 className="cart-tagline">Your Shopping Bag is waiting for your purchase!</h5>

                <Notes />

                <div className="text-center cart-buttons mt-3">
                    <button type="submit" className="btn btn-primary mx-1 mb-3 proceed" onClick={handleClick}> Proceed To Buy
                    </button>
                </div>
            </div>
        )
    }

    // return (
    //     <div className="container-fluid">
    //         <h2 className="cart-heading">My Cart&ensp;<i class="fas fa-cart-plus fa-sm" aria-hidden="true"></i></h2>
    //         <h5 className="cart-tagline">Your Shopping Bag is waiting for your purchase!</h5>

    //         <Notes />

    //         <div className="text-center cart-buttons mt-3">
    //             <button type="submit" className="btn btn-primary mx-1 mb-3 confirm" onClick={handleClick}>
    //                 <Link className="proceed" aria-current="page" to="/proceedtobuy">Proceed To Buy</Link>
    //             </button>
    //         </div>
    //     </div>
    // )
}

export default Cart
