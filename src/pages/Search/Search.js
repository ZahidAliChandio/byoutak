import { Fragment } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import Apartment from "../../static/images/apartment.jpg"
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Search = () => {
  const propertyData = [
    {
      id: 1,
      image: Apartment,
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
      image: null,
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
      image: null,
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
      image: null,
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
      image: null,
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
      id: 6,
      image: null,
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
      id: 7,
      image: null,
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
      id: 8,
      image: null,
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
      id: 9,
      image: null,
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
  return (
    <Fragment>      
      <SearchBar />
      <div className="relative px-4 py-4">
        <div className="text-white text-center w-full">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl lg:mb-6 px-4 sm:p-0 grid-cols-3">
            {propertyData.length} results
          </h2>
        </div>      
        <Swiper
          slidesPerView={3}
          grid={{ rows:2 }}
          spaceBetween={14}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper !z-0"
        >
          {propertyData.map((data) => {
            return (
              <SwiperSlide key={data.id} className="">
                <PropertyCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      {/* <PropertyCard data={propertyData[0]} />
      <PropertyCard data={propertyData[1]} /> */}
      </div>
    </Fragment>
  );
};
export default Search;
