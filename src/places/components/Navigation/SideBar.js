import React, { useContext, useEffect, useState } from "react";
import SideBarItem from "../UI/SideBarItem";
import NavLinks from "./NavLinks";
// import Accordion from 'react-bootstrap/Accordion';
function SideBar(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleDrawer = () => {
    setIsButtonClicked(prev=>!prev);
    setDrawerIsOpen((prev) => !prev);
  };
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  const [state, setState] = useState({
    dialogInfo: {
      isOpened: false,
      text: "",
      type: "",
    },
  }); 

  return (
    <aside
      className={`side-drawer flex flex-col flex-shrink-0 left-0 top-0 z-20 ${
        drawerIsOpen ? "w-[220px]" : "w-[44px]"
      } transition-all duration-[900ms] h-screen bg-[#212020] card-shadow overflow-hidden`}
      onClick={props.onClick}
    >
      {/* <Accordion> */}

      <div
        className={`relative flex ${
          drawerIsOpen ? "justify-between" : "justify-center"
        } text-gray-300 font-semibold p-4`}
      >
        <h2 className="text-xs">Navigation</h2>
        <button
          className="main-navigation__menu-btn absolute bg-[#212020] px-4 right-0 w-12 h-5 flex flex-col justify-around cursor-pointer"
          onClick={toggleDrawer}
        >
          <span
            className={`${
              drawerIsOpen ? "-rotate-45 top-[0.52rem]" : "rotate-0"
            } transition-all duration-500 relative block w-5 h-[3px] bg-white`}
          ></span>
          <span
            className={`${
              drawerIsOpen ? "opacity-0" : "opaccity-1"
            } transition-all duration-500 relative block w-5 h-[3px] bg-white`}
          ></span>
          <span
            className={`${
              drawerIsOpen ? "rotate-45 -top-[0.3rem]" : "rotate-0"
            } transition-all duration-500 relative block w-5 h-[3px] bg-white`}
          ></span>
        </button>
      </div>

      {/* <SideBarItem
                itemKey="3"
                title="Projects"
                icon="fas fa-flag"
                subLinks={[
                    "Add Projects", "View All Projects"
                ]}
            />

            <SideBarItem
                itemKey="4"
                title="Properties"
                icon="fas fa-building"
                subLinks={[
                    "Add New Property", "View All Properties"
                ]}
            />

            <SideBarItem
                itemKey="9"
                title="Masters"
                icon="far fa-cog"
                subLinks={[
                    "Add Source", "Add Property Type", "Add Amenities", "Add Agreement Type", "Add Status"
                ]}
            /> */}

      {/* </Accordion> */}

      <NavLinks
        isButtonClicked={isButtonClicked}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      />
    </aside>
  );
}

export default React.memo(SideBar);
