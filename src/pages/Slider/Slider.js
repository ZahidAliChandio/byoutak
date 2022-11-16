import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import NextBtn from "../../components/UI/PrevBtn";
import PrevBtn from "../../components/UI/NextBtn";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const data = [
    {
      id: 1,
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 2,
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 3,
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 4,
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 5,
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
  ];
  const diffMakeups = [
    { id: 1, type: "Fruit Facial", amount: 1 },
    { id: 2, type: "O3+ Facial", amount: 1 },
    { id: 3, type: "Sara gold Facial", amount: 1 },
    { id: 4, type: "New Facial", amount: 1 },
  ];
  return (
    <div className="relative  px-2 sm:px-20 md:px-24 lg:px-32 xl:px-40 2xl:px-48 z-0">
      <div className="md:relative w-full -bottom-20">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation, Pagination]}
          className="!relative md:!static mySwiper !py-4"
          breakpoints={{
            1536: {
              slidesPerView: diffMakeups.length >= 4 ? 4 : diffMakeups.length,
            },
            1280: {
              slidesPerView: diffMakeups.length >= 3 ? 3 : diffMakeups.length,
            },
            1024: {
              slidesPerView: diffMakeups.length >= 2 ? 2 : diffMakeups.length,
            },
            768: {
              slidesPerView: diffMakeups.length >= 2 ? 2 : diffMakeups.length,
            },
          }}
          spaceBetween={14}
        >
          <div className="absolute flex justify-between w-full top-1/2 z-50">
            <NextBtn />
            <PrevBtn />
          </div>
          {data.map((data) => {
            return (
              <SwiperSlide
                className="flex justify-center text-left rounded-xl z-0 w-full mb-6 md:mb-10"
                key={data.id}
              >
                <SliderCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
