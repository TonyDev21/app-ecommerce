import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
    return (
        <>
           <MainHeader/>
           <div className="pt-16 max-w-256 m-auto"> 
                <Outlet/>
            </div>
        </>
    )
}

export default App