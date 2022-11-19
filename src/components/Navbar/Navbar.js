import { useEffect, useRef, useState } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const nodeRef = useRef(null);
  const navCheck = useRef(null);

  const onClickHandler = () => {
    navCheck.current.checked ? setShowNav(true) : setShowNav(false);
  };
  useEffect(() => {
    window.innerWidth > 768 ? setShowNav(true) : setShowNav(false);
  }, []);

  return (
    <div className="flex items-center justify-between py-3 md:py-4 px-5 sm:px-12">
      <span>
        <img src={Logo} alt="logo" className="h-8 w-24 lg:w-auto lg:h-auto" />
      </span>
      <Transition
        nodeRef={nodeRef}
        in={showNav}
        timeout={{ enter: 500, exit: 200 }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <ul
            className={`${
              state === "entering"
                ? "enter-animation"
                : state === "exiting"
                ? "exit-animation"
                : null
            } flex gap-4 sm:gap-20 text-white text-lg font-semibold`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Search</li>
            <li>
              <Link to="contactus">Contact us</Link>
            </li>
          </ul>
        )}
      </Transition>
      <div className="block md:hidden" onClick={() => onClickHandler()}>
        <label htmlFor="navCheck">
          <i className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl"></i>
        </label>
        <input
          type="checkbox"
          id="navCheck"
          className="hidden"
          ref={navCheck}
        />
      </div>
    </div>
  );
};
export default Navbar;
