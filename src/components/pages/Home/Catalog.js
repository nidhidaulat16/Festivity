import React from 'react'
import CatalogItem from './CatalogItem';
import './Catalog.css';


function Catalog() {
    return (
        <>
        <body>
        <div className="catalog">
            <h2 className="headline">GREAT INDIAN FESTIVAL</h2>
            <p className="tagline">This festival make your homes lively and memories full.</p>  
            <div className="catalog__container ">
                <div className="catalog__wrapper">
                    <ul className="catalog__items">
                        <CatalogItem 
                        src="images/catalogs/diwali/diwali2.jpg"
                        text="Diwali"
                        path="/diwali"
                        /> 
                        <CatalogItem 
                        src="images/catalogs/navratri/navratri1.png"
                        text="Navratri"
                        path="/navratri"
                        />
                        <CatalogItem 
                        src="images/catalogs/christmas/christmas1.jpg"
                        text="Christmas"
                        path="/christmas"
                        /> 
                        
                    </ul>
                    <br></br>
                    <ul className="catalog__items">
                        <CatalogItem 
                        src="images/catalogs/eid/eid1.jpg"
                        text="Eid"
                        path="/eid"
                        /> 
                        <CatalogItem 
                        src="images/catalogs/ganpati/ganesh-card.jpg"
                        text="Ganesh Chaturthi"
                        path="/ganpati"
                        />
                        <CatalogItem 
                        src="images/catalogs/rakhi/rakshabandhan1.jpg"
                        text="Rakshabandhan"
                        path="/rakhi"
                        />
                        
                    </ul>
                </div>
            </div>
            
        </div>
        </body>
        </>
    )
}

export default Catalog
