import React from "react";
// import img from "/images/logo512.png";

const Carousel = () => {
    const img = "/logo512.png";
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide h-25 w-100"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img} className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img} className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img} className="d-block " alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
