import { useState } from "react";
import Price from "./Price";
import PropertyType from "./PropertyType";
import Delivery from "./Delivery";
import PropertyDetails from "./PropertyDetails";

const SearchBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const selectList = ["Price", "Property type", "Delivery", "Property details"];
  const lis = ["All", "Primary", "Resale", "Move now pay later"];

  const onSelectHanler = (index) => {
    setActiveItemIndex(index);
  };  

  return (
    <div className="grid items-center grid-flow-col w-full px-4 gap-4">
      <div className="grid grid-cols-[1fr,8fr] border border-gray-300 text-gray-300 rounded-sm overflow-hidden items-center px-2 h-fit">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="search"
          id="search"
          className="p-2 bg-transparent w-full lg:px-6 outline-none"
          placeholder="Area, Compound, Developer"
        />
      </div>
      {selectList.map((item, index) => {
        return (
          <div
            className={`${
              activeItemIndex === index
                ? "text-[#212020] bg-gray-300"
                : "text-gray-300"
            } flex items-center justify-between  border border-gray-300 rounded-sm py-2 px-2 m xl:px-4 cursor-pointer h-full`}
            onClick={() => onSelectHanler(index)}
          key={index}>
            <span className="text-xxs lg:text-sm xl:text-base 2xl:text-2xl font-semibold">{item}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        );
      })}      
      {activeItemIndex===0 && <Price changeActiveItemIndex={setActiveItemIndex}/>}
      {activeItemIndex===1 && <PropertyType changeActiveItemIndex={setActiveItemIndex}/>}
      {activeItemIndex===2 && <Delivery changeActiveItemIndex={setActiveItemIndex}/>}
      {activeItemIndex===3 && <PropertyDetails changeActiveItemIndex={setActiveItemIndex}/>}
    </div>
  );
};
export default SearchBar;
