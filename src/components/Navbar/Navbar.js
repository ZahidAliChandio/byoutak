import { useEffect, useRef, useState } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const nodeRef = useRef(null);

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
        nodeRef={nodeRef} 
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
            } bg-black absolute left-0 top-12 h-[50vh] md:h-fit md:static md:bg-transparent items-center gap-4 md:gap-20 text-white sm:text-lg md:text-xl font-semibold flex flex-col md:flex-row py-2 md:p-0 w-full md:w-fit z-30`}
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
