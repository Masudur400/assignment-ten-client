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
import Contact from './conponents/Contact/Contact.jsx';
import Profile from './conponents/Profile/Profile.jsx';

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
        path:'allCard',
        element:<AllCardAndCrafe></AllCardAndCrafe>
      },
      {
        path:'addCraft',
        element: <AddCraft></AddCraft>
      },
      {
        path:'myCraftList',
        element: <MyCraftList></MyCraftList>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
