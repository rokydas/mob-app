import React from 'react';
import './SecondSection.css';
import pic1 from '../../images/pic1.png';

const SecondSection = () => {
    return (
        <div className="section2">
            <div className="custom-container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12 section2-part1">
                        <h5 style={{color: '#ff6b6b'}}>CUSTOMER ONBOARDING</h5><br/>
                        <h1>We know how it works</h1><br/>
                        <h3>The smart way to manage Lorem ipsum dolor sit amet consectetur.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sapiente, laboriosam sequi quisquam, fugiat voluptatibus aperiam magni recusandae, accusantium quaerat dolorum.</p><br/>
                        <button className="custom-btn">View Pricing Plans</button>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12 d-flex justify-content-center align-items-center">
                        <img src={pic1} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;