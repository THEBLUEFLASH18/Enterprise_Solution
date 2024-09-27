import React, { useState } from 'react';
import logo from '/Enterprise_SolutionsV3.png';
import financeImage from '/Finance_Desk.jpg';
import taxImage from '/taxtable.jpg';
import taxesImage from '/taxes.jpg';
import moneyImage from '/Money.jpg';
import './App.css';
import Employee1 from '/Sandra.jpeg';
import Employee2 from '/CoOwner.jpeg';

function App() {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="C&G Enterprise Solutions LLC Logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg viewBox="0 0 32 32" className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <path className="line line-top-bottom" d="M4 8H28"></path>
            <path className="line" d="M4 16H28"></path>
            <path className="line line-top-bottom" d="M4 24H28"></path>
          </svg>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#About" onClick={() => setIsMenuOpen(false)}>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#Employees" onClick={() => setIsMenuOpen(false)}>
                Empleados
              </a>
            </li>
            <li>
              <a href="#Values" onClick={() => setIsMenuOpen(false)}>
                Valores
              </a>
            </li>
            <li>
              <a href="#Services" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </a>
            </li>
            {/* Contact Button */}
            <li>
              <button
                className="contact-button"
                aria-label="Contact Us"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true); // Open the modal
                }}
              >
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">Contactanos</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Contact Us via WhatsApp</h2>
            <p>We are here to assist you. Click the button below to start a WhatsApp chat with us.</p>
            <a
              href="https://wa.me/18134760188"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* First Content Section */}
      <div className="content" id="About">
        <div className="image-content">
          <img src={financeImage} alt="Finance Desk showcasing accounting services" />
        </div>

        <div className="text-content">
          <h1>
            C&G ENTERPRISE SOLUTION LLC <i className="fa-solid fa-coins"></i>
          </h1>
          <p>
            C&G ENTERPRISE SOLUTION LLC es una empresa dedicada al servicio de contabilidad y
            preparación de declaraciones de impuestos individuales y de empresas. Asociarse con C&G
            ENTERPRISE SOLUTION LLC significa que su negocio está en las mejores manos porque
            contamos con un gran equipo de trabajo liderado por personas con una alta preparación
            académica con más de 20 años de experiencia en el área contable y financiera, adaptamos
            nuestros servicios a cada industria y a cada rubro de negocio, le ofrecemos atención
            personalizada, confiable y de calidad. Para C&G ENTERPRISE SOLUTION LLC usted no solo
            es un cliente más, es un asociado valioso por el que nos esmeramos en brindarle lo mejor
            para el buen funcionamiento de sus finanzas y de su compañía.
          </p>

          <h2>
            Misión <i className="fa-solid fa-bars-progress"></i>
          </h2>
          <p>
            Ofrecer a nuestros clientes a través de las mejores prácticas un servicio personalizado
            y oportuno colaborando con su crecimiento y el logro de sus objetivos.
          </p>

          <h2>
            Visión <i className="fa-solid fa-glasses"></i>
          </h2>
          <p>
            Ser líder en asesoría de negocios, brindar las mejores soluciones en el manejo de la
            contabilidad e impuestos colaborando con su crecimiento y el logro de sus objetivos.
          </p>
        </div>

        <div className="image-content">
          <img src={moneyImage} alt="Visual representation of company values and financial growth" />
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="team-section" id="Employees">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {/* Employee 1 */}
          <div className="team-member">
            <img src={Employee1} alt="Sandra Cruz Palma, Socia y Directora Ejecutiva" />
            <h3>Sandra Cruz Palma</h3>
            <h4>Socia y Directora Ejecutiva</h4>
            <p>
              <strong>Experience: </strong>Cuento con más de 20 años de experiencia en las áreas administrativa, contable y financiera. Actualmente, poseo amplios conocimientos en el área de impuestos individuales y empresariales, lo que me permite ofrecer soluciones integrales y estratégicas para la gestión financiera y fiscal de mis clientes.
            </p>
          </div>
          {/* Employee 2 */}
          <div className="team-member">
            <img src={Employee2} alt="Adriana Gómez Zamora, Socia Y Consultora Fiscal/Financiera" />
            <h3>Adriana Gómez Zamora</h3>
            <h4>Socia Y Consultora Fiscal/ Financiera</h4>
            <p>
              <strong>Experience: </strong>Cuento con más de 20 años de experiencia en contabilidad, auditorías financieras, auditorías fiscales y reportes financieros. Poseo una Maestría en Administración de Empresas con especialización en Finanzas y una Licenciatura en Contaduría Pública. He desempeñado roles como profesor, contador general, contador independiente y auditor. Tengo dominio de las normas IFRS, ISA y herramientas contables como SAP y QuickBooks, además de haber completado capacitación especializada en estándares de auditoría, leyes fiscales y métodos de educación moderna.
            </p>
          </div>
        </div>
      </div>

      {/* Valores Section */}
      <div className="content" id="Values">
        <div className="image-content">
          <img src={taxImage} alt="Illustration representing company values" />
        </div>

        <div className="text-content">
          <h2>VALORES</h2>
          <p>
            <strong>Responsabilidad:</strong> Puntualidad en la presentación de información
            financiera y en el cumplimiento de obligaciones fiscales de nuestros clientes.
          </p>
          <p>
            <strong>Confidencialidad:</strong> Ofrecemos máxima confidencialidad en el manejo de la
            información de nuestros clientes.
          </p>
          <p>
            <strong>Eficiencia:</strong> Somos un equipo de profesionales cualificados para ofrecer
            servicios que generen un mayor valor a su empresa.
          </p>
          <p>
            <strong>Integridad:</strong> Garantizamos la aplicación de las políticas contables y
            regulaciones fiscales en el manejo de sus operaciones.
          </p>
          <p>
            <strong>Honestidad:</strong> Brindamos las mejores soluciones de negocio basados en un
            diálogo claro y honesto sobre los intereses de nuestros clientes.
          </p>
        </div>

        <div className="image-content">
          <img src={taxesImage} alt="Financial services illustration emphasizing taxes" />
        </div>
      </div>

      {/* Servicios Section */}
      <div className="services-section" id="Services">
        <div>
          {/* Title */}
          <h2>NUESTROS SERVICIOS</h2>

          {/* Information Paragraph */}
          <p className="services-description">
            Nuestro objetivo principal es brindarles a nuestros clientes un apoyo que abarque todas
            las áreas en el proceso de la contabilidad, ofreciendo los siguientes servicios:
          </p>
        </div>

        {/* Services List */}
        <div className="services-container">
          <div className="service-box">
            <ul>
              <li>Conciliaciones Bancarias</li>
              <li>Contabilidad y teneduría de libros</li>
              <li>
                Presentación de informes financieros periódicos (Anuales, trimestrales y mensuales).
              </li>
              <li>Análisis e interpretación de los estados Financieros.</li>
            </ul>
          </div>
          <div className="service-box">
            <ul>
              <li>Presupuestos periódicos (Anuales, trimestrales y mensuales).</li>
              <li>Declaraciones de Taxes individuales y de empresas.</li>
              <li>Elaboración de facturas a sus clientes.</li>
              <li>Elaboración de formas 1099</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='Footer'>
        <div className='left-side'>
          <h4>Sociales</h4>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Reviews <i className="fa-brands fa-google"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='img-footer'>
          <img src={logo} alt="C&G Enterprise Solutions LLC Logo" />
          <h3>C&G Enterprise Solution LLC&reg;</h3>
        </div>

        <div className='right-side'>
          <h4>Opciones</h4>
          <ul>
            <li><a href='#About'>Sobre Nosotros</a></li>
            <li><a href='#Employees'>Empleados</a></li>
            <li><a href='#Values'>Valores</a></li>
            <li><a href='#Services'>Servicios</a></li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default App;