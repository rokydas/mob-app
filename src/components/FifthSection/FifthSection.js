import React from 'react';
import pic3 from '../../images/pic3.png';

const FifthSection = () => {
    return (
        <div style={{ backgroundColor: '#eeeff1' }} className="mt-5 pt-5">
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={pic3} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 mt-5 pt-5">
                        <h5 style={{color: '#ff6b6b'}}>CUSTOMERS</h5><br/>
                        <h1>We turn our clients into business partners, its why people use us</h1><br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, nam illo. Enim debitis neque error rem? Ipsam odit cumque fugit dolorum hic. Nostrum consectetur eius distinctio cupiditate accusamus adipisci. Veritatis.</p><br/>
                        <button className="custom-btn">People like us do this</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FifthSection;