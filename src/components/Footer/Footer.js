import React from 'react';
import './Footer.css';
import hand from '../../images/hand.jpg';
import social from '../../images/social.jpg';

const Footer = () => {
    return (
        <div>
            <div className="custom-container">
                <div className="d-flex justify-content-start">
                    <div className="mr-5 pr-5">
                        <h5 className="footer-main-item">Memberships</h5><br />
                        <p>How to join</p>
                        <p>Member benefits</p>
                        <p>Member login</p>
                        <p>Contact info</p>
                        <p>Partners</p>
                    </div>
                    <div className="mr-5 pr-5">
                        <h5 className="footer-main-item">Slakes packages</h5><br />
                        <p>Pricing information</p>
                        <p>Product features</p>
                        <p>Integrations</p>
                        <p>Custom API</p>
                        <p>Knowledge base</p>
                    </div>
                    <div className="mr-5 pr-5">
                        <h5 className="footer-main-item">Help and guidance</h5><br />
                        <p>How to join</p>
                        <p>Member benefits</p>
                        <p>Member login</p>
                        <p>Contact info</p>
                        <p>Partners</p>
                    </div>
                    <div className="mr-5 pr-5">
                        <h5 className="footer-main-item">About our business</h5><br />
                        <p>Pricing information</p>
                        <p>Product features</p>
                        <p>Integrations</p>
                        <p>Custom API</p>
                        <p>Knowledge base</p>
                    </div>
                    <div className="mr-5 pr-5">
                        <h5 className="footer-main-item">Support tickets</h5><br />
                        <p>Pricing information</p>
                        <p>Product features</p>
                        <p>Integrations</p>
                        <p>Custom API</p>
                        <p>Knowledge base</p>
                    </div>
                </div>
            </div>
            <div className="hori-row"></div>
            <div className="custom-container mb-5 pb-5">
                <div className="d-flex justify-content-start">
                    <img className="mr-5" width="50px" height="50px" src={hand} alt=""/>
                    <p className="m-3">Download more free designs from uiRepublic.net</p>
                    <img className="mt-2" style={{marginLeft: 'auto'}} src={social} height="40px" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;