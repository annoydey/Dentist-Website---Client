import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link ms-5" href="/">Home</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-white" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-white" href="#">Contact Us</a>
                    </li> 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;