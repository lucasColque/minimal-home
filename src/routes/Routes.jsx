import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo/Catalogo';
import Contacto from '../pages/Contacto/Contacto';
import Admin from '../pages/Admin/Admin';
<<<<<<< HEAD
=======
import NotFound from '../components/NotFound/NotFound';
import DetalleItem from '../components/DetalleItem/DetalleItem';
>>>>>>> 7b020f2e747c26e7be1ec71a62bffb1c4cf34975



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:name' element={<Catalogo/>}/>
<<<<<<< HEAD
            <Route path='/contacto/:id' element={<Contacto />} />
=======
            <Route path='/catalogo/detalle/:id' element={<DetalleItem />}/>
            <Route path='/contacto' element={<Nosotros />} />
>>>>>>> 7b020f2e747c26e7be1ec71a62bffb1c4cf34975
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}

export default AppRoutes