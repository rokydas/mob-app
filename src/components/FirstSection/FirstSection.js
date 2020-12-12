import React from 'react';
import './FirstSection.css';
import girl from '../../images/girl.jpg';

const FirstSection = () => {

    return (

        <div className="col-12">
            <div className="row no-gutters">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xm-12">
                    <img src={girl} width="100%" alt="" />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xm-12">
                    <div className="new-idea">
                        <span>New ideas that come to life...</span>
                    </div>
                    <div className="smart-way">
                        <div>
                            <p className="smart-heading">The smart way to manage lorem ipsum dolor sit amet consectetuer adipiscing</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FirstSection;

{/* <div className="col-md-7">
    <div className="new-idea">
        <h1>New ideas that <br /> come to life...</h1>
    </div>
    <div className="smart-way">
        <div>
            <h1>The smart way to manage lorem ipsum dolor sit amet consectetuer adipiscing</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad  sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
        </div>
    </div>
</div> */}