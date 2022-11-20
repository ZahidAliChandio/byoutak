import { useState } from "react";
import Price from "./Price";
import PropertyType from "./PropertyType";
import Delivery from "./Delivery";

const SearchBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const selectList = ["Price", "Property type", "Delivery", "Property details"];
  const lis = ["All", "Primary", "Resale", "Move now pay later"];

  const onSelectHanler = (index) => {
    setActiveItemIndex(index);
  };

  const onClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-3 justify-center lg:justify-around w-full items-center px-4">
      <div className="grid grid-cols-[1fr,8fr] border border-gray-300 text-gray-300 rounded-sm overflow-hidden items-center px-2 h-fit">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="search"
          id="search"
          className="p-2 bg-transparent w-full lg:px-6"
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
            } flex items-center gap-3 xl:gap-4 2xl:gap-12  border border-gray-300 w-fit rounded-sm py-2 px-2 m xl:px-4 cursor-pointer h-fit`}
            onClick={() => onSelectHanler(index)}
          key={index}>
            <span className="text-xxs lg:text-sm xl:text-base 2xl:text-2xl font-semibold">{item}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        );
      })}
      <ul className="flex items-start lg:items-center rounded-sm gap-0 lg:gap-1 xl:gap-3 overflow-hidden border border-gray-300 px-[0.09rem]">
        {lis.map((content, index) => {
          return (
            <li
            key={index}
              className={`${
                activeIndex === index
                  ? "text-[#212020] bg-gray-300"
                  : "text-gray-300"
              } py-2 px-2 rounded-sm my-[0.09rem] text-sm xl:text-base text-center last:p-0`}
              onClick={() => onClickHandler(index)}
            >
              {content}
            </li>
          );
        })}
      </ul>
      {activeItemIndex===0 && <Price changeActiveItemIndex={setActiveItemIndex}/>}
      {activeItemIndex===1 && <PropertyType changeActiveItemIndex={setActiveItemIndex}/>}
      {activeItemIndex===2 && <Delivery changeActiveItemIndex={setActiveItemIndex}/>}
    </div>
  );
};
export default SearchBar;
