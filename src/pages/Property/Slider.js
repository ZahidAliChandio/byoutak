import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination,EffectFade } from "swiper";
import Image1 from "../../static/images/slider_image_1.jpg";
import Image2 from "../../static/images/slider_image_2.jpg";
import Image3 from "../../static/images/slider_image_3.jpg";
import Image4 from "../../static/images/slider_image_4.jpg";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const images = [Image1, Image2, Image3, Image4];  
  return (
    <Swiper
      pagination={{
        clickable: true,       
      }}
      spaceBetween={30}
      effect={"fade"}
      modules={[Autoplay,EffectFade,Pagination]}
      className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {images.map((data) => {
        return (
          <SwiperSlide key={data.id} className="">
            <img src={data} alt="property" className="w-full h-[32.5rem]" />
          </SwiperSlide>
        );
      })}
    </Swiper>

  );
};
export default Slider;
