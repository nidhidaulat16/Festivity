import React, {useState} from 'react';
import DiwaliItems from './DiwaliItems';
import './Diwali.css';

const Diwali = () => {

    const[items, setItems] = useState(DiwaliItems);

    const filterItem = (categItem) => {
        const updatedItems = DiwaliItems.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return(
        <>
           <h1 className="text-center main-heading">Diwali Catalogs</h1>

           <div className="diwali-tabs">
                
               <div className="menu-tab d-flex justify-content-around">
                   <button className="btn btn-info main" onClick={() => filterItem('decoration')}>Decoration</button>
                   <button className="btn btn-info main" onClick={() => filterItem('lighting')}>Lighting</button>
                   <button className="btn btn-info main">Toran</button>
                   <button className="btn btn-info main">Rangoli</button>
                   <button className="btn btn-info main">Kandil</button>
                   <button className="btn btn-info main">Diya</button>
                   <button className="btn btn-info main" onClick={() => setItems(DiwaliItems)}>All</button>
               </div> 
           </div>


           <div className="menu-items container-fluid mt-2">
               <div className="container">
                   <div className="">
                       <div className="row">
                           
                        {
                            items.map((elem) => {
                                const {id, product_name,image, company_name, description, ratings,price} = elem;

                                return(
                                    <div className="items">
                                        <div className="item-container">

                                            {/*images*/}
                                            <div className="col-6 image">
                                                <img src={image} alt={product_name} className="img-fluid"/>
                                            </div>

                                                

                                            {/*description*/}
                                            <div className="col-12 data">
                                                <div className="main-title pt-4 pb-3">
                                                    <p className="product">Product: {product_name}</p>
                                                    <p className="company">Company: {company_name}</p>
                                                    <p className="description">Description: {description}</p>
                                                    <p className="price">Price:{price}</p> 
                                                    <p className="ratings">Ratings:{ratings}</p>
                                                    <a href="#">
                                                        <button className="btn btn-success mr-2 cart">Add To Cart</button>
                                                    </a> 
                                                    <a href="#">
                                                        <button className="btn btn-danger mr-2 cart">Wishlist</button>
                                                    </a>
                                                </div>

                                                 
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                        </div>
                    </div>
                </div>
            </div>  
        </>
                            
    )
}

export default Diwali