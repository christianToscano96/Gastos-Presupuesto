import React, {useState} from 'react';
//componentes
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


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
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}        
               />
            : (           
                  <div className="row">
                    <div className="one-half column"> 
                      <Formulario />
                    </div>
        
                    <div className="one-half column"></div>
                  </div>                  
              )   
          }
      </div>
    </div>
  );
}

export default App;
