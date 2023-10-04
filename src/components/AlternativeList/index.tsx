import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import { Ialternative } from '../../types/alternative';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Alternative from '../Alternative/index';

interface props {
    alternatives: Ialternative[],
    questionId: string
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>> 
}

function AlternativeList({alternatives, questionId, setQuestions}: props) {
    return (
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
                                    />
                                </div>
                                
                            )}
                        </Draggable>
                        
                    ))}
                {provided.placeholder}
                </div>
            )}
       </Droppable> 
    )
}

export default AlternativeList;