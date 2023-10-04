import React, { useState } from 'react';
import './App.css';
import { Iquestion } from '../types/question';
import { v4 as uuid4 } from 'uuid';
import QuestionList from '../components/QuestionList';



function App() {
  const [questions, setQuestions] = useState<Iquestion[]>([
    {
      enunciation: 'Questão 1',
      type: 'radio',
      id: uuid4(),
      alternatives: [
        {
          name: 'Alternativa11',
          id: uuid4(),
          checked: false,
        },
        {
          name: 'Alternativa12',
          id: uuid4(),
          checked: false,
        },
      ],
      text: ''
    },
    {
      enunciation: 'Questão 2',
      type: 'radio',
      id: uuid4(),
      alternatives: [
        {
          name: 'Alternativa21',
          id: uuid4(),
          checked: false,
        }
      ],
      text: ''
    }
  ])

  return (
    <div>
      <QuestionList
        questions={questions}
        setQuestions={setQuestions}
      />
    </div>
  )
}


export default App;
