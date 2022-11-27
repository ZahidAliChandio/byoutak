import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import AddProperty from "../../pages/Properties/AddProperty";

const Dashboard = (props) => {
  return (
    <div className="flex w-full bg-white">
      <SideDrawer />
      <div className="flex flex-col w-full">
        <MainHeader>
          <div className="flex gap-1 items-baseline text-xs text-white px-4">
            <span className="title">Properties</span>
            <i className="fas fa-chevron-right text-[0.57rem]"></i>
            <span className="subtitle">Add Properties</span>
          </div>
        </MainHeader>
        <AddProperty />
      </div>
    </div>
  );
};
export default Dashboard;
