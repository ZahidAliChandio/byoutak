import FilterHeader from "./FilterHeader";
import Delivery from "./Delivery/Delivery";
import Price from "./Price/Price";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import PropertyType from "./PropertyType/PropertyType";
import Modal from "../../components/UI/Modal";
import FilterAccordion from "../../components/UI/FilterAccordian";
const components = [
  {
    title: "Delivery",
    content: <Delivery />,
    isAcitve: false,
  },
  {
    title: "Price",
    content: <Price className="" />,
    isAcitve: false,
  },
  {
    title: "Property types",
    content: <PropertyType className="" />,
    isAcitve: false,
  },
  {
    title: "Property options",
    content: <PropertyDetails className="" />,
    isAcitve: false,
  },
];

const Filter = (props) => {
  return (
    <Modal
      className="!top-0 !left-0 !translate-x-0 !overflow-hidden !h-screen !rounded-none !w-[70%] shadow-none border border-gray-300 !z-[10000]"
      onClose={() => props.setShowAll()}
      backdropClass="!fixed"
    >
      <FilterHeader />
      <FilterAccordion items={components} />
    </Modal>
  );
};
export default Filter;
