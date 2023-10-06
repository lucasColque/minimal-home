import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './banner.css';


const Banner = ({ banners }) => {
    return (
        <Carousel fade controls={false} indicators={false}>
            {
                banners.map(banner =>
                    <Carousel.Item key={banner.id} interval={5000}>
                        <Link to="/catalogo">
                            <img
                                src={banner.url}
                                alt={banner.alt}
                                className='banner__img'
                            />
                        </Link>

                    </Carousel.Item>)
            }



        </Carousel>
    )
};

export default Banner