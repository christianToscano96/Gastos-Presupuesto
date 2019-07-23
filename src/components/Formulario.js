import React, { useState} from 'react';
import Error from './Error';
import shortid from 'shortid';



function Formulario(props) {

    const {guardarGasto, guardarCrearGasto} = props;
    //state
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError] = useState(false);

    //metodo para agregar el gasto
    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if( cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto === '') {
            guardarError(true);
            return;
        }

      

        //construir un objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()          
        }

         //pasar el gasto al componente principal
        guardarGasto();
        guardarCrearGasto(true);

        //eliminar alerta
        guardarError(false);

        //resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos</h2>

            {error ? <Error mensaje='Ambos campos son Obligatorios o Presupuesto Incorrecto'/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value= {nombreGasto}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10) )}
                    value= {cantidadGasto}
                />
            </div>

            <input type="submit" className="button btn-color u-full-width" value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;