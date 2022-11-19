import { useEffect, useRef, useState } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const onClickHandler = () => {
    setShowNav((prev) => (prev ? false : true));
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
            } gap-4 sm:gap-20 text-white md:text-lg lg:text-xl font-semibold md:!flex`}
          >
            <li className="inline">
              <Link to="/" className="hover:text-[red]">
                Home
              </Link>
            </li>
            <li className="inline mx-4 md:m-0">
              <Link className="hover:text-[red]">Search</Link>
            </li>
            <li className="inline">
              <Link to="contactus" className="hover:text-[red]">
                Contact us
              </Link>
            </li>
          </ul>
        )}
      </Transition>
      <i
        className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl block md:hidden"
        onClick={() => onClickHandler()}
      ></i>
    </div>
  );
};
export default Navbar;
