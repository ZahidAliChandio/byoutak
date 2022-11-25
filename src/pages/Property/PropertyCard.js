const PropertyCard = (props) => {
  const data = props.data;
  
  return (
    <a href="/" className="relative overflow-hidden w-fit">
      <img src={data.image} alt="location" className="min-h-[285px] object-cover" />
      <div className="absolute bottom-0 w-fit p-3">
        <img src={data.logo} alt="hyde" className="h-16 w-16"/>
        <h3 className="font-semibold mt-2">{data.title}</h3>
        <h4>{data.location}</h4>
        <div className="text-end">
          <p>Starting Price</p>
          <span className="font-bold">{data.price}</span>
        </div>
      </div>
    </a>
  );
};
export default PropertyCard;
