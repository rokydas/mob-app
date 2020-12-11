import React from 'react';
import './ThirdSection.css';
import NeedCard from '../NeedCard/NeedCard';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';

const ThirdSection = () => {

    const needs = [
        { name: 'Home helper', bgColor: 'white', img: icon1, color: '#556270', tellColor: '#ff6b6b' },
        { name: 'Professional plus', bgColor: '#ff6b6b', img: icon2, color: 'white', tellColor: 'white' },
        { name: 'Office worker', bgColor: 'white', img: icon3, color: '#556270', tellColor: '#ff6b6b' },
    ]

    return (
        <div className="third-section">
            <div className="custom-container">
                <div className="pt-5 mb-5">
                    <h4 style={{ color: '#ff6b6b' }}>Business Packages</h4><br />
                    <h1>Tailored to your needs</h1><br />
                    <div className="row">
                        {
                            needs.map(need => <NeedCard need={need} key={need} />)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ThirdSection;