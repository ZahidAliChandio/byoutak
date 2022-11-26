import { Outlet } from 'react-router-dom';
import SideBar from '../components/UI/Sidebar'
export default function AdminLayout() {
  return (
    <div>
      <main id="pageContainer">
        <SideBar />
        <section id="page_section">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
