import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const nodeRef = useRef(null);

  const onClickHandler = (index) => {
    const newIndex = index === activeIndex ? null : index;
    setActiveIndex(newIndex);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`relative flex items-center justify-between text-sm md:text-base 2xl:text-lg border-b border-gray-400 py-3 cursor-pointer mb-2 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          {item.title}
          <i
            className={`fas fa-chevron-down ${
              index === activeIndex ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          ></i>
        </div>
        <Transition
          in={index === activeIndex}
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
              }`}
            >
              <p>{item.content}</p>
            </div>
          )}
        </Transition>
      </Fragment>
    );
  });
  return (
    <div className="relative w-11/12 md:w-10/12 lg:w-1/3 mt-2">{renderedItems}</div>
  );
};

export default Accordion;
