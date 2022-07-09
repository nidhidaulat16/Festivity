import React, { useContext, useEffect } from 'react';
import noteContext from "../context/noteContext";
import { useHistory } from 'react-router';
import Wishlist from './Wishlist';
import './Wishlist.css'

const WishlistParent = () => {
    const context = useContext(noteContext);
    let history = useHistory();
    const { wishlist, getWishlist } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getWishlist();
        }
        else {
            history.push("/login");
        }
    }, [])

    if (wishlist.length < 1) {
        return (
            <>
                <h1 className="wishlist-heading">Your Wishlist is empty, please add some products here</h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1 className="wishlist-heading">Wishlist</h1>
                <div className="row my-3">
                    {
                        wishlist.map((note) => {
                            return <Wishlist note={note} />;
                        })
                    }

                </div>
            </>
        )
    }

    // return (
    //     <>
    //         <h1 className="wishlist-heading">Wishlist</h1>
    //         <div className="row my-3">
    //             {
    //                 wishlist.map((note) => {
    //                     return <Wishlist note={note} />;
    //                 })
    //             }

    //         </div>
    //     </>
    // )
}

export default WishlistParent
