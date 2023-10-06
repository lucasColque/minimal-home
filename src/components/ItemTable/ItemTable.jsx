import React, { useContext, useState } from 'react'
import { ItemsContext, UPLOAD_ITEMS } from '../../context/ItemsContext';
import Modal from '../Modal/Modal';
import { axiosInstance } from '../../services/axios.config';
import './itemtable.css';

function ItemTable({ id, name, description, image, price, stock, page }) {
    const [modalShow, setModalShow] = useState(false);

    const { items, dispatch } = useContext(ItemsContext);

    const handleDelete = (idDelete) => {
        axiosInstance.delete(`/${idDelete}`)
            .then(response => {
                if (response.status === 200) {
                    const itemUpload = items.filter(item => item.id !== response.data.id)
                    dispatch({ type: UPLOAD_ITEMS, payload: itemUpload })
                }
            })
    }
    return (
        <>
            <tr className='itemtable__tr'>
                <td className='itemtable__td' style={{textAlign:"center"}}> {id}</td>
                <td className='itemtable__td'>{name}</td>
                <td className='itemtable__td itemtable__description'>{description}</td>
                <td className='itemtable__td'>${price}</td>
                <td className='itemtable__td'>{stock}</td>
                <td className='itemtable__td'>{page}</td>
                <td className='itemtable__td'>
                    <div className='itemtable__icons-container'>
                        <i
                            style={{ cursor: "pointer" }}
                            className="bi bi-trash"
                            onClick={() => handleDelete(id)}
                        ></i>
                        <i style={{ cursor: "pointer" }}
                            className="bi bi-pencil-square"
                            onClick={() => setModalShow(true)}
                        ></i>
                    </div>
                </td>
            </tr>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                name={name}
                description={description}
                price={price}
                stock={stock}
                image={image}
                page={page}
            // onSubmit={editItem}
            />
        </>
    )
}

export default ItemTable