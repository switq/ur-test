import React, { useState } from 'react';
import './App.css';
import Question from '../components/Question';
import { Iquestion } from '../types/question';
import { Itest } from '../types/test';

function App() {
  const [question, setQuestion] = useState<Iquestion>({
    statement: 'O que é o que é',
    type: 'radio',
    alternatives: [
      {
        name: '1',
        selected: false
      },
      {
        name: '2',
        selected: false
      }
    ]
  });

   
  return (
    <div className="App">
       <Question questions={question} setQuestion={setQuestion}/>
    </div>
  );
}

export default App;
