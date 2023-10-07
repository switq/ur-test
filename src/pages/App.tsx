import React, { useState } from 'react';
import { Iquestion } from '../types/question';
import { v4 as uuid4 } from 'uuid';
import QuestionList from '../components/QuestionList';
import style from './App.module.scss';
import Footer from '../components/Footer';



function App() {
  const [questions, setQuestions] = useState<Iquestion[]>([
    {
      enunciation: 'Questão 1',
      type: 'radio',
      id: uuid4(),
      contentQuestion: [
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
      contentQuestion: [
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
    <div className={style.appStyle}>
      <QuestionList
        questions={questions}
        setQuestions={setQuestions}
      />
      <Footer/>
    </div>
  )
}


export default App;
