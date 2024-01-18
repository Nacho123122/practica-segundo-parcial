import React from 'react';
import '../style/Nota.css';
function Nota({ nota, onDelete}) {
    
    return (
        <div >
            
                <div className='contenedor-nota'>
                    <ul>
                        <li className='nota'>{nota.texto}
                        <button className='boton' onClick={() => onDelete(nota.id)}>X</button></li>
                    </ul>
                </div>
            
        </div>
    );
}

export default Nota;