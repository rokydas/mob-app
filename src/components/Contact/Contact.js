import React from 'react';
import './Contact.css';
import bg from '../../images/bg.jpg';

const Contact = () => {
    return (
        <div className="contact">
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-5">
                        <h5>Updates</h5>
                        <h1>Join our mailing list</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quasi quis repudiandae doloremque minima aliquam reiciendis sit fuga nobis debitis?</p>
                    </div>
                    <div className="col-md-7">
                        <form action="">
                            <div className="d-flex justify-content-start mb-3">
                                <input type="text" placeholder="First Name" className="form-control mr-3" />
                                <input type="text" placeholder="Last Name" className="form-control" />
                            </div>
                            <input type="text" placeholder="Email" className="form-control mb-3" />
                            <button className="custom-btn">Send me the updates</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;