import React from 'react';
import '../../../App.css';
import './HomeSection.css';

function HeroSection() {
    return (
        
        <div className='hero-container'>
           {/*<video src="/videos/home1.mov" autoPlay loop muted />*/}
            <img className="cover" src="images/coverhome1.jpg" alt="cover image"></img>
            <div className="container-fluid herosection mt-0">
                <h1 className="title">FESTIVITY</h1> 
                <p className="quote">Treasure House Of Festivals</p>
                <p className="heading-tag">Shop for your favourite festival with us!</p>
            </div>
        </div>

            
    )
}

export default HeroSection;
