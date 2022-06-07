import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Messi</Link></li>
                    <li><Link to="/servicios">Aguero</Link></li>
                    <li><Link to="/contacto">Dimaria </Link></li>
                </ul>
            </div>
        </nav>
       
    )
}
export default Nav