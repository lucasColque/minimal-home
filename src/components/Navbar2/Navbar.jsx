import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import 'react-bootstrap-icons';

const NavbarBs = () => {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) =>{
        setBusqueda(e.target.value);
    }
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
        }
    }

    return (
        <header className='sticky-top'>
            <Navbar expand="lg" className="bg-body-tertiary navbar ">
                <Container fluid >
                    <Navbar.Brand as={Link} to="/"><img className='navbbar__logo' src={logo} alt="Logo Minimal House" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='navbar__collapse'>
                        <Nav
                            className="me-auto my-2 my-lg-0 navbar__nav"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                                <NavDropdown.Item className='nav__link' as={Link} to="/catalogo/Living">
                                    Living
                                </NavDropdown.Item>
                                <NavDropdown.Item className='nav__link' as={Link} to="/catalogo/Cuadro">
                                    Cuadros
                                </NavDropdown.Item>
                                <NavDropdown.Item className='nav__link' as={Link} to="/catalogo/Decoracion">
                                    Decoración
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contacto" id="navbarScrollingDropdown">
                                <NavDropdown.Item className='nav__link' as={Link} to="/contacto/Lucas">
                                    Lucas
                                </NavDropdown.Item>
                                <NavDropdown.Item className='nav__link' as={Link} to="/contacto/Vivian">
                                    Vivian
                                </NavDropdown.Item>
                                <NavDropdown.Item className='nav__link' as={Link} to="/contacto/Juan">
                                    Juan
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/admin">
                                Admin
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar productos, marcas y más..."
                                className="me-2 navbar__input"
                                aria-label="Search"
                                size='lg'
                                value={busqueda}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            <Link to={`/catalogo/${busqueda}`} className='btn btn-dark'><i className="bi bi-search"></i></Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavbarBs