import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios.config';
import { useParams } from 'react-router-dom';
import './detalleitem.css';

const DetalleItem = () => {
    const [count, setCount] = useState(0);
    const id = useParams();
    const [item, setItem] = useState([]);

    const peticiones = async () => {
        await axiosInstance.get(`/${id.id}`)
            .then(response => {
                if (response.status === 200) {
                    setItem(response.data);
                }
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        peticiones();
            window.scrollTo(0, 0);
    }, [])
    const handleSuma = () =>{
        if(count >= item.stock){
            setCount(item.stock)
        }else{
            setCount((count)=> count + 1)

        }
    }
    const handleResta = () =>{
        if(count <= 0){
            setCount(0)
        }else{
            setCount((count)=> count - 1 )
        }
    }
    const handleAdd = () =>{
        if(count > 1){
            alert(`Agregaste ${count} unidades \n SITIO EN CONSTRUCCION`)
        }else if(count === 1){
            alert(`Agregaste ${count} unidad \n SITIO EN CONSTRUCCION`)
        }else{
            alert(`No agregaste nada \n SITIO EN CONSTRUCCION`)
        }
    }
    return (
        <section className='detalle__section'>
            <div className='detalle__div'>
                <picture className='detalle__picture'>
                    <img src={item.image} alt="" />
                </picture>
                <article className='detalle__article'>
                    <h1 className='detalle__title'>{item.name}</h1>
                    <p className='detalle__description'>{item.description}</p>
                    <p className='detalle__stock'>Unidades: {item.stock}</p>
                    <p className='detalle__precio'>${item.price}</p>
                    <div className='detalle-div__stock'>
                        <p className='detalle-div__unidad'>{count}</p>
                        <div className='detalle-div__botonera'>
                            <button 
                            className='detalle-div__button'
                            onClick={handleSuma}
                            >
                                +
                            </button>
                            <button 
                            className='detalle-div__button'
                            onClick={handleResta}
                            >
                                -
                            </button>

                        </div>
                        <button 
                        className='detalle-div__agregar'
                        onClick={handleAdd}
                        >
                            Agregar
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default DetalleItem