import {useRef, useState } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";
import {  
  CSSTransition,  
} from "react-transition-group";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const nodeRef = useRef(null);

  const onClickHandler = () => {
    setShowNav((prev) => (prev ? false : true));
  };
  return (
    <div className="flex items-center justify-between py-3 md:py-4 px-5 sm:px-12">
      <span>
        <img src={Logo} alt="logo" className="h-8 w-24 lg:w-auto lg:h-auto" />
      </span>
      <CSSTransition nodeRef={nodeRef} in={showNav} timeout={{enter:50,exit:100}} classNames="navbar"
      mountOnEnter
      unmountOnExit
      >
        <ul
          className={`bg-[rgba(0,0,0,0.7)] md:h-fit absolute transition-all duration-400 left-0 top-12 md:static md:bg-transparent items-center gap-4 md:gap-20 text-white sm:text-lg md:text-xl font-semibold flex flex-col md:flex-row py-2 md:p-0 w-full md:w-fit z-30 overflow-hidden`}
        ref={nodeRef}
        >
          <li className="inline">
            <Link to="/" className="hover:text-[red]">
              Home
            </Link>
          </li>
          <li className="inline mx-4 md:m-0">
            <Link to="/search" className="hover:text-[red]">
              Search
            </Link>
          </li>
          <li className="inline">
            <Link to="/contactus" className="hover:text-[red]">
              Contact us
            </Link>
          </li>
        </ul>
      </CSSTransition>
      <i
        className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl"
        onClick={() => onClickHandler()}
      ></i>
    </div>
  );
};
export default Navbar;
