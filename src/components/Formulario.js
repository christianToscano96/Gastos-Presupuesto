import React from 'react';

function Formulario(props) {
    return(
        <form>
            <h2>Agrega tus Gastos</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. Transorte"
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
        </form>
    );
}

export default Formulario;