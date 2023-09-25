import Slider from "react-slick";
import SliderImgInterface from "../../interfaces/SliderImg/SliderImg";

export const SliderImg = ({ children }: SliderImgInterface) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="w-9/12 self-center">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
