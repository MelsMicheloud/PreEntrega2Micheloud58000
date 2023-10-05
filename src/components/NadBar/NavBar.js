import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";


const NavBar = ()=> {
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>PetLovers</h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/alimentos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perro Mini Adulto</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/alimentos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Medium Adulto</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/alimentos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indoor Adulto</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar