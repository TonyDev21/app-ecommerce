import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./components/router/Router"
import "./styles/index.css"
import { UserProvider } from './context/UserContext'  // Importa UserProvider con llaves
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CartProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  </CartProvider>
)