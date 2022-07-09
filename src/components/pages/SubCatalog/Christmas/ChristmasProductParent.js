import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import ChristmasProduct from './ChristmasProduct';

const ChristmasProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <ChristmasProduct product={product} />;
                })

            }
        </div>
    )
}

export default ChristmasProductParent
