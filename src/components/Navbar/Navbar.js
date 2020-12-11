import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.jpg';

const Navbar = () => {
    return (
        <div className="custom-container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/"><img src={logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <button className="custom-btn">Download</button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;