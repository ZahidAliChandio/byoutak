import NewHome from "../pages/SelectionPages/NewHome";
import Property from "../pages/SelectionPages/Property";
import Unit from "../pages/SelectionPages/Unit";
import Price from "../pages/SelectionPages/Price";
import Projects from "../pages/Projects/Projects";
import Slider from "../pages/Slider/Slider";
import { useRoutes } from "react-router-dom";

export default function Router(){

    let element=useRoutes([
        {
      path:"/",
      element:<NewHome/>
    },
    {path:"property",element:<Property/>},
    {path:"unit",element:<Unit/>},
    {path:"price",element:<Price/>},
    {path:"projects",element:<Projects/>},
    {path:"slider",element:<Slider/>},
])
    return element;
}