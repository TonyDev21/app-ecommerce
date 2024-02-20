import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import AdminMenu from  "../molecules/header/AdminMenu"

const Admin = () => {
    return (
        <>
           <MainHeader>
                <AdminMenu/>
           </MainHeader>
           <div className="pt-16 max-w-256 m-auto"> 
                <Outlet/>
            </div>
        </>
    )
}

export default Admin