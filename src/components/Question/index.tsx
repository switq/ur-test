import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import AlternativeList from '../AlternativeList';
import { findQuestion } from '../common/utils/locateFunctions';
import style from './Question.module.scss';


interface props {
    question: Iquestion,
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>> 
}

function Question({question, setQuestions}: props) {

    function editEnunciation(questionId: string, newEnunciation: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const questionIndex = findQuestion(questionId, newQuestions);
            newQuestions[questionIndex].enunciation = newEnunciation;

            return newQuestions;
        })
    }

    function deleteQuestion(questionId: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const questionIndex = findQuestion(questionId, newQuestions);
            newQuestions.splice(questionIndex, 1);

            return newQuestions;
        })
    }

    function editType(questionId: string, newType: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const questionIndex = findQuestion(questionId, newQuestions);
            newQuestions[questionIndex].type = newType;
            newQuestions[questionIndex].contentQuestion.forEach(alternative => alternative.checked = false);

            return newQuestions;
        })
    }
    
    return (
       <div className={style.question}>
            <input 
                type='text' 
                value={question.enunciation}
                onChange={e => editEnunciation(question.id, e.target.value)}
            />

            <select 
                onChange={e => editType(question.id, e.target.value)}
            >
                <option value="radio">Múltipla escolha</option>
                <option value="checkbox">Caixa de seleção</option>
            </select>
            {
                
            }
            <AlternativeList
                alternatives={question.contentQuestion}
                questionType={question.type}
                questionId={question.id}
                setQuestions={setQuestions}
            />
            <button onClick={e => deleteQuestion(question.id)}>x</button>
       </div> 
    )
}

export default Question;