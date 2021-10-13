import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import GanpatiProduct from './GanpatiProduct';

const GanpatiProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <GanpatiProduct product={product} />;
                })

            }
        </div>
    )
}

export default GanpatiProductParent
