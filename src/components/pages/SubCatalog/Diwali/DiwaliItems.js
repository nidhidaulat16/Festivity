import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import noteContext from "../../../../context/noteContext"
import DiwaliProductParent from './DiwaliProductParent';
import './Items.css';

const DiwaliItems = (props) => {
    let history = useHistory();

    const { item } = props;

    const context = useContext(noteContext);
    const { addNote, setUid, getProducts, addToWishlist, mihir, setMihir1, mihir1 } = context;

    const handleCart = (e) => {
        e.preventDefault();
        addNote(item.product_name, item.description, item.price, item.uid, item.image);
        // props.showAlert("Item added to cart successfully","success")
        // setUid(item.uid); 
        // console.log(uid);
    }

    const handleViewProduct = (e) => {
        e.preventDefault();
        setUid(item.uid);
        getProducts();
        // const { user } = mihir;
        // setMihir1(user);
        // console.log(mihir1);
    }

    const handleWishlist = (e) => {
        e.preventDefault();
        addToWishlist(item.product_name, item.description, item.price, item.uid, item.image);
    }

    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 main">
                <div className="product">
                    <div className="row-6 divider">
                        <div className="image-container">
                            <img className="image" src={item.image}></img>
                        </div>
                    </div>
                    <div className="row-6 divider">
                        <div className="card-body">
                            <h5 className="items-title">{item.product_name}</h5>
                            <p className="items-text">Price: Rs. {item.price}</p>

                            <img className="ratings" src={item.ratings}></img>

                            {/*<div className="text-center mt-1">
                        <Link className="view" aria-current="page" to="/diwali-product" role="button">View Product<i class="fa fa-eye" aria-hidden="true"></i></Link>
                        <button className="btn btn-info  buy-now" onClick={handleKlick} >view</button>
                    </div>*/}


                            <div className="text-center mt-1">
                                <button className="btn view-now" onClick={handleViewProduct} >
                                    <Link className="view" aria-current="page" to="/diwali-product" role="button">View Product&ensp;<i class="fa fa-eye" aria-hidden="true"></i></Link>
                                </button>
                            </div>

                            <div className="text-center mt-1">
                                <button type="submit" className="btn btn-info cart mx-2 mb-1" onClick={handleCart} ><i className="fas fa-cart-plus mx-2"></i></button>
                                <button className="btn btn-info wishlist mx-2 mb-1" onClick={handleWishlist}><i class="fas fa-heart"></i></button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
// onClick={()=>history.push('/diwali-product')}

export default DiwaliItems
