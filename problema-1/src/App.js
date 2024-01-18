import './App.css';
import Boton from './components/Boton';
import Cambio from './components/Cambio';
import { useState } from 'react';
function App() {

  
  const [show, setShow] = useState(true);

  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
      <Boton texto="Show/Hide" esBotonClick={false} funcionClick={mostrar} /> 
      <Cambio  mostrar={show} />
        
          

      </div>
    </div>
  );
}
export default App;
