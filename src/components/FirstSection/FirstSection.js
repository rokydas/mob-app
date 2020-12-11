import React from 'react';
import './FirstSection.css';
import girl from '../../images/girl.jpg';

const FirstSection = () => {
    return (

        <div className="d-flex justify-content-start">
            <div>
                <img src={girl} style={{ height: '100%' }} alt="" />
            </div>
            <div>
                <div className="new-idea">
                    <h1>New ideas that <br /> come to life...</h1>
                </div>
                <div className="smart-way">
                    <div>
                        <h1>The smart way to manage lorem ipsum dolor sit amet consectetuer adipiscing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad  sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FirstSection;