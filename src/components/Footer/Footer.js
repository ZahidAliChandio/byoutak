import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-1 flex justify-center w-full gap-4 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-32">
      <a href="tel:03482146022" className="flex flex-col items-center">
        <span>
          <i className="fas fa-headphones-alt text-xl text-gray-400"></i>
        </span>
        <span className="font-semibold text-white text-sm sm:text-base">
          Call Us
        </span>
      </a>
      <a
        href="whatsapp://send?text=Lets chat!&phone=+923163366566"
        className="flex flex-col items-center"
      >
        <i className="fas fa-comment-dots text-xl text-gray-400"></i>
        <span className="font-semibold text-white text-sm sm:text-base">
          Message Us
        </span>
      </a>
      <Link to="/meeting" className="flex flex-col items-center">
        <span>
          <i className="fas fa-user text-xl text-gray-400"></i>
        </span>
        <span className="font-semibold text-white text-sm sm:text-base">
          Schedule a Meeting
        </span>
      </Link>
    </footer>
  );
};
export default Footer;
