import React, { useState } from 'react';
import './App.css';
import Alternative from '../components/Alternative';
import { v4 as uuid4 } from 'uuid';
import { Ialternative } from '../types/alternative';
import PlusButton from '../components/PlusButton';
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd";

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

  function addAlternativa(): void {
    setAlternativas(prevAlternativas => [
      ...prevAlternativas,
      {
        name: "",
        selected: false,
        id: uuid4()
      }
    ])
  }
   
  const handleDragAndDrop = (results: DropResult) => {
    const {source, destination, type} = results;
    
    if ( !destination ) return;
    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) 
      return;
    
    console.log(type)
    if ( type === 'group' || type === 'DEFAULT') {
      const reordedAlternativas = [...alternativas];

      const sourceIndex = source.index;
      const destinationIndex = destination.index

      const [removedAlternative] = reordedAlternativas.splice(sourceIndex, 1);
      reordedAlternativas.splice(destinationIndex, 0, removedAlternative);

      return setAlternativas(reordedAlternativas);
    }
  }

  return (
    <div className="App">
      <h2>Questão</h2>
      <DragDropContext onDragEnd={(results) => {
        handleDragAndDrop(results);
      }}>
        <Droppable droppableId='alternatives'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {alternativas.map((alternativa, index) => (
                <Draggable 
                  key={alternativa.id} 
                  draggableId={alternativa.id} 
                  index={index}
                >
                  {(provided) => (
                    <div 
                      {...provided.dragHandleProps} 
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Alternative 
                        key={alternativa.id}
                        alternativa={alternativa} 
                        atualizaAlternativa={atualizaAlternativa}
                        atualizaMarcado={atualizaMarcado}
                        deletaAlternativa={deletaAlternativa}
                      />
                    </div>
                  )}
                </Draggable>
              ))}  
              {/* para não atualizar a Droppable area} */}
              {provided.placeholder} 
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <PlusButton onClick={addAlternativa}></PlusButton>
    </div>
  );
}


export default App;
