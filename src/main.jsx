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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/services',
        element: <Service></Service>
      },
      {
        path: "/opinions",
        element: <Opinions></Opinions>
      },
      {
        path: "/developer",
        element: <Developer></Developer>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className = 'md:max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
