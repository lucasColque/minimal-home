import React from 'react';
import './sectionmain.css';
import { Link } from 'react-router-dom';

import fondo from '../../assets/images/cuadros/cuadro1.jpg';
import fondo1 from '../../assets/images/cuadros/cuadro2.jpg';
import fondo2 from '../../assets/images/cuadros/cuadro3.jpg';
import fondo3 from '../../assets/images/cuadros/cuadro4.jpg';
import fondo4 from '../../assets/images/cuadros/cuadro5.jpg';
import fondo5 from '../../assets/images/cuadros/cuadro6.jpg';
import fondo6 from '../../assets/images/cuadros/cuadro7.jpg';
import fondo7 from '../../assets/images/cuadros/cuadro8.jpg';
import fondo8 from '../../assets/images/cuadros/cuadro9.jpg';

//Simulamos el traernos el array de objetos y solamente usar determinada propiead, entonces nos quedaria
const titulos = [
    { id: 1, title: "Cuadros", fondo: fondo, categoria: "Cuadro" },
    { id: 2, title: "Living", fondo: fondo1, categoria: "Living" },
    { id: 3, title: "Sillón", fondo: fondo2, categoria: "Sillon" },
    { id: 4, title: "Lámpara", fondo: fondo3, categoria: "Lampara" },
    { id: 5, title: "Dormitorio", fondo: fondo4, categoria: "Dormitorio" },
    { id: 6, title: "Mesas", fondo: fondo5, categoria: "Mesa" },
    { id: 7, title: "Decorado", fondo: fondo6, categoria: "Decorado" },
    { id: 8, title: "Hogar", fondo: fondo7, categoria: "Hogar" },
    { id: 9, title: "Comedor", fondo: fondo8, categoria: "Comedor" }
];


const Section = () => {
    return (
        <>
            <h2 className='sectionmain__title-h2'>Secciones</h2>
            <section className='sectionmain'>

                {
                    titulos.map(titulo => (
                        <Link to={`/catalogo/${titulo.categoria}`} key={titulo.id} className='sectionmain__a'>
                            <div className='sectionmain__container' style={{ backgroundImage: `url(${titulo.fondo})` }}>
                                <article className='sectionmain__article' >
                                    <h3 className='sectionmain__title'>{titulo.title}</h3>
                                </article>
                            </div>
                        </Link>
                    ))
                }
            </section>
        </>
    )
}

export default Section