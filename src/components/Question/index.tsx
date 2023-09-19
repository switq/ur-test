import React, { useState } from "react";
import Alternative from "./Alternative";
import PlusButton from "./PlusButton";
import { Iquestion } from "../../types/question";
import { Itest } from "../../types/test";
import AlternativeList from "./AlternativeList";

interface Props {
    questions: Iquestion,
    setQuestion: React.Dispatch<React.SetStateAction<Iquestion>>
}

export default function Question({questions, setQuestion}: Props) {
    function addAlternative() {
        setQuestion(prevQuestion => {
            const newAlternatives = [
                ...prevQuestion.alternatives, 
                {
                    name: 'Nova alternativa',
                    selected: false
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
                    alternatives={questions.alternatives}
                    type={questions.type}
                />
            </div>
            <PlusButton onClick={addAlternative}/>
        </div>
    )
} 