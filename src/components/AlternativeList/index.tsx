import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import { Ialternative } from '../../types/alternative';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Alternative from '../Alternative/index';
import PlusButton from '../PlusButton';
import { findQuestion } from '../../utils/locateFunctions';
import { v4 as uuid4 } from 'uuid';


interface Props {
    alternatives: Ialternative[],
    questionId: string
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>> 
}

function AlternativeList({alternatives, questionId, setQuestions}: Props) {

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
                        <div {...provided.droppableProps} ref={provided.innerRef}>
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
                                        >
                                            <Alternative
                                                alternative={alternative}
                                                questionId={questionId}
                                                setQuestions={setQuestions}
                                            />
                                        </div>
                                        
                                    )}
                                </Draggable>
                                
                            ))}
                        {provided.placeholder}
                        </div>
                    )}
            </Droppable> 
            <PlusButton onClick={addAlternative}/>
        </div>
    )
}

export default AlternativeList;
