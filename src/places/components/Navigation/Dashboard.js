import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import AddProperty from "../../pages/Properties/AddProperty";
import ViewAllProperties from "../../pages/Properties/ViewAllProperties";

const Dashboard = (props) => {
  return (
    <div className="flex w-full bg-[#eee]">
      <SideDrawer />
      <div className="flex flex-col w-full">
        <MainHeader type="Properties" subtype="Add New Property" />
        <AddProperty />
        {/* 
        <MainHeader type="Properties" subtype="View All Properties"/>
        <ViewAllProperties/>
      */}
      </div>
    </div>
  );
};
export default Dashboard;
