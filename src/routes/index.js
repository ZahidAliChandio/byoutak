import { useRoutes } from "react-router-dom";

import NewHome from "../pages/SelectionPages/NewHome";
import Unit from "../pages/SelectionPages/Unit";
import Price from "../pages/SelectionPages/Price";
import Projects from "../pages/Projects/Projects";
import Slider from "../pages/Slider/Slider";
import Meeting from "../pages/Meeting/Meeting";
import ContactUs from "../pages/ContactUs/ContactUs";
import Search from "../pages/Search/Search";
import PropertyPage from "../pages/Property/Property";
import Property from "../pages/SelectionPages/Property";
import Login from "../pages/Admin/Login";
import Dashboard from "../places/components/Navigation/Dashboard";
import { AddProperty, ViewAllProperties } from "../pages/Admin/Properties/Properties";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

export default function Router() {

  return useRoutes([
    {
      path: 'admin',
      children: [
        {
          path: 'login',
          element: (
            <Login />
          ),
        }
      ],

    },
    {
      path: 'admin',
      children: [
        {
          path: 'dashboard',
          element: (
            <Dashboard/>
          ),
        }
      ],

    },
    {
      path: 'admin',
      element: <AdminLayout />,

      children: [
        {
          path: 'addProperty',
          element: (
            <AddProperty />
          ),
        },
        {
          path: 'viewAllProperties',
          element: (
            <ViewAllProperties />
          ),
        }
      ],
    },

    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: "/",          
          element: <NewHome />
        },
        { path: "unit", element: <Unit /> },
        { path: "price", element: <Price /> },
        { path: "property", element: <Property /> },
        { path: "projects", element: <Projects /> },
        { path: "slider", element: <Slider /> },
        { path: "meeting", element: <Meeting /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "search", element: <Search /> },
        { path: "property-page", element: <PropertyPage /> },
      ],
    },
  ])

}