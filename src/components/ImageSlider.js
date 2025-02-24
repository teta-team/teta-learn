import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    "./assets/images/chemistry-banner.png",
    "./assets/images/physics-banner.png",
    "./assets/images/math-banner.png",
    "./assets/images/geometry-banner.png",
  ];

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%"}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
