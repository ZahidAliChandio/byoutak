const SliderCard = ({ data }) => {
  return (
    <div className="bg-white px-6 py-7 rounded-md accordian-shadow font-gillsans w-3/4 sm:w-4/5 md:w-11/12">
      <div className="w-full h-[180px] rounded-md bg-[#EFEFEF]"></div>
      <div className="px-6">
        <div className="flex flex-col w-full mt-4 gap-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{data.title}</h2>
            <i className="fa fa-heart text-[red] text-2xl"></i>
          </div>
          {/* <span className="text-gray-500 font-bold"><i class="fas fa-cube text-cyan-500"></i>SODIC</span> */}
          <span className="text-gray-500 font-bold">SODIC</span>
        </div>

        <div className="flex flex-col gap-0 mt-1">
          <h3 className="text-2xl font-bold text-[red]">{data.price}</h3>
          <span className="font-semibold">{data.continent}</span>
        </div>
        <div className="flex gap-2 my-4">
          <span>
            <i className="fas fa-map-marker-alt text-[red]"></i>
          </span>
          <span>{data.location}</span>
        </div>
        <div className="flex gap-4 pl-4">
          <div className="flex items-center gap-2">
            <i className="fas fa-bed text-lg"></i>
            <span className="text-sm font-semibold">{data.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-bath text-lg"></i>
            <span className="text-sm font-semibold">{data.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="far fa-square-full text-lg"></i>
            <span className="text-sm font-semibold">{data.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderCard;
