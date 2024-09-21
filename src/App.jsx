import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from '/Enterprise_SolutionsV3.png'
import financeImage from '/Finance_Desk.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <ul>
              <li><a href='#About'>About</a></li>
              <li><a href='#Values'>Values</a></li>
              <li><a href='#Services'>Services</a></li>
            </ul>
          </div>
      </div>

      <div className="content" id='About'>
        <div className="text-content">
        <h1>C&G ENTERPRISE SOLUTIONS LLC <i class="fa-solid fa-coins"></i></h1>
          <p>C&G ENTERPRISE SOLUTIONS LLC es una empresa dedicada al servicio de contabilidad y preparación de declaraciones de impuestos individuales y de empresas. 
          Asociarse con C&G ENTERPRISE SOLUTIONS LLC significa que su negocio está en las mejores manos porque contamos con un gran equipo de trabajo liderado por personas con una alta preparación académica con más de 20 años de experiencia en el área contable y financiera, adaptamos nuestros servicios a cada industria y a cada rubro de negocio, le ofrecemos atención personalizada, confiable y de calidad. 
          Para C&G ENTERPRISE SOLUTIONS LLC usted no solo es un cliente más, es un asociado valioso por el que nos esmeramos en brindarle lo mejor para el buen funcionamiento de sus finanzas y de su compañía.</p>

          <h2>Misión <i class="fa-solid fa-bars-progress"></i></h2>
          <p>Ofrecer a nuestros clientes a través de las mejores prácticas un servicio personalizado y oportuno colaborando con su crecimiento y el logro de sus objetivos.</p>

          <h2>Visión <i class="fa-solid fa-glasses"></i></h2>
          <p>Ser líder en asesoría de negocios, brindar las mejores soluciones en el manejo de la contabilidad e impuestos colaborando con su crecimiento y el logro de sus objetivos.</p>
        </div>
        
        <div className="image-content">
          <img src={financeImage} alt="Finance Desk" />
        </div>
      </div>
        
    </>
  )
}

export default App
