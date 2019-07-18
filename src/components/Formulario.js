import React, { useState} from 'react';



function Formulario(props) {

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
    }

    


    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10) )}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;