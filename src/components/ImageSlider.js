import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6YNxKX_zr1Wz6599ed5z_nexMjkW1IRKmw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaBsIxY1Sb0C23gCIm54B4PeNKmEW7i5_ug&s",
  ];

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
