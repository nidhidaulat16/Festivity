import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './GanpatiProduct.css'
import { useHistory } from 'react-router-dom'
import noteContext from "../../../../context/noteContext"

function GanpatiProduct(props){
    const { product } = props;

    let history = useHistory();

    const context = useContext(noteContext);    
    const {addNote, setUid, getProducts, addToWishlist} = context;

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(product.product_name,product.description,product.price,product.uid,product.image);
        // setUid(item.uid); 
        // console.log(uid);
    }

    const handleWishlist = (e) => {
        e.preventDefault();
        addToWishlist(product.product_name,product.description,product.price,product.uid,product.image);
    }


    // {notes.filter(note => note.uid==="3").map((note) => ())}
    return(
        <>
        <div className="mt-3 container-fluid product-main">
            <div className="container-fluid mt-3 text-center title">
                <p className="product-title">{product.product_name}</p>
            </div>

            <div className="row mt-2 container-fluid product-box">
                <div className="col-lg-4 mt-3 container-fluid image-box">
                    <img className="product-img" src={product.image} alt="Product"></img>
                    <img className="rates mt-3" src={product.ratings}></img>
                </div>

                <div className="col-lg-8 mt-3 container-fluid description-box">
                    <p className="brand mt-1">Brand: Logro</p>
                    <p className="product-price">Price: Rs. {product.price}</p>
                    <p className="description">Description:<br></br>
                    {product.description}
                    </p>
                    
                    
                </div>

                <div className="footer-panel mt-0 container-fluid">                    
                
                    <div className="text-center mt-0 product-buttons">
                        <button type="submit" className="btn btn-info mx-1 add-cart" onClick={handleClick}>Add To Cart&ensp;<i className="fas fa-cart-plus mx-2"></i></button>
                        <button onClick={handleWishlist} className="btn btn-info mx-1 wish-list">Wishlist&ensp;<i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </div>

            <Link className="back-items" aria-current="page" to="/ganpati"><i class="fas fa-chevron-circle-left fa-sm"></i>Back</Link>
        </div>
        </>
    );
}

export default GanpatiProduct