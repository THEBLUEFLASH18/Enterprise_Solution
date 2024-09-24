import logo from '/Enterprise_SolutionsV3.png';
import financeImage from '/Finance_Desk.jpg';
import valuesImage from '/Coffee.jpg'; // Add images for the right side
import './App.css';
import Employee1 from '/Sandra.jpeg';
import Employee2 from '/CoOwner.jpeg';

function App() {

  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Employees">Employees</a></li>
            <li><a href="#Values">Values</a></li>
            <li><a href="#Services">Services</a></li>
            {/* Replace "Contact Us" with the button */}
            <li>
              <button className="contact-button">
                <p>Contact Us</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>


      {/* First Content Section */}
      <div className="content" id="About">
        <div className="image-content">
          <img src={financeImage} alt="Finance Desk" />
        </div>

        <div className="text-content">
          <h1>C&G ENTERPRISE SOLUTIONS LLC <i className="fa-solid fa-coins"></i></h1>
          <p>C&G ENTERPRISE SOLUTIONS LLC es una empresa dedicada al servicio de contabilidad y preparación de declaraciones de impuestos individuales y de empresas. 
          Asociarse con C&G ENTERPRISE SOLUTIONS LLC significa que su negocio está en las mejores manos porque contamos con un gran equipo de trabajo liderado por personas con una alta preparación académica con más de 20 años de experiencia en el área contable y financiera, adaptamos nuestros servicios a cada industria y a cada rubro de negocio, le ofrecemos atención personalizada, confiable y de calidad. 
          Para C&G ENTERPRISE SOLUTIONS LLC usted no solo es un cliente más, es un asociado valioso por el que nos esmeramos en brindarle lo mejor para el buen funcionamiento de sus finanzas y de su compañía.</p>

          <h2>Misión <i className="fa-solid fa-bars-progress"></i></h2>
          <p>Ofrecer a nuestros clientes a través de las mejores prácticas un servicio personalizado y oportuno colaborando con su crecimiento y el logro de sus objetivos.</p>

          <h2>Visión <i className="fa-solid fa-glasses"></i></h2>
          <p>Ser líder en asesoría de negocios, brindar las mejores soluciones en el manejo de la contabilidad e impuestos colaborando con su crecimiento y el logro de sus objetivos.</p>
        </div>

        <div className="image-content">
          <img src={valuesImage} alt="Company Values" />
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="team-section" id="Employees">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {/* Employee 1 */}
          <div className="team-member">
            <img src={Employee1} alt="Sandra Cruz Palma" />
            <h3>Sandra Cruz Palma</h3>
            <h4>Senior Accountant</h4>
            <p><strong>Experience:</strong> 15 years in corporate accounting, specializing in financial analysis and tax preparation.</p>
            <p>Sandra is dedicated to helping clients understand their financial statements and optimizing their tax strategies.</p>
          </div>
          {/* Employee 2 */}
          <div className="team-member">
            <img src={Employee2} alt="Employee 2" />
            <h3>Adriana</h3>
            <h4>Financial Advisor</h4>
            <p><strong>Experience:</strong> 12 years in financial planning and investment management.</p>
            <p>Jane assists clients in achieving their financial goals through personalized investment strategies.</p>
          </div>
        </div>
      </div>

      {/* Valores Section */}
      <div className="content" id="Values">
        <div className="image-content">
          <img src={valuesImage} alt="Values Image" />
        </div>

        <div className="text-content">
          <h2>VALORES</h2>
          <p><strong>Responsabilidad:</strong> Puntualidad en la presentación de información financiera y en el cumplimiento de obligaciones fiscales de nuestros clientes.</p>
          <p><strong>Confidencialidad:</strong> Ofrecemos máxima confidencialidad en el manejo de la información de nuestros clientes.</p>
          <p><strong>Eficiencia:</strong> Somos un equipo de profesionales cualificados para ofrecer servicios que generen un mayor valor a su empresa.</p>
          <p><strong>Integridad:</strong> Garantizamos la aplicación de las políticas contables y regulaciones fiscales en el manejo de sus operaciones.</p>
          <p><strong>Honestidad:</strong> Brindamos las mejores soluciones de negocio basados en un diálogo claro y honesto sobre los intereses de nuestros clientes.</p>
        </div>

        <div className="image-content">
          <img src={financeImage} alt="Finance Image" />
        </div>
      </div>

     {/* Servicios Section */}
<div className="services-section" id="Services">
  <div>
      {/* Title */}
    <h2>NUESTROS SERVICIOS</h2>

    {/* Information Paragraph */}
    <p className="services-description">
      Nuestro objetivo principal es brindarles a nuestros clientes un apoyo que abarque todas las áreas en el proceso de la contabilidad, ofreciendo los siguientes servicios:
    </p>
  </div>

  {/* Services List */}
  <div className="services-container">
    <div className="service-box">
      <ul>
        <li>Conciliaciones Bancarias</li>
        <li>Contabilidad y teneduría de libros</li>
        <li>Presentación de informes financieros periódicos (Anuales, trimestrales y mensuales).</li>
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

    </>
  );
}

export default App;