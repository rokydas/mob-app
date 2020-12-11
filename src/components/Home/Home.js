import React from 'react';
import FirstSection from '../FirstSection/FirstSection';
import FourthSection from '../FourthSection/FourthSection';
import Navbar from '../Navbar/Navbar';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    );
};

export default Home;