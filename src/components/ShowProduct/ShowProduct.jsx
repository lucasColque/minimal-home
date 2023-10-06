import React, { useContext, useEffect } from 'react'
import { ItemsContext, UPLOAD_ITEMS } from '../../context/ItemsContext'
import { axiosInstance } from '../../services/axios.config';
import Table from '../Table/Table';
import './showproduct.css';


const ShowProduct = () => {
    const {items, dispatch} = useContext(ItemsContext);
    useEffect(()=>{
        axiosInstance.get('/')
        .then(response =>{
            if(response.status === 200){
                dispatch({type:UPLOAD_ITEMS, payload:response.data})
            }else {
                throw new Error(`[${response.status} error en la solicitud]`)
            }
        })
        .catch(err => console.error(err))
    },[])

    return (
        <>
        <div className='showProducts__container'>
            <h2 style={{ textAlign: "center" }} className='showProducts__title'>
                {items.length === 0? "No hay productos en el sistema":items.length === 1? "1 producto":`${items.length} productos`}
            </h2>
            <div className='showProducts__tabla'>
                {
                    items.length > 0 ?
                        <Table items={items}
                        />
                        :
                        <p style={{ textAlign: "center", fontSize: "24px", color: "#fff" }}>No hay productos en el sistema</p>
                }
            </div>
        </div>
        </>
    )
}

export default ShowProduct