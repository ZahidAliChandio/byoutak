import { Fragment, useState } from "react";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";

const PropertyType = (props) => {
  const [apartmentTypes, setApartmentTypes] = useState([
    { name: "Apartment", isActive: false },
    { name: "Duplex", isActive: false },
    { name: "Studio", isActive: false },
    { name: "Serviced Apartment", isActive: false },
    { name: "Penthouse", isActive: false },
  ]);
  const [villaTypes, setVillaTypes] = useState([
    { name: "Twinhouse", isActive: false },
    { name: "Townhosue", isActive: false },
    { name: "Villa", isActive: false },
  ]);
  const [chaletTypes, setChaletTypes] = useState([
    { name: "Twinhouse", isActive: false },
    { name: "Townhosue", isActive: false },
    { name: "Villa", isActive: false },
  ]);
  const [commercialTypes, setCommercialTypes] = useState([
    { name: "Clinic", isActive: false },
    { name: "Office", isActive: false },
    { name: "Retail", isActive: false },
  ]);
  const apartmentSelectHandler = (index) => {
    let newItems = [...apartmentTypes];
    newItems[index].isActive = !newItems[index].isActive;
    setApartmentTypes(newItems);
  };
  const villaSelectHandler = (index) => {
    let newItems = [...villaTypes];
    newItems[index].isActive = !newItems[index].isActive;
    setVillaTypes(newItems);
  };
  const chaletSelectHandler = (index) => {
    let newItems = [...chaletTypes];
    newItems[index].isActive = !newItems[index].isActive;
    setChaletTypes(newItems);
  };
  const commercialSelectHandler = (index) => {
    let newItems = [...commercialTypes];
    newItems[index].isActive = !newItems[index].isActive;
    setCommercialTypes(newItems);
  };

  return (
    <Modal onClose={() => props.changeActiveItemIndex(null)} className="!w-1/4">
      <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Property type
      </h2>
      <div className="flex flex-col gap-6 border-y pb-4 pt-6 md:pt-8 pl-6 md:px-12 w-full h-full">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="checkbox"
            name="apartment"
            id="apartment"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <h3 className="text-base md:text-lg font-semibold">
            Apartment Types
          </h3>
        </div>
        <ul className="flex flex-wrap gap-4">
          {apartmentTypes.map((apartment, index) => {
            return (
              <Fragment>
                <li
                  key={index}
                  className={`${
                    apartment.isActive
                      ? "bg-[#212020] text-gray-50"
                      : " bg-gray-100 text-[#212020] "
                  } text-lg md:text-xl rounded-md py-2 px-3 cursor-pointer`}
                  onClick={() => apartmentSelectHandler(index)}
                >
                  {apartment.name}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 border-y pb-4 pt-4 md:pt-8 pl-6 md:px-12 w-full">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="checkbox"
            name="apartment"
            id="apartment"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <h3 className="text-base md:text-lg font-semibold">Villa Types</h3>
        </div>
        <ul className="flex flex-wrap gap-4">
          {villaTypes.map((villa, index) => {
            return (
              <Fragment>
                <li
                  key={index}
                  className={`${
                    villa.isActive
                      ? "bg-[#212020] text-gray-50"
                      : " bg-gray-100 text-[#212020] "
                  } text-lg md:text-xl rounded-md py-2 px-3 cursor-pointer`}
                  onClick={() => villaSelectHandler(index)}
                >
                  {villa.name}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 border-y pb-4 pt-6 md:pt-8 pl-6 md:px-12 w-full">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="checkbox"
            name="apartment"
            id="apartment"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <h3 className="text-base md:text-lg font-semibold">Chalet Types</h3>
        </div>
        <ul className="flex flex-wrap gap-4">
          {chaletTypes.map((chalet, index) => {
            return (
              <Fragment>
                <li
                  key={index}
                  className={`${
                    chalet.isActive
                      ? "bg-[#212020] text-gray-50"
                      : " bg-gray-100 text-[#212020] "
                  } text-lg md:text-xl rounded-md py-2 px-3 cursor-pointer`}
                  onClick={() => chaletSelectHandler(index)}
                >
                  {chalet.name}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 border-y pb-4 pt-6 md:pt-8 pl-6 md:px-12 w-full">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="checkbox"
            name="apartment"
            id="apartment"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <h3 className="text-base md:text-lg font-semibold">
            Commercial Types
          </h3>
        </div>
        <ul className="flex flex-wrap gap-4">
          {commercialTypes.map((commercial, index) => {
            return (
              <Fragment>
                <li
                  key={index}
                  className={`${
                    commercial.isActive
                      ? "bg-[#212020] text-gray-50"
                      : " bg-gray-100 text-[#212020] "
                  } text-lg md:text-xl rounded-md py-2 px-3 cursor-pointer`}
                  onClick={() => commercialSelectHandler(index)}
                >
                  {commercial.name}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-6 justify-center md:justify-end px-2 md:px-6 py-6">
        <Button type="clear" className="border !px-12 md:!text-lg">Clear all</Button>
        <Button type="submit" className="bg-[#212020] md:!text-lg text-gray-50 !px-12">Apply</Button>
      </div>
    </Modal>
  );
};
export default PropertyType;
