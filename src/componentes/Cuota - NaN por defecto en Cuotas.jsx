import React from 'react';
import '../stylesheets/Cuota.css';

function Cuota({ valorCuota, esCuotaAnual, manejarCuota}){
  return(
    <div className = {esCuotaAnual ? 'cuotaAnual' : 'cuotaMensual'}
    onClick = {() => manejarCuota(valorCuota)}>
      {/* Mostrar valorCuota dentro del componente */}
      {valorCuota}
    </div>
  )
}

/*function Boton({texto, esBotonDeClic, manejarClic}){
    return(
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}> 
            {texto}
        </button>
    )
}*/

export default Cuota;