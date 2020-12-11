import React from 'react';
import Contact from '../Contact/Contact';
import FifthSection from '../FifthSection/FifthSection';
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
            <FifthSection />
            <Contact />
        </div>
    );
};

export default Home;