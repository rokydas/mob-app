import React from 'react';
import FirstSection from '../FirstSection/FirstSection';
import Navbar from '../Navbar/Navbar';
import SecondSection from '../SecondSection/SecondSection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
        </div>
    );
};

export default Home;