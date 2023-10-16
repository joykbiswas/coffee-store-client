import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Root from './Components/Root.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
{
  path:"/",
  element:<Root></Root>,
  children:[
    {
      path: "/",
      element: <App></App>,
      loader:() => fetch('https://coffee-store-server-9wq0ey8yb-joys-projects-3bf6e672.vercel.app/coffee')
    },
    {
      path:"addCoffee",
      element:<AddCoffee></AddCoffee>
    },
    
    {
      path:"/updateCoffee/:id",
      element:<UpdateCoffee></UpdateCoffee>,
      loader:({params})=>fetch(`https://coffee-store-server-9wq0ey8yb-joys-projects-3bf6e672.vercel.app/coffee/${params.id}`)
    },
    {
      path:'/signin',
      element:<SignIn></SignIn>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:"/users",
      element:<Users></Users>,
      loader:() =>fetch('https://coffee-store-server-9wq0ey8yb-joys-projects-3bf6e672.vercel.app/user')
    }
  ]
}
    
    

  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
