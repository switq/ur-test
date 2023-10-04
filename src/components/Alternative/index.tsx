import React from "react";
import { Ialternative } from "../../types/alternative";
import './alternative.css'
import { Iquestion } from "../../types/question";
import { findQuestionAlternativeIndex } from "../../utils/locateFunctions";

interface props {
    alternative: Ialternative,
    questionType: string,
    questionId: string,
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>>
}

function Alternative({alternative, questionType, questionId, setQuestions}: props) {

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

    function checkAlternative(alternativeId: string, questionType: string, questionId: string) {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const {alternativeIndex, questionIndex} = findQuestionAlternativeIndex(alternativeId, questionId, newQuestions);

            if (questionType === 'radio') {
                newQuestions[questionIndex].contentQuestion.forEach(alternative => {
                    alternative.checked = false;
                });
                newQuestions[questionIndex].contentQuestion[alternativeIndex].checked = true;
            } else if (questionType === 'checkbox') {
                newQuestions[questionIndex].contentQuestion[alternativeIndex].checked = !newQuestions[questionIndex].contentQuestion[alternativeIndex].checked
            }
            
            return newQuestions;
        })
    }
    
    return (
        <div className="wrapper">
            <input 
                type={questionType}
                checked={alternative.checked}
                onClick={e => checkAlternative(alternative.id, questionType, questionId)}
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