import React from 'react';
import '../stylesheets/Cuota.css';

function Cuota({ valorCuota, esCuotaAnual}){
  
  let contenidoCuota;

  // Comprobación personalizada para verificar si valorCuota no es una cadena vacía y no es un número
  if(typeof valorCuota !== '' && isNaN(valorCuota)){
    contenidoCuota = <span className='mensajeError'>Valor erroneo</span>;
  } 
  else {
    contenidoCuota = valorCuota;
  }
 
  return(
    <div className={`cuotas ${esCuotaAnual ? 'cuotaAnual' : 'cuotaMensual'}`}>
      {/* `` forman una template literal, un string que lleva un valor dinamico dentro, 
      entrega como clase general cuota, y despues un booleano que agrega la clase cuotaAnual a esCuotaAnual si es true y al contrario
      Mostrar valorCuota dentro del componente */}
      {contenidoCuota}
    </div>
  )
}


export default Cuota;