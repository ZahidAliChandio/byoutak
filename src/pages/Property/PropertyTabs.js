import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";
const PropertyTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubItemIndex, setActiveSubItemIndex] = useState(null);
  const nodeRef = useRef(null);

  const list = ["Villa", "Townhouse", "Penthouse", "Apartment"];
  const subList = [
    {
      subList: [
        { title: "Brooks Villa A", content: "a" },
        { title: "Brooks Villa B", content: "b" },
      ],
    },
    {
      subList: [
        { title: "Town House Corner", content: "a" },
        { title: "Town House Middle", content: "b" },
      ],
    },
    {
      subList: [
        { title: "Pent House", content: "a" },
        { title: "Pent House", content: "b" },
      ],
    },
    {
      subList: [
        { title: "2 Bedrooms", content: "a" },
        { title: "3 Bedrooms", content: "b" },
      ],
    },
  ];
  const activeSubList = subList[activeIndex].subList;
  const onClickHandler = (index) => {
    setActiveIndex(index);
  };
  const subListClickHandler = (index) => {
    setActiveSubItemIndex(index);
  };

  return (
    <Fragment>
      <ul className="flex gap-4 border-b w-fit">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickHandler(index)}
              className={`${
                activeIndex === index
                  ? "font-bold border border-b-0"
                  : "border-none"
              }  px-4 py-2`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {activeSubList.map((item, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`relative flex items-center justify-between text-sm md:text-base 2xl:text-lg border bg-gray-300 py-2 cursor-pointer font-gillsans px-4 mt-4 text-[#212020]`}
              onClick={() => subListClickHandler(index)}
            >
              <span>{item.title}</span>
              <div className="flex gap-12 items-center">
                <i
                  className={`fas fa-chevron-down ${
                    activeSubItemIndex === index ? "rotate-180" : "rotate-0"
                  } transition-all duration-500`}
                ></i>
              </div>
            </div>
            <Transition
              in={activeSubItemIndex === index}
              timeout={{ enter: 600, exit: 5000 }}
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
            >
              {(state) => (
                <div
                  className={`${
                    state === "entering"
                      ? "open-accordion"
                      : state === "exiting"
                      ? "close-accordion"
                      : null
                  }`}
                >
                  {item.content}
                </div>
              )}
            </Transition>
          </Fragment>
        );
      })}
    </Fragment>
  );
};
export default PropertyTabs;
