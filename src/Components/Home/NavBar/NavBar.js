import React from 'react';

const NavBar = () => {
    return (<nav class="navbar navbar-expand-lg navbar-light text-white">
        
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 " href="#service">Dental Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="#review">Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-5 text-white" href="#contract">Contract Us</a>
                </li>
            </ul>
            </div>
        </nav>
        );
};

export default NavBar;