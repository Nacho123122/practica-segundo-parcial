import React, { useState } from "react";
import '../style/Boton.css';

function Boton({funcion}){
    return(
        <div className="main">
            <button className="boton" onClick={funcion}>
                Show\Hide
            </button>
            
        </div>
    )
}
export default Boton;