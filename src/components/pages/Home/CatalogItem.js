import React from 'react'
import {Link} from 'react-router-dom'

function CatalogItem(props) {
    return (
        <div>
            <li className="catalog__item">
                <Link className="catalog__item__link" to={props.path}>
                    <figure className="catalog__item__pic-wrap">
                        <img src={props.src} alt="Diwali Image"
                        className="catalog__item__img"></img>
                    </figure>   
                    <div className="catalog__item__info">
                        <h5 className="catalog__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
            
        </div>
    )
}

export default CatalogItem
