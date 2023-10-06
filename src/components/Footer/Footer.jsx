import React from 'react';
import './Footer.css';


const Footer = () => {
  return (    
    <footer className="footer">
      <div className="footer-container">
        <div className="col-footer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105227.9233705569!2d-58.99930865524429!3d-34.493436907091194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9cb6643d2003%3A0xa8da0402f634b636!2sPilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1689175001579!5m2!1ses!2sar"
            title="Mapa de ubicación de MinimalHome" width="280" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


        <div className="col-footer">
          <h5>Nosotros</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit illum
            aliquam veniam cum, deleniti vero unde optio minus maxime accusamus obcaecati cumque
            corporis soluta! Aliquid similique perferendis impedit quia.</p>
        </div>


        <div className="col-footer">
          <h5>Navegación</h5>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </div>


        <div className="col-footer">
          <h5>Contacto</h5>
          <p><i className="bi bi-envelope-fill"></i> MinimalHome@gmail.com</p>
          <p><i className="bi bi-telephone-fill"></i> +54 230-43788743</p>
          <p><i className="bi bi-chat-right-text"></i> Ayuda en línea</p>
        </div>
      </div>


      <hr className="mb-4" />


      <div className="text-center mb-2">
        <p>&copy; Todos los derechos reservados <strong>MinimalHome</strong></p>
      </div>


      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-linkedin"></i> </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-youtube"></i> </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-facebook"></i> </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-discord"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-github"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white"> <i className="bi bi-google"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};


export default Footer;
