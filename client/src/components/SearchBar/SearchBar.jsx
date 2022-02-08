import React from "react";

import SelectData from "../SelectData/SelectData";

const SearchBar = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
        console.log(e.target[4].value);
    };

    return (
        <form onSubmit={handleOnSubmit} style={{ backgroundColor: "#450EB5" }}>
            <nav
                className="navbar sticky-top navbar-expand-lg navbar-dark"
                style={{ backgroundColor: "#450EB5" }}
            >
                <div className="container">
                    <div className="row">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav">
                                <div className="row p-2">
                                    <div className="col-lg-8 ">
                                        <div className="row">
                                            <SelectData />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <input
                                                className="form-floating me-3 col-auto"
                                                type="search"
                                                placeholder="Buscar"
                                                aria-label="Search"
                                            />
                                            <button
                                                className="btn btn-dark col-lg-2"
                                                type="submit"
                                                style={{
                                                    backgroundColor: "#450EB5",
                                                }}
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </form>
    );
};

export default SearchBar;
