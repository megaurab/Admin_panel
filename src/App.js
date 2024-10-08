import React from 'react'
import EmailVerify from './components/EmailVerify'
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginModal from './components/LoginModal';
import Error from "./components/Error";
import { LoginRouteProtected } from './components/LoginRouteProtected';

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children :[
      {
        path:"/",
        element:<EmailVerify />,
      },
      {
        path:"/login",
        element:(
          <LoginRouteProtected>
            <LoginModal />
          </LoginRouteProtected>
        ),
      },
    ],
  },
])

export default appRouter;