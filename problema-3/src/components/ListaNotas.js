import React, { useState } from 'react';
import Nota from './Nota';
import '../style/ListaNotas.css';

function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const [notas1, setNotas1] = useState([]);
    const [nuevaNota1, setNuevaNota1] = useState('');
    
    const [notas2, setNotas2] = useState([]);
    const [nuevaNota2, setNuevaNota2] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
        if (nuevaNota1.trim() === '') return;
        setNotas1([...notas1, { id: Date.now(), texto: nuevaNota1 }]);
        setNuevaNota1('');
        if (nuevaNota2.trim() === '') return;
        setNotas2([...notas2, { id: Date.now(), texto: nuevaNota2 }]);
        setNuevaNota2('');
    };
    
    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <input
                className="input"
                type="text"
                value={nuevaNota1}
                onChange={(e) => setNuevaNota1(e.target.value)}
            />
            <input
                className="input"
                type="text"
                value={nuevaNota2}
                onChange={(e) => setNuevaNota2(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar Nota</button>
            
            {notas.map((nota) => (
                
                <Nota
                    key={nota}
                    nota={nota}
                    
                   
                />
                
            ))}
            {notas1.map((nota) => (
                <Nota
                    key={nota}
                    nota={nota}
                    
                   
                />
               
            ))}
            {notas2.map((nota) => (
           
                <Nota
                    key={nota}
                    nota={nota}
                   
                />
                
            ))}
        </div>
    );
}

export default ListaNotas;