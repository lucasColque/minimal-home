import React from 'react'
import Slider from '../Slider/Slider';
import SectionMain from '../SectionMain/SectionMain';

import './main.css';


const Main = () => {
    return (
        <main className='container__main'>
            <h1 className='main__title'>PRODUCTOS DESTACADOS</h1>
            <Slider/>
            <SectionMain />
        </main>
    )
}

export default Main