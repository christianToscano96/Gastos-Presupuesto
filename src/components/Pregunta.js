import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    //aqui estamos pasando por props para mandar al state principal
    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;
    
    //definir el state 
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError] = useState(false);

    //validacion
     const agregarPresupuesto = e => {
        e.preventDefault();

        //validar 
        if(cantidad < 1 || isNaN( cantidad ) ) { //isNaN nos permite saber si el valor ingresado es null
            guardarError(true);
            return;
        }

        //si se pasa la validacion 
        guardarError(false);
        guardarPresupuesto( cantidad );
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje='El presumpuesto es incorrecto'/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                       className="u-full-width"
                       placeholder="Agrega tu Presupuesto"
                       onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                 />

                 <input type="submit" className="button btn-color u-full-width" value="Definir Presupuesto" />

            </form>
        </Fragment>
    );
}

export default Pregunta;