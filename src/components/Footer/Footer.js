import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

function Footer(){
    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/namelist">Show Name List</Link></li>
                            <li><Link to="/namelistc">Name List - Class</Link></li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            <div>Mawanella, Sri Lanka</div>
                            <div>Tel.: +94779179292</div>
                            <div>Email: <Link to="#">dilshanudawatta15@gmail.com</Link></div>
                        </address>
                    </div>
                    <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                        <Link to="#">Google </Link>
                        <Link to="#">Facebook </Link>
                        <Link to="#">LinkedIn </Link>
                        <Link to="#">Twitter </Link>
                        <Link to="#">YouTube </Link>
                    </div>
                </div>
                <div class="row justify-content-center">             
                    <div class="col-auto">
                        <p>© Copyright 2021 Dilshan Udawaththa</p>
                    </div>
                </div>
                </div>
            </div>   
        </footer>
    );
}

export default Footer;