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
            newQuestions[questionIndex].alternatives[alternativeIndex].name = newAlternativeName;
            
            return newQuestions;
        });
    }

    function deleteAlternative(alternativeId: string, questionId: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const {alternativeIndex, questionIndex} = findQuestionAlternativeIndex(alternativeId, questionId, newQuestions);
            newQuestions[questionIndex].alternatives.splice(alternativeIndex, 1);

            return newQuestions;
        })
    }

    function checkAlternative(alternativeId: string, questionId: string) {
        
    }
    
    return (
        <div className="wrapper">
            <input 
                type="radio"
                checked={alternative.checked}
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