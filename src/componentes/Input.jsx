import React from 'react';
import '../stylesheets/Input.css';

const Input = ({ value, onChange, onClick }) => {

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(newValue)) { // Solo permite números y un punto decimal
      onChange(newValue);
    }
  };

  let contenidoInput;

  if (value !== '' && isNaN(parseFloat(value))) {
    //input errorInput es una subclase de input para css
    contenidoInput = (
      <div className='contenedorInput' onClick={onClick}>
        <input className='input errorInput' type='text' value={value} onChange={handleChange} />
        <span className='mensajeDeError'>Valor erroneo</span>
      </div>
    );
  } else {
    contenidoInput = (
      <div className='contenedorInput' onClick={onClick}>
        <input className='input' type='text' value={value} onChange={handleChange} />
      </div>
    )
  }
  return contenidoInput;
}


export default Input;


