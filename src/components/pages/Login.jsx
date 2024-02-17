
import { API_URL } from "../../constants/env"
import axios from "axios"
import { setToken } from "../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginTemplate from "../templates/LoginTemplate"
import { Link } from "react-router-dom"

const Login = () => {

    const nav = useNavigate()

    const [error, setError] = useState()
    
    const handletSubmit = (e) => {
        e.preventDefault()
        setError()

        const data =  {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        axios.post(`${API_URL}/public/login`, data)
        .then(resp => {
            setToken(resp.data.data.token)
            nav("/")
        })
        .catch( (err) => {
            setError(err)
        })
    }

    return ( 
        <> 
            <LoginTemplate title={"Iniciar Sesion"}>
                <form onSubmit={handletSubmit}>
                    <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        required
                    />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                    <button className="bg-gradient w-full" type="submit">
                        Ingresar
                    </button>
                    <Link className="text-gray-500" to="/registro">
                        ¿Deseas registrarte?
                    </Link>
                    </div>
                    {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data?.data}
                    </p>
                    )}
                </form>
            </LoginTemplate>
        </>
    )
}

export default Login