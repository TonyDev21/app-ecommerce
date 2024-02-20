import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import SummaryItem from "../atoms/SummaryItem"
import { Link } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../constants/env"
import { token } from "../../helpers/auth"
import PayPalPayment from "../organisms/PayPalPayment"

const Cart = () => {
    
    const {state} = useContext(CartContext)

    let value = 0
    state.cart.forEach( c => (value += c.price))

    const [order , setOrder] = useState()

    let products = state.cart.map( p => {
      return {
        product_id: p.id,
        amount: 1,
        unit_price: p.price,
      }
    })

    const data = {
        products
    }

    const handleOrder = () => {
        axios.post(`${API_URL}/private/purchase-orders`, data , {
          headers : {
            Authorization: `Bearer ${token()}`
          }
        })
        .then( resp => {
          setOrder(resp.data.data)
        })
        .catch( err => {
          console.log(err)
        })
    }

    
    return (
        <div className="max-w-256 m-auto">
          <div className="grid grid-cols-3 gap-8 mb-16">
            <section className="col-span-2 pt-10">
              <h1 className="text-3xl font-semibold mb-6">Carrito de compras</h1>
              {state?.cart?.length > 0 ? (
                <div>
                  <div className="grid mb-2 border-t border-gray-300/60">
                    {state.cart.map((prod) => (
                      <SummaryItem key={prod.id} product={prod} />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <p className="mb-2">Tu carrito está vacío</p>
                  <Link to="/productos" className="button bg-gradient">
                    Ver productos
                  </Link>
                </>
              )}
             
              {
                !order ? ( <button className="bg-gradient" onClick={handleOrder}>Crear Orden</button>)
                : ( <>
                    <p> Numero de Orden: ${order.id}</p>
                    <PayPalPayment value={value} order={order} />
                    </>)
              }
            </section>
          </div>
        </div>
      )
}

export default Cart