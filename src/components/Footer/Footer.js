const Footer = () => {
  return (
    <div className="absolute bottom-0 flex justify-center w-full gap-4 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-32">
      <div className="flex flex-col items-center">
        <span>
          <i className="fas fa-headphones-alt text-xl text-gray-400"></i>
        </span>
        <span className="font-semibold text-white">Call Us</span>
      </div>
      <div className="flex flex-col items-center">
        {/* <span><i className="fas fa-user text-xl text-gray-400"></i></span> */}
        <span><i className="text-gray-400">m</i></span>
        <span className="font-semibold text-white">Message Us</span>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <i className="fas fa-user text-xl text-gray-400"></i>
        </span>
        <span className="font-semibold text-white">Schedule a Meeting</span>
      </div>
    </div>
  );
};
export default Footer;
