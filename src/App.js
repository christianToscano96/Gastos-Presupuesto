import React, {useState} from 'react';
import Pregunta from './components/Pregunta';


function App() {

  //state del presupuesto 
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);


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
                preguntaPresupuesto={guardarPreguntaPresupuesto}        
               />
            : (
                <div className="row">
                  <h1>Formulario aqui</h1>
                </div>

                <div className="row"></div>
              )   
          }
      </div>
    </div>
  );
}

export default App;
