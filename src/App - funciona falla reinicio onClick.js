//import logo from './logo.svg';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Input from './componentes/Input.jsx';
import Cuota from './componentes/Cuota.jsx';
import { useState } from 'react';

/* def calcular_anualidad(capital, interes, años): #calcular cuota anual, toma tres argumentos y devueve el resultado
    return (capital * interes/100) / (1 - (1 + interes/100)** -años)
def calcular_mensualidad(capital, interes, meses):#calcular cuota mensual, toma tres argumentos y devuelve el resultado
    return (capital * interes/1200) / (1 - (1 + interes/1200) ** -meses)
    
 */

function App() {
  
  const [capital, setCapital] = useState('');
  const [interes, setInteres] = useState('');
  const [plazo, setPlazo] = useState('');

  // Estados para las cuotas calculadas
  const [resultadoCuotaAnual, setResultadoCuotaAnual] = useState('');
  const [resultadoCuotaMensual, setResultadoCuotaMensual] = useState('');
  
  const calcularCuotaAnual = () => {
    const resultadoCuotaAnual = (capital * interes/100) / (1 - (1 + interes/100)** -plazo);
    setResultadoCuotaAnual(resultadoCuotaAnual);
  };
  
  const calcularCuotaMensual = () => {
    const resultadoCuotaMensual = (capital * interes/1200) / (1 - (1 + interes/1200) **-(plazo*12));
    setResultadoCuotaMensual(resultadoCuotaMensual);
  };

  const manejarCalculos = () =>{
    calcularCuotaAnual();
    calcularCuotaMensual();
  };
  /*const [esCuotaAnual, setCuotaAnual] = useState(0);
  
  const [esCuotaMensual, setCuotaMensual] = useState(0);*/

  const cuotaAnual = () => {
    console.log('Cuota anual');
  }

  const cuotaMensual = () => {
    console.log('Cuota mensual');
  }

  const reiniciarApp = () => {
    setCapital('');
    setInteres('');
    setPlazo('');
    setResultadoCuotaAnual('');
    setResultadoCuotaMensual('');
  };
  /*const calcularCuota = () => {
    console.log('Calcular');
  }*/

  /*const cuotaMensual = () => {
    console.log('Cuota mensual');
  }*/
  /* const calcularCuotaAnual = () => {
  const cuotaAnual = (capital * (interes / 100)) + capital;
  setCuotaAnual(cuotaAnual);
};

const calcularCuotaMensual = () => {
  const cuotaMensual = (capital * (interes / 100)) / plazo;
  setCuotaMensual(cuotaMensual);
}; */
  
  /*<div className="contenedor-capital">
      <h2>Introduce el capital</h2>
      <input type="number" value={data} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>*/ //Estaba dentro de return, es para input 
  return (
    <div className="App">
    <div className='contenedor-input'>
      <h2>Capital</h2>
      <Input value={capital} onChange={(e) => setCapital(e.target.value)} onClick={reiniciarApp}>
        Capital
      </Input>
      <h2>Interes</h2>
      <Input value={interes} onChange={(e) => setInteres(e.target.value)} onClick={reiniciarApp} >
        Interes
      </Input>
      <h2>Plazo</h2>
      <Input value={plazo} onChange={(e) => setPlazo(e.target.value)}>
        Plazo
      </Input>
    </div>
    <div className='contenedor-cuotas'>

      <h2>Cuota anual</h2>

      <Cuota 
      /*esCuotaAnual = {true} manejarClic={cuotaAnual}/>*/
      esCuotaAnual = {true} 
      valorCuota={resultadoCuotaAnual} 
      manejarCuota={cuotaAnual}/>

      <h2>Cuota mensual</h2>

      <Cuota 
      esCuotaAnual = {false} 
      valorCuota={resultadoCuotaMensual}
      manejarCuota={cuotaMensual}/>

      <Boton 
      texto = 'Calcular'
      manejarClic={manejarCalculos} />
    </div>
    </div>
  );
}

export default App;
