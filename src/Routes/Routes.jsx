import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../addAtoy/AddToy";
import AllToy from "../allToy/AllToy";
import Blog from "../Bolg/Blog";
import Login from "../userLogin/Login";
import SignUp from "../userLogin/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../MyToy/MyToy";

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
          element: <PrivateRoute><AllToy></AllToy></PrivateRoute>,
        },
        {
          path:'/addToy',
          element:<AddToy></AddToy>,
        },
        {
          path:'/Blog',
          element:<Blog></Blog>,
        },
        {
            path : '/login',
              element : <Login></Login>
          },
        {
            path : '/MyToy',
              element : <MyToy></MyToy>
          },
          {
            path : '/SignUp',
              element : <SignUp></SignUp>
          },
      ]
    },
  ]);


  export default router;