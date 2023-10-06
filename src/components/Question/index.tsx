import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import AlternativeList from '../AlternativeList';
import { findQuestion } from '../common/utils/locateFunctions';
import style from './Question.module.scss';
import { textAreaDynamicHeigth } from '../common/utils/interfaceInteractions';


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
        <div className={style.questionWrapper}>
            <span className={style.drag}></span>
            <div className={style.question}>
                <div className={style.topWrapper}>
                    <textarea 
                        value={question.enunciation}
                        onChange={e => {
                            editEnunciation(question.id, e.target.value)
                            textAreaDynamicHeigth(e.target);
                        }}
                        placeholder='Digite a questão'
                        className={style.textBox}
                    />

                    <select 
                        onChange={e => editType(question.id, e.target.value)}
                        className={style.select}
                    >
                        <option value="radio">Múltipla escolha</option>
                        <option value="checkbox">Caixa de seleção</option>
                    </select>

                </div>

                <AlternativeList
                    alternatives={question.contentQuestion}
                    questionType={question.type}
                    questionId={question.id}
                    setQuestions={setQuestions}
                />
                <span onClick={e => deleteQuestion(question.id)} className={style.delete}></span>
            </div> 
        </div>
        
    )
}

export default Question;