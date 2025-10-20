import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import About from './Components/About/About';
import Projects from './Components/Learning/Learning';
import Home from './Components/Home';
import Learning from './Components/Learning/Learning';
import Tutorials from './Components/Tutorials/Tutorials';
import Services from './Components/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/learning',
        element: <Learning></Learning>
      },
      {
        path:'/tutorials',
        element: <Tutorials></Tutorials>
      },
      {
        path: '/services',
        element: <Services></Services>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
