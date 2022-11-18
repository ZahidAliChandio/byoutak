import Logo from "../../static/images/logo.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 md:py-4 px-5 sm:px-12">
      <span>
        <img src={Logo} alt="logo" className="h-8 w-24 lg:w-auto lg:h-auto"/>
      </span>
      <span><i className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl"></i></span>
    </div>
  );
};
export default Navbar;
