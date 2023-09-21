import React from "react";
import DizfruteLogo from '../assets/img/logos/LOGO-DIZFRUTE.png'
import CartWidget from "./CartWidget";
import { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {

    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

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
                    <Link className="navbar-brand mt-2 mt-lg-0" to={'/'}>
                            <img
                                src={DizfruteLogo}
                                height="25"
                                alt="Dizfrute Logo"
                                loading="lazy"
                            />
                        </Link>

                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
                        <Link className="nav-link" href="#" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                to={'/productos'}>Productos
                            </Link>
                            <ul className={`dropdown-menu ${submenuOpen ? 'show' : ''}`} aria-labelledby="productosDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/productos/Helados">Helados</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/productos/Malteadas">Malteadas</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/productos/Micheladas">Micheladas</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contactenos">
                                Contactenos
                            </Link>
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