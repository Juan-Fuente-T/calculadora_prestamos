import React from 'react';
import '../stylesheets/Boton.css';

function Boton({texto, manejarClic}){
    return(
        <button className='boton-calcular'
        onClick={manejarClic}> 
            {texto}
        </button>
    )
}

export default Boton;