import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Portfolio></Portfolio>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;