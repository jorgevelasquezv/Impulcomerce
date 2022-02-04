import React from "react";
import img1 from "../../assets/images_carousel/image_4.jpg";
import img2 from "../../assets/images_carousel/image_2.jpg";
import img3 from "../../assets/images_carousel/image_3.jpg";

const Carousel = () => {
    
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="http://placekitten.com/1600/600"
                        className="d-block "
                        alt="..."
                        style={{ height: "200px", width: "100%" }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={img2}
                        className="d-block "
                        alt="..."
                        style={{ height: "200px", width: "100%" }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={img3}
                        className="d-block "
                        alt="..."
                        style={{ height: "200px", width: "100%" }}
                    />
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
