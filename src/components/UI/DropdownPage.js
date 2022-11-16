import { useState } from "react";

const DropdownPage = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };
  const blurHandler=()=>{
    console.log("blured");
    setIsVisible(false);
  }

  return (
    <div className="relative flex flex-col items-center m-auto w-full mx-3 sm:m-auto xl:mt-6 xl:pt-20 sm:w-11/12 md:w-10/12">
      <svg className="absolute left-0 top-0 sm:top-0 xl:top-0" viewBox="0 0 500 500">
        <polygon fill="red" points="0,0 0,70 18,70 18,18 70,18 70,0" />
      </svg>
      <div className="text-white text-center w-full">
        <div className="flex flex-col gap-4 w-full items-center">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{props.item.title}</h2>
          {props.item.input && (
            // <div className="grid grid-cols-[2fr,1fr] border-2  w-11/12 sm:w-10/12 md:w-3/4 lg:w-1/2">
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
        {props.item.subtitle && (
          <p className=" my-6 lg:my-8 text-gray-300 text-lg md:text-xl">{props.item.subtitle}</p>
        )}
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/4">
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
            isVisible ? "opacity-100" : "opacity-0"
          } font-bold mt-2 z-10 bg-white overflow-hidden rounded-xl divide-y divide-gray-100 w-full`}
          onBlur={()=>blurHandler()}
        >
          <ul
            className="py-1 text-sm text-gray-700"
            aria-labelledby="dropdownDefault"
          >
            {props.item.links.map((item, index) => {
              return (
                <li key={index} className="my-1 md:my-2">
                  <span className="block py-1 md:py-2 px-4 hover:text-red-600 cursor-pointer">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DropdownPage;
