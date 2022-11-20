import { useState } from "react";
import Price from "./Price";

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
    <div className="flex gap-4 justify-center">
      <div className="grid grid-cols-[1fr,8fr] w-fit border border-gray-300 text-gray-300 rounded-lg overflow-hidden items-center px-2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 px-4 bg-transparent w-full h-full mr-8"
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
            } flex items-center gap-4 sm:gap-8 md:gap-12  border border-gray-300 w-fit py-1 rounded-sm px-4 cursor-pointer`}
            onClick={() => onSelectHanler(index)}
          key={index}>
            <span className="text-2xl font-semibold">{item}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        );
      })}
      <ul className="flex items-center rounded-sm gap-4 overflow-hidden border border-gray-300">
        {lis.map((content, index) => {
          return (
            <li
              className={`${
                activeIndex === index
                  ? "text-[#212020] bg-gray-300"
                  : "text-gray-300"
              } py-2 px-2 rounded-sm m-[0.09rem]`}
              onClick={() => onClickHandler(index)}
            >
              {content}
            </li>
          );
        })}
      </ul>
      {activeItemIndex===0 && <Price/>}
    </div>
  );
};
export default SearchBar;
