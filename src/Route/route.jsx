import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Home from '../Pages/Home/Home';


import Dashboard from '../Pages/Dashboard/Dashboard';
import Cart from '../Pages/Dashboard/Cart';
import Details from '../Pages/Home/Components/Details';
import Cpu from '../Pages/Home/Compo/Cpu';
import Ram from '../Pages/Home/Compo/Ram';
import Cooler from '../Pages/Home/Compo/Cooler';
import Monitor from '../Pages/Home/Compo/Monitor';
import Keyboard from '../Pages/Home/Compo/Keyboard';
import Graphics from '../Pages/Home/Compo/Graphics';
import AllProducts from '../Pages/Dashboard/AllProducts';
import Login from '../Firebase/Login';
import Register from '../Firebase/Register';
import Banner from '../Pages/Dashboard/Banner';
import User from '../Pages/Dashboard/User';
import Payment from '../Pages/Payment/Payment';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cpu",
        element: <Cpu></Cpu>
      },
      {
        path: "/ram",
        element: <Ram />
      },
      {
        path: "/cooler",
        element: <Cooler />
      },
      {
        path: "/monitor",
        element: <Monitor />
      },
      {
        path: "/keyboard",

        element: <Keyboard />
      },
      {
        path: "/graphics",
        element: <Graphics></Graphics>
      },




      {
        path: "/components/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      },


     







      {
        path: '/carts',
        element: <Cart></Cart>,
      },

      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/payment",
        element:<Payment></Payment>
      }


    




    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,

    children: [
      {
          path:"carts",
          element:<Cart></Cart>

      },
      {
        path: "allproducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "banner",
        element: <Banner></Banner>
      },
      {
        path: "user",
        element:<User></User>
      },
    ]

  }
])

export default route;