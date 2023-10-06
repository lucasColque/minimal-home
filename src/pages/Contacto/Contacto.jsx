import React, { useEffect } from 'react';
import Nosotros from '../../components/Nosotros/Nosotros';


const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pagina-principal">
      <Nosotros
        imagen="../Contacto/image/usuarioo.png" // Puedes ajustar esto según tus necesidades
        nombre="Nombre 1"
        cargo="Cargo 1"
        Contacto="Descripción 1"
      />
      <Nosotros
        imagen="../Contacto/image/usuarioo.png"
        nombre="Nombre 2"
        cargo="Cargo 2"
        Contacto="Descripción 2"
      />
      <Nosotros
        imagen="../Contacto/image/usuarioo.png"
        nombre="Nombre 3"
        cargo="Cargo 3"
        Contacto="Descripción 3"
      />
    </div>
  );
};

export default Contacto;
