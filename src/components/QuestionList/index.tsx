import React, { useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { Iquestion } from '../../types/question';
import Question from '../Question';
import { v4 as uuid4 } from 'uuid';
import PlusButton from '../PlusButton';
import style from './QuestionList.module.scss';

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

        const newSourceAlternatives = [...questions[questionSourceIndex].contentQuestion];
        const newDestinationAlternatives = 
            source.droppableId !== destination.droppableId
            ? [...questions[questionDestinationIndex].contentQuestion]
            : newSourceAlternatives;
        
        const [deletedAlternative] =  newSourceAlternatives.splice(alternativeSourceIndex, 1);
        deletedAlternative.checked =  false;
        newDestinationAlternatives.splice(alternativeDestinationIndex, 0, deletedAlternative);

        const newQuestions = [...questions];

        newQuestions[questionSourceIndex] = {
            ...questions[questionSourceIndex],
            contentQuestion: newSourceAlternatives,
        };
        newQuestions[questionDestinationIndex] = {
            ...questions[questionDestinationIndex],
            contentQuestion: newDestinationAlternatives,
        };

        setQuestions(newQuestions);
    }

    function addQuestion() {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            newQuestions.push({
                enunciation: '',
                type: 'radio',
                id: uuid4(),
                text: '',
                contentQuestion: [],
            })

            return newQuestions;
        })
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleDragAndDrop}>
                <Droppable
                    droppableId='ROOT' 
                    type='group'
                >
                    {(provided) => (
                        <div 
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                            className={style.questionList}
                        >
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
                                            key={question.id}
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
                            <button onClick={addQuestion} className={style.addQuestion}></button>
                        </div>
                    )}
                </Droppable>
            </DragDropContext> 
        </div>
        
    )
}

export default QuestionList;