import React, { useContext, useEffect } from 'react'
import noteContext from "../context/noteContext"
import './Wishlist.css'
import { useHistory } from 'react-router-dom'

const Wishlist = (props) => {

    const { note } = props;

    let history = useHistory();

    const context = useContext(noteContext);    
    const {addNote, setUid, getWishlist, deleteFromWishlist} = context;


    const handleCart = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag,note.uid,note.image);
        // setUid(item.uid); 
        // console.log(uid);
    }

    const handleWishlist = (e)=>{
        e.preventDefault();
        deleteFromWishlist(note._id);
        getWishlist();
    }


    return (
        <>
        {/* <h1 className="wishlist-headline">Wishlist</h1> */}
            <div className="wishlist-main container-fluid mb-3 col-lg-6 col-xl-4 col-md-6 col-sm-12">
                
                <div className="wishlist-item row">
                    
                    <div className="col-6 wishlist-img-main container-fluid">
                        <img className="wishlist-img mt-2" src={note.image} alt="Image"></img>
                    </div>

                    <div className="col-6 wishlist-details container-fluid mt-1">
                        <p className="wishlist-title">{note.title}</p>
                        <p className="wishlist-price">Price: Rs. {note.tag}</p>

                        <div className="text-center mt-1">
                            <button type="submit" className="btn btn-info bin mx-2 mb-1" onClick={handleWishlist}>
                                <i className="fas fa-trash mx-2"></i>
                            </button>

                            <button type="submit" className="btn btn-info add-to-cart mx-2 mb-1" onClick={handleCart} >
                                <i className="fas fa-cart-plus mx-2"></i>
                            </button>
                        </div>
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default Wishlist
