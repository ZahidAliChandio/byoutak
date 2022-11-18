import Logo from "../../static/images/logo.png"

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 md:py-6 px-12">
      <span>
        <img src={Logo} alt="logo" />
      </span>
      <span><i className="fas fa-bars  text-[red] text-lg md:text-xl lg:text-2xl"></i></span>
    </div>
  );
};
export default Navbar;
