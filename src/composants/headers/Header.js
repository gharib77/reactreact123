import { Link,NavLink} from "react-router-dom"
import '../headers/Header.css'
const Header = () => {
  return (
    <>
    <nav>
      <Link to="#">Bootstrap</Link>
      <ul>
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/produits">Produits</NavLink></li>
        <li><NavLink className="nav-link" to="/services">Services</NavLink></li>
      </ul>
    </nav>
    </>

  )
}

export default Header
