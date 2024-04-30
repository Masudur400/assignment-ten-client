import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './conponents/Root/Root.jsx';
import Home from './conponents/Home/Home.jsx';
import ErrorPage from './conponents/ErrorPage/ErrorPage.jsx';
import AllCardAndCrafe from './conponents/AllCardAndCrafe/AllCardAndCrafe.jsx';
import AddCraft from './conponents/AddCraft/AddCraft.jsx';
import MyCraftList from './conponents/MyCraftList/MyCraftList.jsx'; 
import Profile from './conponents/Profile/Profile.jsx';
import Register from './conponents/Register/Register.jsx';
import Login from './conponents/Login/Login.jsx';
import AuthProvider from './conponents/providers/AuthProvider.jsx';
import UpdateProfile from './conponents/UpdateProfile/UpdateProfile.jsx';
import CardDetails from './conponents/CardDetails/CardDetails.jsx';
import PrivetRoute from './conponents/PrivetRoute/PrivetRoute.jsx';
import MyCardDetails from './conponents/MyCard/MyCardDetails.jsx';
import UpdateCard from './conponents/UpdateCard/UpdateCard.jsx';  
import LandScape from './conponents/LandScape/LandScape.jsx';
import PortraitDrawing from './conponents/PortraitDrawing/PortraitDrawing.jsx';
import WatercolourPainting from './conponents/WatercolourPainting/WatercolourPainting.jsx';
import OilPainting from './conponents/OilPainting/OilPainting.jsx';
import CharcoalSketching from './conponents/CharcoalSketching/CharcoalSketching.jsx';
import CartoonDrawing from './conponents/CartoonDrawing/CartoonDrawing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allCard',
        element:<PrivetRoute>
          <AllCardAndCrafe></AllCardAndCrafe>
        </PrivetRoute>,
        loader:() => fetch('https://painting-and-drawing-server-nu.vercel.app/craft')
      },
      {
        path:'/addCraft',
        element: <PrivetRoute>
          <AddCraft></AddCraft>
        </PrivetRoute>
      },
      {
        path:'/myCraftList',
        element: <PrivetRoute>
          <MyCraftList></MyCraftList>
        </PrivetRoute>,
        loader:()=> fetch("https://painting-and-drawing-server-nu.vercel.app/craft")
      }, 
      {
        path:'/profile',
        element:<PrivetRoute>
          <Profile></Profile>
        </PrivetRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/updateProfile',
        element:<PrivetRoute>
          <UpdateProfile></UpdateProfile>
        </PrivetRoute>
      },
      {
        path:'/craft/:id',
        element:<PrivetRoute>
          <CardDetails></CardDetails>
        </PrivetRoute>,
        loader:() => fetch('https://painting-and-drawing-server-nu.vercel.app/craft')
      },
      {
        path:'/myCard/:id',
        element:<PrivetRoute>
          <MyCardDetails></MyCardDetails>
        </PrivetRoute>,
        loader:() => fetch('https://painting-and-drawing-server-nu.vercel.app/craft')
      },
      {
        path:'/updateCard/:id',
        element:<PrivetRoute>
          <UpdateCard></UpdateCard>
        </PrivetRoute>,
        loader:({params})=>fetch(`https://painting-and-drawing-server-nu.vercel.app/craft/${params.id}`)
      } ,
      {
        path:'/categoriesSection', 
        element:  <PrivetRoute>
          <LandScape></LandScape>
          </PrivetRoute>
      },
      {
        path:'/portrait',
        element:<PrivetRoute>
          <PortraitDrawing></PortraitDrawing>
          </PrivetRoute>
      },
      {
        path:'/WaterColour',
        element:<PrivetRoute>
          <WatercolourPainting></WatercolourPainting>
          </PrivetRoute>
      },
      {
        path:'/oilPainting',
        element:<PrivetRoute>
          <OilPainting></OilPainting>
          </PrivetRoute>
      },
      {
        path:'/charcoalSketching',
        element:<PrivetRoute>
          <CharcoalSketching></CharcoalSketching>
          </PrivetRoute>
      },
      {
        path:'/cartoonDrawing',
        element:<PrivetRoute>
          <CartoonDrawing></CartoonDrawing>
          </PrivetRoute>
      }

       
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
