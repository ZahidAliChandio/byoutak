import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 md:py-4 px-5 sm:px-12">
      <span>
        <img src={Logo} alt="logo" className="h-8 w-24 lg:w-auto lg:h-auto" />
      </span>
      <ul className="flex gap-4 sm:gap-20 text-white text-lg font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Search</li>
        <li>
          <Link to="contactus">Contact us</Link>
        </li>
      </ul>
      <i className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl"></i>
    </div>
  );
};
export default Navbar;
