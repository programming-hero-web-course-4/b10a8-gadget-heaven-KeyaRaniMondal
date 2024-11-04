import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Dashboard from './components/dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'gadgets/:product_id',
        element:<GadgetDetail></GadgetDetail>,
        loader:()=>fetch('/product.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)