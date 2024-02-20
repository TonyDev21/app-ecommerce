import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Registro from "../pages/Registro"
import Formulario from "../pages/admin/Products/Formulario"
import Table from "../pages/admin/Products/Table"
import Admin from "../templates/Admin"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import Payment from "../pages/Payment"
import Profile from "../pages/Profile"
import Sales from "../pages/admin/Sales"

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
            },
            {
                path: "/products/:id",
                element: <Product/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/pago-exitoso",
                element: <Payment/>,
            },
            {
                path: "/perfil",
                element: <Profile/>,
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
    },
    {
        path: "/admin",
        element: <Admin/>,
        children: [
            {
                path: "/admin/ventas",
                element: <Sales/>
            },
            {
                path: "/admin/products",
                element: <Table/>
            },
            {
                path: "/admin/products/create",
                element: <Formulario/>
            },
            {
                path: "/admin/products/editar/:id",
                element:  <Formulario/>
            }
        ]
    }
])
 

 export default router