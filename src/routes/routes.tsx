import Layout from "@/dashboard/layout/Layout"
import Dashboard from "@/dashboard/pages/Dashboard"
import Home from "@/pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
  },
  {
    path:"/dashboard",
    element:<Layout />,
    children:[
      {
        path:"/dashboard",element:<Dashboard />
      },
  
    ]
  }
  
  ])

  
  const Routes = () => {
    return (
        <RouterProvider  router={router}></RouterProvider>
    )
  }
  
  export default Routes