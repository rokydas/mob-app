import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.jpg';

const Navbar = () => {
    return (
        <div className="custom-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <button className="custom-btn">Download</button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;