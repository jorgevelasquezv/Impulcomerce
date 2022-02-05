import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav
            className="navbar sticky-top navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#450EB5" }}
        >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" end>
                    <img
                        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width={30}
                        height={24}
                        className="d-inline-block align-text-top"
                    />
                    Impulcomerce
                </NavLink>
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
                            <NavLink
                                to="/"
                                className={(isActive) =>
                                    "nav-link" +
                                    (!isActive ? " unselected" : "")
                                }
                                style={{ textDecoration: "none" }}
                                end
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contac"
                                className={(isActive) =>
                                    "nav-link" +
                                    (!isActive ? " unselected" : "")
                                }
                                style={{ textDecoration: "none" }}
                            >
                                Contacto
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={(isActive) =>
                                    "nav-link" +
                                    (!isActive ? " unselected" : "")
                                }
                                style={{ textDecoration: "none" }}
                            >
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className={(isActive) =>
                                    "nav-link" +
                                    (!isActive ? " unselected" : "")
                                }
                                style={{ textDecoration: "none" }}
                            >
                                Ingreso
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/register"
                                className={(isActive) =>
                                    "nav-link" +
                                    (!isActive ? " unselected" : "")
                                }
                                style={{ textDecoration: "none" }}
                            >
                                Registro
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
