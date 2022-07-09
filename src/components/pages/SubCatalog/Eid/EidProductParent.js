import React, { useContext, useEffect } from 'react';
import noteContext from "../../../../context/noteContext"
import EidProduct from './EidProduct';

const EidProductParent = () => {
    const context = useContext(noteContext);
    const { notes, uid, products } = context;

    return (
        <div>
            {
                products.filter(product => product.uid == uid).map((product) => {
                    return <EidProduct product={product} />;
                })

            }
        </div>
    )
}

export default EidProductParent
