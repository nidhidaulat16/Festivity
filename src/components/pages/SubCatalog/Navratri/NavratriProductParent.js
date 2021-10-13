import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import NavratriProduct from './NavratriProduct';

const NavratriProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <NavratriProduct product={product} />;
                })

            }
        </div>
    )
}

export default NavratriProductParent
