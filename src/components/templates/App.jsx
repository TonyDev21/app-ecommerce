import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
    return (
        <>
           <MainHeader/>
           <Outlet/> 
        </>
    )
}

export default App