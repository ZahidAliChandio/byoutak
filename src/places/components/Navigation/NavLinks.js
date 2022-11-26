import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const lis = [
    {
      title: "Dashboard",
      iconClass: "fas fa-tachometer-alt-fast",
      isLi: false,
      linkTo: "",
    },
    {
      title: "Projects",
      iconClass: "fas fa-flag",
      isLi: true,
      linkTo: "",
    },
    {
      title: "Properties",
      iconClass: "fas fa-building",
      isLi: true,
      linkTo: "",
    },
  ];
  const subList = [
    {
      content: null,
    },
    {
      content: [{ title: "Add Projects" }, { title: "View all Projects" }],
    },
    {
      content: [
        { title: "Add New Property" },
        { title: "View all Properties" },
      ],
    },
  ];

  const activeSubList = activeLinkIndex
    ? subList[activeLinkIndex].content
    : null;

  const listItemClickHandler = (index) => {
    setActiveLinkIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Fragment>
      <ul className="nav-links flex flex-col items-center w-full h-full bg-[#212020] mt-4">
        {lis.map((li, index) => {
          return (
            <Fragment key={index}>
              <li
                className={`relative ${
                  activeLinkIndex === index
                } flex items-center justify-between text-xs  bg-gray-300 py-3 cursor-pointer font-gillsans px-4 border border-[#212020] text-[#212020] w-full`}
                onClick={() => listItemClickHandler(index)}
                key={index}
              >
                {" "}
                <div className="flex items-center gap-4">
                  <i className={`${li.iconClass} `}></i>
                  <span>{li.title}</span>
                </div>
                <div className="flex gap-12 items-center">
                  {li.isLi && (
                    <i
                      className={`fas fa-chevron-left ${
                        activeLinkIndex === index ? "-rotate-90" : "rotate-0"
                      } transition-all duration-500`}
                    ></i>
                  )}
                </div>
              </li>
              {activeSubList && activeLinkIndex === index && (
                <ul className="flex flex-col gap-1 text-gray-300 my-2 font-semibold">
                  {activeSubList.map((content, index) => {
                    return (
                      <li key={index} className="">
                        <NavLink to={""} className="flex gap-2 text-gray-300 text-xs">
                          <i className="fal fa-chevron-double-right text-[red]"></i>
                          <span className="">{content.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Fragment>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default NavLinks;
