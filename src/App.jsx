// import { useState } from 'react'
import './App.css'

function App() {

  function handleChange(e) {
    const {name, value} = e.target;
    setInputValue({
        ...inputValue,
        [name]: value
    })
}

  return (
    <>
    <div>
      <div className="cv-form">

      </div>
      <div className="preview-wrap">

      </div>
    </div>
    </>
  )
}

export default App
