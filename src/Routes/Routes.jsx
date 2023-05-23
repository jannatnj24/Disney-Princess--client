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
import Error from "../Errorpage/Error";
import SingleToy from "../allToy/SingleToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
          path:'/toy/:id',
          element: <PrivateRoute><SingleToy/></PrivateRoute>,
          loader: ({params})=> fetch(`https://disney-princess-server.vercel.app/doll/${params.id}`)
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