import React from "react";

function Cambio({funcion}) {
    const [show, setShow] = useState(true);
    const funcion = () => {
        setShow(!show);
    }
    return(
        funcion ? <h1>Welcome to React Challenges</h1> : null
    );
}

export default Cambio;