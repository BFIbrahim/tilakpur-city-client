import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Service from './Components/Services/Service/Service';
import Developer from './Components/Services/Developer/Developer';
import Opinions from './Components/Services/Opinion/Opinion';
import Photos from './Components/Photos/photos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      
      {
        path: "/opinions",
        element: <Opinions></Opinions>
      },
      {
        path: "/developer",
        element: <Developer></Developer>
      },
      {
        path: "/photos",
        element: <Photos></Photos>
      }
    ]
  },
  {
    path: '/services',
    element: <Service></Service>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className = 'md:max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
