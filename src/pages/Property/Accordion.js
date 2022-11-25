// import ParkingAreaFacility from "../../static/images/facilities.png?v=120.png";
import CafesFacility from "../../static/images/cafes_facility.png";
import ParkingAreaFacility from "../../static/images/parking_area_facility.png";
import ClubFacility from "../../static/images/club_facility.png";
import RestaurantFacility from "../../static/images/restaurant_facility.png";
import SecurityFacility from "../../static/images/security_facility.png";
import { Fragment, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Accordion = () => {
  const [accordianPlus, setAccordianPlus] = useState("closed");
  const nodeRef = useRef(null);
  const [items, setItems] = useState([
    {
      title: "THE BROOKS Unit Types",
      content: (
        <div className="flex gap-4 items-center">
          <span
            className="bg-gray-200 p-2 rounded-full text-[red]"
            data-toggle="tooltip"
            title
            data-original-title="Cafes"
          >
            <img src={CafesFacility} alt="facility" className="cafe-facility" />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full">
            <img
              src={ParkingAreaFacility}
              alt="facility"
              className="parking-facility"
            />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img src={ClubFacility} alt="facility" className="club-facility" />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img
              src={RestaurantFacility}
              alt="facility"
              className="restaurant-facility"
            />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img
              src={SecurityFacility}
              alt="facility"
              className="security-facility"
            />
          </span>
        </div>
      ),
      isActive: false,
    },
    {
      title: "THE BROOKS Unit Types",
      content: "Second items here",
      isActive: false,
    },
    {
      title: "THE BROOKS Location",
      content: (
        <div className="relative overflow-hidden">
          <div className="map border-2 border-[red]">
            <div className="relative overflow-hidden min-h-[300px] h-full">
              <button className="text-gray-50">Show Location on Map</button>
              <span>pointer</span>
            </div>
          </div>
          <div id="google-map"></div>
        </div>
      ),
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
        <CSSTransition
          in={items[index].isActive}
          timeout={200}
          nodeRef={nodeRef}
          classNames="accordian"
          mountOnEnter
          unmountOnExit
        >
          <div className={`text-gray-50 pl-4 md:pl-8 lg:pl-12 my-8`}>
            {item.content}
          </div>
        </CSSTransition>
      </Fragment>
    );
  });
  return (
    <div className="mt-2 px-2 sm:px-8 mx:px-10 lg:px-20">{renderedItems}</div>
  );
};

export default Accordion;
