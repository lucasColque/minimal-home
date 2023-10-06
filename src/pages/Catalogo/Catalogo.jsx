import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios.config';
import './catalogo.css';
import Card from '../../components/Card/Card';
import { Link, useParams} from 'react-router-dom';

const Catalogo = () => {
//Este useEffect lo utilizamos para cuando entren a esta pagina, la vista empiece desde el inicio
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    const [items, setItems] = useState([]);
    const [listaItems, setListaItems] = useState([]);
    const [busqueda, setBusqueda] = useState("");    
    const [page, setPage] = useState(1);
    const id = useParams();



    const peticiones = async() =>{
        await axiosInstance.get('/')
            .then(response => {
                if (response.status === 200) {
                    if(Object.keys(id).length === 1){
                        setItems(response.data.filter(elemento =>{
                            if(elemento.category.toString().toLowerCase().includes(id.name.toLowerCase())){
                                return elemento
                            }
                        }))
                        setListaItems(response.data)
                    }else{
                        setItems(response.data.filter(elemento=>{
                            if(elemento.page === page){
                                return elemento
                            }
                        }))
                        
                        setListaItems(response.data);
                    }
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        peticiones();
    }, [page])
    const handleChange = e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = terminoBusqueda =>{
        let resultadoBusqueda = listaItems.filter(elemento =>{
            // console.log(elemento.name.toString().toLowerCase())
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento
            }
            return '';
        })
        setItems(resultadoBusqueda);
    }



    const paginas = [...new Set(listaItems.map(item => item.page))];

    return (
        <>
            <nav className='catalogo__nav'>
                <form
                    className="catalogo__form"
                >
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        className="navbar__input"
                        aria-label="Search"
                        id="searchInput"
                        value={busqueda}
                        onChange={handleChange}
                    />
                    <Link to={`/catalogo/`} className='navbar-form__button'>
                        Buscar
                    </Link>
                </form>
            </nav>
            <section className='catalogo'>
                <h1 className='catalogo__title'>Catálogo</h1>
                <section className='catalogo__section'>
                    {   
                        
                        items &&
                        items.map(item =>
                                <Card key={item.id} {...item} />
                        
                        )
                        //     :
                        //     <p className='catalogo__cargando'>Cargando...</p>
                    }
                </section>
                {
                items.length === 0 && <h3 className='catalogo-h3__error'> El producto no ha sido encontrado. Por favor, intente con otro término de búsqueda o artículo. </h3>
                }
                <section className='catalogo-botonera'>
                    {
                        paginas.map(pagina => (
                            <button 
                            key={pagina} 
                            className='catalogo-botonera__button'
                            onClick={(count)=> setPage(pagina)}
                            >
                                
                                {pagina}
                            </button>
                        ))
                    }
                </section>
            </section>
        </>
    )
}

export default Catalogo