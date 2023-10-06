import React from 'react'
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';
import './table.css';

const Table = ({items}) => {
    return (
        <TableBs striped bordered hover  className='table table-dark'>
            <thead >
                <tr className='table__tr'>
                    <th>ID</th>
                    <th>Producto</th>
                    <th className='itemtable__description'>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Page</th>
                    <th style={{textAlign:"center"}}>Herramientas</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => <ItemTable key={item.id} {...item} 
                    />)
                }

            </tbody>
        </TableBs>
    )
}

export default Table