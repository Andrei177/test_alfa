import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-list">
        <NavLink className="navbar-list__item-link" to={"/products"}>Главная</NavLink>
        <NavLink className="navbar-list__item-link" to={"/create-product"}>Создать продукт</NavLink>
      </div>
    </div>
  )
}

export default Navbar
