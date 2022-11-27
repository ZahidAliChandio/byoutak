import { Fragment, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavLinks = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  //const nodeRef = useRef(null);
  const lis = [
    {
      title: "Dashboard",
      iconClass: "fas fa-tachometer-alt-fast",
      isLi: false,
    },
    {
      title: "Projects",
      iconClass: "fas fa-flag",
      isLi: true,
    },
    {
      title: "Properties",
      iconClass: "fas fa-building",
      isLi: true,
    },
  ];
  const subList = [
    {
      content: null,
    },
    {
      content: [
        { title: "Add Projects", linkTo: "" },
        { title: "View all Projects", linkTo: "" },
      ],
    },
    {
      content: [
        { title: "Add New Property" },
        { title: "View all Properties" },
      ],
    },
  ];

  const listItemClickHandler = (index) => {
    setActiveLinkIndex((prev) => (prev === index ? null : index));
  };

  const activeSubList = activeLinkIndex
    ? subList[activeLinkIndex].content
    : null;

  return (
    <Fragment>
      <ul
        className="nav-links flex flex-col items-center w-full h-full bg-[#212020]"
        onMouseEnter={props.openDrawer}
        onMouseLeave={props.closeDrawer}
      >
        {lis.map((li, index) => {
          return (
            <Fragment key={index}>
              <li
                className={`relative ${
                  activeLinkIndex === index?'text-[color:var(--red-color)] bg-[#070707] border-l-[color:var(--red-color)]':null
                } flex items-center justify-between border-[3px] border-transparent  text-xs  bg-transparent py-[10px] cursor-pointer font-gillsans px-4 text-white hover:pl-[1.18rem] hover:border-l-[color:var(--red-color)] hover:text-[color:var(--red-color)] hover:bg-[#070707] w-full font-open-sans`}
                key={index}
                onClick={() => listItemClickHandler(index)}
              >
                {" "}
                <div className="flex items-center gap-5">
                  <i className={`${li.iconClass} `}></i>
                  <span>{li.title}</span>
                </div>
                <div className="flex gap-12 items-center">
                  {li.isLi && (
                    <i
                      className={`fas fa-chevron-left ${
                        activeLinkIndex === index ? "-rotate-90" : "rotate-0"
                      } CSStransition-all duration-500`}
                    ></i>
                  )}
                </div>
              </li>
              {/* <CSSTransition
                in={
                  !(activeSubList === null || activeSubList === "undefined") &&
                  activeLinkIndex === index
                }
                timeout={300}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef}
                className="portal-item"
              > */}
              {activeSubList && activeLinkIndex === index && (
                <ul className="flex flex-col gap-2 text-gray-300 my-1 font-semibold w-full">
                  {activeSubList.map((content, index) => {
                    return (
                      <li key={index} className="">
                        <NavLink
                          to={content.linkTo}
                          className="flex items-center gap-[10px] text-gray-300 text-xs w-[200px] pl-6 hover:text-[color:var(--red-color)]"
                        >
                          <div className="">
                            <i className="fas fa-chevron-right w-1"></i>
                            <i className="fas fa-chevron-right w-1"></i>
                          </div>
                          <div className="cursor-pointer">
                            {content.title}
                          </div>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
              {/* </CSSTransition> */}
            </Fragment>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default NavLinks;