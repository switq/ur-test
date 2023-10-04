import React from "react";
import { Ialternative } from "../../types/alternative";
import './alternative.css'
import { Iquestion } from "../../types/question";
import { strictEqual } from "assert";
import { findQuestionAlternativeIndex } from "../../utils/locateFunctions";

interface props {
    alternative: Ialternative,
    questionId: string,
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>>
}

function Alternative({alternative, questionId, setQuestions}: props) {

    function editAlternative(alternativeId: string, questionId: string, newAlternativeName: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const {alternativeIndex, questionIndex} = findQuestionAlternativeIndex(alternativeId, questionId, newQuestions);
            newQuestions[questionIndex].contentQuestion[alternativeIndex].name = newAlternativeName;
            
            return newQuestions;
        });
    }

    function deleteAlternative(alternativeId: string, questionId: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const {alternativeIndex, questionIndex} = findQuestionAlternativeIndex(alternativeId, questionId, newQuestions);
            newQuestions[questionIndex].contentQuestion.splice(alternativeIndex, 1);

            return newQuestions;
        })
    }

    function checkAlternative(alternativeId: string, questionId: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const {alternativeIndex, questionIndex} = findQuestionAlternativeIndex(alternativeId, questionId, newQuestions);
            newQuestions[questionIndex].contentQuestion.forEach(alternative => {
                alternative.checked = false;
            });
            newQuestions[questionIndex].contentQuestion[alternativeIndex].checked = true;
            
            return newQuestions;
        })
    }
    
    return (
        <div className="wrapper">
            <input 
                type="radio"
                checked={alternative.checked}
                onClick={e => checkAlternative(alternative.id, questionId)}
                readOnly
            />
            <input 
                type="text" 
                value={alternative.name}
                onChange={e => editAlternative(alternative.id, questionId, e.target.value)}
            />
            <button onClick={e => deleteAlternative(alternative.id, questionId)}>X</button>
        </div>
    )
}

export default Alternative;