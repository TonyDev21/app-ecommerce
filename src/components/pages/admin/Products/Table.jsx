import { Link } from "react-router-dom"
import useFecth from "../../../../hooks/useFecth"
import Loader from "../../../atoms/Loader"
import { API_URL } from "../../../../constants/env"
import axios from "axios"
import { token } from "../../../../helpers/auth"

const Table = () => {

    const { data,loading,error } = useFecth(`public/products`)

    const deleteProduct = (prod) => {
        if(window.confirm("Estas seguro de eliminar?")){
            axios.delete(`${API_URL}/admin/products/${prod.id}` , {
                headers : {
                    Authorization : `Bearer ${token()}`
                }
            })
            .then( () => 
                alert("Producto Eliminado")
            )
        }
    }

    if (loading) return <Loader/>
    if (error) return <div>{error?.message}</div>

    return (
       <div className="max-w-256 m-auto">
            <section className="pt-10">
                <h1 className="text-4xl mb-6"> Productos</h1>
                <div className="pt-1 mb-12 pb-1">
                    <Link className="bg-gradient button" to="/admin/products/create">
                        Agregar Producto
                    </Link>
                </div>
                <table className="overflow-x-scroll">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && <tr><td colSpan={4}>No hay productos registrados</td></tr>}
                        {
                            data.map( (p) => (
                                <tr key={p.id}>
                                    <td>{p.product_name}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Link to={`/admin/productos/editar/${p.id}`}>Editar</Link>
                                    </td>
                                    <td>
                                        <a className="text-red-600 hover:cursor-pointer"
                                        onClick={() => {
                                            deleteProduct(p)
                                        }}>Eliminar</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
       </div>
    )
}

export default Table