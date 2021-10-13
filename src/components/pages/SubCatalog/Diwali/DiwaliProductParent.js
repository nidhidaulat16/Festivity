import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import DiwaliProduct from './DiwaliProduct';

const DiwaliProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <DiwaliProduct product={product}/>;
                })

            }
        </div>
    )
}

export default DiwaliProductParent
