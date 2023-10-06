import React from 'react'
import banner_1 from '../../assets/images/banner/banner_1.png';
import banner_2 from '../../assets/images/banner/banner_2.png';
import banner_3 from '../../assets/images/banner/banner_3.png';
import Banner from '../Banner/Banner';


//!Esta informacion debe estar en un mockApi, luego ver como utilizar imagenes
const banners = [
    { id: 1, url: banner_1, alt: "Primer banner Minimal House" },
    { id: 2, url: banner_2, alt: "Segundo banner Minimal House" },
    { id: 3, url: banner_3, alt: "Tercer banner Minimal House" }
]
//*Intente mapear banners para traerme el componente Banner pero tengo un error que no logro solucionar
//*Solucionado, envie el componente <Carousel> al Componente <Banner>
const Hero = () => {

    return (
        <Banner banners={banners}/>
        
    )
}

export default Hero