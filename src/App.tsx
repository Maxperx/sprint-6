import { useState } from 'react';
import listItems from './componentes/escena/escena.tsx';
import { StyledComponent, StyledComponent2 } from './componentes/escena/styled.tsx';

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [welcome, setWelcome] = useState(true);


  const botonAnterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const botonSiguiente = () => {
    if (currentIndex < listItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const botonEmpezar = () => {
    setWelcome(false);
  };

  const botonVolver = () => {
    setWelcome(true);
  };


  if (welcome) {
    return (
      <div>
        <StyledComponent2>
        <h1>Bienvenido</h1>
        <p>Creando una historia con componentes</p>
        <button onClick={botonEmpezar}>Empezar</button>
        </StyledComponent2>
      </div>);
  } else {
    return (
      <div>
        <button onClick={botonAnterior}>Anterior</button>
        <button onClick={botonSiguiente}>Siguiente</button>
        <div>
          {listItems.map((frase, index) => (
            <StyledComponent key={index} seleccionado={index === currentIndex}>
              {frase}
            </StyledComponent>
          ))}
          <button onClick={botonVolver}>Volver</button>
        </div>
      </div>
    )
  };
};

export default App;