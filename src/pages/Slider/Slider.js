import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import NextBtn from "../../components/UI/PrevBtn";
import PrevBtn from "../../components/UI/NextBtn";
import SliderCard from "./SliderCard";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const itemArray = [
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹ 1, 500",
      oldAmount: "₹ 3,500",
      save: "₹ 2,000",
      amount: 1,
    },
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹ 1, 500",
      oldAmount: "₹ 3,500",
      save: "₹ 2,000",
      amount: 1,
    },
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹ 1, 500",
      oldAmount: "₹ 3,500",
      save: "₹ 2,000",
      amount: 1,
    },
    {
      id: 0,
      img: null,
      heading: "Cleanup+Rica Wax it+ Brazilian Bikini wax",
      li1: "a Anti-Tan clean up/Fruit Clean up/Vit-C brightening clean up",
      li2: "a Rica Waxing - Full arms & Full legs",
      currentPrice: "₹ 1, 500",
      oldAmount: "₹ 3,500",
      save: "₹ 2,000",
      amount: 1,
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
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
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
          {itemArray.map((d) => {
            return (
              <SwiperSlide
                className="flex justify-center text-left rounded-xl z-0 w-full"
                key={d.id}
              >
                <SliderCard data={d} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;