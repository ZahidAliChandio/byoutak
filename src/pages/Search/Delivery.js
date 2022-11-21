import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import { useState } from "react";

const Delivery = (props) => {
  const [moveActive, setMoveActive] = useState(false);
  const [nearActive, setNearActive] = useState(false);
  const [anyActive, setAnyActive] = useState(false);

  return (
    <Modal
      onClose={() => props.changeActiveItemIndex(null)}
      className=" w-4/5 sm:!w-1/2 lg:!w-1/3 xl:!w-1/3 2xl:!w-1/4"
    >
      <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Delivery date
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 justify-center items-center w-full border-t-2 px-[3rem]  lg:px-12 py-12">
        <button
          className={`${
            moveActive
              ? "bg-[#212020] text-gray-50"
              : "bg-gray-300 text-[#212020]"
          } w-full py-2 rounded-md`}
          onClick={() => setMoveActive((prev) => !prev)}
        >
          Move now
        </button>
        <button
          className={`${
            nearActive
              ? "bg-[#212020] text-gray-50"
              : "bg-gray-300 text-[#212020]"
          } w-full py-2 rounded-md`}
          onClick={() => setNearActive((prev) => !prev)}
        >
          Near delivery
        </button>
        <button
          className={`${
            anyActive
              ? "bg-[#212020] text-gray-50"
              : "bg-gray-300 text-[#212020]"
          } w-full py-2 rounded-md`}
          onClick={() => setAnyActive((prev) => !prev)}
        >
          Any date
        </button>
        <select
          name="year"
          id="year"
          className="bg-gray-300 text-[#122020] py-2 rounded-md text-center"
        >
          <option value="delivery">Delivery Before</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="flex gap-6 items-center justify-center md:justify-end px-4 md:px-12 py-6">
        <Button type="clear" className="border !py-2 !px-4 xl:!px-7 !text-sm xl:!text-md h-fit">
          Clear all
        </Button>
        <Button
          type="submit"
          className="bg-[#212020] !text-sm xl:!text-md text-gray-50 !py-2 !px-6 xl:!px-12 2xl:!px-12 h-fit"
        >
          Apply
        </Button>
      </div>
    </Modal>
  );
};
export default Delivery;
