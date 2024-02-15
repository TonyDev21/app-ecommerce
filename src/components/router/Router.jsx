import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Products from "../pages/Products"

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
    }
])
 

 export default router