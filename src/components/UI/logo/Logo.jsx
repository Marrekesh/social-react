import { Link } from "react-router-dom";
import './Logo.css'

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo" src="https://i.pinimg.com/originals/77/5f/d5/775fd5a8b86d2287b54e38e1235450b9.jpg" alt="dd" />
        </Link>
    )
}

export default Logo