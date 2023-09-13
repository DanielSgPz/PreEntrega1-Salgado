import React from "react";
import DizfruteLogo from '../assets/img/logos/LOGO-DIZFRUTE.png'
import CartWidget from "./CartWidget";

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse h5" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src={DizfruteLogo}
                            height="25"
                            alt="Dizfrute Logo"
                            loading="lazy"
                        />
                    </a>

                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contactenos
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <a className="link-secondary me-3" href="#">
                        <CartWidget />
                        
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;