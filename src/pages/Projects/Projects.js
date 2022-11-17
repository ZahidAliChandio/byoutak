import Image1 from "../../static/images/image-1.JPG";
import Image2 from "../../static/images/image-2.JPG";
import Image3 from "../../static/images/image-3.JPG";

const images = [Image1, Image2, Image3];
const Projects = (props) => {
  const togglePage = () => {
    props.setPageIndex((prev) => prev + 1);
  };
  

  return (
    <div className="relative flex flex-col items-center w-full m-auto mt-7 lg:mt-9 pt-8 sm:pt-10 lg:pt-16 sm:w-11/12 md:w-10/12 overflow-hidden">
      <div className="absolute top-0 left-0">
        <div className="relative ml-3 sm:m-auto">
          <div className="absolute left-0 top-0 h-5 w-20 sm:w-24 bg-[red]"></div>
          <div className="absolute left-0 top-0 w-5 h-20 sm:h-24 bg-[red]"></div>
        </div>
      </div>
      <div className="text-white text-center w-full">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl px-4 sm:p-0">
          HERE ARE THE PROJECTS THAT SUIT YOUR NEEDS
        </h2>
        <p className="mt-6 lg:mt-8 text-gray-300 text-lg md:text-xl">
          Select one of the options below
        </p>
      </div>
      <div className=" w-11/12 lg:w-10/12 xl:w-2/3 mt-12">
        <ul
          className="grid grid-cols-2 md:grid-cols-3 gap-3 py-1 text-sm text-gray-700"
          aria-labelledby="dropdownDefault"
        >
          {images.map((item, index) => {
            return (
              <li
                key={index}
                className="my-1 md:my-2 rounded-lg overflow-hidden"
              >
                <img
                  src={item}
                  className="cursor-pointer rounded-lg"
                  onClick={() => togglePage()}
                  alt="project"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Projects;
