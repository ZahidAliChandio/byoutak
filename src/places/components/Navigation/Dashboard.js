import SideDrawer from "./SideDrawer";

const Dashboard = (props) => {
  return (
    <div className="flex w-full bg-gray-100">
      <SideDrawer />
      <div className="mt-20 text-[#212020]">body content</div>
    </div>
  );
};
export default Dashboard;
