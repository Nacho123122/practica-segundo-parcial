import React, { useState } from 'react';
import '../style/Nota.css';
function Nota({ nota, onDelete}) {
    
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);



    return (
        <div>
            
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    <button className='boton' onClick={() => onDelete(nota.id)}>Eliminar</button>
                    
                </div>
            
        </div>
    );
}

export default Nota;