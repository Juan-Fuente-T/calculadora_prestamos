//import logo from './logo.svg';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Input from './componentes/Input.jsx';
import Cuota from './componentes/Cuota.jsx';
import { useState } from 'react';

/* (capital * interes/100) / (1 - (1 + interes/100)** -años)
(capital * interes/1200) / (1 - (1 + interes/1200) ** -meses)
*/

function App() {

  //Estados para las entradas de datos
  const [capital, setCapital] = useState('');
  const [interes, setInteres] = useState('');
  const [plazo, setPlazo] = useState('');

  // Estados para las cuotas calculadas
  const [resultadoCuotaAnual, setResultadoCuotaAnual] = useState('');
  const [resultadoCuotaMensual, setResultadoCuotaMensual] = useState('');

  // Estado para controlar si se ha realizado un cálculo
  const [calculoRealizado, setCalculoRealizado] = useState(false);

  const calcularCuotaAnual = () => {
    const resultadoCuotaAnual = (capital * interes / 100) / (1 - (1 + interes / 100) ** -plazo);
    setResultadoCuotaAnual(parseFloat(resultadoCuotaAnual.toFixed(2)));
    setCalculoRealizado(true); // Marcar que se ha realizado un cálculo
  };

  const calcularCuotaMensual = () => {
    const resultadoCuotaMensual = (capital * interes / 1200) / (1 - (1 + interes / 1200) ** -(plazo * 12));
    setResultadoCuotaMensual(parseFloat(resultadoCuotaMensual.toFixed(2)));
    setCalculoRealizado(true); // Marcar que se ha realizado un cálculo
  };

  const manejarCalculos = () => {
    calcularCuotaAnual();
    calcularCuotaMensual();
    setCalculoRealizado(true); // Marcar que se ha realizado un cálculo
  };

  const reiniciarIndividual = (campo) => {
    if (campo === 'capital') {
      setCapital('');
    } else if (campo === 'interes') {
      setInteres('');
    } else if (campo === 'plazo') {
      setPlazo('');
    }
  }

  const reiniciarGenerico = () => {
    if (calculoRealizado) { // Solo reiniciar si se ha realizado un cálculo
      setCapital('');
      setInteres('');
      setPlazo('');
      setResultadoCuotaAnual('');
      setResultadoCuotaMensual('');
      setCalculoRealizado(false); // Reiniciar la variable de cálculo realizado
    }
  };

  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <div className='contenedor-input'>

          <h2>Capital</h2>

          <Input value={capital}
            onChange={(newValue) => setCapital(newValue)}
            onClick={() => (calculoRealizado ? reiniciarGenerico() : reiniciarIndividual('capital'))} />

          <h2>Interes</h2>

          <Input value={interes} onChange={(newValue) => setInteres(newValue)}
            onClick={() => (calculoRealizado ? reiniciarGenerico() : reiniciarIndividual('interes'))} />

          <h2>Plazo en años</h2>

          <Input value={plazo} onChange={(newValue) => setPlazo(newValue)}
            onClick={() => (calculoRealizado ? reiniciarGenerico() : reiniciarIndividual('plazo'))} />
        </div>
        <div className='contenedorCuotas'>

          <h2>Cuota anual</h2>

          <Cuota
            esCuotaAnual={true}
            valorCuota={resultadoCuotaAnual}
          />

          <h2>Cuota mensual</h2>

          <Cuota
            esCuotaAnual={false}
            valorCuota={resultadoCuotaMensual}
          />

          <Boton
            texto='Calcular'
            manejarClic={manejarCalculos} />
        </div>
      </div>

      <div className='contenedorTitulo' >
        <h1>Calculadora de prestamos</h1>
      </div>

    </div>
  );
}


export default App;
