import { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PropertyDetails = (props) => {
  const [priceMinRange, setPriceMinRange] = useState(0);
  const [priceMaxRange, setPriceMaxRange] = useState(100);
  const price = useRef(null);

  const changeValues = () => {
    setPriceMinRange((prev) => prev + price.current.value.min);
    setPriceMaxRange(price.current.value.max);
  };

  return (
    <Modal onClose={() => props.changeActiveItemIndex(null)}>
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-6">
        Price
      </h2>
      <div className="grid grid-cols-2 justify-center items-center border rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center gap-12 border pb-16 pt-8 pl-16 px-16 w-full h-full">
          <span className="text-[#212020] text-lg md:text-xl">Price Range</span>
          <RangeSlider
            className="h-1"
            step={5}
            ref={price}
            defaultValue={[0, 100]}
            value={[priceMinRange, priceMaxRange]}
            min="0"
            max="100"
            onInput={() => changeValues()}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder={``}
                value={priceMinRange * 10000 + 70000}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-1 w-10/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder=""
                value={priceMaxRange}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PropertyDetails;
