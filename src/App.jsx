import React from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="calc-text-container">
            <p className="calc">Calculator by Fabian Juarez</p>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  )
}

export default App
