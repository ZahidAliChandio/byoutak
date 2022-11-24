import CafesFacility from "../../static/images/cafes_facility.png";
import ParkingAreaFacility from "../../static/images/parking_area_facility.png";
import ClubFacility from "../../static/images/club_facility.png";
import RestaurantFacility from "../../static/images/restaurant_facility.png";
import SecurityFacility from "../../static/images/security_facility.png";
import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Accordion = () => {
  const [accordianPlus, setAccordianPlus] = useState("closed");
  const nodeRef = useRef(null);
  const [items, setItems] = useState([
    {
      title: "THE BROOKS Unit Types",
      content: (
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-sm group:hober:visible invisible">Cafes</span>
            <span className="border bg-gray-200 group cursor-pointer">
              <img src={CafesFacility} alt="facility" className="" />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-sm group:hober:visible invisible">
              Parking Area
            </span>
            <span className="border bg-gray-200 group cursor-pointer">
              <img src={ParkingAreaFacility} alt="facility" />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-sm group:hober:visible invisible">
              Club House
            </span>
            <span className="border bg-gray-200 group cursor-pointer">
              <img src={ClubFacility} alt="facility" />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-sm group:hober:visible invisible">
              Restaurant
            </span>
            <span className="border bg-gray-200 group cursor-pointer">
              <img src={RestaurantFacility} alt="facility" />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-sm group:hober:visible invisible">
              Security
            </span>
            <span className="border bg-gray-200 group cursor-pointer">
              <img src={SecurityFacility} alt="facility" />
            </span>
          </div>
        </div>
      ),
      isActive: false,
    },
    {
      title: "THE BROOKS Unit Types",
      content: "second content is here",
      isActive: false,
    },
    {
      title: "THE BROOKS Location",
      content: "third content is here",
      isActive: false,
    },
    {
      title: "Project Developer",
      content: "fourth content is here",
      isActive: false,
    },
    {
      title: "You May Also Like",
      content: "fifth content is here",
      isActive: false,
    },
  ]);

  const onClickHandler = (index) => {
    if (accordianPlus === "opened") {
      setAccordianPlus("closed");
    } else {
      setAccordianPlus("opened");
    }
    const newItems = [...items];
    newItems[index].isActive = !newItems[index].isActive;
    setItems(newItems);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-gray-400 text-gray-50 py-4 cursor-pointer mb-3 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          <div>
            <div
              className={`circle-plus ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
            <div
              className={`circle-plus-two ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className={`circle`}>
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
          </div>
          <span>{item.title}</span>
        </div>
        <Transition
          in={items[index].isActive}
          timeout={150}
          nodeRef={nodeRef}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              className={`${
                state === "entering"
                  ? "open-modal"
                  : state === "exiting"
                  ? "close-modal"
                  : null
              } text-gray-50 lg:text-xl pl-4 md:pl-8 lg:pl-12`}
            >
              <p>{item.content}</p>
            </div>
          )}
        </Transition>
      </Fragment>
    );
  });
  return (
    <div className="mt-2 px-2 sm:px-8 mx:px-10 lg:px-20">{renderedItems}</div>
  );
};

export default Accordion;
