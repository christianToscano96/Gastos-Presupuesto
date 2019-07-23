import React, {useState, useEffect} from 'react';
//componentes
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  //state del presupuesto 
  const [ presupuesto, guardarPresupuesto] = useState(0);
  //retante del presupuesto
  const [restante, guardarRestante ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [ crearGasto, guardarCrearGasto ] = useState(false);
  //gastos enviados del formulario se lo guarda como un objeto
  const [ gasto, guardarGasto ] = useState({});
  //los gastos despues se guardaran en un arreglo de gastos
  const [ gastos, guardarGastos ] = useState([]);

  //usamos useEffect
  useEffect(() => {
      if(crearGasto) {
        const listadoGastos = [...gastos, gasto];
        guardarGastos(listadoGastos);

        //una vez que se agrega, lo ponemos en false
        guardarCrearGasto(false);
      }
  }, [crearGasto]);



  return (
    <div className="App container">
      <header>
         <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
          { (preguntaPresupuesto)
            ?
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}   
                guardarRestante={guardarRestante}     
               />
            : (           
                  <div className="row">
                    <div className="one-half column"> 
                      <Formulario
                        guardarGasto={guardarGasto}
                        guardarCrearGasto={guardarCrearGasto}
                      />
                    </div>
        
                    <div className="one-half column">
                      <Listado
                        gastos={gastos}
                      />
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                    </div>
                  </div>                  
              )   
          }
      </div>
    </div>
  );
}

export default App;
