import Slider from "react-slick";
import SliderImgInterface from "../../interfaces/SliderImg/SliderImgInterface";

export const SliderImg = ({ children, className , quantity}: SliderImgInterface) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: quantity ? quantity : 4,
    slidesToScroll: 3,
  };
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
