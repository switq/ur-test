import React, { useState } from 'react';
import './App.css';
import Alternative from '../components/Alternative';
import { v4 as uuid4 } from 'uuid';
import { Ialternative } from '../types/alternative';
import PlusButton from '../components/PlusButton';

function App() {
  const [alternativas, setAlternativas] = useState<Ialternative[]>([
    {
      name: 'aamg',
      selected: false,
      id: uuid4()
    },
    {
      name: 'eemg',
      selected: false,
      id: uuid4()
    },
    {
      name: 'iimg',
      selected: false,
      id: uuid4()
    },
  ])

  function atualizaAlternativa(id: string, novoNome: string ) {
    setAlternativas(prevAlternativas => {
      prevAlternativas.forEach(alternativa => {
        if ( alternativa.id === id ) {
          alternativa.name = novoNome
          return [...prevAlternativas];
        }
      })
      return [...prevAlternativas]
    })
  }

  function atualizaMarcado(id: string) {
    setAlternativas(prevAlternativas => {
      const newAlternativas = [...prevAlternativas];
      newAlternativas.forEach(alternativa => {
        alternativa.selected = alternativa.id === id;
      })
      return newAlternativas;
    })
  }

  function deletaAlternativa(id: string) {
    setAlternativas(prevAlternativas => {
      const newAlternativas = [...prevAlternativas];
      prevAlternativas.forEach((alternativa, index) => {
        if ( alternativa.id === id ) {
          newAlternativas.splice(index, 1);
          return newAlternativas;
        }
      })
      return newAlternativas;
    })
  }

  function addAlternativa() {
    setAlternativas(prevAlternativas => [
      ...prevAlternativas,
      {
        name: "",
        selected: false,
        id: uuid4()
      }
    ])
  }
   
  return (
    <div className="App">
      <h2>Questão</h2>
      {alternativas.map((alternativa) => (
        <Alternative 
          key={alternativa.id}
          alternativa={alternativa} 
          atualizaAlternativa={atualizaAlternativa}
          atualizaMarcado={atualizaMarcado}
          deletaAlternativa={deletaAlternativa}
        />
      ))}  
        <PlusButton onClick={addAlternativa} />
    </div>
  );
}

export default App;
