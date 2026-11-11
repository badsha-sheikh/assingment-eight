import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installation from "../Intallation/Installation";
import AppDetails from "../AppDetails/AppDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppErrorPage from "../AppErrorPage/AppErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('/homeData.json'),
        Component:Home,
      },{
        path:'/apps',
        loader: () => fetch('/appsData.json'),
        Component:Apps
      },{
        path:'/install',
        loader: () => fetch('/appsData.json'),
        Component:Installation
      },{
        path:"/appDetails/:Id",
        loader: () => fetch('/appsData.json'),
        Component:AppDetails,
        errorElement:<AppErrorPage></AppErrorPage>

      }
   
    ]
  },
  
]);
