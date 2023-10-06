import React from 'react';
import './Nosotros.css';

const Nosotros = (props) => {
  return (
    <div className="contenedor-nosotros"> 
      <img
        className="imagen-nosotros"  
        src={require(`../../pages/Contacto/image/usuarioo-${props.imagen}.png`)} 
        alt="Foto de Nosotros" 
      />
      <div className="contenedor-texto-nosotros"> 
        <p className="nombre-nosotros"> 
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        {props.cargo && (
          <p className="cargo-nosotros"> 
            {props.cargo} 
          </p>
        )}
        <p className="texto-nosotros">"{props.Contacto}"</p> 
      </div>
    </div>
  );
};

export default Nosotros;
