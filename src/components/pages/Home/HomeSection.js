import React from 'react';
import '../../../App.css';
import './HomeSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src="/videos/home1.mov" autoPlay loop muted />
           <h1>FESTIVITY</h1> 
           <p>The Treasure Island Of Festivals</p>
           <div className="jumbotron box1">
               <h3>About Us</h3>
               Festivity is an e-commerce website that avails user 
               to shop through an exclusive range of products. 
               Your favourite time of the year - Festivals!
               Yes, here we have Festival Catalogs that you can 
               choose items from to make these days your most special one.
               We wish for your comfort and timely shopping.
           </div>
        </div>
    )
}

export default HeroSection;
