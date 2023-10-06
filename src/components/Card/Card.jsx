import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ name, image, id }) => {

    return (

        <Link to={`/catalogo/detalle/${id}`} className='card__a'>
            <picture className='card__picture'>
                <img src={image} alt="" />
            </picture>
            <h2 className='card__title'>{name}</h2>
        </Link>


    )
}

export default Card