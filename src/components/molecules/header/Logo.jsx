import { Link } from "react-router-dom"


const Logo = () => {
    return (
        <>
        <div className="flex">
            <Link to="/">
                <img src="https://edteam-media.s3.amazonaws.com/app/utils/logo/isotipo-color.svg" alt="logo ecommerce" />
            </Link>
        </div>
        </>
    )
}

export default Logo