import React from 'react'
import CatalogItem from './CatalogItem';
import './Catalog.css';

function Catalog() {
    return (
        <div className="catalog">
            <h1>Festival Catalogs</h1>
            <div className="catalog__container">
                <div className="catalog__wrapper">
                    <ul className="catalog__items">
                        <CatalogItem 
                        src="images/catalogs/diwali/diwali1.jpg"
                        text="Diwali"
                        label="Unlock Festival"
                        path="/diwali"
                        /> 
                        <CatalogItem 
                        src="images/catalogs/ganesh/ganesh-card.jpg"
                        text="Ganesh Chaturthi"
                        label="Unlock Festival"
                        path="/cart"
                        />
                    </ul>
                    <ul className="catalog__items">
                        <CatalogItem 
                        src="images/catalogs/christmas/christmas1.jpg"
                        text="Christmas"
                        label="Unlock Festival"
                        path="/cart"
                        /> 
                        <CatalogItem 
                        src="images/catalogs/rakshabandhan/rakshabandhan1.jpg"
                        text="Rakshabandhan"
                        label="Unlock Festival"
                        path="/cart"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Catalog
