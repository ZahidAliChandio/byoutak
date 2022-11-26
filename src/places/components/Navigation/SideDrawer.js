import { useState } from "react";

import NavLinks from "./NavLinks";

const SideDrawer = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  return (
    <aside
      className={`side-drawer block relative left-0 top-0 z-20 ${
        drawerIsOpen ? "w-1/3 lg:w-[20%]" : "w-[44px]"
      } transition-all duration-500 h-screen bg-[#212020] card-shadow mr-2 overflow-hidden`}
      onClick={props.onClick}
    >
      <div
        className={`flex ${
          drawerIsOpen ? "justify-between" : "justify-center"
        } text-gray-300 font-semibold p-4`}
      >
        {drawerIsOpen && <h2 className="text-xs">Navigation</h2>}
        <button
          className="main-navigation__menu-btn w-6 h-5 bg-transparent flex flex-col justify-around cursor-pointer"
          onClick={toggleDrawer}
        >
          <span className="block w-5 h-[3px] bg-white"></span>
          <span className="block w-5 h-[3px] bg-white"></span>
          <span className="block w-5 h-[3px] bg-white"></span>
        </button>
      </div>
      <NavLinks isOpen={drawerIsOpen}/>
    </aside>
  );
};
export default SideDrawer;
