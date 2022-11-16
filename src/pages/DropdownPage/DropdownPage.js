import { useState } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";

const DropdownPage = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [transition, setTransition] = useState(true);
  const nodeRef = useRef(null);

  const item=props.item;

  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };
  const togglePage = () => {
    setTransition(false);
    props.setPageIndex((prev) => prev + 1);
  };
  const blurHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative flex flex-col items-center w-full m-auto mt-7 lg:mt-9 pt-8 sm:pt-10 lg:pt-16 sm:w-11/12 md:w-10/12 overflow-hidden">
      <div className="absolute top-0 left-0">
        <div className="relative ml-3 sm:m-auto">
          <div className="absolute left-0 top-0 h-5 w-20 sm:w-24 bg-[red]"></div>
          <div className="absolute left-0 top-0 w-5 h-20 sm:h-24 bg-[red]"></div>
        </div>
      </div>
      {/* <Transition ref={nodeRef} in={transition} timeout={5000}>
        {(state) => (
          <div className={`flex flex-col items-center w-full text-center transition-all duration-300 ${state==="entering"?"translate-x-20":state==="exiting"?"translate-x-0":null}`}>
            {console.log(state)} */}
            <div className="text-white text-center w-full">
              <div className="flex flex-col gap-8 w-full items-center">
                <h2 className="font-bold px-8 sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {item.title}
                </h2>
                {item.input && (
                  <div className="grid grid-cols-[4fr,1fr] justify-center w-[70%] lg:w-[60%]">
                    <input
                      type="text"
                      id="visitors"
                      className="block w-full px-3 md:px-4 py-2.5 text-sm md:text-base bg-gray-50 outline-none  border-gray-300 text-gray-900 rounded-l-full"
                      placeholder=""
                      required
                    />
                    <span className="p-2.5 bg-[red] rounded-r-full w-full"></span>
                  </div>
                )}
              </div>
              {item.subtitle && (
                <p className="mt-6 lg:mt-8 text-gray-300 text-lg md:text-xl">
                  {item.subtitle}
                </p>
              )}
            </div>

            <div className="w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/4 my-12">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="flex justify-between text-gray-400 bg-zinc-50 focus:outline-none font-bold rounded-full text-sm px-5 py-3 text-center  items-center w-full"
                type="button"
                onClick={() => toggleContent()}
              >
                Choose One{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {/* Dropdown menu  */}
              <div
                id="dropdown"
                className={`${
                  isVisible ? "visible" : "invisible"
                } font-bold mt-2 z-10 bg-white overflow-hidden rounded-xl divide-y divide-gray-100 w-full`}
                onBlur={() => blurHandler()}
              >
                <ul
                  className="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdownDefault"
                >
                  {item.links.map((item, index) => {
                    return (
                      <li key={index} className="my-1 md:my-2">
                        <button
                          className="block py-1 md:py-2 px-4 hover:text-red-600 cursor-pointer"
                          onClick={() => togglePage()}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          {/* </div>
        )}
      </Transition> */}
    </div>
  );
};
export default DropdownPage;
