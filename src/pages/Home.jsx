import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Main from '../components/Main/Main'
import Contacto from './Contacto/';


const Home = () => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    return (
        <>         
            <Hero />
            <Main />
            <Contacto/>
            
        </>
    )
}

export default Home