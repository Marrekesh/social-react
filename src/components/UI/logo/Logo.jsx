import { Link } from "react-router-dom";
import './Logo.css'

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo" src="https://st2.depositphotos.com/16030310/43144/v/450/depositphotos_431444236-stock-illustration-initial-letter-logotype-company-name.jpg?forcejpeg=true" alt="dd" />
        </Link>
    )
}

export default Logo