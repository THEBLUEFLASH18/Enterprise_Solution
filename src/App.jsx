import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav">
          <div className="logo">
            <img src='../public/Enterprise_SolutionsV3.png' alt="Logo" />
          </div>
          <div>
            <ul>
              <li><a href='#About'>About</a></li>
              <li><a href='#Values'>Values</a></li>
              <li><a href='#Services'>Services</a></li>
            </ul>
          </div>
      </div>
        
    </>
  )
}

export default App
