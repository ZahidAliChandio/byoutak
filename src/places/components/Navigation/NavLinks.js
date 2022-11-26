import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const lis = [
    {
      title: "Dashboard",
      iconClass: "fas fa-tachometer-alt-fast",
      linkTo: "",
    },
    {
      title: "Projects",
      iconClass: "fas fa-flag",
      linkTo: "",
    },
    {
      title: "Properties",
      iconClass: "fas fa-building",
      linkTo: "",
    },
  ];

  const onClickHander = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <ul className="nav-links flex flex-col items-center w-full h-full bg-[#212020] mt-4">
      {lis.map((li, index) => (
        <li className="w-full">
          <NavLink
            to=""
            exact
            className={`${
              activeLinkIndex === index
                ? "font-semibold bg-gray-400 text-[#212020]"
                : "text-gray-100"
            } flex items-center hover:font-semibold gap-4 w-full text-xs px-4 py-2`}
            onClick={() => onClickHander(index)}
          >
            <i className={`${li.iconClass} pr-2`}></i>
            <span className="">{li.title}</span>
          </NavLink>
        </li>
      ))}

      {/* <button className="border text-white bg-transparent hover:bg-[#f8df00] hover:text-[#292929] active:text-[#292929] active:bg-[#f8df00]"></button> */}
    </ul>
  );
};

export default NavLinks;
