import React from 'react';

const Gasto = ({gasto}) => {

    const eliminarGasto = (id) => {
        console.log(id);
    }
    return (
        <li className="gastos">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">$ {gasto.cantidadGasto}</span>
            </p>

            <button type="button"
                onClick={() => eliminarGasto(gasto.id)}
            >
                Eliminar
            </button>
        </li>
    );

}

export default Gasto;