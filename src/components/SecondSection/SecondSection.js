import React from 'react';
import pic1 from '../../images/pic1.png';

const SecondSection = () => {
    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: '#eeeff1' }}>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{color: '#ff6b6b'}}>CUSTOMER ONBOARDING</h5><br/>
                        <h1>We know how it works</h1><br/>
                        <h3>The smart way to manage Lorem ipsum dolor sit amet consectetur.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sapiente, laboriosam sequi quisquam, fugiat voluptatibus aperiam magni recusandae, accusantium quaerat dolorum.</p><br/>
                        <button className="custom-btn">View Pricing Plans</button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={pic1} className="img-fluid" width="400px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;