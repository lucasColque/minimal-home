import React, { useEffect } from 'react'
import Formulario from '../../components/Formulario/Formulario';
import './admin.css';
import ShowProduct from '../../components/ShowProduct/ShowProduct';

const Admin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <h1 className='admin__title'>Agregando un producto</h1>
            <Formulario />
            <ShowProduct />
        </>
    )
}

export default Admin