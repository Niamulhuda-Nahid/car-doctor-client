import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProcessLayout from "../Layout/processLayout";
import Service from "../Pages/Process/Service/Service/Service";
import CheckOut from "../Pages/Process/CheckOut/CheckOut";
import OrderReview from "../Pages/OrderReview/OrderReview";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "service/:id",
        element: <Service></Service>,
        loader: ({ params }) => fetch(`https://car-doctor-server-ten-virid.vercel.app/services/${params.id}`)
      },
      {
        path: 'checkOut/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-ten-virid.vercel.app/services/${params.id}`)
      },
      {
        path: 'order-review',
        element: <PrivateRoute><OrderReview></OrderReview></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default router;