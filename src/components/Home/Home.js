import React from 'react';
import Clients from '../Clients/Clients';
import FifthAndContact from '../FifthAndContact/FifthAndContact';
import FirstSection from '../FirstSection/FirstSection';
import Footer from '../Footer/Footer';
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
            <FifthAndContact />
            <Clients />
            <Footer />
        </div>
    );
};

export default Home;