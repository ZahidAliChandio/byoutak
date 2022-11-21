import { useState, useRef } from "react";
import Modal from "../../components/UI/Modal";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Price = (props) => {
  const [yearCounter, setYearCounter] = useState(1);
  const [priceMinRange, setPriceMinRange] = useState(0);
  const [priceMaxRange, setPriceMaxRange] = useState(100);
  const price = useRef(null);

  const decreaseHandler = () => {
    setYearCounter((prev) => prev - 1);
  };
  const increaseHandler = () => {
    setYearCounter((prev) => prev + 1);
  };
  const changeValues = () => {
    setPriceMinRange((prev) => prev + price.current.value.min);
    setPriceMaxRange(price.current.value.max);
  };

  return (
    <Modal onClose={() => props.changeActiveItemIndex(null)} className="!w-fit">
      <h2 className="text-lg sm:text-2xl md:text-xl lg:text-lg xl:text-3xl font-bold text-center my-3 xl:my-6">
        Price
      </h2>
      <div className="grid grid-cols-2 justify-center items-center border rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center gap-7 2xl:gap-12 border pb-16 pt-6 2xl:pt-8 px-10 2xl:px-16 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Price Range
          </span>
          <RangeSlider
            className="h-1"
            step={1}
            ref={price}
            defaultValue={[0, 100]}
            value={[priceMinRange, priceMaxRange]}
            min="0"
            max="100"
            onInput={() => changeValues()}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder={``}
                value={priceMinRange * 10000 + 70000}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder=""
                value={priceMaxRange}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 2xl:gap-12 border pb-16 pt-4 2xl:pt-8 px-10 2xl:px-16 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Down payment
          </span>
          <RangeSlider className="h-1" />
          <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 2xl:gap-12 border pb-16 pt-6 2xl:pt-8 px-10 2xl:px-16 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Monthly installments
          </span>
          <RangeSlider className="h-1" />
          <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm 2xl:text-xl text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-7 2xl:gap-12 border pb-16 pt-6 2xl:pt-8 px-10 2xl:px-16 w-full h-full">
          <h3 className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Installment years
          </h3>
          <div className="flex justify-center items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
            <div className="cursor-pointer" onClick={() => decreaseHandler()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                className="w-6 lg:w-7 h-6 lg:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="md:text-base lg:text-lg 2xl:text-xl text-gray-500">{yearCounter}+ Years</span>
            <div className="cursor-pointer" onClick={() => increaseHandler()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                className="w-6 lg:w-7 h-6 lg:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Price;
