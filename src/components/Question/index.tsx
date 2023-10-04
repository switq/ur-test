import React, { useState } from 'react';
import { Iquestion } from '../../types/question';
import AlternativeList from '../AlternativeList';

interface props {
    question: Iquestion,
    setQuestions: React.Dispatch<React.SetStateAction<Iquestion[]>> 
}

function Question({question, setQuestions}: props) {
    return (
       <div>
            <h3>{question.enunciation}</h3>
            <AlternativeList
                alternatives={question.alternatives}
                questionId={question.id}
                setQuestions={setQuestions}
            />
       </div> 
    )
}

export default Question;