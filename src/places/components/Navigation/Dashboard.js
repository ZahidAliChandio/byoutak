import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import AddProperty from "../../pages/Properties/AddProperty";

const Dashboard = (props) => {
  return (
    <div className="flex w-full bg-[#eee]">
      <SideDrawer />
      <div className="flex flex-col w-full">
        <MainHeader>
          <div className="flex gap-1 items-baseline text-[0.7rem] text-white px-4 font-sans-serif font-semibold">
            <span className="title">Properties</span>
            <i className="fas fa-chevron-right text-[0.57rem]"></i>
            <span className="subtitle">Add New Property</span>
          </div>
        </MainHeader>
        <AddProperty />
      </div>
    </div>
  );
};
export default Dashboard;
