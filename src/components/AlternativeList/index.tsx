import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import { Ialternative } from '../../types/alternative';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Alternative from './../Alternative';
import PlusButton from '../PlusButton';
import { findQuestion } from '../common/utils/locateFunctions';
import { v4 as uuid4 } from 'uuid';
import style from './AlternativeList.module.scss';


interface Props {
    alternatives: Ialternative[],
    questionType: string,
    questionId: string
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>> 
}

function AlternativeList({alternatives, questionType, questionId, setQuestions}: Props) {

    function addAlternative(): void {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            const questionIndex = findQuestion(questionId, newQuestions);
            newQuestions[questionIndex].contentQuestion.push({
                name: '',
                id: uuid4(),
                checked: false,
            });

            return newQuestions;
        })
    }
    
    return (
        <div>
            <Droppable droppableId={questionId}>
                    {(provided) => (
                        <div 
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                            className={style.alternativeList}
                        >
                            {alternatives.map((alternative, index) => (
                                <Draggable 
                                    draggableId={alternative.id}
                                    index={index}
                                    key={alternative.id}
                                >
                                    {(provided) => (
                                        <div 
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            key={alternative.id}
                                        >
                                            <Alternative
                                                alternative={alternative}
                                                questionType={questionType}
                                                questionId={questionId}
                                                setQuestions={setQuestions}
                                            />
                                        </div>
                                        
                                    )}
                                </Draggable>
                                
                            ))}
                            {provided.placeholder}
                            <span className={style.addAlternative} onClick={addAlternative}></span>
                        </div>
                    )}
            </Droppable>
            
            <span></span>
        </div>
    )
}

export default AlternativeList;
