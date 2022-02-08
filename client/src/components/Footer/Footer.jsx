import React from "react";

const Footer = () => {
    return (
        <footer className="mt-3">
            <div
                className="row"
                style={{
                    backgroundColor: "#450EB5",
                    color: "#C8C0D7 ",
                    textAlign: "center",
                }}
            >
                <div className="col-md-4">
                    <h6 className="navbar-text ">
                        Navbar text with an inline element
                    </h6>
                </div>
                <div className="col-md-4">
                    <h6 className="navbar-text ">
                        Navbar text with an inline element
                    </h6>
                </div>
                <div className="col-md-4">
                    <h6 className="navbar-text ">
                        Navbar text with an inline element
                    </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
