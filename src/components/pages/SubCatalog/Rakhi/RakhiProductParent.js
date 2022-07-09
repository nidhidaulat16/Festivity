import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import RakhiProduct from './RakhiProduct';

const RakhiProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <RakhiProduct product={product} />;
                })

            }
        </div>
    )
}

export default RakhiProductParent
