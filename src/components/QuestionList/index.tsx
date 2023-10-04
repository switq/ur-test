import React, { useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { Iquestion } from '../../types/question';
import Question from '../Question';
import { Ialternative } from '../../types/alternative';

interface props {
    questions: Iquestion[],
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>>,
}

function QuestionList({questions, setQuestions}: props) {
    function handleDragAndDrop(result: DropResult) {
        const { source, destination, type } = result;

        if (!destination) return;

        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId    
        ) return;

        if (type === "group") {
            const reordedQuestions = [...questions];

            const questionSourceIndex = source.index;
            const questionDestinationIndex = destination.index;

            const [removedQuestion] = reordedQuestions.splice(questionSourceIndex, 1);
            reordedQuestions.splice(questionDestinationIndex, 0, removedQuestion);

            return setQuestions(reordedQuestions);
        }

        const alternativeSourceIndex = source.index;
        const alternativeDestinationIndex = destination.index;

        const questionSourceIndex = questions.findIndex(
            (question) => question.id === source.droppableId
        );
        const questionDestinationIndex = questions.findIndex(
            (question) => question.id === destination.droppableId
        );

        const newSourceAlternatives = [...questions[questionSourceIndex].alternatives];
        const newDestinationAlternatives = 
            source.droppableId !== destination.droppableId
            ? [...questions[questionDestinationIndex].alternatives]
            : newSourceAlternatives;
        
        const [deletedAlternative] = newSourceAlternatives.splice(alternativeSourceIndex, 1);
        newDestinationAlternatives.splice(alternativeDestinationIndex, 0, deletedAlternative);

        const newQuestions = [...questions];

        newQuestions[questionSourceIndex] = {
            ...questions[questionSourceIndex],
            alternatives: newSourceAlternatives,
        };
        newQuestions[questionDestinationIndex] = {
            ...questions[questionDestinationIndex],
            alternatives: newDestinationAlternatives,
        };

        setQuestions(newQuestions);
    }

    return (
        <DragDropContext onDragEnd={handleDragAndDrop}>
            <Droppable droppableId='ROOT' type='group'>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {questions.map((question, index) => (
                            <Draggable
                                draggableId={question.id}
                                index={index}
                                key={question.id}
                            >
                                {(provided) => (
                                    <div
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                    >
                                        <Question
                                            question={question}
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
        </DragDropContext> 
    )
}

export default QuestionList;