import React, { useState } from "react";
import Alternative from "../Alternative";
import PlusButton from "./AlternativeList/PlusButton";
import { Iquestion } from "../../types/question";
import { Itest } from "../../types/test";
import AlternativeList from "./AlternativeList";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    question: Iquestion,
    setQuestion: React.Dispatch<React.SetStateAction<Iquestion>>
}

export default function Question({question, setQuestion}: Props) {
    function addAlternative() {
        setQuestion(prevQuestion => {
            const newAlternatives = [
                ...prevQuestion.alternatives, 
                {
                    name: 'Nova alternativa',
                    selected: false,
                    id: uuidv4()
                }
            ]
            return ({
                ...prevQuestion,
                alternatives: newAlternatives
            })
        })
    }

    return (
        <div>
            <h3>Pergunta</h3>
            <div>
                <AlternativeList 
                    question={question}
                    setQuestion={setQuestion}
                    type={question.type}
                />
            </div>
            <PlusButton onClick={addAlternative}/>
        </div>
    )
} 