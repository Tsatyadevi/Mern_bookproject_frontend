import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../home/Home"
import Shop from "../shop/Shop";
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManagerBooks from "../dashboard/ManagerBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
      
      
        {
            path:'/shop',
            element:<Shop/>
        },
      
      {
        path:'/blog',
        element:<Blog/>
    }, {
      path:'/about',
      element:<About/>
  }
    ,{
        path:"/book/:id",
        element:<SingleBook/>,
        loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
    }
    ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },  {
          path:"/admin/dashboard/manager",
          element:<ManagerBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`https://mern-bookproject-backend.onrender.com/book/${params.id}`)
   
        }
      ]
    },{
      path:"sign-up",
      element:<Signup/>
    },{
      path:"login",
      element:<Login/>
    },{
      path:"logout",
      element:<Logout/>
    }
  ]);

  export  default router;