import { useState } from "react";
import Modal from "../../components/UI/Modal";
const Price = (props) => {
  const [yearCounter, setYearCounter] = useState(1);
  const decreaseHandler=()=>{
    setYearCounter(prev=>prev-1);
  }
  const increaseHandler=()=>{
    setYearCounter(prev=>prev+1);
  }

  return (
    <Modal>
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-6">
        Price
      </h2>
      <div className="grid grid-cols-2 justify-center items-center border rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center gap-12 border pb-16 pt-8 pl-16 px-16 w-full">
          <span className="text-[#212020] text-lg md:text-xl">Price Range</span>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value="5"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 py-1 w-10/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 border pb-16 pt-8 pl-12 px-12 w-full">
          <span className="text-[#212020] text-lg md:text-xl">
            Monthly installments
          </span>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value="5"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 py-1 w-10/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 border pb-16 pt-8 pl-12 px-12 w-full">
          <span className="text-[#212020] text-lg md:text-xl">
            Down payment
          </span>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value="5"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 py-1 w-10/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl text-gray-500">EGP</span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 border pb-16 pt-8 pl-12 px-12 w-full h-full">
          <h3 className="text-[#212020] text-lg md:text-xl text-left">
            Installment years
          </h3>
          <div className="flex justify-center items-center gap-8">
            <i class="fa-solid fa-circle-minus text-xl cursor-pointer" onClick={()=>decreaseHandler()}></i>
            <span className="text-xl">{yearCounter}+ Years</span>
            <i class="fa-solid fa-circle-plus text-xl cursor-pointer" onClick={()=>increaseHandler()}></i>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Price;
