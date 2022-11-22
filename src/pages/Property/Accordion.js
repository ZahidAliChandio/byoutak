import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [accordianPlus, setAccordianPlus] = useState("closed");
  const nodeRef = useRef(null);
  const items = [
    { title: "Facial", content: "first content is here" },
    { title: "Waxing", content: "second content is here" },
    { title: "De-Tan", content: "third content is here" },
    { title: "Waxing", content: "fourth content is here" },
    { title: "Facial", content: "fifth content is here" },
    { title: "Waxing", content: "sixth content is here" },
  ];


  const onClickHandler = (index) => {
    const newIndex = index === activeIndex ? null : index;
    setActiveIndex(newIndex);
    if (accordianPlus === "opened") {
      setAccordianPlus("closed");
    } else {
      setAccordianPlus("opened");
    }
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-gray-400 text-gray-50 py-3 cursor-pointer mb-2 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          <div>
            <div class={`circle-plus ${index === activeIndex?accordianPlus:null}`}>
              <div class="circle">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
            </div>
            <div class={`circle-plus-two ${index === activeIndex?accordianPlus:null}`}>
              <div class="circle">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
            </div>
          </div>
          <span>{item.title}</span>
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
