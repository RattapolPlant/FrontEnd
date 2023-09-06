import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings} className="max-w-4xl mx-auto">
          <div className="min-h-[250px] bg-base-200 rounded-xl">
          </div>
        </Slider>
    )
}

export default HomeSlider