import React from 'react';
import '../../../App.css';
import HomeSection from './HomeSection.js';
import Catalog from './Catalog.js';
import Footer from '../../Footer.js';

const Home = () => {
    return (
        <>
           <HomeSection />
           <Catalog />
           <Footer />
        </>
    );
}

export default Home
