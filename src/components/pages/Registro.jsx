import { useState } from "react"
import LoginTemplate from "../templates/LoginTemplate"
import { API_URL } from "../../constants/env"
import axios from "axios"
import { setToken } from "../../helpers/auth"
import { Link, useNavigate } from "react-router-dom"

const Registro = () => {

    const nav = useNavigate()

    const [error, setError] = useState()
    
    const handletSubmit = (e) => {
        e.preventDefault()
        setError()

        const data =  {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        axios.post(`${API_URL}/public/users`, data)
        .then(resp => {
            setToken(resp.data.data.token)
            nav("/login")
        })
        .catch( (err) => {
            setError(err)
        })
    }

    return (
        <>
             <LoginTemplate title="Regístrate">
                <form onSubmit={handletSubmit}>
                    <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        name="fullname"
                        required
                    />
                    </div>
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
                        Crear cuenta
                    </button>
                    <Link className="text-gray-500" to="/login">
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>
                    </div>
                    {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data.errors[0].message}
                    </p>
                    )}
                </form>
            </LoginTemplate>
        </>
    )
}

export default Registro