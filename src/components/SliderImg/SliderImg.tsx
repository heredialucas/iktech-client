import Slider from "react-slick";
import SliderImgInterface from "../../interfaces/SliderImg/SliderImgInterface";

export const SliderImg = ({ children, className , quantity}: SliderImgInterface) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: quantity ? quantity : 4,
    speed: 500,
  };
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
