import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import AlternativeList from '../AlternativeList';
import { findQuestion } from '../../utils/locateFunctions';

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
    
    return (
       <div>
            <input 
                type='text' 
                value={question.enunciation}
                onChange={e => editEnunciation(question.id, e.target.value)}
            />
            <AlternativeList
                alternatives={question.contentQuestion}
                questionId={question.id}
                setQuestions={setQuestions}
            />
            <button onClick={e => deleteQuestion(question.id)}>x</button>
       </div> 
    )
}

export default Question;