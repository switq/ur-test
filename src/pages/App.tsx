import React, { useState } from 'react';
import './App.css';
import Question from '../components/Question';
import { Iquestion } from '../types/question';
import { Itest } from '../types/test';
import { v4 as uuid4 } from 'uuid';

function App() {
  const [question, setQuestion] = useState<Iquestion>({
    statement: 'O que é o que é',
    type: 'radio',
    alternatives: [
      {
        name: '1',
        selected: false,
        id: uuid4()
      },
      {
        name: '2',
        selected: false,
        id: uuid4()
      }
    ]
  });

   
  return (
    <div className="App">
       <Question question={question} setQuestion={setQuestion}/>
    </div>
  );
}

export default App;
