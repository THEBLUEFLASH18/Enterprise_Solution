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
            <li><a href="#Values">Values</a></li>
            <li><a href="#Services">Services</a></li>
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
      <div className="team-section">
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
            <h3>Jane Smith</h3>
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
    </>
  );
}

export default App;