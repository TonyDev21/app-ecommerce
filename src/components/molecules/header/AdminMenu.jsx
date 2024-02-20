import { Link} from "react-router-dom"

const AdminMenu = () => {
    return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link to="/products" className="menu-item">Productos</Link>
                </li>
                <li className="flex items-center">
                    <Link to="/" className="menu-item">Volver a la app</Link>
                </li>   
            </ul>
        </nav>
    )
}

export default AdminMenu