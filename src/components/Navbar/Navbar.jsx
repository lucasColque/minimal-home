import React,{useState} from 'react';
import './navbar.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import 'react-bootstrap-icons';

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const [busqueda, setBusqueda] = useState("");
    const handleChange = e =>{
        setBusqueda(e.target.value);
        navigate(`/catalogo/${e.target.value}`)
    }
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()

        navigate(`/catalogo/${busqueda}`);
    };
    return (
        <header className='navbar__header'>

            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className='navbar__menu' onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>
                    <span className='navbar-menu__span'></span>
                    <span className='navbar-menu__span'></span>
                    <span className='navbar-menu__span'></span>
                </div>

                <div className={menuOpen? "navbar__container-ul-form open":"navbar__container-ul-form"}>

                    <ul className='navbar__ul'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/catalogo'>Catálogo</NavLink>
                        </li>
                        <li className='navbar__contacto'>
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </li>
                        <li className='navbar__contacto'>
                            <NavLink to='/admin'>Admin</NavLink>
                        </li>
                    </ul>

                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar