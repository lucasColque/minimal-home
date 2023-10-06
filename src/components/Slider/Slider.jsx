import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './slider.css';
import { motion } from 'framer-motion';
import { axiosInstance } from '../../services/axios.config';

import card1 from '../../assets/images/cuadros/cuadro1.jpg';
import card2 from '../../assets/images/cuadros/cuadro2.jpg';
import card3 from '../../assets/images/cuadros/cuadro3.jpg';

const cards = [
    { id: 1, url: card1, nombre: "Cuadro de verdad", precio: 123123 },
    { id: 2, url: card2, nombre: "Lorem", precio: 123123 },
    { id: 3, url: card3, nombre: "Lorem", precio: 123123 },
    { id: 4, url: card2, nombre: "Lorem", precio: 123123 },
    { id: 5, url: card1, nombre: "Lorem", precio: 123123 },
    { id: 6, url: card3, nombre: "Lorem", precio: 123123 },
]


const CarouselSection = () => {

    const [items, setItems] = useState([]);
    const [destacados, setDestacados] = useState([]);
    useEffect(()=>{
        axiosInstance.get("/")
        .then(response => {
            setItems(response.data)
            let itemsDestacados = response.data.filter(item =>{
                if(item.destacado){
                    return item
                }
            })
            setDestacados(itemsDestacados);
        })
        .catch(err => alert("Error en la solicitud",err))
        

    },[])


    const itemWidth = 348; 
    const totalWidth = 10 * itemWidth;
    const screenWidth = window.innerWidth; // Ancho de la pantalla
    const dragLimit = totalWidth - screenWidth;



    return (
        <motion.div className='slider-container' layout>
            <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left:-dragLimit }} >

                {
                    destacados.map(destacado => (
                        <motion.div className='item' key={destacado.id}>
                            
                                <img src={destacado.image} alt="" />
                            <div>
                                <p>{destacado.name}</p>
                                <p className='item__precio'>{`$${destacado.price}`}</p>
                                <Link to={`/catalogo/detalle/${destacado.id}`}>
                                    Ver más
                                </Link>
                            </div>
                            
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default CarouselSection