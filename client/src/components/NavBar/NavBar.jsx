import React from "react";

const NavBar = () => {
    return (
        <nav
            className="navbar sticky-top navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#450EB5" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width={30}
                        height={24}
                        className="d-inline-block align-text-top"
                    />
                    Impulcomerce
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav col-10">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Acerca de
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Ingreso
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Registro
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
