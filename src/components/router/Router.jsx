import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Registro from "../pages/Registro"

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/products",
                element: <Products/>,
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Registro/>
    }
])
 

 export default router