import React, { useState } from 'react';
import Nota from './Nota';
import '../style/ListaItems.css';

function ListaItems() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

   

    return (
        <div className="contenedor-principal">
            <div>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Add</button>
            </div>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    
                />
            ))}
        </div>
    );
}

export default ListaItems;