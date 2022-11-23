import { Fragment, useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import Apartment from "../../static/images/apartment.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Search = () => {
  const [slidesPerView,setSlidesPerView]=useState(0);

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
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
  useEffect(()=>{
    if(window.innerWidth>=1200){
      setSlidesPerView(4);
    }
    else if(window.innerWidth>=993){
      setSlidesPerView(3);
    }    
    else if(window.innerWidth>=768){
      setSlidesPerView(2);
    }else{
      setSlidesPerView(1);
    }
  },[])
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
          grid={{ rows: (12/slidesPerView), fill: "row" }}          
          breakpoints={{
            1536: {
              slidesPerView: propertyData.length > 4 ? 4 : propertyData.length,
            },
            1280: {
              slidesPerView: propertyData.length >= 3 ? 3 : propertyData.length,
            },
            1024: {
              slidesPerView: propertyData.length >= 2 ? 2 : propertyData.length,
            },
            768: {
              slidesPerView: propertyData.length >= 2 ? 2 : propertyData.length,
            },
          }}
          spaceBetween={20}          
          pagination={{
            clickable: true,            
          }}
          modules={[Grid, Pagination]}
          className="mySwiper !z-0"
        >
          {propertyData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <PropertyCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="my-3">aa</div>        
      </div>
    </Fragment>
  );
};
export default Search;
