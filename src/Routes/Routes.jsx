import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../addAtoy/AddToy";
import AllToy from "../allToy/AllToy";
import Blog from "../Bolg/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/allToy',
          element: <AllToy></AllToy>,
        },
        {
          path:'/addToy',
          element:<AddToy></AddToy>,
        },
        {
          path:'/Blog',
          element:<Blog></Blog>,
        },
      ]
    },
  ]);


  export default router;